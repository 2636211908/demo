<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div>
    123456
  </div>
  <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
</template>

<style scoped sass>
div{
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
