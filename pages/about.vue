<template>
  <div>
    <NavBar />
    <div class="about container mx-auto">about page</div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  compontents: {
    NavBar,
    Footer,
  },
}
</script>
