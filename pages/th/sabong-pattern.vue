<template>
  <div class="pattern-container container">
    <div>
      <div class="content">
        <h1 class="page-title">{{ title }}</h1>
        <div class="page-content">
          <SabongPattern />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SabongPattern from '@/components/SabongPattern.vue';

export default {
  components: {
    SabongPattern
  },

  fetch(context) {
    context.store.commit('setLangFromPath', context.route.path);
  },

  asyncData() {
    return {
      title: 'Sabong Pattern'
    };
  },

  head() {
    return {
      title: this.title.trim() + ' - Ticivara Robe Sewing'
    };
  }
};
</script>
