import {
  numPad,
  text,
  textTitle,
  // textNum,
  // textNumSigned,
  // KB,
  // KC,
  // hasCutBuffer,
  // kusiBuffersUntil,
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
    pos_buffer_width: 1.0,
    pos_border_width: 5.91,
    pos_kusi_width: 2.53,
    pos_mandala_width: 13.09,
    pos_mandala_height: 24.43,
    // scale
    pattern_scale: 12.0,
    // calcualted size values to display, these could be user inputs
    val_buffer_width: Number(robe.buffer_width),
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

  textTitle(ctx, D, D.robe.title, '120px', -0.5, 168);

  text(ctx, D, 'Final Width: ' + numPad(D.val_inner_width), 5, 140);

  text(ctx, D, 'Final Height: ' + numPad(D.val_inner_height), 5, 136);

  text(ctx, D, 'Cut Width: ' + numPad(D.val_cut_width), 5, 132);

  text(ctx, D, 'Cut Height: ' + numPad(D.val_cut_height), 5, 128);
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
    pos_pattern_height: 170,
    pos_img_offset_x: 10,
    pos_img_offset_y: 10,
    pos_text_offset_x: 10,
    pos_text_offset_y: 10,
    pos_buffer_width: 1.0,
    pos_border_width: 5.91,
    pos_kusi_width: 2.53,
    pos_mandala_width: 13.09,
    pos_mandala_height: 24.43,
    // scale
    pattern_scale: 12.0,
    // calcualted size values to display, these could be user inputs
    val_buffer_width: Number(robe.buffer_width),
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

  textTitle(ctx, D, D.robe.title, '120px', -0.5, 168);

  text(ctx, D, 'Final Width: ' + numPad(D.val_inner_width), 5, 140);

  text(ctx, D, 'Final Height: ' + numPad(D.val_inner_height), 5, 136);

  text(ctx, D, 'Cut Width: ' + numPad(D.val_cut_width), 5, 132);

  text(ctx, D, 'Cut Height: ' + numPad(D.val_cut_height), 5, 128);
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
    pos_pattern_height: 170,
    pos_img_offset_x: 10,
    pos_img_offset_y: 10,
    pos_text_offset_x: 10,
    pos_text_offset_y: 10,
    pos_buffer_width: 1.0,
    pos_border_width: 5.91,
    pos_kusi_width: 2.53,
    pos_mandala_width: 13.09,
    pos_mandala_height: 24.43,
    // scale
    pattern_scale: 12.0,
    // calcualted size values to display, these could be user inputs
    val_buffer_width: Number(robe.buffer_width),
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

  textTitle(ctx, D, D.robe.title, '120px', -0.5, 168);

  text(ctx, D, 'Final Width: ' + numPad(D.val_inner_width), 5, 140);

  text(ctx, D, 'Final Height: ' + numPad(D.val_inner_height), 5, 136);

  text(ctx, D, 'Cut Width: ' + numPad(D.val_cut_width), 5, 132);

  text(ctx, D, 'Cut Height: ' + numPad(D.val_cut_height), 5, 128);
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
    pos_pattern_height: 170,
    pos_img_offset_x: 10,
    pos_img_offset_y: 10,
    pos_text_offset_x: 10,
    pos_text_offset_y: 10,
    pos_buffer_width: 1.0,
    pos_border_width: 5.91,
    pos_kusi_width: 2.53,
    pos_mandala_width: 13.09,
    pos_mandala_height: 24.43,
    // scale
    pattern_scale: 12.0,
    // calcualted size values to display, these could be user inputs
    val_buffer_width: Number(robe.buffer_width),
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

  textTitle(ctx, D, D.robe.title, '120px', -0.5, 168);

  text(ctx, D, 'Final Width: ' + numPad(D.val_inner_width), 5, 140);

  text(ctx, D, 'Final Height: ' + numPad(D.val_inner_height), 5, 136);

  text(ctx, D, 'Cut Width: ' + numPad(D.val_cut_width), 5, 132);

  text(ctx, D, 'Cut Height: ' + numPad(D.val_cut_height), 5, 128);
}

export function DrawSanghatiPattern(patterns, canvasWidth, canvasHeight, robe) {
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
