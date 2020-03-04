<template>
  <page>
    <h1>Home page 🚀</h1>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
    </div>
  </page>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'nuxt-property-decorator'

@Component({
  layout: 'homepage',
})
export default class R extends Vue {

}
</script>