<template>
  <MarkdownPage :title="title" :html-content="htmlContent" :toc="toc" />
</template>

<script>
import pageText from '@/assets/content/en/borders.md';
import MarkdownPage from '@/components/MarkdownPage.vue';

export default {
  components: {
    MarkdownPage
  },

  fetch(context) {
    context.store.commit('setLangFromPath', context.route.path);
  },

  asyncData(context) {
    return context.app.$mdParse(pageText);
  }
};
</script>
