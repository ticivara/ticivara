<template>
  <div class="container">
    <div class="narrow-container container">
      <div class="content">
        <h1 class="page-title">{{ title }}</h1>
        <Toc :items="toc" />
        <div class="page-content" v-html="htmlContent" />
      </div>
    </div>
  </div>
</template>

<script>
import Toc from '@/components/Toc.vue';

export default {
  components: {
    Toc
  },

  props: {
    title: {
      type: String,
      required: true
    },
    htmlContent: {
      type: String,
      required: true
    },
    toc: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  head() {
    return {
      title: this.title.trim() + ' - Ticivara Robe Sewing'
    };
  }
};
</script>
