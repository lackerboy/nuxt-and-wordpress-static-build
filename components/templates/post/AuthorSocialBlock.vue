<template>
  <div class="d-flex flex-row flex-wrap">
    <div v-for="(link, index) in socialLinks" :key="index" class="social-btn mb-2">
      <img :src="`/svg/${link.name.toLowerCase()}-dark.svg`" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorSocialBlock',
  props: ['socialLinks']
}
</script>

<style scoped lang="scss">
@import "assets/scss/main";
.social-btn {
  position: relative;
  width: 36px;
  height: 36px;
  padding: 8px;
  margin-right: 15px;
  cursor: pointer;
  transition: .3s;
}

.social-btn:after {
  content: "";
  width: 42px;
  height: 42px;
  position: absolute;
  top: -3px;
  bottom: 0;
  right: 0;
  left: -3px;
  border: 2px solid #7f828b;
  border-radius: 30px;
  transition: .2s;
}

.social-btn:hover:after {
  border: 2px solid #47494e;
  transform: scale(1.05);
}
.social-btn:last-child {
  margin-right: 0;
}

.social-btn img {
  vertical-align: middle;
}
</style>
