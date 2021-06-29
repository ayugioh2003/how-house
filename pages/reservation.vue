<template>
  <div>
    <NavBar />
    <div class="reservation-wrap mx-auto">
      <main class="reservation">
        <section class="reservation-form">
          <div class="reservation-form__title">Reservation Information</div>
          <div class="input-group">
            <input id="name" v-model="form.name" type="text" />
            <label for="name">
              <span class="material-icons">
                person
              </span>
              NAME
            </label>
          </div>
          <div class="input-group">
            <input id="phone" v-model="form.phone" type="text" />
            <label for="phone" class="label">
              <span class="material-icons">
                phone_android
              </span>
              PHONE
            </label>
          </div>
          <button class="btn btn-secondary" @click="bookHandler">
            RESERVE NOW
          </button>
        </section>
        <section class="reservation-infos">
          <div class="reservation-infos__image"></div>
          <div class="reservation-infos__info">
            <div class="reservation-infos__room-name">Deluxe single Room</div>
          </div>
          <div class="reservation-infos__info">
            <div class="reservation-infos__info-icon">
              <span class="material-icons">
                date_range
              </span>
            </div>
            <div class="reservation-infos__info-title">CHECK-IN</div>
            <div class="reservation-infos__info-date">{{ checkInDate }}</div>
          </div>
          <div class="reservation-infos__info">
            <div class="reservation-infos__info-icon">
              <span class="material-icons">
                date_range
              </span>
            </div>
            <div class="reservation-infos__info-title">CHECK-OUT</div>
            <div class="reservation-infos__info-date">{{ checkOutDate }}</div>
          </div>
          <div class="reservation-infos__summary">
            <div
              v-for="(checkItem, index) in checkItems"
              :key="index"
              class="reservation-infos__summary-price"
            >
              <div>{{ `$ ${checkItem.price} × ${checkItem.days} night` }}</div>
              <div>{{ `$${checkItem.itemPrice}` }}</div>
            </div>
            <div class="reservation-infos__summary-divider"></div>
            <div class="reservation-infos__summary-total">
              <div class="reservation-infos__summary-total-title">TOTAL</div>
              <div class="reservation-infos__summary-total-price">
                {{ `$${totalPrice}` }}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    <FooterReservation />
  </div>
</template>

<script>
/* eslint-disable */
import { mapFields } from 'vuex-map-fields'

