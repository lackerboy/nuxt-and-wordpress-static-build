<template>
  <ul class="crumbs-list">
    <li v-for="(link, index) in links" :key="index" class="crumbs-item">
      <nuxt-link :title="link.name" :disabled="link.active" :class="{'crumbs-link': true, active: link.active}" :to="link.url">
        {{ link.name }}
      </nuxt-link>
    </li>
    <li class="crumbs-item">
      <a :disabled="true" class="crumbs-link">
        {{ last }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: ['links', 'last']
}
</script>

<style scoped lang="scss">
@import "assets/scss/main.scss";
ul.crumbs-list {
  display: flex;
  margin: -10px 0 0px -40px;
}
li.crumbs-item {
  font-size: 14px;
  position: relative;
  margin-right: 1rem;
  list-style-type: none;
  margin-left: 0;
}
.crumbs-link{
  text-decoration: none;
  color: $disabled_color;
  pointer-events: none;
}
.crumbs-link.active{
  pointer-events: all;
  opacity: 1;
  font-weight: 400;
  color: $link_color;
  cursor: pointer;
}
.crumbs-link.active:after {
  content: '/';
  color: $disabled_color;
  position: absolute;
  right: -11px;
  top: 1px;
  opacity: 1;
  pointer-events: none;
}
.crumbs-link.active:hover{
  border-bottom: 1px solid;
}
@media (max-width: 992px) {
  ul.crumbs-list {
    margin: -20px 0 0 -40px;
  }
}
</style>
