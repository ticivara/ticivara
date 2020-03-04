<template>
  <div class="container">
    <div class="narrow-container container">
      <div class="content" v-html="htmlContent" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    htmlContent: {
      type: String,
      required: true
    }
  },

  head() {
    return {
      title: this.title.trim() + ' - Ticivara'
    };
  }
};
</script>
