<template>
  <section class="container" @mousewheel.prevent="handleScroll">
    <div class="project--title">
      <h1>Project</h1>
    </div>
    <div class="project--div" ref="scrollDiv" >
      <div class="project--card">
        <div class="project--card-body"
          @mouseenter="handleMouseOver"
          @mouseleave="handleMouseOver">
          <img :src="imgSrc"/>
        </div>
        <div class="project--card-txt">
          <h3>ImageSlider</h3>
          <p>Netflix, watcha UI reactive design cloning</p>
        </div>
      </div>
      <div class="project--card">
        <div class="project--card-body">

        </div>
        <div class="project--card-txt">
          <h3>Calendar</h3>
          <p>self-made calendar without momentum</p>
        </div>
      </div>
      <div class="project--card">
        <div class="project--card-body">

        </div>
        <div class="project--card-txt">
          <h3>ModalAnimation</h3>
          <p>self-made modal without modal library</p>
        </div>
      </div>
      <div class="project--card">
        <div class="project--card-body">

        </div>
        <div class="project--card-txt">
          <h3>Simple Infinite Horizontal Button</h3>
          <p>Infinite scroll</p>
        </div>
      </div>
      <div class="project--card">
        <div class="project--card-body">

        </div>
        <div class="project--card-txt">
          <h3>move X-axis with mousewheel</h3>
          <p>use vue event with simple event</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      imgList: [
        ['imageSlider.png','imageSlider.gif']
      ],
      toggler: false
    }
  },
  methods: {
    handleScroll(e) {
      if (e.deltaY > 0 ){
        this.$refs.scrollDiv.scrollLeft += e.wheelDelta;
      } else {
        this.$refs.scrollDiv.scrollLeft += e.wheelDelta;
      }
    },
    handleMouseOver(){
      this.toggler = !this.toggler
    }
  },
  computed: {
    imgSrc(){
      let idx = 0
      if (this.toggler){
        idx = 1
      }
      return `_nuxt/static/${this.imgList[0][idx]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  height: calc(100vh - 60px);
}

.project--title {
  margin-top: 40px;
  font-size: 36px;
  letter-spacing: 6px;
  text-shadow: 6px 0 #a87efb;
  font-weight: 600;
}
.project--div {
  display: flex;
  width: 100vw;
  padding: 20px 5vw 20px 5vw;
  overflow: hidden;
}

.project--card {
  min-width: 24vw;

  &:first-child {
    margin-right: 5vw;
  }
  &:hover {
    transform: scale(1.1);
  }
  & + & {
    margin-right: 5vw;
  }
  cursor: pointer;
  transition: all 0.4s ease;

  .project--card-body {
    display: flex;
    width: 100%;
    min-height: 10vw;
    max-height: 10vw;
    background-color: #181818;
    border-radius: 15px 15px 0 0;
    img {
      width: 100%;
      margin-top: 6%;
      height: 94%;
      object-fit: contain;
    }
  }
}
.project--card-txt {
  background-color: #fff;
  box-sizing: border-box;
  width: calc(100% - 4px);
  margin-left: 2px;
  padding: 10px 15px;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 1px 3px 2px #111;
  h3 {
    font-family: 'Do Hyeon';
    letter-spacing: 2px;
    font-size: 18px;
  }
  p {
    margin-top: 6px;
    font-size: 16px;
    word-break: break-all;
    white-space: normal;
  }
  overflow-x: wrap;
}




</style>

