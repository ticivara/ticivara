<template>
  <div class="pattern-container container">
    <div>
      <div class="content">
        <h1 class="page-title">{{ title }}</h1>
        <div class="page-content">
          <SanghatiPattern />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SanghatiPattern from '@/components/SanghatiPattern.vue';

export default {
  components: {
    SanghatiPattern
  },

  fetch(context) {
    context.store.commit('setLangFromPath', context.route.path);
  },

  asyncData() {
    return {
      title: 'Sanghati Pattern'
    };
  },

  head() {
    return {
      title: this.title.trim() + ' - Ticivara Robe Sewing'
    };
  }
};
</script>
