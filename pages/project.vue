<template>
  <section class="container">
    <div class="project--div" ref="scrollDiv">
      <div class="project--card">

      </div>
      <div class="project--card">

      </div>
      <div class="project--card">

      </div>
      <div class="project--card">

      </div>
      <div class="project--card">

      </div>
      <div class="project--card">

      </div>
      <div class="project--card">

      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleScroll(e) {
      if (e.deltaY > 124){
        this.$refs.scrollDiv.trnasform = translateX(100+'px');
      }
    }
  },
  mounted () {
    window.addEventListener('mousewheel', this.handleScroll);
  },
  beforeDestroyed () {
    window.removeEventListener('mousewheel', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: 0;
  height: calc(100vh - 60px);
}
.project--div {
  display: flex;
  width: 100vw;
  overflow-x: hidden;
}
.project--card {
  min-width: 20vw;
  height: 12.36vw;
  background-color: yellow;
  border-radius: 15px;
  margin-left: 5vw;
}

</style>

