<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">
          Главная
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/categories/">
          Категории
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/tags/">
          Тэги
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideNavBar'
}
</script>

<style scoped>

</style>
