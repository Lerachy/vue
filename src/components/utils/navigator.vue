<!-- //导航栏 -->
<template>
    <div class="nav">
      <div id="menu-box" >
        <span id="logo">
          痕迹检测系统
        </span>
      </div>
    </div>
</template>


<script>
    import AuthService from '../../api/AuthService'
    export default {
        name: "my-header",
        props:["username"],
        data(){
          return{
            session:this.$store.state
          }
        }
    }
</script>

<style scoped>
 .nav{
   height:50px;
   background-color: #2c3e50;
   padding-right: 30px;
   padding-left: 20px;
   width: 100%;
   /*position:relative*/
}
  #menu-box{
    height:inherit;
    width:400px;
    float:left
  }
  #logo{
    display:block;
    /*width: 200px;*/
    height: inherit;
    float:left;
    line-height: 50px;
    font-size: 20px;
    color:white;
  }
  .el-dropdown{
    line-height: 50px;
  }
  .el-dropdown > span > i{
    color: white;
  }
  .el-icon-third-user-circle{
    font-size: 30px;
    margin-top: 10px;
  }
</style>
