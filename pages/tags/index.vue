<template>
  <div>
    <Breadcrumbs :links="links" :last="'Тэги'" />
    <h1>Тэги</h1>
    <div class="row">
      <category-card v-for="item in tags" :key="item.id" :item="item" :path="'/tags/'" />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/templates/Breadcrumbs'
import CategoryCard from '~/components/templates/post/CategoryCard'

export default {
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
    tags () {
      return this.$store.getters.getTags
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/scss/main.scss";
</style>
