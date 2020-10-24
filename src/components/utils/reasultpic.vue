<template>
  <div class="history-wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>痕迹检测系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/reasultpic' }">检测结果</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped>
.history-wrapper{
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
</style>
