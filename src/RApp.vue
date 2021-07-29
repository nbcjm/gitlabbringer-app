<template>
  <menu-toggle-icon></menu-toggle-icon>
  <router-view></router-view>
</template>



<script>
import MenuToggleIcon from "@/components/Sidebar/menu-toggle-icon";
export default {
  name: "RApp.vue",
  components: {MenuToggleIcon},
}
</script>

<style lang="scss">
@import "styles/Navigate";
</style>
