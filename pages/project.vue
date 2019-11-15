<template>
  <section class="container" @mousewheel.prevent="handleScroll">
    <div class="project--title">
      <h1>Project</h1>
    </div>
    <div class="project--div" ref="scrollDiv" >
      <div v-for="project in projectList" :key="project.id">
      <div class="project--card" @click="handleLink(project.id)">
        <div class="project--card-body"
          @mouseenter="handleMouseOver(project.id)"
          @mouseleave="handleMouseOver(project.id)">
          <img :src="imgSrc(project.id)"/>
        </div>
        <div class="project--card-txt">
          <h3>{{project.title}}</h3>
          <p>{{project.desc}}</p>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      projectList: [
        {
          id: 0,
          title: 'HONEYBEE',
          desc: 'Bigdata project. Netflix UI design cloning',
          imgList: ['imageSlider.png','imageSlider.gif'],
          toggle: false
        },
        {
          id: 1,
          title: '길잡이',
          desc: 'Recruitmap Using googleMap, SaraminAPI',
          imgList: ['imageSlider.png','imageSlider.gif'],
          toggle: false
        },
        {
          id: 2,
          title: 'ModalAnimation',
          desc: 'self-made modal without modal library',
          imgList: ['imageSlider.png','imageSlider.gif'],
          toggle: false
        },
        {
          id: 3,
          title: 'Simple Infinite Horizontal Button',
          desc: 'Infinite scroll',
          imgList: ['imageSlider.png','imageSlider.gif'],
          toggle: false
        },
        {
          id: 4,
          title: 'move X-axis with mousewheel',
          desc: 'use vue event with simple event',
          imgList: ['imageSlider.png','imageSlider.gif'],
          toggle: false
        },
      ],
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
    handleMouseOver(id){
      this.projectList[id].toggle = !this.projectList[id].toggle
    },
    handleLink(id){
      this.$router.push(`/post/${id}`)
    },
    imgSrc(id){
      let idx = 0
      if (this.projectList[id].toggle){
        idx = 1
      }
      return `/${this.projectList[id].imgList[idx]}`
    }
  },
  computed: {
    
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
  margin-top: 20vh;
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
    box-sizing: border-box;
    width: 100%;
    min-height: 10vw;
    max-height: 10vw;
    background-color: #181818;
    border-radius: 15px 15px 0 0;
    img {
      width: 100%;
      margin-top: 6%;
      max-height: 80%;
      object-fit: cover;
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

