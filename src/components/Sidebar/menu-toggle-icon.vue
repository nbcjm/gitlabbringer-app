<template>
  <div id="left-toggle-icon" :class="{opened : opened}" @click="toggle">
    <button type="button" class="left-toggle-button" title="Menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "MenuToggleIcon",
  data() {
    return {
      opened: false,

    }
  },
  methods: {
    toggle() {
      return this.opened = !this.opened
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/menu-toggle-icon.css";
</style>
