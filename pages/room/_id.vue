<template>
  <div class="room-page">
    <!-- NavBar -->
    <NavBar />

    <!-- header -->

    <!-- description -->

    <!-- amenities 設施 -->

    <!-- availability -->

    <HouseMap />
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>
