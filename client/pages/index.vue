<template>
  <div>
    <h3>Hello World!</h3>
    <p>{{ info }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'nuxt-property-decorator'
import { info } from '@/utils'

@Component
export default class  extends Vue {

  @Provide() info: string = info()

}
</script>