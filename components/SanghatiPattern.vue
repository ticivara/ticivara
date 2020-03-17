<template>
  <div>
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
        </div>

        <div class="column is-3">
          <div class="field is-horizontal">
            <div class="field-label">
              <label class="label">Final width:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    v-model="robe.width"
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
              <label class="label">Final height:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input
                    v-model="robe.height"
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

    <canvas
      id="sanghati-guide-canvas"
      class="pattern"
      :width="width"
      :height="height"
    >
    </canvas>

    <canvas
      id="sanghati-panels-1-2-3-canvas"
      class="pattern"
      :width="width"
      :height="height"
    >
    </canvas>

    <canvas
      id="sanghati-panels-4-5-6-canvas"
      class="pattern"
      :width="width"
      :height="height"
    >
    </canvas>

    <canvas
      id="sanghati-panels-7-8-9-canvas"
      class="pattern"
      :width="width"
      :height="height"
    >
    </canvas>
  </div>
</template>

<script>
import { DrawSanghatiPattern } from '@/assets/js/DrawSanghatiPattern.js';
import { getQueryParsedData, getRobeParamsUrl, renderAndDownloadPdf } from '@/assets/js/helpers.js';

const D = {
  width: 3500,
  height: 2400,
  show_more_controls: false,
  robe: {
    title: 'Sanghati ' + new Date().getFullYear(),
    border_type: 0, // 0 = overlapping, 1 = joined
    width: 228,
    height: 99,
    buffer_width: 1,
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
    canvas_id: 'sanghati-guide-canvas',
    overlapping_img_src: '/img/sanghati-guide.svg',
    joined_img_src: '/img/sanghati-guide.svg'
  },
  {
    canvas_id: 'sanghati-panels-1-2-3-canvas',
    overlapping_img_src: '/img/sanghati-panels-1-2-3.svg',
    joined_img_src: '/img/sanghati-panels-1-2-3.svg'
  },
  {
    canvas_id: 'sanghati-panels-4-5-6-canvas',
    overlapping_img_src: '/img/sanghati-panels-4-5-6.svg',
    joined_img_src: '/img/sanghati-panels-4-5-6.svg'
  },
  {
    canvas_id: 'sanghati-panels-7-8-9-canvas',
    overlapping_img_src: '/img/sanghati-panels-7-8-9.svg',
    joined_img_src: '/img/sanghati-panels-7-8-9.svg'
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
      DrawSanghatiPattern(Patterns, this.width, this.height, this.robe);
    },

    downloadPdf() {
      renderAndDownloadPdf(Patterns, this.robe, this.robeParamsUrl);
    }
  }
}

</script>
