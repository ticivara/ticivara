<template>
  <div>
    <h1>Civara Guide</h1>
  </div>
</template>

<script>
export default {
  fetch(context) {
    context.store.commit('setLangFromPath', context.route.path);
  }
};
</script>
