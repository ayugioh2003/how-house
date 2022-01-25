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
      <div v-if="bookRoomResult.booking" class="infos">
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
        <div class="btn btn-danger" @click="deleteBookings">
          DELETE ALL RESERVATION
        </div>
        <div class="btn btn-secondary" @click="$router.push('/')">
          HOMEPAGE
        </div>
      </div>
    </div>

    <form
      ref="Spgateway"
      name="Spgateway"
      method="post"
      action="https://ccore.newebpay.com/MPG/mpg_gateway"
      class="mb-4 flex justify-center"
    >
      <input id="MerchantID" value="MS130554870" name="MerchantID" hidden />
      <input id="Version" value="1.5" name="Version" hidden />
      <input
        id="TradeInfo"
        :value="formInfo.TradeInfo"
        name="TradeInfo"
        hidden
      />
      <input id="TradeSha" :value="formInfo.TradeSha" name="TradeSha" hidden />

      <!-- <button type="submit">submit</button> -->
      <button class="btn btn-secondary" type="submit">
        前去付款
      </button>
    </form>

    <FooterReservation />
  </div>
</template>

<script>
// import { mapFields } from 'vuex-map-fields'
import payment from '@/utils/payment'
import OrderService from '@/Services/OrderService'

export default {
  async asyncData({ query }) {
    const data = {
      order: {},
    }
    if (query.orderId) {
      const orderRes = await OrderService.getOrder(query.orderId)
      console.log('orderRes.data', orderRes.data)
      data.order = orderRes.data
    }

    return data
  },
  computed: {
    bookRoomResult() {
      return this.$store.state.rooms.bookRoomResult || this.order
    },
    formInfo() {
      const order = {
        email: 'ayugioh2003@gmail.com',
      }

      if (!this.order.totalPrice) return {}

      const tradeInfo = payment.getTradeInfo(
        this.order.totalPrice,
        this.order.room[0].name,
        order.email,
        this.order.orderId
      )
      return tradeInfo
    },
  },
  created() {
    if (!this.$route.query.orderId) {
      this.$router.push('/')
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$refs.Spgateway.submit()
    },
    async deleteBookings() {
      if (window.confirm('Do you really want to delete all bookings?')) {
        await this.$store.dispatch('rooms/deleteBookings').then((res) => {
          if (res.data.success) {
            alert('刪除成功！')
            this.$router.push('/')
          }
        })
      }
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
