<template>
  <div class="d-flex col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
    <nuxt-link tag="div" :to="`/${post.acf.slug}/`" class="wrap d-flex flex-column flex-wrap p-4">
      <div class="flex-grow-1 card">
        <h3>
          {{ post.acf.title }}
        </h3>
        <p>{{ post.acf.description }}</p>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <nuxt-link to="#" class="author-link" title="Автор статьи">
          <h5 @click="noAuthorMessage">{{ authorData.acf.name + ' ' + authorData.acf.lastname }}</h5>
        </nuxt-link>
        <small class="side-text" :title="'Дата публикации: ' + post.acf.date">{{ post.acf.date }}</small>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: Object,
    author: Number
  },
  computed: {
    authorData () {
      const authors = this.$store.getters.getAuthors
      let value = null
      for (let i = 0; i < authors.length; i++) {
        if (authors[i].id === this.author) {
          value = authors[i]
        }
      }
      return value
    }
  },
  methods: {
    noAuthorMessage () {
      alert('Страницы авторов в разработке')
    }
  }
}
</script>

<style scoped lang="scss">
a.author-link {
  color: var(--color-secondary);
}
a.author-link:hover {
  border:  none;
  opacity: 0.8;
  transition: all .3s;
}
a.author-link h5 {
  padding: 0;
  margin: 0;
}
</style>
