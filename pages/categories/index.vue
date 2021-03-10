<template>
  <div>
    <Breadcrumbs :links="links" :last="'Категории'" />
    <h1>Категории</h1>
    <div class="row">
      <category-card v-for="item in cats" :key="item.id" :item="item" :path="'/categories/'" />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/templates/Breadcrumbs'
import CategoryCard from '~/components/templates/post/CategoryCard'

export default {
  name: 'PostPage',
  components: {
    Breadcrumbs,
    CategoryCard
  },
  data () {
    return {
      links: [
        {
          name: 'Главная',
          url: '/',
          active: true
        }
      ]
    }
  },
  computed: {
    cats () {
      return this.$store.getters.getCategories
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/scss/main.scss";
</style>
