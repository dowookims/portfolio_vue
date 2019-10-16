<template>
  <section class="container">
    <div class="skill--title-div">
      <h2 class="skill--title">Skills</h2>
    </div>
    <div class="skill--body-div">
      <div class="skill--body-icon">
        <div
          v-for="(skill, idx) in skillSet"
          :key="skill.id"
          @click="setDescription(idx)"
          :style="{ backgroundColor: skill.color }">
          {{ skill.name }}
        </div>
      </div>
      <div
        class="skill--body-description"
        :style="{ backgroundColor: getDescriptionBg }">
        {{ getDescription }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      description: '히오스',
      descriptionBg: '#111',
      skillSet: [
        {
          id: 'skill1',
          name: 'GENERAL',
          color: '#111',
          description: '히오스',
        },
        {
          id: 'skill2',
          name: 'JAVASCRIPT',
          color: '#EE7E32',
          description: '대다나다'
        },
        {
          id: 'skill3',
          name: 'REACT',
          color: '#61DAFB',
          description: '쩐다다다다다닷'
        },
        {
          id: 'skill4',
          name: 'VUE',
          color: '#41B883',
          description: '무엇이 무엇이'
        },
        {
          id: 'skill5',
          name: 'PYTHON',
          color: '#FFDB66',
          description: '또까뜰까'
        },
      ],
    }
  },
  methods: {
    setDescription(idx) {
      this.description = this.skillSet[idx].description
      this.setdescriptionBg(idx)
    },
    setdescriptionBg(idx) {
      this.descriptionBg = this.skillSet[idx].color
    }
  },
  computed: {
    getDescription(){
      return this.description
    },
    getDescriptionBg(){
      return this.descriptionBg
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
  align-items: center;
}

.skill--title-div {
  text-align: center;
}
.skill--title {
  color: #fff;
  font-size: 36px;
  text-shadow: 6px 0 #a699f0;
  font-family: 'Do Hyeon', 'Jua', sans-serif;
  letter-spacing: 8px;
}

.skill--body-div {
  display: flex;
  width: 80%;
  margin-top: 10vh;
}

.skill--body-icon {
  display: flex;
  flex-direction: column;
  width: 10vw;
  min-width: 104px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vh;
    cursor: pointer;
    font-family: 'Jua';
    color: #fff;
  }
}

.skill--body-description {
  width: calc(100% - 10vw);
  color: #fff;
  border-radius: 0 15px 15px 0;
  transition: all 0.6s ease;
}
</style>

