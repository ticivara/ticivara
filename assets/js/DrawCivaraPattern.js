import {
  numPad,
  text,
  textTitle,
  textNum,
  textNumSigned,
  calcShrinkingLengths,
  initAndDraw
} from '@/assets/js/helpers.js';

function drawGuide(ctx, canvasWidth, canvasHeight, img, robe) {
  // shrinking lengths
  const a = calcShrinkingLengths(robe, 9);
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
    pos_pattern_width: 260,
    pos_pattern_height: 170,
    pos_img_offset_x: 10,
    pos_img_offset_y: 10,
    pos_text_offset_x: 10,
    pos_text_offset_y: 10,
    pos_edge_buffer: 1.0,
    pos_border_width: 5.91,
    pos_kusi_width: 2.53,
    pos_mandala_width: 13.09,
    pos_mandala_height: 24.43,
    // scale
    pattern_scale: 12.0,
    // calcualted size values to display, these could be user inputs
    val_edge_buffer: Number(robe.edge_buffer),
    val_vertical_buffer_width: Number(robe.vertical_buffer_width),
    val_kusi_cutting_buffer: Number(robe.kusi_cutting_buffer),
    val_vertical_kusi_buffer: Number(robe.vertical_kusi_buffer),
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

  textTitle(ctx, D, D.robe.title, '100px', -0.5, 164);

  text(ctx, D, 'Final Width: ' + numPad(D.val_inner_width), 5, 140);
  text(ctx, D, 'Final Height: ' + numPad(D.val_inner_height), 5, 136);
  text(ctx, D, 'Cut Width: ' + numPad(D.val_cut_width), 5, 132);
  text(ctx, D, 'Cut Height: ' + numPad(D.val_cut_height), 5, 128);

  text(ctx, D, 'edge buffer: ' + numPad(D.val_edge_buffer), 5, 122);
  text(ctx, D, 'vertical cutting buffer: ' + numPad(D.val_vertical_buffer_width), 5, 118);
  text(ctx, D, 'kusi cutting buffer: ' + numPad(D.val_kusi_cutting_buffer), 5, 114);
  text(ctx, D, 'vertical kusi buffer: ' + numPad(D.val_vertical_kusi_buffer), 5, 110);

  text(ctx, D, 'a, border width: ' + numPad(D.val_border_width), 5, 102);
  text(ctx, D, 'b, border height: ' + numPad(D.val_border_height), 5, 98);
  text(ctx, D, 'k, kusi width: ' + numPad(D.val_kusi_width), 5, 94);
  text(ctx, D, 'm, middle section width: ' + numPad(D.val_mandala_width), 5, 90);
  text(ctx, D, 'd, middle section height: ' + numPad(D.val_mandala_height), 5, 86);

  textNum(ctx, D, D.val_cut_width, 245, 164);
  textNum(ctx, D, D.val_cut_height, 255, 155);

  textNum(ctx, D, D.val_border_width, 104.5, 82);
  textNum(ctx, D, D.val_border_height, 112, 74.2);
  textNum(ctx, D, D.val_kusi_width, 112, 130);
  textNum(ctx, D, D.val_kusi_width + D.val_vertical_kusi_buffer, 122, 74.2);
  textNum(ctx, D, D.val_mandala_width, 130, 82);
  textNum(ctx, D, D.val_mandala_height, 130, 89);

  textNumSigned(ctx, D, D.val_vertical_kusi_buffer, 123, 137);
  textNumSigned(ctx, D, D.val_kusi_cutting_buffer, 154.2, 86);
  textNumSigned(ctx, D, D.val_kusi_cutting_buffer, 198.6, 86);
  textNum(ctx, D, D.val_vertical_buffer_width, 209, 73);
  textNum(ctx, D, D.val_vertical_buffer_width, 209, 160);
  textNum(ctx, D, D.val_edge_buffer, 249, 133);
}

