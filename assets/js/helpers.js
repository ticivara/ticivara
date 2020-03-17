import pdf from 'pdfjs';
import Helvetica from 'pdfjs/font/Helvetica';

export function numPad(s) {
  return Number.parseFloat(s).toFixed(1);
}

// Draws text with x y from the bottom left corner of the pattern image.
// Bottom-left corner is 0,0 in Inkscape as well.
export function drawText(
  ctx,
  s,
  xO,
  yO,
  pattern_scale,
  pos_text_offset_x,
  pos_text_offset_y,
  pos_pattern_height
) {
  const sc = pattern_scale;
  const x = (pos_text_offset_x + xO) * sc;
  const y = (pos_pattern_height - yO + pos_text_offset_y) * sc;
  ctx.font = '28px "Fira Sans"';
  ctx.fillStyle = '#000000';
  ctx.fillText(s, x, y);
}

export function drawTextTitle(
  ctx,
  s,
  size,
  xO,
  yO,
  pattern_scale,
  pos_text_offset_x,
  pos_text_offset_y,
  pos_pattern_height
) {
  const sc = pattern_scale;
  const x = (pos_text_offset_x + xO) * sc;
  const y = (pos_pattern_height - yO + pos_text_offset_y) * sc;
  ctx.font = String(size) + ' "Butler"';
  ctx.fillStyle = '#000000';
  ctx.fillText(s, x, y);
}

export function text(ctx, D, s, x, y) {
  drawText(
    ctx,
    s,
    x,
    y,
    D.pattern_scale,
    D.pos_text_offset_x,
    D.pos_text_offset_y,
    D.pos_pattern_height
  );
}

export function textTitle(ctx, D, s, size, x, y) {
  drawTextTitle(
    ctx,
    s,
    size,
    x,
    y,
    D.pattern_scale,
    D.pos_text_offset_x,
    D.pos_text_offset_y,
    D.pos_pattern_height
  );
}

export function textNum(ctx, D, s, x, y) {
  text(ctx, D, numPad(s), x, y);
}

export function textNumSigned(ctx, D, s, x, y) {
  let sign = '';
  if (Number.parseFloat(s) >= 0.0) {
    sign = '+';
  }
  text(ctx, D, sign + numPad(s), x, y);
}

// kusi buffer index to key
export const KB = [
  'k1_a',
  'k1_b',
  'k2_a',
  'k2_b',
  'k3_a',
  'k3_b',
  'k4_a',
  'k4_b'
];

// kusi cut index to key
export const KC = ['k1_a', 'k2_a', 'k3_a', 'k4_a'];

export function hasCutBuffer(robe, i) {
  let cut_idx = -1;

  // determine lookup index based on kusi line index
  switch (i) {
    // left side of middle khandha:
    case 0:
      cut_idx = -1;
      break;
    case 1:
      cut_idx = 0;
      break;
    case 2:
      cut_idx = -1;
      break;
    case 3:
      cut_idx = 1;
      break;
    // right side of middle khandha:
    case 4:
      cut_idx = -1;
      break;
    case 5:
      cut_idx = 2;
      break;
    case 6:
      cut_idx = -1;
      break;
    case 7:
      cut_idx = 3;
      break;
  }

  if (cut_idx >= 0) {
    return robe.kusi_cuts[KC[cut_idx]];
  } else {
    return false;
  }
}

export function kusiBuffersUntil(robe, n) {
  if (n < 0) {
    return 0;
  }
  let a = 0;
  let i = 0;

  const robe_cb = Number(robe.kusi_cutting_buffer);

  while (i <= n && i < KB.length) {
    a += Number(robe.kusi_buffers[KB[i]]);

    if (hasCutBuffer(robe, i)) {
      a += robe_cb;
    }

    i++;
  }
  return a;
}

