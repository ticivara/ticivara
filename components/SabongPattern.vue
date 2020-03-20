<template>
  <div>
    <div class="parameters">
      <div id="simple_controls">
        <div class="columns">
          <div class="column is-6">
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">Title:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input v-model="robe.title" class="input" type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal is-pulled-right">
              <div class="field-label">
                <label class="label">Border type:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <div class="field has-addons">
                      <p class="control">
                        <button
                          :class="[robe.border_type === 0 ? 'is-info is-selected' : '', 'button']"
                          @click="setBorderType(0)"
                        >
                          <span>Overlapping</span>
                        </button>
                      </p>
                      <p class="control">
                        <button
                          :class="[robe.border_type === 1 ? 'is-info is-selected' : '', 'button']"
                          @click="setBorderType(1)"
                        >
                          <span>Joined</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-3">
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">Final width:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input v-model="robe.width" class="input" type="number" step="1" min="0" />
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">Final height:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input v-model="robe.height" class="input" type="number" step="1" min="0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-3">
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">Shrinking width %:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      v-model="robe.shrink_percent_width"
                      class="input"
                      type="number"
                      step="1"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">Shrinking height %:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      v-model="robe.shrink_percent_height"
                      class="input"
                      type="number"
                      step="1"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div v-show="show_more_controls" class="field is-horizontal">
            <div class="field-label">
              <label class="label">Kusi width:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input v-model="robe.kusi_width" class="input" type="number" step="1" min="0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div v-show="show_more_controls" class="field is-horizontal">
            <div class="field-label">
              <label class="label">Border width:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input v-model="robe.border_width" class="input" type="number" step="1" min="0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div v-show="show_more_controls" class="field is-horizontal">
            <div class="field-label">
              <label class="label">Buffer width:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    :value="robe.buffer_width"
                    class="input"
                    type="number"
                    step="1"
                    min="0"
                    @change="setBufferWidth($event)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field is-pulled-right">
            <div class="control">
              <button
                :class="[show_more_controls ? 'is-info' : '', 'button']"
                @click="show_more_controls = !show_more_controls"
              >
                <span v-show="show_more_controls">Less parameters</span>
                <span v-show="!show_more_controls">More parameters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-show="show_more_controls" id="advanced_controls">
        <p>
          Kusi buffers widths:
        </p>

        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">k1-a:</label>
              <div class="control">
                <input
                  v-model="robe.kusi_buffers.k1_a"
                  class="input"
                  type="number"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div class="column" style="border-right: 1px solid black;">
            <div class="field">
              <label class="label">k1-b:</label>
              <div class="control">
                <input
                  v-model="robe.kusi_buffers.k1_b"
                  class="input"
                  type="number"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">k2-a:</label>
              <div class="control">
                <input
                  v-model="robe.kusi_buffers.k2_a"
                  class="input"
                  type="number"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div class="column" style="border-right: 1px solid black;">
            <div class="field">
              <label class="label">k2-b:</label>
              <div class="control">
                <input
                  v-model="robe.kusi_buffers.k2_b"
                  class="input"
                  type="number"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">k3-a:</label>
              <div class="control">
                <input
                  v-model="robe.kusi_buffers.k3_a"
                  class="input"
                  type="number"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div class="column" style="border-right: 1px solid black;">
            <div class="field">
              <label class="label">k3-b:</label>
              <div class="control">
                <input
                  v-model="robe.kusi_buffers.k3_b"
                  class="input"
                  type="number"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">k4-a:</label>
              <div class="control">
                <input
                  v-model="robe.kusi_buffers.k4_a"
                  class="input"
                  type="number"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <label class="label">k4-b:</label>
              <div class="control">
                <input
                  v-model="robe.kusi_buffers.k4_b"
                  class="input"
                  type="number"
                  step="0.1"
                  min="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <p>
            Kusi cutting buffer, added on the kusi side of the cutting line:
          </p>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <div class="control">
              <input
                v-model="robe.kusi_cutting_buffer"
                class="input"
                type="number"
                step="0.1"
                min="0"
              />
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <button
                :class="[robe.kusi_cuts.k1_a ? 'is-info' : '', 'button']"
                @click="robe.kusi_cuts.k1_a = !robe.kusi_cuts.k1_a"
              >
                <span class="icon is-small">
                  <img v-if="robe.kusi_cuts.k1_a" src="@/assets/img/scissors-white.svg" />
                  <img v-else src="@/assets/img/scissors-black.svg" />
                </span>
                <span>k1-a</span>
              </button>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <button
                :class="[robe.kusi_cuts.k2_a ? 'is-info' : '', 'button']"
                @click="robe.kusi_cuts.k2_a = !robe.kusi_cuts.k2_a"
              >
                <span class="icon is-small">
                  <img v-if="robe.kusi_cuts.k2_a" src="@/assets/img/scissors-white.svg" />
                  <img v-else src="@/assets/img/scissors-black.svg" />
                </span>
                <span>k2-a</span>
              </button>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <button
                :class="[robe.kusi_cuts.k3_a ? 'is-info' : '', 'button']"
                @click="robe.kusi_cuts.k3_a = !robe.kusi_cuts.k3_a"
              >
                <span class="icon is-small">
                  <img v-if="robe.kusi_cuts.k3_a" src="@/assets/img/scissors-white.svg" />
                  <img v-else src="@/assets/img/scissors-black.svg" />
                </span>
                <span>k3-a</span>
              </button>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <button
                :class="[robe.kusi_cuts.k4_a ? 'is-info' : '', 'button']"
                @click="robe.kusi_cuts.k4_a = !robe.kusi_cuts.k4_a"
              >
                <span class="icon is-small">
                  <img v-if="robe.kusi_cuts.k4_a" src="@/assets/img/scissors-white.svg" />
                  <img v-else src="@/assets/img/scissors-black.svg" />
                </span>
                <span>k4-a</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary" @click="downloadPdf()">
                <span>Download PDF</span>
              </button>
            </div>

            <div class="control">
              <a class="button is-text" :href="robeParamsUrl">Parameters Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <canvas id="sabong-pattern-canvas" class="pattern" :width="width" :height="height"> </canvas>
  </div>
