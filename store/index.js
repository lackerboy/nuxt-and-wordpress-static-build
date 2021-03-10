export const state = () => ({
  categories: null,
  posts: null,
  authors: null,
  tags: null,
  // eslint-disable-next-line
  width: 0
})

export const mutations = {
  SET_WIDTH (state, payload) {
    state.width = payload
  },
  SET_CATEGORIES (state, payload) {
    state.categories = payload
  },
  SET_POSTS (state, payload) {
    state.posts = payload
  },
  SET_AUTHORS (state, payload) {
    state.authors = payload
  },
  SET_TAGS (state, payload) {
    state.tags = payload
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit ({ dispatch }) {
    await dispatch('fetchCategories')
    await dispatch('fetchPosts')
    await dispatch('fetchAuthors')
    await dispatch('fetchTags')
  },
  // axios...
  async fetchCategories ({ commit }, token) {
    const requestCategories = await this.$axios.get(`${process.env.URL}/my-category`)
    const data = requestCategories.data
    for (let i = 0; i < data.length; i++) {
      const posts = await this.$axios.get(`${process.env.URL}/posts?my-category=${data[i].id}`)
      data[i].counter = posts.data.length
    }
    commit('SET_CATEGORIES', data)
  },
  async fetchPosts ({ commit }, token) {
    const requestPosts = await this.$axios.get(`${process.env.URL}/posts`)
    const posts = requestPosts.data
    commit('SET_POSTS', posts)
  },
  async fetchAuthors ({ commit }, token) {
    const requestAuthors = await this.$axios.get(`${process.env.URL}/users`)
    const authors = requestAuthors.data
    commit('SET_AUTHORS', authors)
  },
  async fetchTags ({ commit }, token) {
    const requestTags = await this.$axios.get(`${process.env.URL}/metki`)
    const tags = requestTags.data
    for (let i = 0; i < tags.length; i++) {
      const posts = await this.$axios.get(`${process.env.URL}/posts?metki=${tags[i].id}`)
      tags[i].counter = posts.data.length
    }
    commit('SET_TAGS', tags)
  }
}

export const getters = {
  getCategories (state) {
    return state.categories
  },
  getPosts (state) {
    return state.posts
  },
  getAuthors (state) {
    return state.authors
  },
  getTags (state) {
    return state.tags
  },
  getWidth (state) {
    return state.width
  }
}
