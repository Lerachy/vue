<!-- //侧边导航栏 最好设定为fixed -->
<template>
    <div class="side-bar-wrapper">
      <el-menu class="my-sidebar" :collapse="isMenuCollapsed" :router="true">
        <el-menu-item index="22" route="/home/pathload">
          <i class="el-icon-upload2"></i>
          <span slot="title">路径</span>
        </el-menu-item>
        <el-menu-item index="23" route="/home/reasultpic">
          <i class="el-icon-document"></i>
          <span slot="title">结果</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
      name: "my-sidebar",
      props: {
        isMenuCollapsed:{
          type:Boolean,
          default:true
        }
      }
    }
</script>

<style scoped>
.my-sidebar{
  height: 100%;
  text-align: left;

}
.my-sidebar:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.side-bar-wrapper{
  position: fixed;
  left: 0;
  /*float:left;*/
  display: inline-block;
  height: 100%;
  vertical-align: top;
}
.el-submenu{
  text-align: left;
}
</style>
