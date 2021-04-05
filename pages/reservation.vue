<template>
  <div>
    <NavBar />
    <div class="reservation-wrap mx-auto">
      <main class="reservation">
        <section class="reservation-form">
          <div class="reservation-form__title">Reservation Information</div>
          <div class="input-group">
            <input id="name" type="text" />
            <label for="name">
              <span class="material-icons">
                person
              </span>
              NAME
            </label>
          </div>
          <div class="input-group">
            <input id="phone" type="text" />
            <label for="phone" class="label">
              <span class="material-icons">
                phone_android
              </span>
              PHONE
            </label>
          </div>
          <button class="btn btn-secondary">
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
            <div class="reservation-infos__info-date">2019/08/07</div>
          </div>
          <div class="reservation-infos__info">
            <div class="reservation-infos__info-icon">
              <span class="material-icons">
                date_range
              </span>
            </div>
            <div class="reservation-infos__info-title">CHECK-OUT</div>
            <div class="reservation-infos__info-date">2019/08/12</div>
          </div>
          <div class="reservation-infos__summary">
            <div
              v-for="item in 3"
              :key="item"
              class="reservation-infos__summary-price"
            >
              <div>$1,899 × 2 night</div>
              <div>$3,798</div>
            </div>
            <div class="reservation-infos__summary-divider"></div>
            <div class="reservation-infos__summary-total">
              <div class="reservation-infos__summary-total-title">TOTAL</div>
              <div class="reservation-infos__summary-total-price">$10,998</div>
            </div>
          </div>
        </section>
      </main>
    </div>
    <FooterReservation />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
      },
    }
  },
  computed: {
    ...mapFields({
      checkTimeRange: 'rooms.checkTimeRange',
      checkRoom: 'rooms.checkRoom',
    }),
  },
  mounted() {
    console.log('checkTimeRange', this.checkTimeRange)
    console.log('checkRoom', this.checkRoom)
    if (
      !this.checkTimeRange.length === 0 ||
      Object.keys(this.checkRoom).length === 0
    ) {
      this.$router.push('/')
    }
  },
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
