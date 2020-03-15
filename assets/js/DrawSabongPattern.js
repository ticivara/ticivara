import ScissorsBlackDown from '@/assets/js/ScissorsBlackDown.js';

const ScissorsImg = new Image();
ScissorsImg.src = ScissorsBlackDown;

// kusi buffer index to key
const KB = ['k1_a', 'k1_b', 'k2_a', 'k2_b', 'k3_a', 'k3_b', 'k4_a', 'k4_b'];

// kusi cut index to key
const KC = ['k1_a', 'k2_a', 'k3_a', 'k4_a'];

function DrawSabongPattern(
  ctx,
  canvasWidth,
  canvasHeight,
  borderType,
  img,
  sabong
) {
  // shrinking lengths
  const a = calcSabongShrinkingLengths(sabong);
  const sl = {
    val_cut_width: a.cut_width,
    val_cut_height: a.cut_height,
    val_mandala_width: a.mandala_width,
    val_mandala_height: a.mandala_height,
    val_border_width: a.border_width,
    val_border_height: a.border_height,
  };

  const D = {
    sabong,
    border_type: borderType,
    title: sabong.title,
    // values from the SVG for positioning
    pos_pattern_width: 232,
    pos_pattern_height: 145,
    pos_img_offset_x: 5,
    pos_img_offset_y: 10,
    pos_text_offset_x: 6,
    pos_text_offset_y: -30,
    pos_buffer_width: 1.0,
    pos_border_width: 12.5,
    pos_kusi_width: 6.0,
    pos_mandala_width: 36.2,
    pos_mandala_height: 21.0,
    // scale
    pattern_scale: 14.0,
    // calcualted size values to display, these could be user inputs
    val_buffer_width: Number(sabong.buffer_width),
    val_inner_width: Number(sabong.width),
    val_inner_height: Number(sabong.height),
    val_kusi_width: Number(sabong.kusi_width),
    // shrinking lengths
    val_cut_width: sl.val_cut_width,
    val_cut_height: sl.val_cut_height,
    val_mandala_width: sl.val_mandala_width,
    val_mandala_height: sl.val_mandala_height,
    val_border_width: sl.val_border_width,
    val_border_height: sl.val_border_height,
  };

  // clear screen
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  const sc = D.pattern_scale;

  ctx.drawImage(
    img,
    D.pos_img_offset_x * sc,
    D.pos_img_offset_y * sc,
    D.pos_pattern_width * sc,
    D.pos_pattern_height * sc
  );

  textTitle(ctx, D,
            D.title, "60px",
            0, -8.0);

  text(ctx, D,
       "Final Width: " + numPad(D.val_inner_width) +
       ", Final Height: " + numPad(D.val_inner_height),
       0, -15.0);

  text(ctx, D,
       "Cut Width: " + numPad(D.val_cut_width) +
       ", Cut Height: " + numPad(D.val_cut_height),
       0, -18.0);

  text(ctx, D,
       "a, border width: " + numPad(D.val_border_width),
       40.0, -15.0);

  text(ctx, D,
       "b, border height: " + numPad(D.val_border_height),
       40.0, -18.0);

  text(ctx, D,
       "c, cutting buffer: " + numPad(D.val_buffer_width),
       40.0, -21.0);

  text(ctx, D,
       "k, kusi width: " + numPad(D.val_kusi_width),
       40.0, -24.0);

  text(ctx, D,
       "m, mandala width: " + numPad(D.val_mandala_width),
       40.0, -27.0);

  text(ctx, D,
       "d, mandala height: " + numPad(D.val_mandala_height),
       40.0, -30.0);

  // buffer at the edges
  if (borderType === 0) {
    textNum(ctx, D,
            D.val_buffer_width,
            2.0, 5.0);
    textNum(ctx, D,
            D.val_buffer_width,
            D.pos_pattern_width - 6.0, 5.0);
  } else {
    textNum(ctx, D,
            D.val_buffer_width,
            7.0, 16.0);
    textNum(ctx, D,
            D.val_buffer_width,
            D.pos_pattern_width - 11.0, 16.0);
  }

  // border width
  textNum(ctx, D,
          D.val_border_width,
          5.0, 8.0);
  textNum(ctx, D,
          D.val_border_width,
          D.pos_pattern_width - 9.0, 8.0);

  // border height
  textNum(ctx, D,
          D.val_border_height,
          9.0, 3.0);
  textNum(ctx, D,
          D.val_border_height,
          D.pos_pattern_width - 13.0, 3.0);

  // cutting lines
  cutKusi(ctx, D, 0);
  cutKusi(ctx, D, 1);
  cutKusi(ctx, D, 2);
  cutKusi(ctx, D, 3);

  // mandala width
  textMandalaWidth(ctx, D, 0);
  textMandalaWidth(ctx, D, 1);
  textMandalaWidth(ctx, D, 2);
  textMandalaWidth(ctx, D, 3);
  textMandalaWidth(ctx, D, 4);

  // kusi width
  textKusiWidth(ctx, D, 0);
  textKusiWidth(ctx, D, 1);
  textKusiWidth(ctx, D, 2);
  textKusiWidth(ctx, D, 3);

  // kusi height
  textKusiHeight(ctx, D, 0);
  textKusiHeight(ctx, D, 1);

  // kusi buffer additions
  textKusiBuffer(ctx, D, 0, 1, 0, 1, 1, -0.2);
  textKusiBuffer(ctx, D, 1, 1, 1, 1, 1, 0);
  textKusiBuffer(ctx, D, 2, 2, 1, 1, 1, -0.2);
  textKusiBuffer(ctx, D, 3, 2, 2, 1, 1, 0);
  textKusiBuffer(ctx, D, 4, 3, 2, 1, 1, -0.2);
  textKusiBuffer(ctx, D, 5, 3, 3, 1, 1, 0);
  textKusiBuffer(ctx, D, 6, 4, 3, 1, 1, -0.2);
  textKusiBuffer(ctx, D, 7, 4, 4, 1, 1, 0);

  // mandala height
  textMandalaHeight(ctx, D, 0);
  textMandalaHeight(ctx, D, 1);
  textMandalaHeight(ctx, D, 2);

  // horizontal accumulative length
  if (borderType === 0) {

    textAccumulateHoriz(ctx, D, 0, -1, 0, 1, 1);
    textAccumulateHoriz(ctx, D, 0, -1, 1, 1, 0);
    textAccumulateHoriz(ctx, D, 1, 0, 1, 1, -6);
    textAccumulateHoriz(ctx, D, 1, 1, 1, 1, -5.2);
    textAccumulateHoriz(ctx, D, 2, 2, 1, 1, -6);
    textAccumulateHoriz(ctx, D, 2, 3, 1, 1, -5.2);
    textAccumulateHoriz(ctx, D, 3, 4, 1, 1, -7);
    textAccumulateHoriz(ctx, D, 3, 5, 1, 1, -6.2);
    textAccumulateHoriz(ctx, D, 4, 6, 1, 1, -7);
    textAccumulateHoriz(ctx, D, 4, 7, 1, 1, -6.2);
    textAccumulateHoriz(ctx, D, 5, 7, 1, 1, -7);
    textAccumulateHoriz(ctx, D, 5, 7, 2, 1, -8);
    textAccumulateHoriz(ctx, D, 5, 7, 2, 2, 0);

  } else {

    textAccumulateHoriz(ctx, D, 0, -1, 0, 0, -6);
    textAccumulateHoriz(ctx, D, 0, -1, 0, 1, 0);
    textAccumulateHoriz(ctx, D, 1, 0, 0, 1, -6);
    textAccumulateHoriz(ctx, D, 1, 1, 0, 1, -5.2);
    textAccumulateHoriz(ctx, D, 2, 2, 0, 1, -6);
    textAccumulateHoriz(ctx, D, 2, 3, 0, 1, -5.2);
    textAccumulateHoriz(ctx, D, 3, 4, 0, 1, -7);
    textAccumulateHoriz(ctx, D, 3, 5, 0, 1, -6.2);
    textAccumulateHoriz(ctx, D, 4, 6, 0, 1, -7);
    textAccumulateHoriz(ctx, D, 4, 7, 0, 1, -6.2);
    textAccumulateHoriz(ctx, D, 5, 7, 0, 1, -7);
    textAccumulateHoriz(ctx, D, 5, 7, 0, 2, 1);

  }

  // vertical accumulative length
  if (borderType === 0) {

    textAccumulateVert(ctx, D, 0, 0, 0, 1, 1);
    textAccumulateVert(ctx, D, 0, 0, 1, 1, 0);
    textAccumulateVert(ctx, D, 1, 0, 1, 1, 0);
    textAccumulateVert(ctx, D, 1, 1, 1, 1, 0);
    textAccumulateVert(ctx, D, 2, 1, 1, 1, 0);
    textAccumulateVert(ctx, D, 2, 2, 1, 1, 0);
    textAccumulateVert(ctx, D, 3, 2, 1, 1, 0);
    textAccumulateVert(ctx, D, 3, 2, 2, 1, -6.5);
    textAccumulateVert(ctx, D, 3, 2, 2, 2, 0);

  } else {

    textAccumulateVert(ctx, D, 0, 0, 0, 0, -4);
    textAccumulateVert(ctx, D, 0, 0, 0, 1, 1);
    textAccumulateVert(ctx, D, 1, 0, 0, 1, 0);
    textAccumulateVert(ctx, D, 1, 1, 0, 1, 0);
    textAccumulateVert(ctx, D, 2, 1, 0, 1, 0);
    textAccumulateVert(ctx, D, 2, 2, 0, 1, 0);
    textAccumulateVert(ctx, D, 3, 2, 0, 1, -6.5);
    textAccumulateVert(ctx, D, 3, 2, 0, 2, 1);

  }
}

