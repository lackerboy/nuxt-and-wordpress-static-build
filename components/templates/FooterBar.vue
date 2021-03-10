<template>
  <footer class="footer">
    <div class="container d-flex align-items-center">
      <div class="row">
        This's footer
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style lang="scss" scoped>
.footer {
  min-height: 120px;
  background-color: var(--bg-footer);
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.container {
  height: 120px;
  padding: 0;
}
</style>
