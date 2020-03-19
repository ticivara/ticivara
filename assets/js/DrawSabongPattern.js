import ScissorsBlackDown from '@/assets/js/ScissorsBlackDown.js';
import {
  numPad,
  text,
  textTitle,
  textNum,
  textNumSigned,
  KB,
  KC,
  hasCutBuffer,
  kusiBuffersUntil,
  calcShrinkingLengths,
  initAndDraw
} from '@/assets/js/helpers.js';

const ScissorsImg = new Image();
ScissorsImg.src = ScissorsBlackDown;

function drawPanels(ctx, canvasWidth, canvasHeight, img, robe) {
  // shrinking lengths
  const a = calcShrinkingLengths(robe, 5);
  const sl = {
    val_cut_width: a.cut_width,
    val_cut_height: a.cut_height,
    val_mandala_width: a.mandala_width,
    val_mandala_height: a.mandala_height,
    val_border_width: a.border_width,
    val_border_height: a.border_height
  };

  const D = {
    robe,
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
    val_buffer_width: Number(robe.buffer_width),
    val_vertical_buffer_width: Number(robe.vertical_buffer_width),
    val_inner_width: Number(robe.width),
    val_inner_height: Number(robe.height),
    val_kusi_width: Number(robe.kusi_width),
    // shrinking lengths
    val_cut_width: sl.val_cut_width,
    val_cut_height: sl.val_cut_height,
    val_mandala_width: sl.val_mandala_width,
    val_mandala_height: sl.val_mandala_height,
    val_border_width: sl.val_border_width,
    val_border_height: sl.val_border_height
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

  textTitle(ctx, D, D.robe.title, '60px', 0, -12.0);

  text(
    ctx,
    D,
    'Final Width: ' +
      numPad(D.val_inner_width) +
      ', Final Height: ' +
      numPad(D.val_inner_height),
    0,
    -19.0
  );

  text(
    ctx,
    D,
    'Cut Width: ' +
      numPad(D.val_cut_width) +
      ', Cut Height: ' +
      numPad(D.val_cut_height),
    0,
    -22.0
  );

  text(ctx, D, 'a, border width: ' + numPad(D.val_border_width), 40.0, -19.0);

  text(ctx, D, 'b, border height: ' + numPad(D.val_border_height), 40.0, -22.0);

  text(ctx, D, 'c, cutting buffer: ' + numPad(D.val_buffer_width), 40.0, -25.0);

  text(ctx, D, 'k, kusi width: ' + numPad(D.val_kusi_width), 40.0, -28.0);

  text(ctx, D, 'm, mandala width: ' + numPad(D.val_mandala_width), 40.0, -31.0);

  text(
    ctx,
    D,
    'd, mandala height: ' + numPad(D.val_mandala_height),
    40.0,
    -34.0
  );

  // buffer at the edges
  if (D.robe.border_type === 0) {
    textNum(ctx, D, D.val_buffer_width, 2.0, 5.0);
    textNum(ctx, D, D.val_buffer_width, D.pos_pattern_width - 6.0, 5.0);
  } else {
    textNum(ctx, D, D.val_buffer_width, 7.0, 16.0);
    textNum(ctx, D, D.val_buffer_width, D.pos_pattern_width - 11.0, 16.0);
  }

  // border width
  textNum(ctx, D, D.val_border_width, 5.0, 8.0);
  textNum(ctx, D, D.val_border_width, D.pos_pattern_width - 9.0, 8.0);

  // border height
  textNum(ctx, D, D.val_border_height, 9.0, 3.0);
  textNum(ctx, D, D.val_border_height, D.pos_pattern_width - 13.0, 3.0);

  // cutting lines
  cutKusi(ctx, D, 0);
  cutKusi(ctx, D, 1);
  cutKusi(ctx, D, 2);
  cutKusi(ctx, D, 3);

  // mandala width
  textMandalaWidth(ctx, D, 0, 0);
  textMandalaWidth(ctx, D, 2, 1);
  textMandalaWidth(ctx, D, 4, 2);
  textMandalaWidth(ctx, D, 6, 3);
  textMandalaWidth(ctx, D, -1, 4);

  // kusi width
  textKusiWidth(ctx, D, 1, 1);
  textKusiWidth(ctx, D, 3, 2);
  textKusiWidth(ctx, D, 5, 3);
  textKusiWidth(ctx, D, 7, 4);

  // kusi height
  textKusiHeight(ctx, D, 0);
  textKusiHeight(ctx, D, 1);

  // kusi buffer additions and cutting buffer
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
  if (D.robe.border_type === 0) {
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
  if (D.robe.border_type === 0) {
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

function textMandalaWidth(ctx, D, nI, m) {
  let x, y;
  if (D.robe.border_type === 0) {
    x = 2.0;
    y = 8.0;
  } else {
    x = 2.0;
    y = 16.0;
  }
  let kusi_buffer;
  if (nI < 0) {
    kusi_buffer = 0;
  } else {
    kusi_buffer = Number(D.robe.kusi_buffers[KB[nI]]);
  }
  textNum(
    ctx,
    D,
    D.val_mandala_width + kusi_buffer,
    D.pos_buffer_width +
      D.pos_border_width +
      m * (D.pos_mandala_width + D.pos_kusi_width) +
      D.pos_mandala_width / 2 -
      x,
    y
  );
}

function textKusiWidth(ctx, D, nI, m) {
  let x, y;
  if (D.robe.border_type === 0) {
    x = 2.0;
    y = 8.0;
  } else {
    x = 2.0;
    y = 16.0;
  }

  let a = D.val_kusi_width + Number(D.robe.kusi_buffers[KB[nI]]);

  if (hasCutBuffer(D.robe, nI)) {
    a += Number(D.robe.kusi_cutting_buffer);
  }

  textNum(
    ctx,
    D,
    a,
    D.pos_buffer_width +
      D.pos_border_width +
      (m - 1) * D.pos_kusi_width +
      m * D.pos_mandala_width +
      D.pos_kusi_width / 2 -
      x,
    y
  );
}

function textKusiHeight(ctx, D, n) {
  let x, y;
  if (D.robe.border_type === 0) {
    x = 8.8;
    y = 3.5;
  } else {
    x = 14.0;
    y = 3.5;
  }
  textNum(
    ctx,
    D,
    D.val_kusi_width,
    x,
    D.pos_buffer_width +
      D.pos_border_width +
      D.pos_mandala_height +
      n * (D.pos_mandala_height + D.pos_kusi_width) +
      D.pos_kusi_width / 2 -
      y
  );
}

function textKusiBuffer(ctx, D, nI, m, k, b, c, x_offset) {
  // additional buffer
  textNumSigned(
    ctx,
    D,
    D.robe.kusi_buffers[KB[nI]],
    -5.5 +
      x_offset +
      m * D.pos_mandala_width +
      k * D.pos_kusi_width +
      b * D.pos_border_width +
      c * D.pos_buffer_width,
    100.2
  );

  // cutting buffer
  if (hasCutBuffer(D.robe, nI)) {
    textNumSigned(
      ctx,
      D,
      D.robe.kusi_cutting_buffer,
      -5.5 +
        x_offset +
        m * D.pos_mandala_width +
        k * D.pos_kusi_width +
        b * D.pos_border_width +
        c * D.pos_buffer_width,
      90
    );
  }
}

function textMandalaHeight(ctx, D, n) {
  let x, y;
  if (D.robe.border_type === 0) {
    x = 8.0;
    y = 3.5;
  } else {
    x = 14.0;
    y = 3.5;
  }
  textNum(
    ctx,
    D,
    D.val_mandala_height,
    x,
    D.pos_buffer_width +
      D.pos_border_width +
      n * (D.pos_mandala_height + D.pos_kusi_width) +
      D.pos_mandala_height / 2 -
      y
  );
}

// mandala, kusi, border, cut buffer
function textAccumulateHoriz(ctx, D, m, k, b, c, x_offset) {
  let x, y;
  if (D.robe.border_type === 0) {
    x = 0.0;
    y = 95.0;
  } else {
    x = 12.5;
    y = 83.0;
  }
  textNum(
    ctx,
    D,
    m * D.val_mandala_width +
      Math.floor((k + 1) / 2) * D.val_kusi_width +
      kusiBuffersUntil(D.robe, k) +
      b * D.val_border_width +
      c * D.val_buffer_width,
    x +
      x_offset +
      m * D.pos_mandala_width +
      Math.floor((k + 1) / 2) * D.pos_kusi_width +
      b * D.pos_border_width +
      c * D.pos_buffer_width,
    y
  );
}

// mandala, kusi, border, cut buffer
function textAccumulateVert(ctx, D, m, k, b, c, y_offset) {
  let x, y;
  if (D.robe.border_type === 0) {
    x = 223;
    y = -2.0;
  } else {
    x = 212.5;
    y = 10.5;
  }
  textNum(
    ctx,
    D,
    m * D.val_mandala_height +
      k * D.val_kusi_width +
      b * D.val_border_height +
      c * D.val_buffer_width,
    x,
    y +
      y_offset +
      m * D.pos_mandala_height +
      k * D.pos_kusi_width +
      b * D.pos_border_width +
      c * D.pos_buffer_width
  );
}

function cutKusi(ctx, D, n) {
  let xO =
    (n + 1) * D.pos_mandala_width +
    n * D.pos_kusi_width +
    D.pos_border_width +
    D.pos_buffer_width;

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

  if (D.robe.kusi_cuts[KC[n]]) {
    ctx.strokeStyle = '#0000FF';
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, 122 * sc);
    ctx.stroke();

    // restore default width
    ctx.lineWidth = 1;

    if (D.robe.border_type === 0) {
      ctx.drawImage(
        ScissorsImg,
        x - 3 * sc,
        (D.pos_img_offset_y + 21.5) * sc,
        6 * sc,
        6 * sc
      );
    } else {
      ctx.drawImage(
        ScissorsImg,
        x - 3 * sc,
        (D.pos_img_offset_y + 23.0) * sc,
        6 * sc,
        6 * sc
      );
    }
  }
}

export function DrawSabongPattern(patterns, canvasWidth, canvasHeight, robe) {
  initAndDraw(patterns[0], robe, (ctx, img) => {
    drawPanels(ctx, canvasWidth, canvasHeight, img, robe);
  });
}