export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        date: this.selectDateRangeArray || []
      },
      calendars: [],
    }
  },
  computed: {
    ...mapFields({
      checkTimeRange: 'rooms.checkTimeRange',
      checkRoom: 'rooms.checkRoom',
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
      const selectDateRange = this.$moment.range(
        this.checkInDate,
        this.checkOutDate
      )
      const selectDateRangeArray = Array.from(
        selectDateRange.by('day')
      ).map((m) => m.format('YYYY/MM/DD'))
      return selectDateRangeArray
    },
    // [{ 日期, 價錢 }]
    dateTypePrices() {
      const filterCalendars = this.calendars.filter((d) =>
        this.$moment(d.date).isSameOrAfter(this.$moment())
      )
      // console.log('filterCalendars', filterCalendars)

      // checkin out range
      const selectDateRange = this.$moment.range(
        this.checkInDate,
        this.checkOutDate
      )
      const selectDateRangeArray = Array.from(
        selectDateRange.by('day')
      ).map((m) => m.format('YYYY/MM/DD'))
      // console.log('selectDateRangeArray', selectDateRangeArray)

      // date and price map
      const vm = this
      const isHoliday = (checkDate) => {
        const checkDateInfo = filterCalendars.find((calendar) => {
          return this.$moment(calendar.date).format('YYYY/MM/DD') === checkDate
        })
        return checkDateInfo?.isHoliday ? true : false
      }
      const prices = selectDateRangeArray.map((checkDate) => {
        const template = {
          date: checkDate,
          price: isHoliday(checkDate)
            ? this.checkRoom.holidayPrice
            : this.checkRoom.normalDayPrice,
          isHoliday: isHoliday(checkDate),
        }
        return template
      })
      // console.log('prices', prices)

      return prices
    },
    checkItems() {
      const items = []
      const holidays = this.dateTypePrices.filter((price) => price.isHoliday)
      const normaldays = this.dateTypePrices.filter((price) => !price.isHoliday)

      if (holidays.length > 0) {
        items.push({
          price: holidays[0].price,
          days: holidays.length,
          itemPrice: holidays[0].price * holidays.length,
        })
      }
      if (normaldays.length > 0) {
        items.push({
          price: normaldays[0].price,
          days: normaldays.length,
          itemPrice: normaldays[0].price * normaldays.length,
        })
      }
      return items
    },
    totalPrice() {
      return this.checkItems.reduce((acc, cur) => acc + cur.itemPrice, 0)
    },
  },
  async mounted() {
    // console.log('checkTimeRange', this.checkTimeRange)
    // console.log('checkRoom', this.checkRoom)

    // If timeRange or roomType empty, then return back to index
    if (
      !this.checkTimeRange.length === 0 ||
      Object.keys(this.checkRoom).length === 0
    ) {
      this.$router.push('/')
    }

    // get calendars
    const calendars = await this.$store.dispatch('calendar/fetchCalendars')
    this.calendars = calendars
  },
  methods: {
    async bookHandler() {
      await this.$store.dispatch('rooms/bookRoom', {
        id: this.checkRoom.id,
        name: this.form.name,
        tel: this.form.phone,
        date: this.selectDateRangeArray.map((d) => this.$moment(d).format('YYYY-MM-DD'))
      })
      .then(res => {
        this.$store.commit('rooms/SET_BOOK_ROOM_RESULT', res.data)
        this.$router.push('/thanks')
      })
      .catch(e => {
        if (e.response.data.message) {
          alert(e.response.data.message)
        } else {
          alert(e)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.reservation-wrap {
  width: 730px;
}

.reservation {
  @apply flex -mx-gutter;

  &-form {
    @apply w-1/2 mx-gutter;

    &__title {
      @apply mb-6;
      @apply text-primary;
      @apply font-bold text-4xl;
    }

    .input-group {
      @apply flex w-full flex-wrap;
      @apply mb-12;
      label {
        @apply flex order-1;
        @apply w-full;
        @apply pb-6;
        @apply text-primary;
        @apply font-bold;
        @apply cursor-pointer;
        @apply transition-all duration-200;
        span {
          @apply mr-2;
          @apply text-primary;
          @apply font-bold;
          @apply transition-all duration-200;
        }
      }
      input {
        @apply order-2;
        @apply inline-block w-full;
        @apply border-b border-primary-light;
        @apply transition-all duration-200;
      }

      input:focus {
        @apply text-secondary;
        @apply border-secondary;
        @apply outline-none;
      }
      input:focus ~ label,
      input:focus ~ label span {
        @apply text-secondary;
      }
    }
  }

  &-infos {
    @apply w-1/2 mx-gutter;

    &__image {
      height: 204px;
      @apply bg-gray-400;
      @apply border border-primary-gray;
      @apply w-full;
    }

    &__room-name {
      @apply text-primary;
      @apply font-bold text-xl;
    }

    &__info {
      @apply flex;
      @apply py-6 px-8;
      @apply border border-primary-gray;
      @apply border-t-0;

      &-icon {
        line-height: 0px;
        @apply mr-4;
      }
      &-title {
        @apply mr-auto;
      }
    }

    &__summary {
      @apply py-6 px-8;
      @apply border border-primary-gray;
      @apply border-t-0;

      &-price {
        @apply flex justify-between;
        @apply mb-2;
      }

      &-divider {
        @apply h-px my-6;
        @apply border-t border-primary-light;
      }

      &-total {
        @apply flex justify-between;
        &-title {
          @apply text-primary;
        }
        &-price {
          @apply text-primary;
          @apply font-bold;
        }
      }
    }
  }
}
</style>
