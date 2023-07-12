<template>
  <div>
    <Header :topBanner="true" />
    <router-view style="min-height: 100vh" />
    <Footer />
  </div>
</template>

<script>

import Footer from "@/components/Nav/Footer.vue";

export default {
  name: "Default",
  components: { Footer },
};
</script>

<style></style>
