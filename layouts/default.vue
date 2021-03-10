<template>
  <div class="wrapper">
    <nav-bar />
    <div class="container vh-100 mt-60 flex-grow-1">
      <nuxt />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from '~/components/templates/FooterBar'
import NavBar from '~/components/templates/NavBar'

export default {
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style lang="scss">
@import "static/css/normalize.css";
@import "static/css/bootstrap-grid.min.css";
@import "assets/scss/main.scss";
@import "static/css/prism.css";

.vh-100 {
  min-height: calc(100vh - 180px);
}

.mt-60 {
  margin-top: 60px;
}

.page-enter-active, .page-leave-active {
  transition: .25s;
}

.page-enter, .page-leave-active {
  opacity: 0;
}
</style>
