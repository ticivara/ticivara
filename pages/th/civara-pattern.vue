<template>
  <div class="pattern-container container">
    <div>
      <div class="content">
        <h1 class="page-title">{{ title }}</h1>
        <div class="page-content">
          <CivaraPattern />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CivaraPattern from '@/components/CivaraPattern.vue';

export default {
  components: {
    CivaraPattern
  },

  fetch(context) {
    context.store.commit('setLangFromPath', context.route.path);
  },

  asyncData() {
    return {
      title: 'Civara Pattern'
    };
  },

  head() {
    return {
      title: this.title.trim() + ' - Ticivara Robe Sewing'
    };
  }
};
</script>
