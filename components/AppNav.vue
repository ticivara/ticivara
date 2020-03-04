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
      <div class="links-tablet-desktop navbar-start">
        <div class="navbar-item">
          <ul class="s-nav-list">
            <li class="title-item">Sabong</li>
            <li class="link-item">
              <nuxt-link to="/en/sabong-pattern">Pattern</nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/en/sabong-guide">Guide</nuxt-link>
            </li>
          </ul>
          <ul class="s-nav-list">
            <li class="title-item">Civara</li>
            <li class="link-item">
              <nuxt-link to="/en/civara-pattern">Pattern</nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/en/civara-guide">Guide</nuxt-link>
            </li>
          </ul>
          <ul class="s-nav-list">
            <li class="title-item">Sanghati</li>
            <li class="link-item">
              <nuxt-link to="/en/sanghati-pattern">Pattern</nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/en/sanghati-guide">Guide</nuxt-link>
            </li>
          </ul>
          <ul class="s-nav-list">
            <li class="title-item">Borders</li>
            <li class="link-item">
              <nuxt-link to="/en/borders">Guide</nuxt-link>
            </li>
          </ul>
          <ul class="s-nav-list">
            <li class="title-item">Notes</li>
            <li class="link-item">
              <nuxt-link to="/en/dyeing">Dyeing Manual</nuxt-link>
            </li>
            <li class="link-item">
              <nuxt-link to="/en/tools">Tools Checklist</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="links-widescreen navbar-start">
        <div class="navbar-item">Sabong</div>
        <nuxt-link to="/en/sabong-pattern" class="navbar-item"
          >Pattern</nuxt-link
        ><nuxt-link to="/en/sabong-guide" class="navbar-item">Guide</nuxt-link>
        <div class="navbar-item">Civara</div>
        <nuxt-link to="/en/civara-pattern" class="navbar-item"
          >Pattern</nuxt-link
        ><nuxt-link to="/en/civara-guide" class="navbar-item">Guide</nuxt-link>
        <div class="navbar-item">Sanghati</div>
        <nuxt-link to="/en/sanghati-pattern" class="navbar-item"
          >Pattern</nuxt-link
        ><nuxt-link to="/en/sanghati-guide" class="navbar-item"
          >Guide</nuxt-link
        >
        <div class="navbar-item">Borders</div>
        <nuxt-link to="/en/borders" class="navbar-item">Guide</nuxt-link>
        <div class="navbar-item">Notes</div>
        <nuxt-link to="/en/dyeing" class="navbar-item">Dyeing Manual</nuxt-link
        ><nuxt-link to="/en/tools" class="navbar-item"
          >Tools Checklist</nuxt-link
        >
      </div>
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
export default {
  props: {
    lang: {
      type: String,
      required: true
    }
  }
}
</script>
