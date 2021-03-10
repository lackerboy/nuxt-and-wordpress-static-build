<template>
  <div class="post-author">
    <div class="row">
      <div :class="mobileClassesColOne">
        <div class="avatar-wrapper">
          <img :src="author.acf.avatar" :alt="`Аватар пользователя ${ author.acf.nickname }`" class="avatar">
        </div>
      </div>
      <div :class="mobileClassesColTwo">
        <div :class="mobileClassesAuthorInfo">
          <h4 class="author-name">
            {{ author.acf.name + ' ' + author.acf.lastname }}
          </h4>
          <p class="author-slogan">
            {{ author.acf.status }}
          </p>
          <p class="author-desc">
            {{ author.acf.info }}
          </p>
          <div :class="mobileClassesButton">
            <button class="btn mb-3" title="Перейти ко всем постам">
              Все посты
            </button>
            <author-social-block :social-links="author.acf['social_links']" :mobile="mobile" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorSocialBlock from '~/components/templates/post/AuthorSocialBlock'

export default {
  name: 'AuthorBlock',
  props: ['author'],
  components: {
    AuthorSocialBlock
  },
  data () {
    return {
      window: {
        width: 0,
        height: 0
      },
      mobile: false
    }
  },
  created () {
    if (process.browser) {
      // eslint-disable-next-line
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  computed: {
    mobileClassesColOne () {
      if (this.window.width < 992) {
        return {
          'col-md-12': true,
          'col-sm-12': true,
          'd-flex': true,
          'justify-content-center': true,
          'mb-4': true
        }
      } else {
        return {
          'col-md-4': true,
          'col-sm-4': true,
          'd-flex': true,
          'justify-content-end': true
        }
      }
    },
    mobileClassesColTwo () {
      if (this.window.width < 992) {
        return {
          'col-md-12': true,
          'col-sm-12': true
        }
      } else {
        return {
          'col-md-8': true,
          'col-sm-8': true
        }
      }
    },
    mobileClassesAuthorInfo () {
      if (this.window.width < 992) {
        return {
          'author-info': true,
          'd-flex': true,
          'flex-column': true,
          'align-items-center': true,
          'text-center': true
        }
      } else {
        return {
          'author-info': true,
          'd-flex': true,
          'flex-column': true,
          'align-items-start': true
        }
      }
    },
    mobileClassesButton () {
      if (this.window.width < 992) {
        return {
          'author-actions': true,
          'd-flex': true,
          'justify-content-center': true,
          'flex-wrap': true
        }
      } else {
        return {
          'author-actions': true,
          'd-flex': true,
          'justify-content-between': true,
          'flex-wrap': true
        }
      }
    }
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/scss/main";
.post-author {
  border: 2px solid $wrap_border_color;
  border-radius: 20px;
  padding: 30px;
}

.author-actions {
  width: 100%;
}

.avatar-wrapper {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  margin: 0 0 10px;
}
.author-slogan {
  margin: 0;
  font-size: 14px;
  font-style: italic;
}

.author-desc {
  margin: 0 0 10px;
}

@media (max-width: 991.98px) {
.pull-right {
  text-align: center;
}
}
</style>
