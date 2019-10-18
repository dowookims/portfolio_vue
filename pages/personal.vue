<template>
  <section class="personal">
      <h2 class="subtitle">
        Personal
      </h2>
      <div class="personal--body">
        <pre>
          😘
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
  text-align: center;
  .subtitle {
    font-family: 'Do Hyeon';
    font-size: 48px;
    color: #fff;
    text-shadow: 4px 4px #df9911;
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

