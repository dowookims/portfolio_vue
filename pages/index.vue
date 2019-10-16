<template>
  <section class="container">
    <div class="sheet board">
      <div class="img">
        <img src="@/static/my_pic.jpg" />
      </div>
      <h2 class="subtitle">
        Frontend Developer with <span>React</span> & <span>Vue</span>
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
          {{ item. content }}
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
        {
          id: 'info3',
          content: '010-4399-2574',
          icon: ['fas', 'mobile']
        }
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
  border-radius: 10vw;
  img {
    border-radius: 10vw;
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
      color: #61DAFB;
      text-shadow: 4px 0 #22A0B7;
    }
    &:last-child {
      color: #66ff66;
      text-shadow: 4px 0 #55aa55;
    }
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

