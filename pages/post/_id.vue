<template>
<div>
  <h1>포트폴리오 페이지다!!!</h1>
  <div v-html="hello"></div>
</div>
</template>
<script>
import Md from '../../components/Hello.md'
export default {
  validate ({ params }){
    return /^\d+$/.test(params.id)
  },
  computed: {
    hello(){
      return Md
    }
  }
}
</script>
<style lang="scss" scoped>
</style>