function numPad(s) {
  return Number.parseFloat(s).toFixed(1);
}

// Draws text with x y from the bottom left corner of the pattern image.
// Bottom-left corner is 0,0 in Inkscape as well.
function drawText(ctx, s, xO, yO,
                  pattern_scale,
                  pos_text_offset_x,
                  pos_text_offset_y,
                  pos_pattern_height) {
  const sc = pattern_scale;
  const x = (pos_text_offset_x + xO) * sc;
  const y = ((pos_pattern_height - yO) + pos_text_offset_y) * sc;
  ctx.font = '28px "Fira Sans"';
  ctx.fillStyle = '#000000';
  ctx.fillText(s, x, y);
}

function drawTextTitle(ctx, s, size, xO, yO,
                       pattern_scale,
                       pos_text_offset_x,
                       pos_text_offset_y,
                       pos_pattern_height) {
  const sc = pattern_scale;
  const x = (pos_text_offset_x + xO) * sc;
  const y = ((pos_pattern_height - yO) + pos_text_offset_y) * sc;
  ctx.font = String(size) + ' "Butler"';
  ctx.fillStyle = '#000000';
  ctx.fillText(s, x, y);
}

function text(ctx, D, s, x, y) {
  drawText(ctx, s, x, y,
           D.pattern_scale, D.pos_text_offset_x, D.pos_text_offset_y, D.pos_pattern_height);
}

