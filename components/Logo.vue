<template>
  <nuxt-link to="/" class="logo-wrap">
    <div class="logo">HH</div>
  </nuxt-link>
</template>

<style lang="scss">
.logo-wrap {
  width: 80px;
  height: 72px;
  @apply inline-flex items-center pl-1;
  @apply text-white bg-primary;
}
.logo {
  width: 57px;
  height: 57px;
  @apply text-white text-4xl font-bold italic;
}
</style>
