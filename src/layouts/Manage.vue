<template>
  <div>
    <Header2 :topBanner="false" />
    <div class="m-auto">
      <b-row class="m-0">
        <b-col cols="2">
        </b-col>
        <b-col cols="10" style="background: #f3f8f7; min-height: 100vh" class="p-4">
          <router-view />
        </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Header2 from "@/components/Nav/Header2.vue";


export default {
  name: "Management",
  // components: { Header2, Footer }
};
</script>

<style></style>
