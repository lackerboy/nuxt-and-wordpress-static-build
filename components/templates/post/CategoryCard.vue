<template>
  <div class="d-flex col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
    <nuxt-link tag="div" :to="path + item.acf.slug" class="wrap d-flex flex-column flex-wrap p-4">
      <div class="flex-grow-1 card">
        <h3>
          {{ item.acf.title }}
        </h3>
        <p>{{ item.acf.description }}</p>
      </div>
      <div class="d-flex justify-content-end align-items-center">
        <small class="side-text" :title="'Количество статей ' + item.counter + ' шт.'">Статей: {{ item.counter }}</small>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    item: Object,
    path: String
  }
}
</script>

<style scoped>

</style>
