<template>
<div>
  <div class="post--div">
    <div class="post--div-code"> 안녕월드</div>
    <div class="post--div-md" v-html="mdFile"></div>
  </div>
</div>
</template>
<script>
import 'highlight.js/styles/monokai.css'
export default {
  validate ({ params }){
    return /^\d+$/.test(params.id)
  },
  mounted(){
    console.log(this.$route)
  },
  computed: {
    mdFile(){
      const data = require(`~/components/${this.$route.params.id}.md`)
      console.log(data)
      return data.default
    },
  }
}
</script>
<style lang="scss">
.post--div {
  display: flex;
  max-height: calc(100vh - 60px);
  overflow: hidden;
}
.post--div-code {
  width: 60vw;
  min-height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  background-color: red;
}
.post--div-md {
  width: 40vw;
  background-color: #fff;
  padding: 20px;
  overflow-y:auto;
  section > pre {
    margin-top: 20px;
    background-color: #181818;
    border-radius: 4px;
    padding: 10px;
    color: #fff;
    code {
      .hljs-string {
        color: #ccca55;
      }
      .hljs-number {
        color: #55ccca;
      }
      .hljs-built_in {
        color: #ca55cc;
      }
      span .hljs-name {
        color: #aaa;
      }
      span .hljs-tag {
        color: #aaa;
      }
      .hljs-selector-id {
        color: #fafa00;
      }
      .hljs-attribute {
        color: rgba(255, 166, 0, 0.932);
      }
    }
  }
}

</style>