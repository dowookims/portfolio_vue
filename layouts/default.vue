<template>
  <div class="app">
    <nav class="nav">
      <ul>
        <li
          v-for="item in menuItem"
          :key="item.id">
          <nuxt-link :to="item.url"
          >{{ item.title }}</nuxt-link>
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
        { id:2, title:'Project', url:'project' },
        { id:3, title:'Personal', url:'personal' }
      ],
      activatedIdx: 0
    }
  },
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
  background-color: #181818;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar
  {
    width: 12px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #D62929;
  }
}

.nav {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  ul {
    width: 100%;
    li {
      display: inline-block;
      list-style: none;
      font-family: 'Do Hyeon', 'Jua', sans-serif;
      font-size: 16px;
      font-weight: 300;
      margin-right: 25px;

      &:first-child {
        margin-left: 25px;
      }

      a {
        text-decoration: none;
        color: #fff;
        transition: all 0.6s ease-out;
        &:hover {
          text-shadow: 4px 0 #f05799;
        }
      }
    }
  }
}

.nuxt-link-exact-active {
  text-shadow: 4px 0 #f05799;
}

</style>

