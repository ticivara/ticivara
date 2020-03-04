<template>
  <div class="toc">
    <ul>
      <li v-for="i in items" :key="i">
        <a :href="i[2]">{{ i[1] }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
