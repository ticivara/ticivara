<template>
  <nav id="app-nav-wrap" class="navbar is-light">
    <div class="navbar-brand">
      <nuxt-link to="/en/landing" class="navbar-item"
        ><img src="/img/logo-navbar-as-path.svg"/></nuxt-link
      ><nuxt-link to="/en/landing" class="navbar-burger"
        ><span></span><span></span><span></span
      ></nuxt-link>
    </div>
    <div id="app-nav" class="navbar-menu">
      <TabletMenu :lang="lang" />
      <WidescreenMenu :lang="lang" />
      <div class="navbar-end">
        <div class="flag-links is-pulled-right navbar-item">
          <div class="flag-wrap is-pulled-left is-active">
            <figure class="image is-24x24">
              <img src="/img/flag-united-kingdom.png" />
            </figure>
          </div>
          <div class="flag-wrap is-pulled-left">
            <figure class="image is-24x24">
              <img src="/img/flag-thailand.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import TabletMenu from '@/components/TabletMenu.vue';
import WidescreenMenu from '@/components/WidescreenMenu.vue';

export default {
  components: {
    TabletMenu,
    WidescreenMenu
  },
  props: {
    lang: {
      type: String,
      required: true
    }
  }
};
</script>
