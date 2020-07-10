<template>
  <div class="index">
    <!-- Navbar -->
    <div class="fixed-bar flex">
      <div class="fixed-bar__logo-wrap">
        <div class="fixed-bar__logo">HH</div>
      </div>
      <div class="check-input flex-auto">CHECK-in & CHECK-OUT</div>
      <div class="check-input">ROOM</div>
      <button class="btn btn-secondary">RESERVE NOW</button>
    </div>

    <!-- Header -->
    <header class="header container mx-auto">
      <h1>HexHotel</h1>
      <div></div>
      <div class="reserve-now"></div>
    </header>

    <!-- Recommend -->
    <section class="recommend container mx-auto">
      <div class="recommend__title">Recommend</div>
      <div class="recommend__subtitle">
        You may be interested in our popular rooms
      </div>
      <div class="recommend-rooms">
        <div class="recommend-room">
          <div class="recommend-room__image"></div>
          <div class="recommend-room__title">Twin Room</div>
          <div class="recommend-room__price">$3,350 NTD / night</div>
        </div>
      </div>
    </section>

    <!-- Service -->
    <section class="service">
      <div class="service-header container mx-auto">
        <div class="service__title">Reserve the best service</div>
        <div class="service__subtitle">
          over 50,000 commendations from our guests
        </div>
      </div>
      <div class="service-body container mx-auto">
        <div v-for="category in 3" :key="category" class="service-category">
          <div class="service-head">
            <div class="service-head__tilte">One person</div>
            <div class="service-head__subtitle">
              Enjoy the on and only service
            </div>
          </div>
          <div v-for="room in 2" :key="room" class="service-room">
            <div class="service-room__image"></div>
            <div class="service-room__title">Single Room</div>
            <div class="service-room__price">$1,380 NTD / night</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="store-map"></section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.fixed-bar {
  &__logo-wrap {
    width: 80px;
    height: 72px;
    @apply flex items-center pl-1;
    @apply text-white bg-primary;
  }
  &__logo {
    width: 57px;
    height: 57px;
    @apply text-4xl font-bold italic;
  }
}
</style>
