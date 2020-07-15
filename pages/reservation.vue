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
            <div class="reservation-infos__info-icon">icon</div>
            <div class="reservation-infos__info-title">CHECK-IN</div>
            <div class="reservation-infos__info-date">2019/08/07</div>
          </div>
          <div class="reservation-infos__info">
            <div class="reservation-infos__info-icon">icon</div>
            <div class="reservation-infos__info-title">CHECK-OUT</div>
            <div class="reservation-infos__info-date">2019/08/12</div>
          </div>
          <div class="reservation-infos__info">
            <div class="reservation-infos__info-price"></div>
            <div class="reservation-infos__info-price"></div>
            <div class="reservation-infos__info-price"></div>
            <div class="reservation-infos__info-total">
              <div class="reservation-infos__info-total-title">TOTAL</div>
              <div class="reservation-infos__info-total-price">$10,998</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reservation-wrap {
  width: 730px;
}

.reservation {
  @apply flex -mx-gutter;

  &-form {
    @apply w-1/2 px-gutter;

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
    @apply w-1/2 px-gutter;
  }
}
</style>
