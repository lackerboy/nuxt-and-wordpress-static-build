<template>
  <div>
    <h1>Все посты</h1>
    <div class="row">
      <post-card v-for="post in posts" :key="post.id" :post="post" :author="post.acf.author"/>
    </div>
  </div>
</template>

<script>
import PostCard from '~/components/templates/post/PostCard'

export default {
  components: {
    PostCard
  },
  computed: {
    posts () {
      return this.$store.getters.getPosts
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;
}

</style>
