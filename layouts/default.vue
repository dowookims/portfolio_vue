<template>
  <div class="app">
    <nav class="nav">
      <ul>
        <li :key="item.id" v-for="item in menuItem">
          <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menuItem: [
        { id:0, title:'Home', url:'/' },
        { id:1, title:'Intro', url:'intro' },
        { id:2, title:'Skill', url:'skill' },
        { id:3, title:'Project', url:'project' },
        { id:4, title:'Personal', url:'personal' }
      ]
    }
  }
}
</script>

<style lang="scss">
/* default layout settings for nuxt.js app */
@import url('https://fonts.googleapis.com/css?family=Do+Hyeon|Jua|Nanum+Myeongjo:400,700&display=swap&subset=korean');
/**** Google Korean font - 400, 500, 700 **************
* font-family: 'Do Hyeon', 'Jua', 'Nanum Myeongjo'; ****
******************************************************/
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  background-color: #7950f2;
  min-height: 100vh;
  overflow-x: hidden;
}

.nav {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  ul {
    display: flex;
    justify-content: space-around;
    width: 40%;
    li {
      list-style: none;
      font-family: 'Do Hyeon', 'Jua', sans-serif;
      font-size: 1.5vw;
      font-weight: 300;
      a {
        text-decoration: none;
        color: #fff;
        transition: all 0.8s ease-out;
        &:hover {
          color: #181818;;
          border-bottom: 2px solid #181818;
        }
      }
    }
  }
}

</style>

