<template>
  <div>
    <h1>Sabong Pattern</h1>
  </div>
</template>

<script>
export default {
  fetch(context) {
    context.store.commit('setLangFromPath', context.route.path);
  }
};
</script>
