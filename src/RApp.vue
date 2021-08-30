<template>
  <side-bar></side-bar>
  <router-view></router-view>
</template>



<script>
import SideBar from "@/components/Sidebar/side-bar";
export default {
  name: "RApp.vue",
  components: {SideBar},
}
</script>

<style lang="scss">
@import "styles/Navigate";
</style>
