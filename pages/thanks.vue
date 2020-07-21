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
      <div class="infos">
        <div class="divider"></div>
        <div class="infos-group">
          <div class="infos-group__name">GUSET</div>
          <div class="infos-group__value">Annalise Parisian</div>
        </div>
        <div class="infos-group">
          <div class="infos-group__name">PHONE</div>
          <div class="infos-group__value">+886 9 32 456 789</div>
        </div>
        <div class="divider"></div>
        <div class="infos-group">
          <div class="infos-group__name">ROOM</div>
          <div class="infos-group__value">+deluxe single room / 5 nights</div>
        </div>
        <div class="divider"></div>
        <div class="infos-group">
          <div class="infos-group__name">CHECK-IN</div>
          <div class="infos-group__value">2019/08/07</div>
        </div>
        <div class="infos-group">
          <div class="infos-group__name">CHECK-OUT</div>
          <div class="infos-group__value">2019/08/12</div>
        </div>
        <div class="divider"></div>
      </div>

      <!-- buttons -->
      <div class="buttons">
        <div class="btn">EDIT RESERVATION</div>
        <div class="btn btn-secondary">HOMEPAGE</div>
      </div>
    </div>
    <FooterReservation />
  </div>
</template>

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
