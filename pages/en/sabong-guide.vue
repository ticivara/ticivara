<template>
  <MarkdownPage :title="title" :html-content="htmlContent" :toc="toc" />
</template>

<script>
import pageText from '@/assets/content/en/sabong-guide.md';
import MarkdownPage from '@/components/MarkdownPage.vue';

export default {
  components: {
    MarkdownPage
  },

  asyncData(context) {
    return context.app.$mdParse(pageText);
  }
};
</script>
