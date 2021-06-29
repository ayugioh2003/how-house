<template>
  <div>
    <NavBar />
    <div class="thanks mx-auto">
      <!-- title -->
      <div class="thanks-title">
        Reservation <br />
        Received!
      </div>
      <!-- infos -->
      <div v-if="bookRoomResult" class="infos">
        <div class="divider"></div>
        <div class="infos-group">
          <div class="infos-group__name">GUSET</div>
          <div class="infos-group__value">
            {{ bookRoomResult.booking[0].name }}
          </div>
        </div>
        <div class="infos-group">
          <div class="infos-group__name">PHONE</div>
          <div class="infos-group__value">
            {{ bookRoomResult.booking[0].tel }}
          </div>
        </div>
        <div class="divider"></div>
        <div class="infos-group">
          <div class="infos-group__name">ROOM</div>
          <div class="infos-group__value">
            <!-- +deluxe single room / 5 nights -->
            {{
              `${bookRoomResult.room[0].name} / ${bookRoomResult.booking.length} nights`
            }}
          </div>
        </div>
        <div class="divider"></div>
        <div class="infos-group">
          <div class="infos-group__name">CHECK-IN</div>
          <div class="infos-group__value">
            {{ bookRoomResult.booking[0].date }}
          </div>
        </div>
        <div class="infos-group">
          <div class="infos-group__name">CHECK-OUT</div>
          <div class="infos-group__value">
            {{
              bookRoomResult.booking.length > 1
                ? bookRoomResult.booking[bookRoomResult.booking.length - 1].date
                : bookRoomResult.booking[0].date
            }}
          </div>
        </div>
        <div class="divider"></div>
      </div>

      <!-- buttons -->
      <div class="buttons">
        <div class="btn" @click="deleteBookings">DELETE ALL RESERVATION</div>
        <div class="btn btn-secondary" @click="$router.push('/')">
          HOMEPAGE
        </div>
      </div>
    </div>
    <FooterReservation />
  </div>
</template>

<script>
// import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    bookRoomResult() {
      return this.$store.state.rooms.bookRoomResult
    },
  },
  methods: {
    async deleteBookings() {
      await this.$store.dispatch('rooms/deleteBookings').then((res) => {
        // console.log('delete res', res)
        if (res.data.success) {
          alert('刪除成功！')
          this.$router.push('/')
        }
      })
      // console.log('delete res', res)
    },
  },
}
</script>

<style lang="scss" scoped>
.thanks {
  max-width: 750px;
  padding-left: 10px;
  padding-right: 10px;
  @apply mb-24;
}
.thanks-title {
  @apply mb-16;
  @apply text-primary;
  @apply font-bold text-4xl;
}

.divider {
  @apply my-2;
  @apply border-b border-primary-light;
}

.infos {
  @apply mb-4;
  &-group {
    @apply flex;
    @apply py-2;

    &__name {
      width: 100px;
      margin-right: 100px;
      @apply text-primary;
      @apply font-bold;
    }
  }
}

.buttons {
  @apply flex justify-between;
}
</style>
