<template>
  <section class="container" @mousewheel.prevent="handleScroll">
    <h1>kakaka</h1>
    <div class="project--div" ref="scrollDiv" >
      <div class="project--card">
        1
      </div>
      <div class="project--card">
        2
      </div>
      <div class="project--card">
        3
      </div>
      <div class="project--card">
        4
      </div>
      <div class="project--card">
        5
      </div>
      <div class="project--card">
        6
      </div>
      <div class="project--card">
        7
      </div>
      <div class="project--card">
        fin
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleScroll(e) {
      if (e.deltaY > 0 ){
        this.$refs.scrollDiv.scrollLeft += e.wheelDelta;
      } else {
        this.$refs.scrollDiv.scrollLeft += e.wheelDelta;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  height: calc(100vh - 60px);
}
.project--div {
  display: flex;
  width: 100vw;
  padding: 0 5vw;
  overflow-x: hidden;
}
.project--card {
  min-width: 20vw;
  height: 12.36vw;
  background-color: yellow;
  border-radius: 15px;
  &:first-child {
    margin-right: 5vw;
  }
  &:last-child {
    min-width: 5vw;
    width: 5vw;
    margin-right: 5vw;
    background-color: #181818;
    color: #fff;
  }
  & + & {
    margin-right: 5vw;
  }
  
}

</style>

