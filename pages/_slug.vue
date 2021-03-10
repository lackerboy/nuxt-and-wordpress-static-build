<template>
  <div v-highlight class="post">
    <div
      class="back"
      @click="goBack"
    >
      <v-icon
        name="ri-arrow-left-s-line"
        scale="1.25"
        style="margin-left: -10px"
      />
      <div class="link">
        вернуться
      </div>
    </div>
    <post :post="post[0]" :tags="post[0].acf.metki" />
  </div>
</template>

<script>
import Post from '~/components/templates/post/Post'
export default {
  components: {
    Post
  },
  computed: {
    post () {
      const posts = this.$store.getters.getPosts
      return posts.filter((post) => {
        return post.acf.slug === this.$route.params.slug
      })
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  head () {
    return {
      title: this.post[0].acf.seo_title,
      description: this.post[0].acf.seo_description,
      meta: [
        { hid: 'robots', name: 'robots', content: `${this.post[0].acf.noindex}, ${this.post[0].acf.nofollow}` },
        { property: 'og:site_name', content: 'deercode.ru' },
        { property: 'og:description', content: this.post[0].acf.seo_description },
        { property: 'og:locale', content: 'ru-RU' },
        { property: 'og:image', content: this.post[0].acf.post_img }
      ]
    }
  }
}
</script>

<style lang="scss">
.post {
  max-width: 740px;
  margin: 0 auto;
}
.post-img {
  margin-bottom: 10px;
  height: 400px;
  overflow: hidden;

  & img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.post-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.post-params {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.post-comments-count:before {
  content: "";
  position: absolute;
  width: 100%;
  bottom: 3px;
  left: 0;
  right: 0;
}

.post-comments-count:hover:before {
  background-color: var(--color-primary);
  height: 1px;
}

ul.tag-list {
  display: flex;
  margin: 0;
  padding: 0;
}

li.tag-item {
  position: relative;
  list-style-type: none;
  margin: 0 10px 0 0;
  color: var(--color-primary);
  cursor: pointer;
}

li.tag-item:hover:after {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  border-bottom: 1px solid;
}

blockquote {
  position: relative;
  padding: 10px 20px;
  margin: 0 0 20px;
  border-left: 2px solid var(--color-primary);
  background-color: var(--bg-secondary);
}

blockquote p {
  margin: 10px 20px;
  font-style: italic;
}

p img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.back {
  display: flex;
  align-items: center;
  width: fit-content;
  color: var(--color-primary);
  margin: -10px 0 10px 0;
  cursor: pointer;
  transition: .3s;
}

.back .link {
  font-size: 14px;
}

@media (max-width: 992px) {
  .back {
    margin: -20px 0 10px 0;
  }
}
</style>
