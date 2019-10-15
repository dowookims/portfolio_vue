<template>
  <section class="container">
    <div class="sheet board">
      <div class="img">
        <img src="@/static/my_pic.jpg" />
      </div>
      <h2 class="subtitle">
        Frontend Developer with React & Vue
      </h2>
      <div class="sub-detial">
        <p>
          <span>
            <font-awesome-icon :icon="['fab', 'github']" />
          </span>
          https://github.com/dowookims
        </p>
        <p>
          <span>
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </span>
          kaei2574@gmail.com
        </p>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding: 0;
  overflow: hidden;
}
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
  }
}

.subtitle {
  font-family: 'Nanum Myeongjo', 'Do Hyeon', 'Jua', sans-serif;
  font-weight: 300;
  font-size: 2vw;
  color: #fff;
  word-spacing: 5px;

  padding-top: 40px;
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
  }
  p + p {
    margin-top: 10px;
  }
}
</style>

