<template>
  <MarkdownPage :title="title" :html-content="htmlContent" />
</template>

<script>
import pageText from '@/assets/content/th/borders.md';
import MarkdownPage from '@/components/MarkdownPage.vue';

export default {
  components: {
    MarkdownPage
  },

  async asyncData(context) {
    const title = context.app.$mdTitle(pageText);
    const content = await context.app.$mdParse(pageText);
    return {
      title,
      htmlContent: content.html
    };
  }
};
</script>
