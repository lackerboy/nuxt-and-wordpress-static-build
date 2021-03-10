<template>
  <div>
    <main class="post-content">
      <h1 class="text-center">
        {{ post.acf.h1 }}
      </h1>
      <div class="post-info">
        <div class="post-tags">
          <ul class="tag-list">
            <nuxt-link
              v-for="(tag, index) in tagsData"
              :key="index"
              tag="li"
              :to="'/tags/' + tag.acf.slug + '/'"
              :title="`Перейти к тэгу: ${tag.acf.title}`"
              class="tag-item"
            >
              <v-icon
                name="ri-hashtag"
                class="hashtag"
              />
              {{ tag.acf.title }}
            </nuxt-link>
          </ul>
        </div>
      </div>
      <div v-html="post.acf.post_body" />
      <div class="comments mt-4">
        Комментарии в разработке...
        <br>
        <div>Или же <a href="https://disqus.com/" target="_blank">Disqus</a> и аналоги</div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object,
    tags: Array
  },
  computed: {
    tagsData () {
      const allTags = this.$store.getters.getTags
      const tags = []
      this.tags.filter((tag) => {
        allTags.find((item) => {
          if (item.id === tag) {
            tags.push(item)
          }
        })
      })
      return tags
    }
  },
  methods: {
    content (value) {
      return value
    }
  }
}
</script>

<style scoped lang="scss">
.hashtag {
  width: 16px;
  height: 16px;
  margin-right: -5px;
}
.comments {
  text-align: center;
  line-height: 1.5rem;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-secondary);
}
</style>
