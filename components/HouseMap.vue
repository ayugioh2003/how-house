<template>
  <div class="flex">
    <section class="store-map">
      <div></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.622240834985!2d121.51413751420549!3d25.0468908439303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9727e339109%3A0xc34a31ce3a4abecb!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1594389442754!5m2!1szh-TW!2stw"
        width="100%"
        height="100%"
        frameborder="0"
        style="border: 0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </section>
    <div class="holder"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.store-map {
  flex: 1 1 100%;
  filter: grayscale(0.9);
}
.holder {
  display: none;
}

@media screen and (min-width: 1200px) {
  .store-map {
    height: 352px;
    flex: 1 1 1100px;
    iframe {
      @apply w-full h-full;
    }
  }
  .holder {
    display: block;
    flex: 1 1 auto;
  }
}
</style>