export function calcShrinkingLengths(robe, khandhas) {
  const final_width = Number(robe.width);
  const final_height = Number(robe.height);
  const buffer_width = Number(robe.buffer_width);
  const kusi_width = Number(robe.kusi_width);
  const orig_border_width = Number(robe.border_width);

  // inner width: scaled final width, not including the edge buffers
  // iw = fw * (1 + sc / 100)
  let inner_width, inner_height;
  if (robe.border_type === 0) {
    inner_width = final_width * (1 + robe.shrink_percent_width / 100);
    inner_height = final_height * (1 + robe.shrink_percent_height / 100);
  } else {
    // joined border are not included in the scaled inner size
    inner_width =
      (final_width - 2 * orig_border_width) *
      (1 + robe.shrink_percent_width / 100);
    inner_height =
      (final_height - 2 * orig_border_width) *
      (1 + robe.shrink_percent_height / 100);
  }

  // cut width includes the edge buffers and kusi buffers
  const cut_width =
    inner_width +
    2 * buffer_width +
    kusiBuffersUntil(robe, (khandhas - 1) * 2 - 1);

  const cut_height = inner_height + 2 * buffer_width;

  // mandala width without scaling
  // m = (fw - 2b - (khandhas - 1)k) / khandhas
  let orig_mandala_width, orig_mandala_height;
  if (robe.border_type === 0) {
    orig_mandala_width =
      (final_width - 2 * orig_border_width - (khandhas - 1) * kusi_width) /
      khandhas;

    orig_mandala_height =
      (final_height - 2 * orig_border_width - 2 * kusi_width) / 3;
  } else {
    // joined border is not included in khandas length (inner width)

    orig_mandala_width = (final_width - (khandhas - 1) * kusi_width) / khandhas;

    orig_mandala_height = (final_height - 2 * kusi_width) / 3;
  }

  // orig border to mandala ratio, width and height
  // i.e. one border equals this much of a mandala
  // r = b / m
  let b2m_w, b2m_h;
  if (robe.border_type === 0) {
    b2m_w = orig_border_width / orig_mandala_width;
    b2m_h = orig_border_width / orig_mandala_height;
  } else {
    b2m_w = 0.0;
    b2m_h = 0.0;
  }

  // remainder cut width, taking the kusi off the cut size
  // rw = iw - (khandhas - 1)k
  const rem_w = inner_width - (khandhas - 1) * kusi_width;
  const rem_h = inner_height - 2 * kusi_width;

  // five mandalas in the remainder width, plus two borders expressed as mandalas
  // for five khandhas:
  // w = 5m + 2b = 5m + 2rm
  // w = (5+2r)m
  // w / (5+2r) = m
  let mandala_width, mandala_height, border_width, border_height;
  if (robe.border_type === 0) {
    mandala_width = rem_w / (khandhas + 2 * b2m_w);
    mandala_height = rem_h / (3 + 2 * b2m_h);
    border_width = mandala_width * b2m_w;
    border_height = mandala_height * b2m_h;
  } else {
    mandala_width = rem_w / khandhas;
    mandala_height = rem_h / 3;
    border_width = orig_border_width;
    border_height = orig_border_width;
  }

  return {
    cut_width,
    cut_height,
    mandala_width,
    mandala_height,
    border_width,
    border_height
  };
}

function dataUrlToBuf(dataurl) {
  const arr = dataurl.split(',');
  // const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  // return new Blob([u8arr], {type:mime});
  return u8arr;
}

export function initAndDraw(pattern, robe, draw_callback) {
  const canvas = document.getElementById(pattern.canvas_id);
  if (canvas === null) {
    console.log("Error: Can't find canvas: " + pattern.canvas_id);
    return;
  }
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.onload = function() {
    draw_callback(ctx, img);
  };
  if (robe.border_type === 0) {
    img.src = pattern.overlapping_img_src;
  } else {
    img.src = pattern.joined_img_src;
  }
}

function addPdfPage(doc, canvas_id, robeParamsUrl) {
  const canvas = document.getElementById(canvas_id);
  const buffer = dataUrlToBuf(canvas.toDataURL('image/jpeg', 0.95));

  const img = new pdf.Image(buffer);

  const imgCell = doc.cell('', { padding: 0, y: 600 });
  imgCell.image(img, {
    width: 830,
    align: 'center'
  });

  const textCell = doc.cell('', { paddingLeft: 10 * pdf.mm });
  textCell
    .text()
    .add('Ticivara Robe Sewing ', {
      fontSize: 9
    })
    .add('[parameters link]', {
      fontSize: 9,
      link: robeParamsUrl,
      color: '0x569cd6'
    });
}

export function renderAndDownloadPdf(patterns, robe, robeParamsUrl) {
  const doc = new pdf.Document({
    // A4 landscape
    width: 841.896,
    height: 595.296,
    padding: 0,
    font: Helvetica,
    properties: {
      title: robe.title,
      creator: 'Ticivara Robe Sewing'
    }
  });

  patterns.forEach((i, idx) => {
    addPdfPage(doc, i.canvas_id, robeParamsUrl);
    if (idx < patterns.length - 1) {
      doc.pageBreak();
    }
  });

  doc.asBuffer().then((buf) => {
    const pdf_blob = new Blob([buf], { type: 'application/pdf' });
    const url = URL.createObjectURL(pdf_blob);

    const link = document.createElement('a');
    link.style.display = 'none';
    link.download = 'robe.pdf';
    link.href = url;

    document.body.appendChild(link);
    link.click();
    setTimeout(function() {
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }, 100);
  });
}

export function getRobeParamsUrl(robe) {
  const robeParams = encodeURIComponent(JSON.stringify(robe));
  const p = window.location.port;
  let port = '';
  if (p !== 80 || p !== 443) {
    port = ':' + p;
  }
  const url =
    window.location.protocol +
    '//' +
    window.location.hostname +
    port +
    window.location.pathname +
    '?robe=' +
    robeParams;

  return url;
}

export function getQueryParsedData(D, query) {
  const d = D;
  const keys = Object.keys(query);
  if (keys.length > 0 && keys.includes('robe')) {
    const robeParams = decodeURIComponent(query.robe);
    let a;
    try {
      a = JSON.parse(robeParams);
    } catch (e) {
      console.log('Parse error: Robe data is not well-formatted JSON string.');
    }
    if (typeof a !== 'undefined' && Object.keys(a).includes('title')) {
      d.robe = a;
    }
  }
  return d;
}
