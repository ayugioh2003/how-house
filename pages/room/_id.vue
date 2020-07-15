<template>
  <div class="room-page">
    <!-- NavBar -->
    <NavBar />

    <!-- header -->
    <header class="header container mx-auto">
      <div class="header-head">
        <h1 class="header__title">Deluxe single Room</h1>
        <div class="header__image"></div>
        <div class="header__price-info">WEEKDAY PRICE</div>
        <div class="header__room-info">
          <div class="header__price-day">
            <span class="price">$1,899 NTD</span>
            / night
          </div>
          <div class="header__price-holiday">
            holiday price - $2,000 NTD / night
          </div>
          <Check class="reserve-now" />
        </div>
      </div>
      <div class="header-pics">
        <div v-for="item in 3" :key="item" class="header-pics__pic"></div>
      </div>
    </header>

    <!-- description -->
    <section class="description">
      <div class="description-title">description</div>
      <p>1 Guest・1 Bed (Small Double)・1 Private Bath・22 m²</p>
      <p>
        Deluxe Single Room is only reserved for one guest. There is a bedroom
        with a small double size bed and a private bathroom. Everything you need
        prepared for you: sheets and blankets, towels, soap and shampoo,
        hairdryer are provided. In the room there is AC and of course WiFi.
      </p>
      <p>
        Check-in is from 3pm to 7pm <br />
        Check-out is before 11am
      </p>
    </section>

    <!-- amenities 設施 -->
    <div class="amenities">
      <div class="amenities__title">Amenities</div>
      <ul>
        <li>Wi-Fi</li>
        <li>Television</li>
        <li>Great View</li>
        <li>Breakfast</li>
        <li>Air Conditioner</li>
        <li>Smoke Free</li>
        <li>Mini Bar</li>
        <li>Refigerator</li>
        <li>Child-Friendly</li>
        <li>Room Service</li>
        <li>Sofa</li>
        <li>Pet-Friendly</li>
      </ul>
    </div>

    <!-- availability -->
    <div class="availability">
      <div class="availability__title">Availability</div>
      <div class="date-picker"></div>
    </div>

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

<style lang="scss" scoped>
.header {
  position: relative;
  &-head {
    @apply flex mb-4;
  }
  &__title {
    position: absolute;
    top: 0;
    writing-mode: vertical-lr;
    @apply text-primary bg-white;
    @apply font-bold italic text-4xl;
  }
  &__image {
    width: 825px;
    height: 480px;
    @apply bg-gray-400;
    @apply bg-cover bg-center;
  }
  &__price-info {
    writing-mode: vertical-lr;
    @apply self-start;
    @apply py-1;
    @apply text-white bg-primary-gray;
  }
  &__room-info {
    position: absolute;
    top: 125px;
    left: 760px;
  }
  &__price-day {
    @apply pb-2;
    @apply text-primary text-right;
    .price {
      @apply text-primary;
      @apply font-bold text-2xl;
    }
  }
  &__price-holiday {
    font-size: 14px;
    @apply text-right;
    @apply pb-10;
  }
  &-pics {
    @apply flex;
    &__pic {
      width: 160px;
      height: 94px;
      @apply mr-4;
      @apply bg-gray-400;
    }
  }
}
</style>
