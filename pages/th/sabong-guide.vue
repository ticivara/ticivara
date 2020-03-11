<template>
  <MarkdownPage :content="pageText" />
</template>

<script>
import pageText from '@/assets/content/th/sabong-guide.md';
import MarkdownPage from '@/components/MarkdownPage.vue';

export default {
  components: {
    MarkdownPage
  },

  fetch(context) {
    context.store.commit('setLangFromPath', context.route.path);
  },

  asyncData(context) {
    return {
      pageText
    }
  }
};
</script>
