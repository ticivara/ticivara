<template>
  <nav id="app-nav-wrap" class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="langPrefix + '/landing'" class="navbar-item"
        ><img src="/img/logo-navbar-as-path.svg"/></nuxt-link
      ><a
        :class="[menuOpen ? 'is-active' : '', 'navbar-burger', 'burger']"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleMenu()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span
      ></a>
    </div>

    <div id="app-nav" :class="[menuOpen ? 'is-active' : '', 'navbar-menu']">
      <TabletMenu :lang="lang" @onPageOpen="closeMenu" />
      <!-- <WidescreenMenu :lang="lang" /> -->

      <div class="navbar-end">
        <div class="flag-links is-pulled-right navbar-item">
          <div :class="[lang === 'english' ? 'is-active' : '', 'flag-wrap', 'is-pulled-left']">
            <figure class="image is-24x24">
              <nuxt-link :to="englishUrl">
                <img src="/img/flag-united-kingdom.png" />
              </nuxt-link>
            </figure>
          </div>

          <div :class="[lang === 'thai' ? 'is-active' : '', 'flag-wrap', 'is-pulled-left']">
            <figure class="image is-24x24">
              <nuxt-link :to="thaiUrl">
                <img src="/img/flag-thailand.png" />
              </nuxt-link>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import TabletMenu from '@/components/TabletMenu.vue';
// import WidescreenMenu from '@/components/WidescreenMenu.vue';

export default {
  components: {
    TabletMenu
    // WidescreenMenu
  },

  data() {
    return {
      menuOpen: false
    };
  },

  computed: {
    lang() {
      return this.$store.state.lang;
    },
    langPrefix() {
      let lang = '/en';
      if (this.$store.state.lang === 'thai') {
        lang = '/th';
      }
      return lang;
    },
    englishUrl() {
      const path = this.$route.path;
      if (path.length === 0 || path === '/') {
        return '/en/landing';
      }
      const name = path.replace(/^\/(th|en)/, '');
      return '/en' + name;
    },
    thaiUrl() {
      const path = this.$route.path;
      if (path.length === 0 || path === '/') {
        return '/th/landing';
      }
      const name = path.replace(/^\/(th|en)/, '');
      return '/th' + name;
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>
