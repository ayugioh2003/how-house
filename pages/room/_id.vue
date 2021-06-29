<template>
  <div class="room-page">
    <!-- NavBar -->
    <NavBar />
    <link rel="stylesheet" href="" />

    <!-- header -->
    <header class="header container mx-auto">
      <div class="header-head">
        <h1 class="header__title">{{ room.room[0].name }}</h1>
        <div
          class="header__image"
          :style="{
            backgroundImage: `url(${room.room[0].imageUrl[0]})`,
          }"
        ></div>
        <div class="header__price-info">WEEKDAY PRICE</div>
        <div class="header__room-info">
          <div class="header__price-day">
            <span class="price">${{ room.room[0].normalDayPrice }} NTD</span>
            / night
          </div>
          <div class="header__price-holiday">
            holiday price - ${{ room.room[0].holidayPrice }} NTD / night
          </div>
          <Check
            :is-room-disabled="true"
            :disabled-date="isDisabledDate"
            class="reserve-now"
          />
        </div>
      </div>
      <div class="header-pics">
        <div
          v-for="item in room.room[0].imageUrl"
          :key="item"
          class="header-pics__pic"
          :style="{
            backgroundImage: `url(${item})`,
          }"
        ></div>
      </div>
    </header>

    <!-- description -->
    <div class="container mx-auto">
      <section class="description">
        <div class="description__title">Description</div>
        <p class="mb-6">
          <span
            >{{
              room.room[0].descriptionShort.GuestMax ===
              room.room[0].descriptionShort.GuestMin
                ? room.room[0].descriptionShort.GuestMin
                : `${room.room[0].descriptionShort.GuestMin}-${room.room[0].descriptionShort.GuestMax}`
            }}
            Guest・</span
          >
          <span>
            {{ room.room[0].descriptionShort.Bed.length }} Bed ({{
              room.room[0].descriptionShort.Bed[0]
            }})・</span
          >
          <span>
            {{ room.room[0].descriptionShort['Private-Bath'] }} Private Bath・
          </span>
          <span>{{ room.room[0].descriptionShort.Footage }} m²</span>
        </p>
        <p class="mb-6">
          {{ room.room[0].description }}
        </p>
        <p>
          Check-in is from {{ room.room[0].checkInAndOut.checkInEarly }} to
          {{ room.room[0].checkInAndOut.checkInLate }} <br />
          Check-out is before {{ room.room[0].checkInAndOut.checkOut }}
        </p>
      </section>
    </div>

    <!-- amenities 設施 -->
    <div class="container mx-auto">
      <section class="amenities">
        <div class="amenities__title op">Amenities</div>
        <ul>
          <li :class="{ 'opacity-25': !room.room[0].amenities['Wi-Fi'] }">
            <span class="material-icons">
              wifi
            </span>
            Wi-Fi
          </li>
          <li :class="{ 'opacity-25': !room.room[0].amenities['Television'] }">
            <span class="material-icons">
              personal_video
            </span>
            Television
          </li>
          <li :class="{ 'opacity-25': !room.room[0].amenities['Great-View'] }">
            <span class="material-icons">
              landscape
            </span>
            Great View
          </li>
          <li :class="{ 'opacity-25': !room.room[0].amenities['Breakfast'] }">
            <span class="material-icons">
              restaurant
            </span>
            Breakfast
          </li>
          <li
            :class="{
              'opacity-25': !room.room[0].amenities['Air-Conditioner'],
            }"
          >
            <span class="material-icons">
              ac_unit
            </span>
            Air Conditioner
          </li>
          <li :class="{ 'opacity-25': !room.room[0].amenities['Smoke-Free'] }">
            <span class="material-icons">
              smoke_free
            </span>
            Smoke Free
          </li>
          <li :class="{ 'opacity-25': !room.room[0].amenities['Mini-Bar'] }">
            <span class="material-icons">
              local_bar
            </span>
            Mini Bar
          </li>
          <li
            :class="{ 'opacity-25': !room.room[0].amenities['Refrigerator'] }"
          >
            <span class="material-icons">
              kitchen
            </span>
            Refigerator
          </li>
          <li
            :class="{ 'opacity-25': !room.room[0].amenities['Child-Friendly'] }"
          >
            <span class="material-icons">
              child_care
            </span>
            Child-Friendly
          </li>
          <li
            :class="{ 'opacity-25': !room.room[0].amenities['Room-Service'] }"
          >
            <span class="material-icons">
              room_service
            </span>
            Room Service
          </li>
          <li :class="{ 'opacity-25': !room.room[0].amenities['Sofa'] }">
            <span class="material-icons">
              weekend
            </span>
            Sofa
          </li>
          <li
            :class="{ 'opacity-25': !room.room[0].amenities['Pet-Friendly'] }"
          >
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
      <!-- <div class="date-picker"></div> -->
      <date-picker
        :open="true"
        :disabled-date="isDisabledDate"
        :inline="true"
        range
      >
      </date-picker>
    </div>

    <HouseMap />

    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  async fetch({ store, route, error }) {
    try {
      await store.dispatch('rooms/fetchRoom', route.params.id)
    } catch (e) {
      let str = ''
      str = e.toString()

      error({
        statusCode: 503,
        message: str,
      })
    }
    try {
      await store.dispatch('rooms/fetchRooms')
    } catch (e) {
      let str = ''
      str = e.toString()
      // if (e.response) {
      //   if (e.response.message) str = e.response.message
      // } else {
      //   str = e.toString()
      // }

      error({
        statusCode: 503,
        message: str,
      })
    }
  },
  asyncData() {
    return {
      isLandingFromServer: false,
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    ...mapState({
      room: (state) => state.rooms.room,
      rooms: (state) => state.rooms.rooms,
      // checkTimeRange: (state) => state.rooms.checkTimeRange,
    }),
    ...mapFields({
      checkTimeRange: 'rooms.checkTimeRange',
    }),
    checkInDate() {
      return this.checkTimeRange[0]
    },
    checkOutDate() {
      if (this.checkTimeRange.length > 1) {
        return this.checkTimeRange[this.checkTimeRange.length - 1]
      } else {
        return this.checkTimeRange[0]
      }
    },
    selectDateRangeArray() {
      if (this.checkTimeRange.length === 0) return []
      if (this.checkTimeRange.some((item) => item === null)) return []

      const selectDateRange = this.$moment.range(
        this.checkInDate,
        this.checkOutDate
      )
      const selectDateRangeArray = Array.from(
        selectDateRange.by('day')
      ).map((m) => m.format('YYYY/MM/DD'))
      return selectDateRangeArray
    },
    bookedDates() {
      return this.room.booking.map((b) =>
        this.$moment(b.date).format('YYYY-MM-DD')
      )
    },
  },
  created() {
    const room = this.rooms.find((item) => item.id === this.id)
    this.$store.commit('rooms/SET_CHECK_ROOM', room)
  },
  methods: {
    isDisabledDate(checkDate) {
      const booking = this.room && this.room.booking ? this.room.booking : []
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
    async fetchInitApi() {
      try {
        await this.$store.dispatch('rooms/fetchRoom', this.$route.params.id)
      } catch (e) {
        let str = ''

        if (e.response) {
          if (e.response.message) str = e.response.message
        } else {
          str = e.toString()
        }
        console.error(str)
      }

      try {
        await this.$store.dispatch('rooms/fetchRooms')
      } catch (e) {
        let str = ''

        if (e.response) {
          if (e.response.message) str = e.response.message
        } else {
          str = e.toString()
        }

        console.error(str)
      }

      return 'done'
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
      @apply bg-center;
      @apply bg-cover;
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
