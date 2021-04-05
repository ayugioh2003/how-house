<template>
  <nav class="navbar flex mb-10">
    <Logo />
    <!-- <div class="check-input flex-auto">ROOM STYLE</div> -->
    <CheckRoom class="ml-auto"></CheckRoom>
  </nav>
</template>

<script>
import CheckRoom from '@/components/CheckRoom.vue'

export default {
  components: {
    CheckRoom,
  },
}
</script>