function drawPanels_1(ctx, canvasWidth, canvasHeight, img, robe) {
  // shrinking lengths
  const a = calcShrinkingLengths(robe, 9);
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
    pos_pattern_width: 260,
    pos_pattern_height: 135,
    pos_img_offset_x: 10,
    pos_img_offset_y: 20,
    pos_text_offset_x: 10,
    pos_text_offset_y: 20,
    pos_edge_buffer: 1.11,
    pos_vertical_buffer_width: 11.1,
    pos_border_width: 15.54,
    pos_kusi_width: 6.66,
    pos_mandala_width: 64.37,
    pos_mandala_height: 34.4,
    // scale
    pattern_scale: 12.0,
    // calcualted size values to display, these could be user inputs
    val_edge_buffer: Number(robe.edge_buffer),
    val_vertical_buffer_width: Number(robe.vertical_buffer_width),
    val_kusi_cutting_buffer: Number(robe.kusi_cutting_buffer),
    val_vertical_kusi_buffer: Number(robe.vertical_kusi_buffer),
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

  textAccumulateHoriz(ctx, D, 0, 0, 0, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 0, 0, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 1, 0, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 1, 1, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 2, 1, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 2, 2, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 3, 2, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 3, 2, 2, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 3, 2, 2, 2, 0.5, -2.0);

  textAccumulateVert(ctx, D, 0, 0, 0, 0, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 0, 0, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 1, 0, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 1, 1, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 2, 1, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 2, 2, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 3, 2, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 3, 2, 1, 1, 1, 1.0, 3.0);
}

function drawPanels_4(ctx, canvasWidth, canvasHeight, img, robe) {
  // shrinking lengths
  const a = calcShrinkingLengths(robe, 9);
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
    pos_pattern_width: 260,
    pos_pattern_height: 135,
    pos_img_offset_x: 10,
    pos_img_offset_y: 20,
    pos_text_offset_x: 10,
    pos_text_offset_y: 20,
    pos_edge_buffer: 1.11,
    pos_vertical_buffer_width: 11.1,
    pos_border_width: 15.54,
    pos_kusi_width: 6.66,
    pos_mandala_width: 64.37,
    pos_mandala_height: 34.4,
    // scale
    pattern_scale: 12.0,
    // calcualted size values to display, these could be user inputs
    val_edge_buffer: Number(robe.edge_buffer),
    val_vertical_buffer_width: Number(robe.vertical_buffer_width),
    val_kusi_cutting_buffer: Number(robe.kusi_cutting_buffer),
    val_vertical_kusi_buffer: Number(robe.vertical_kusi_buffer),
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

  textAccumulateHoriz(ctx, D, 0, 0, 0, 1, 0.5, 0.0);
  textAccumulateHoriz(ctx, D, 0, 0, 1, 1, 0.5, 0.0);
  textAccumulateHoriz(ctx, D, 1, 0, 1, 1, 0.5, 0.0);
  textAccumulateHoriz(ctx, D, 1, 1, 1, 1, 0.5, 0.0);
  textAccumulateHoriz(ctx, D, 2, 1, 1, 1, 0.5, 0.0);
  textAccumulateHoriz(ctx, D, 2, 2, 1, 1, 0.5, 0.0);
  textAccumulateHoriz(ctx, D, 3, 2, 1, 1, 0.5, 0.0);
  textAccumulateHoriz(ctx, D, 3, 2, 2, 1, 0.5, 0.0);
  textAccumulateHoriz(ctx, D, 3, 2, 2, 2, 0.5, 0.0);

  textAccumulateVert(ctx, D, 0, 0, 1, 0, 0, 1.0, 3.0);
  textAccumulateVert(ctx, D, 0, 1, 1, 0, 0, 1.0, 3.0);
  textAccumulateVert(ctx, D, 1, 1, 1, 0, 0, 1.0, 3.0);
  textAccumulateVert(ctx, D, 1, 2, 1, 0, 0, 1.0, 3.0);
  textAccumulateVert(ctx, D, 2, 2, 1, 0, 0, 1.0, 3.0);
  textAccumulateVert(ctx, D, 2, 3, 1, 0, 0, 1.0, 3.0);
  textAccumulateVert(ctx, D, 3, 3, 1, 0, 0, 1.0, 3.0);
  textAccumulateVert(ctx, D, 3, 4, 1, 0, 0, 1.0, 3.0);
  textAccumulateVert(ctx, D, 3, 4, 2, 0, 0, 1.0, 5.0);
}

