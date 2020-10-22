//顶级页面
<template>
    <el-container class="main-frame">
      <el-header class="my-header" style="padding:0" height="50px">
        <my-header username="admin"></my-header>
      </el-header>
      <el-main class="main-area">
        <my-sidebar v-bind:is-menu-collapsed="isMenuCollapsed"></my-sidebar>
        <div class="content" :class="{collapsed:isMenuCollapsed}">
          <el-row style="text-align: left">
            <hamburger :toggleClick="toggleSidebar" :isActive="isActive"></hamburger>
          </el-row>
          <!-- <router-view class="test"> </router-view> -->
          <router-view> </router-view>
        </div>
      </el-main>
      <el-footer height="30px"></el-footer>
    </el-container>
</template>

<script>
  import MyHeader from "../utils/navigator"
  import MySidebar from "../utils/sidebar"
  import Hamburger from "../utils/hamburger"

    export default {
        name: "home-page",
        components:{Hamburger, MySidebar, MyHeader},
        created(){
          //console.log('this is home ')
          //this.$store.commit('readSession')
        },
        data(){
          return{
            isMenuCollapsed:false
          }
        },
        computed:{
          isActive(){
            return !this.isMenuCollapsed
          }
        },
        methods:{
          toggleSidebar(){
            console.log("toggleSidebar");
            return this.isMenuCollapsed=!this.isMenuCollapsed
          }
        }
    }
</script>

<style scoped>

  #test{
    width: 20%;
    /*float:left;*/
    display: inline-block;
    height: 100%;
    background-color: #3a8ee6;
  }
.el-container.main-frame{
  height:100%
}
  .el-footer{
    position: relative;
    bottom:0;
    background-color: #2c3e50;
    color: white;
    font-size: 14px;
    line-height: 30px;
  }
  .el-main.main-area{
    background-color: ghostwhite;
    padding:0;
    height:100%;
    position: relative;
  }
  .content{
    transition:all .38s;
    height:100%
  }
  .content:not(.collapsed){
    margin-left: 200px;
    /*width:89%;*/
  }
  .content.collapsed{
    margin-left: 65px;
    /*width:96%;*/
}
</style>
