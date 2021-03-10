<template>
  <div>
    <breadcrumbs :links="links" :last="category[0].acf.breadcrumb" />
    <h1>{{ category[0].acf.title }}</h1>
    <div class="row">
      <post-card v-for="(post, index) in posts" :key="index" :post="post" :author="post.acf.author" />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/templates/Breadcrumbs'
import PostCard from '~/components/templates/post/PostCard'

export default {
  components: {
    Breadcrumbs,
    PostCard
  },
  data () {
    return {
      links: [
        {
          name: 'Главная',
          url: '/',
          active: true
        },
        {
          name: 'Тэги',
          url: '/tags/',
          active: true
        }
      ]
    }
  },
  computed: {
    category () {
      const categories = this.$store.getters.getTags
      return categories.filter((cat) => {
        return cat.acf.slug === this.$route.params.slug
      })
    },
    posts () {
      const posts = this.$store.getters.getPosts
      const arr = []
      for (let i = 0; i < posts.length; i++) {
        for (let j = 0; j < posts[i].acf.metki.length; j++) {
          if (posts[i].acf.metki[j] === this.category[0].id) {
            arr.push(posts[i])
          }
        }
      }
      return arr
    }
  }
}
</script>

<style scoped>

</style>
