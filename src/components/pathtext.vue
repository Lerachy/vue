<template>
  <div class="app-container my-pathload">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>痕迹检测系统</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/home/pathload' }">路径上传</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form" :model="form" label-width="120px" style="margin-top: 150px;">
      <el-form-item label="输入路径">
        <el-input v-model="form.path" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        path: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    }
  }
}
</script>

<style scoped>
.app-container {
  padding: 20px;
}
.my-pathload{
  width: 100%;
  height: calc(100% - 26px);
  padding: 0 30px;
  box-sizing: border-box;
}
</style>