</template>

<script>
import { DrawSabongPattern } from '@/assets/js/DrawSabongPattern.js';
import { getQueryParsedData, getRobeParamsUrl, renderAndDownloadPdf } from '@/assets/js/helpers.js';

const D = {
  width: 3500,
  height: 2400,
  show_more_controls: false,
  robe: {
    title: 'Sabong ' + new Date().getFullYear(),
    border_type: 0, // 0 = overlapping, 1 = joined
    width: 228,
    height: 99,
    buffer_width: 1,
    // in the sabong, vertical_buffer_width is the same as buffer_width
    vertical_buffer_width: 1,
    border_width: 12,
    kusi_width: 6,
    kusi_cutting_buffer: 0.5,
    shrink_percent_width: 0,
    shrink_percent_height: 0,
    kusi_buffers: {
      k1_a: 0.0,
      k1_b: 0.5,
      k2_a: 0.0,
      k2_b: 0.5,
      k3_a: 0.0,
      k3_b: 0.5,
      k4_a: 0.0,
      k4_b: 0.5
    },
    kusi_cuts: {
      k1_a: false,
      k2_a: false,
      k3_a: false,
      k4_a: false
    }
  }
};

const Patterns = [
  {
    canvas_id: 'sabong-pattern-canvas',
    overlapping_img_src: '/img/sabong-pattern-overlapping-border.svg',
    joined_img_src: '/img/sabong-pattern-joined-border.svg'
  }
];

export default {
  data() {
    return getQueryParsedData(D, this.$route.query);
  },

  computed: {
    robeParamsUrl() {
      return getRobeParamsUrl(this.robe);
    }
  },

  mounted() {
    this.updateCanvas();
  },

  updated() {
    this.updateCanvas();
  },

  methods: {
    updateCanvas() {
      DrawSabongPattern(Patterns, this.width, this.height, this.robe);
    },

    // have to use a method to update both attribs
    setBufferWidth(event) {
      const x = event.target.value;
      this.robe.buffer_width = Number(x);
      this.robe.vertical_buffer_width = Number(x);
    },

    setBorderType(type_id) {
      this.robe.border_type = Number(type_id);
    },

    downloadPdf() {
      renderAndDownloadPdf(Patterns, this.robe, this.robeParamsUrl);
    }
  }
};
</script>