function textTitle(ctx, D, s, size, x, y) {
  drawTextTitle(ctx, s, size, x, y,
                D.pattern_scale, D.pos_text_offset_x, D.pos_text_offset_y, D.pos_pattern_height);
}

function textNum(ctx, D, s, x, y) {
  text(ctx, D, numPad(s), x, y);
}

function textNumSigned(ctx, D, s, x, y) {
  let sign = '';
  if (Number.parseFloat(s) >= 0.0) {
    sign = '+';
  }
  text(ctx, D, sign + numPad(s), x, y);
}

function textMandalaWidth(ctx, D, n) {
  let x, y;
  if (D.border_type === 0) {
    x = 2.0;
    y = 8.0;
  } else {
    x = 2.0;
    y = 16.0;
  }
  textNum(ctx, D,
          D.val_mandala_width,
          ((D.pos_buffer_width +
            D.pos_border_width +
            (n * (D.pos_mandala_width + D.pos_kusi_width)) +
            (D.pos_mandala_width / 2)) - x),
          y);
}

function textKusiWidth(ctx, D, n) {
  let x, y;
  if (D.border_type === 0) {
    x = 2.0;
    y = 8.0;
  } else {
    x = 2.0;
    y = 16.0;
  }
  const nI = n*2+1;
  textNum(ctx, D,
          (D.val_kusi_width + D.sabong.kusi_buffers[KB[nI]]),
          ((D.pos_buffer_width +
            D.pos_border_width +
            D.pos_mandala_width +
            (n * (D.pos_mandala_width + D.pos_kusi_width)) +
            (D.pos_kusi_width / 2)) - x),
          y);
}

