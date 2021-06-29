<template>
  <div class="index">
    <!-- HomeNavBar -->
    <HomeNavBar />

    <!-- Header -->
    <header class="header container mx-auto relative">
      <h1>HowHouse</h1>
      <div class="header__image"></div>
      <Check class="reserve-now" :disabled-date="isDisabledDate" />
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
        <div
          v-for="room in [rooms[1], rooms[3], rooms[5]]"
          :key="room.id"
          class="recommend-room"
          @click="onRoomClick(room.id)"
        >
          <div
            class="recommend-room__image"
            :style="{
              backgroundImage: `url(${room.imageUrl})`,
            }"
          ></div>
          <div class="recommend-room__title">{{ room.name }}</div>
          <div class="recommend-room__price">
            ${{ room.normalDayPrice }} NTD / night
          </div>
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
        <div
          v-for="(category, index) in roomType"
          :key="category.title"
          class="service-category"
        >
          <div class="service-category-head">
            <div class="service-category-head__title title">
              {{ category.title }}
            </div>
            <div class="service--category-head__subtitle">
              {{ category.description }}
            </div>
          </div>
          <div
            v-for="room in rooms.slice(0 + index * 2, 2 + index * 2)"
            :key="room.id"
            class="service-room"
            @click="onRoomClick(room.id)"
          >
            <div
              class="service-room__image"
              :style="{
                backgroundImage: `url(${room.imageUrl})`,
              }"
            ></div>
            <div class="service-room__title">{{ room.name }}</div>
            <div class="service-room__price">
              ${{ room.normalDayPrice }} NTD / night
            </div>
          </div>
        </div>
      </div>
    </section>
    <HouseMap />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Check from '@/components/Check.vue'
import HouseMap from '@/components/HouseMap.vue'

export default {
  components: {
    Check,
    HouseMap,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('rooms/fetchRooms')
    } catch (e) {
      let str = ''

      if (e.response) {
        if (e.response.message) str = e.response.message
      } else {
        str = e.toString()
      }

      error({
        statusCode: 503,
        message: str,
        // message: 'Unable to fetch rooms at this time, Please try again later.',
      })
    }
  },
  data() {
    return {
      roomType: [
        {
          title: 'One person',
          description: 'Enjoy the one and only service',
        },
        {
          title: 'Two person',
          description: 'The perfect choice for both of you',
        },
        {
          title: 'Family',
          description: 'Wanna a big room? there you are',
        },
      ],
      errorCode: null,
    }
  },
  computed: mapState({
    rooms: (state) => state.rooms.rooms,
    room: (state) => state.rooms.room,
  }),
  methods: {
    onRoomClick(roomId) {
      this.$router.push({ name: 'room-id', params: { id: roomId } })
    },
    isDisabledDate(checkDate) {
      const booking = this.room.booking ? this.room.booking : []
      const isDateBooked = booking.some(
        (bookedObj) =>
          this.$moment(bookedObj.date).format('YYYY-MM-DD') ===
          this.$moment(checkDate).format('YYYY-MM-DD')
      )
      const isBeforeToday = this.$moment(checkDate).isSameOrBefore(
        this.$moment()
      )
      const isAfterNinetyDays = this.$moment(checkDate).isAfter(
        this.$moment().add(90, 'days')
      )

      const result = isDateBooked || isBeforeToday || isAfterNinetyDays
      return result
    },
  },
}
</script>

<style lang="scss" scoped>
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
    @apply bg-cover bg-no-repeat w-full;
  }

  .reserve-now {
    position: absolute;
    top: 1rem;
    right: 45px;
  }
}

.recommend {
  @apply mb-12;

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
    cursor: pointer;
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
    cursor: pointer;
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
