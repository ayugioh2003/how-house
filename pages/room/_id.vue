<template>
  <div class="room-page">
    <!-- NavBar -->
    <NavBar />
    <link rel="stylesheet" href="" />

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
    <div class="container mx-auto">
      <section class="description">
        <div class="description__title">Description</div>
        <p class="mb-6">1 Guest・1 Bed (Small Double)・1 Private Bath・22 m²</p>
        <p class="mb-6">
          Deluxe Single Room is only reserved for one guest. There is a bedroom
          with a small double size bed and a private bathroom. Everything you
          need prepared for you: sheets and blankets, towels, soap and shampoo,
          hairdryer are provided. In the room there is AC and of course WiFi.
        </p>
        <p>
          Check-in is from 3pm to 7pm <br />
          Check-out is before 11am
        </p>
      </section>
    </div>

    <!-- amenities 設施 -->
    <div class="container mx-auto">
      <section class="amenities">
        <div class="amenities__title">Amenities</div>
        <ul>
          <li>
            <span class="material-icons">
              wifi
            </span>
            Wi-Fi
          </li>
          <li>
            <span class="material-icons">
              personal_video
            </span>
            Television
          </li>
          <li>
            <span class="material-icons">
              landscape
            </span>
            Great View
          </li>
          <li>
            <span class="material-icons">
              restaurant
            </span>
            Breakfast
          </li>
          <li>
            <span class="material-icons">
              ac_unit
            </span>
            Air Conditioner
          </li>
          <li>
            <span class="material-icons">
              smoke_free
            </span>
            Smoke Free
          </li>
          <li>
            <span class="material-icons">
              local_bar
            </span>
            Mini Bar
          </li>
          <li>
            <span class="material-icons">
              kitchen
            </span>
            Refigerator
          </li>
          <li>
            <span class="material-icons">
              child_care
            </span>
            Child-Friendly
          </li>
          <li>
            <span class="material-icons">
              room_service
            </span>
            Room Service
          </li>
          <li>
            <span class="material-icons">
              weekend
            </span>
            Sofa
          </li>
          <li>
            <span class="material-icons">
              pets
            </span>
            Pet-Friendly
          </li>
        </ul>
      </section>
    </div>

    <!-- availability -->
    <div class="availability container mx-auto">
      <div class="availability__title">Availability</div>
      <div class="date-picker"></div>
    </div>

    <HouseMap />

    <Footer />
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
  @apply mb-12;
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
    @apply self-start whitespace-no-wrap;
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

.description {
  width: 540px;
  @apply mb-12;
  &__title {
    @apply mb-6;
    @apply text-primary;
    @apply font-bold text-xl;
  }
}

.amenities {
  width: 540px;
  @apply mb-8;

  &__title {
    @apply mb-6;
    @apply text-primary;
    @apply font-bold text-xl;
  }

  ul {
    @apply flex flex-wrap;
  }

  li {
    @apply flex;
    @apply w-1/3 mb-6;
    span {
      @apply mr-4;
    }
  }
}

.availability {
  @apply mb-12;

  &__title {
    @apply mb-6;
    @apply text-primary;
    @apply font-bold text-xl;
  }

  .date-picker {
    width: 600px;
    height: 300px;
    @apply bg-gray-400;
  }
}
</style>
