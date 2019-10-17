<template>
  <section class="personal">
      <h2 class="subtitle">
        Personal
      </h2>
      <div class="personal--body">
        <pre>
          이름 : 김도우
          생일 : 92. 11. 24
          전화번호 : 010-4399-2574
        </pre>
      </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      delayVal: false
    }
  },
  methods: {
    setDelayVal(){
      setTimeout(() => { this.delayVal = true }, 1000);
    }
  },
  computed: {
    getDelayVal(){
      return this.delayVal
    }
  },
  mounted(){
    this.setDelayVal()
  },

}
</script>

<style lang="scss" scoped>
.personal {
  font-family: 'Nanum Myeongjo';
  text-align: center;
  .subtitle {
    font-size: 48px;
    color: #fff;
  }
}

.personal--body {
  display: flex;
  margin-left: 30%;
  text-align: left;
  margin-top: 40px;
  color: #fff;
  transition: opacity 0.6s;
}
</style>

