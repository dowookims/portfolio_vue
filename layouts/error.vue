<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404"><span>404</span> Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Go To Main</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style lang="scss">
  .error-container {
    width: 100vw;
    min-height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 36px;
      color: #fff;
      padding-bottom: 36px;
      span {
        color: #ff6876;
      }
    }
    a {
      font-size: 24px;
      font-weight: 500;
      text-decoration: none;
      color: #fff;
      border-bottom: 1px solid #fff;
      transition: all 0.6s linear forward;
      &:hover {
        color: #32a165;
        border-bottom: 3px solid  #32a165;
      }
    }
  }
</style>