function textKusiHeight(ctx, D, n) {
  let x, y;
  if (D.border_type === 0) {
    x = 8.8;
    y = 3.5;
  } else {
    x = 14.0;
    y = 3.5;
  }
  textNum(ctx, D,
          D.val_kusi_width,
          x,
          ((D.pos_buffer_width +
            D.pos_border_width +
            D.pos_mandala_height +
            (n * (D.pos_mandala_height + D.pos_kusi_width)) +
            (D.pos_kusi_width / 2)) - y));
}

function textKusiBuffer(ctx, D, nI, m, k, b, c, x_offset) {
  textNumSigned(ctx, D,
                D.sabong.kusi_buffers[KB[nI]],
                (-5.5 + x_offset +
                 (m * D.pos_mandala_width) +
                 (k * D.pos_kusi_width) +
                 (b * D.pos_border_width) +
                 (c * D.pos_buffer_width)),
                100.2);
}

function textMandalaHeight(ctx, D, n) {
  let x, y;
  if (D.border_type === 0) {
    x = 8.0;
    y = 3.5;
  } else {
    x = 14.0;
    y = 3.5;
  }
  textNum(ctx, D,
          D.val_mandala_height,
          x,
          ((D.pos_buffer_width +
            D.pos_border_width +
            (n * (D.pos_mandala_height + D.pos_kusi_width)) +
            (D.pos_mandala_height / 2)) - y));
}

function kusiBuffersUntil(robe, n) {
  if (n < 0) {
    return 0;
  }
  let a = 0;
  let i = 0;
  while (i <= n && i < KB.length) {
    a += Number(robe.kusi_buffers[KB[i]]);
    i++;
  }
  return a;
};

// mandala, kusi, border, cut buffer
function textAccumulateHoriz(ctx, D, m, k, b, c, x_offset) {
  let x, y;
  if (D.border_type === 0) {
    x = 0.0;
    y = 95.0;
  } else {
    x = 12.5;
    y = 83.0;
  }
  textNum(ctx, D,
          ((m * D.val_mandala_width) +
           (Math.floor((k+1)/2) * D.val_kusi_width) +
           kusiBuffersUntil(D.sabong, k) +
           (b * D.val_border_width) +
           (c * D.val_buffer_width)),
          (x + x_offset +
           (m * D.pos_mandala_width) +
           (Math.floor((k+1)/2) * D.pos_kusi_width) +
           (b * D.pos_border_width) +
           (c * D.pos_buffer_width)),
          y);
}

// mandala, kusi, border, cut buffer
function textAccumulateVert(ctx, D, m, k, b, c, y_offset) {
  let x, y;
  if (D.border_type === 0) {
    x = 223;
    y = -2.0;
  } else {
    x = 212.5;
    y = 10.5;
  }
  textNum(ctx, D,
          ((m * D.val_mandala_height) +
           (k * D.val_kusi_width) +
           (b * D.val_border_height) +
           (c * D.val_buffer_width)),
          x,
          (y + y_offset +
           (m * D.pos_mandala_height) +
           (k * D.pos_kusi_width) +
           (b * D.pos_border_width) +
           (c * D.pos_buffer_width)));
}

