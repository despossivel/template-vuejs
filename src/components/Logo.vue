<template>
  <span class="logo">
    <b>+a</b>
    <small>Educação</small>
  </span>
</template>
<script>
export default {
  name: 'LogoA'
}
</script>
<style scoped>
  .logo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 8px;
  }
  b{
    font-size: 57px;
    height: 62px;
  }

  header > div > div > span > b {
    font-size: 57px;
    height: inherit !important;
  }
</style>
