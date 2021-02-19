<template>
  <bui-navbar
    @toggle-sidebar="toggleSidebar"
    :sidebar-state="sidebarState"
    logo="https://booking.builderall.com/images/images/meta/logo.png"
  />
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["sidebarState"]),
  
  methods: {
    toggleSidebar(state) {
      this.$store.commit("toggleSidebar", state);
    },
  },
};
</script>