function cutKusi(ctx, D, n) {
  let xO = (((n + 1) * D.pos_mandala_width) +
            (n * D.pos_kusi_width) +
            D.pos_border_width +
            D.pos_buffer_width);

  // kusi 3
  if (n >= 2) {
    xO += D.pos_kusi_width;
  }
  // kusi 4
  if (n >= 4) {
    xO += D.pos_kusi_width;
  }

  const yO = 1.0;

  const sc = D.pattern_scale;
  const x = (D.pos_img_offset_x + xO) * sc;
  const y = (D.pos_img_offset_y + yO) * sc;

  if (D.sabong.kusi_cuts[KC[n]]) {
    ctx.strokeStyle = '#0000FF';
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, 122 * sc);
    ctx.stroke();

    // restore default width
    ctx.lineWidth = 1;

    if (D.border_type === 0) {
      ctx.drawImage(ScissorsImg,
                    x - 3*sc,
                    (D.pos_img_offset_y + 21.5) * sc,
                    6 * sc,
                    6 * sc);
    } else {
      ctx.drawImage(ScissorsImg,
                    x - 3*sc,
                    (D.pos_img_offset_y + 23.0) * sc,
                    6 * sc,
                    6 * sc);
    }
  }
}

function calcShrinkingLengths(robe, khandhas) {
  const final_width = Number(robe.width);
  const final_height = Number(robe.height);
  const buffer_width = Number(robe.buffer_width);
  const kusi_width = Number(robe.kusi_width);
  const orig_border_width = Number(robe.border_width);
  // same as the horizontal
  const vertical_buffer_width = Number(robe.buffer_width);

  // inner width: scaled final width, not including the edge buffers
  // iw = fw * (1 + sc / 100)
  const inner_width = final_width * (1 + (robe.shrink_percent_width / 100));
  const inner_height = final_height * (1 + (robe.shrink_percent_height / 100));

  // cut width includes the edge buffers and kusi buffers
  const cut_width =
        inner_width
        + (2 * buffer_width)
        + kusiBuffersUntil(robe, khandhas - 1);

  const cut_height =
        inner_height
        + (2 * vertical_buffer_width);

  // mandala width without scaling
  // m = (fw - 2b - (khandhas - 1)k) / khandhas
  const orig_mandala_width =
        (final_width
        - (2 * orig_border_width)
        - ((khandhas - 1) * kusi_width)) / khandhas;

  const orig_mandala_height =
        (final_height
         - (2 * orig_border_width)
         - (2 * kusi_width)) / 3;

  // orig border to mandala ratio, width and height
  // i.e. one border equals this much of a mandala
  // r = b / m
  const b2m_w = orig_border_width / orig_mandala_width;
  const b2m_h = orig_border_width / orig_mandala_height;

  // remainder cut width, taking the kusi off the cut size
  // rw = iw - (khandhas - 1)k
  const rem_w = inner_width - ((khandhas - 1) * kusi_width);
  const rem_h = inner_height - (2 * kusi_width);

  // five mandalas in the remainder width, plus two borders expressed as mandalas
  // for five khandhas:
  // w = 5m + 2b = 5m + 2rm
  // w = (5+2r)m
  // w / (5+2r) = m
  const mandala_width = rem_w / (khandhas + (2 * b2m_w));
  const mandala_height = rem_h / (3 + (2 * b2m_h));
  const border_width = mandala_width * b2m_w;
  const border_height = mandala_height * b2m_h;

  return {
    cut_width,
    cut_height,
    mandala_width,
    mandala_height,
    border_width,
    border_height
  };
}

function calcSabongShrinkingLengths(robe) {
  return calcShrinkingLengths(robe, 5);
}

export default DrawSabongPattern;
