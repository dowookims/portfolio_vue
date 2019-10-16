<template>
  <section class="container">
    <div class="sheet">
      <h2 class="subtitle">
        Project
      </h2>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
  background-color: #ddd;
  display: flex;
  padding: 0;
  overflow: hidden;
}
.sheet {
  height: calc(100vh - 60px);
  min-width: 100vw;
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
</style>