function drawPanels_7(ctx, canvasWidth, canvasHeight, img, robe) {
  // shrinking lengths
  const a = calcShrinkingLengths(robe, 9);
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
    pos_pattern_width: 260,
    pos_pattern_height: 135,
    pos_img_offset_x: 10,
    pos_img_offset_y: 20,
    pos_text_offset_x: 10,
    pos_text_offset_y: 20,
    pos_edge_buffer: 1.11,
    pos_vertical_buffer_width: 11.1,
    pos_border_width: 15.54,
    pos_kusi_width: 6.66,
    pos_mandala_width: 64.37,
    pos_mandala_height: 34.4,
    // scale
    pattern_scale: 12.0,
    // calcualted size values to display, these could be user inputs
    val_edge_buffer: Number(robe.edge_buffer),
    val_vertical_buffer_width: Number(robe.vertical_buffer_width),
    val_kusi_cutting_buffer: Number(robe.kusi_cutting_buffer),
    val_vertical_kusi_buffer: Number(robe.vertical_kusi_buffer),
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

  textAccumulateHoriz(ctx, D, 0, 0, 0, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 0, 0, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 1, 0, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 1, 1, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 2, 1, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 2, 2, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 3, 2, 1, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 3, 2, 2, 1, 0.5, -2.0);
  textAccumulateHoriz(ctx, D, 3, 2, 2, 2, 0.5, -2.0);

  textAccumulateVert(ctx, D, 0, 0, 0, 0, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 0, 0, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 1, 0, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 1, 1, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 2, 1, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 2, 2, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 3, 2, 0, 1, 1, 1.0, 1.0);
  textAccumulateVert(ctx, D, 3, 2, 1, 1, 1, 1.0, 3.0);
}

// mandala, kusi, border, vertical buffer
function textAccumulateHoriz(ctx, D, m, k, b, v, x_offset, y_offset) {
  textNum(
    ctx,
    D,
    m * D.val_mandala_height +
      k * D.val_kusi_width +
      b * D.val_border_height +
      v * D.val_vertical_buffer_width,
    x_offset +
      m * D.pos_mandala_width +
      k * D.pos_kusi_width +
      b * D.pos_border_width +
      v * D.pos_vertical_buffer_width,
    y_offset
  );
}

// mandala, kusi, kusi cut buffer, border, edge buffer
function textAccumulateVert(ctx, D, m, k, kcb, b, e, x_offset, y_offset) {
  textNum(
    ctx,
    D,
    m * D.val_mandala_width +
      k * (D.val_kusi_width + D.val_vertical_kusi_buffer) +
      kcb * D.val_kusi_cutting_buffer +
      b * D.val_border_width +
      e * D.val_edge_buffer,
    x_offset + D.pos_pattern_width,
    y_offset +
      m * D.pos_mandala_height +
      k * D.pos_kusi_width +
      kcb * D.pos_edge_buffer +
      b * D.pos_border_width +
      e * D.pos_edge_buffer
  );
}

export function DrawCivaraPattern(patterns, canvasWidth, canvasHeight, robe) {
  initAndDraw(patterns[0], robe, (ctx, img) => {
    drawGuide(ctx, canvasWidth, canvasHeight, img, robe);
  });
  initAndDraw(patterns[1], robe, (ctx, img) => {
    drawPanels_1(ctx, canvasWidth, canvasHeight, img, robe);
  });
  initAndDraw(patterns[2], robe, (ctx, img) => {
    drawPanels_4(ctx, canvasWidth, canvasHeight, img, robe);
  });
  initAndDraw(patterns[3], robe, (ctx, img) => {
    drawPanels_7(ctx, canvasWidth, canvasHeight, img, robe);
  });
}
