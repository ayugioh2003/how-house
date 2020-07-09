<template>
  <div class="container mx-auto">
    <div class="text-center">
      <Logo />

      <nuxt-link :to="localePath('index')">{{ $t('header.index') }}</nuxt-link>
      <nuxt-link :to="localePath('about')">{{ $t('header.about') }}</nuxt-link>

      <h1 class="title text-5xl">
        {{ $t('brandname') }}
      </h1>
      <p>{{ $t('languageNow') }} {{ $i18n.locale }}</p>
      <p>{{ $t('test') }}</p>
      <p>{{ $t('hello') }}</p>

      <div class="links">
        <nuxt-link
          v-if="$i18n.locale !== 'en'"
          :to="switchLocalePath('en')"
          class="button"
        >
          English
        </nuxt-link>

        <nuxt-link
          v-if="$i18n.locale !== 'tw'"
          :to="switchLocalePath('tw')"
          class="button"
        >
          繁體中文
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.button {
  @apply inline-block p-2 border-2;
  @apply border-green-400 bg-white;
  @apply transition-all;
  @apply cursor-pointer;

  &:hover {
    @apply bg-green-400;
  }
}
</style>
