<template>
  <div class="links-tablet-desktop navbar-start">
    <div class="navbar-item">
      <ul v-for="top in menu" :key="top.label" class="s-nav-list">
        <li class="title-item">{{ top.label }}</li>
        <li
          v-for="sub in top.sub"
          :key="sub.path + sub.label"
          :class="[isActive(sub.path) ? 'is-active' : '', 'link-item']"
        >
          <nuxt-link :to="menuLangPath(sub.path)">{{ sub.label }}</nuxt-link>
        </li>
      </ul>
    </div>
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
    isActive(menuPath) {
      const menuName = menuPath.replace('/<lang>', '');
      const urlName = this.$route.path.replace(/^\/(en|th)/, '');
      if (menuName === urlName) {
        return true;
      } else {
        return false;
      }
    },
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
