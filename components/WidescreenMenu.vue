<template>
  <div class="links-widescreen navbar-start">
    <template v-for="top in menu">
      <div :key="top.label" class="navbar-item">{{ top.label }}</div>
      <nuxt-link
        v-for="sub in top.sub"
        :key="sub.path + sub.label"
        class="navbar-item"
        :to="menuLangPath(sub.path)"
      >
        {{ sub.label }}
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      required: true
    }
  },
  computed: {
    menu() {
      return this.$store.state.menu.items;
    }
  },
  methods: {
    menuLangPath(path) {
      let lang = 'en';
      if (this.$props.lang === 'thai') {
        lang = 'th';
      }
      return path.replace('<lang>', lang);
    }
  }
};
</script>
