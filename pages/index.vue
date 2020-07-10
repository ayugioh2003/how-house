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
    <header class="header container mx-auto relative">
      <h1>HexHotel</h1>
      <div class="header__image"></div>
      <div class="reserve-now">
        <div class="check-input flex-auto">CHECK-in & CHECK-OUT</div>
        <div class="check-input">ROOM</div>
        <button class="btn btn-secondary">RESERVE NOW</button>
      </div>
    </header>

    <!-- Recommend -->
    <section class="recommend container mx-auto">
      <div class="recommend-head">
        <div class="recommend__title title">Recommend</div>
        <div class="recommend__subtitle">
          You may be interested in our popular rooms
        </div>
      </div>
      <div class="recommend-rooms">
        <div v-for="room in 3" :key="room" class="recommend-room">
          <div class="recommend-room__image"></div>
          <div class="recommend-room__title">Twin Room</div>
          <div class="recommend-room__price">$3,350 NTD / night</div>
        </div>
      </div>
    </section>

    <!-- Service -->
    <section class="service">
      <div class="service-head">
        <div class="container mx-auto">
          <div class="service__title title">Reserve the best service</div>
          <div class="service__subtitle">
            over 50,000 commendations from our guests
          </div>
        </div>
      </div>
      <div class="service-body container mx-auto">
        <div v-for="category in 3" :key="category" class="service-category">
          <div class="service-category-head">
            <div class="service-category-head__title title">One person</div>
            <div class="service--category-head__subtitle">
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
    @apply text-white text-4xl font-bold italic;
  }
}

.header {
  h1 {
    position: absolute;
    top: 0;
    writing-mode: vertical-lr;
    @apply text-primary;
    @apply font-bold italic text-5xl;
  }

  &__image {
    width: 920px;
    height: 352px;
    background-image: url('https://images.unsplash.com/photo-1523594572281-3c9a566b6163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80');
    background-position: center 5%;
    @apply bg-cover bg-no-repeat;
  }

  .reserve-now {
    position: absolute;
    top: 1rem;
    right: 45px;
    width: 350px;
    @apply bg-gray-400;
  }
}

.recommend {
  &-head {
    @apply mb-6;
  }
  &__title {
    @apply text-primary;
  }
  &-rooms {
    @apply flex -mx-gutter;
  }
  &-room {
    @apply w-1/3 mx-gutter;
    @apply text-right;
    &__image {
      height: 240px;
      @apply bg-gray-400;
      @apply w-full bg-cover bg-center;
    }
    &__title {
      @apply font-bold text-2xl;
    }
  }
}

.service {
  &-head {
    height: 352px;
    background-image: url('https://images.unsplash.com/photo-1523594572281-3c9a566b6163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80');
    background-position: center 15%;
    @apply bg-cover bg-no-repeat;
    @apply text-right;
    @apply flex items-end pb-8 mb-12;
  }
  &__title {
    @apply text-primary;
  }
  &-category {
    @apply flex -mx-gutter;
    &-head {
      @apply px-gutter w-1/3;
    }
  }
  &-room {
    @apply px-gutter w-1/3;
    @apply text-right;
    @apply mb-12;
    &__image {
      height: 240px;
      @apply bg-gray-400;
      @apply w-full bg-cover bg-center;
    }
    &__title {
      @apply font-bold text-2xl;
    }
  }
}
</style>
