<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
import MyHeader from "./components/utils/navigator"
import PathLoader from "../../vue-element-admin/src/views/components-demo/mixin"
import ReasultPic from "./components/utils/reasultpic"
import HomePage from "./components/pages/homepage"

export default {
  name: 'App',
  provide(){
    return{
      reload: this.reload
    }
  },

  data(){
    return {
      text:'123',
      userName:'',
      isRouterAlive: true,
    }
  },
  created(){
    console.log('app.vue root')
  },
  methods: {
    reload(){
      console.log(localStorage)
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    },
  },
  components:{HomePage, ReasultPic, PathLoader, MyHeader}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
</style>
