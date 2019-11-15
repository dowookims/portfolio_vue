<template>
  <section class="container">
    <div class="sheet board">
      <!-- 나중에 transform3d로 마우스 움직임에 따라 이동하는 애니메이션 추가 -->
      <div class="img">
        <img src="/my_pic.jpg" />
      </div>
      <h2 class="subtitle">
        Frontend Developer with <span>Vue.js</span>
      </h2>
      <div class="sub-detial">
        <p>
          <a target="_blank" href="https://www.github.com/dowookims">
          <span>
            <font-awesome-icon :icon="['fab', 'github']" />
          </span>
          https://www.github.com/dowookims
          </a>
        </p>
        <p v-for="item in info" :key="item.id">
          <span>
            <font-awesome-icon :icon="[item.icon[0], item.icon[1]]" />
          </span>
          {{ item.content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      info: [
        {
          id: 'info2',
          content: 'kaei2574@gmail.com',
          icon: ['fas', 'envelope']
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.sheet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img {
  max-width: 20vw;
  max-height: 20vw;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s ease-in all;
    cursor: pointer;
    &:hover {
      transform: rotateX(90deg);
    }
  }
}

.subtitle {
  font-family: 'Do Hyeon', 'Jua', sans-serif;
  font-weight: 300;
  font-size: 24px;
  text-shadow: -2px 0px red;
  color: #fff;
  word-spacing: 5px;
  padding-top: 40px;
  span {
    font-size: 28px;
    &:first-child {
      color: #66ff66;
      text-shadow: 4px 2px #55aa55;
    }
  }
}

@media (max-width: 430px) {
  .subtitle {
    font-size: 18px;
  }
}

.links {
  padding-top: 15px;
}

.sub-detial {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    color: #fff;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  p + p {
    margin-top: 10px;
  }
  span {
    display: inline-block;
    min-width: 40px;
  }
}
</style>

