<template>
  <div>
    <header>
      <div class="container">
        <img src="~/assets/images/nuxtjs-typo.svg" />
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
        </ul>
      </div>
    </header>
    <nuxt></nuxt>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'nuxt-property-decorator'

@Component
export default class R extends Vue {

}
</script>