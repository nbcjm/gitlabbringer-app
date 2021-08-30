<template>
  <div>
    <menu-toggle-icon></menu-toggle-icon>
    <side-bar-tab></side-bar-tab>
  </div>
</template>

<script>
import SideBarTab from "@/components/Sidebar/side-bar-tab"
import MenuToggleIcon from "@/components/Sidebar/menu-toggle-icon"

export default {
  name: "SideBar",
  components: {SideBarTab,MenuToggleIcon}
}
</script>

<style lang="scss">

</style>
