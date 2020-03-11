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
    content: {
      type: String,
      required: true
    },
  },

  data: () => {
    return {
      title: '',
      toc: [],
      htmlContent: ''
    };
  },

  async created() {
    const a = await this.$mdParse(this.content);
    this.title = a.title;
    this.htmlContent = a.htmlContent;
    this.toc = a.toc;
  },

  head() {
    return {
      title: this.title.trim() + ' - Ticivara Robe Sewing'
    };
  }
};
</script>
