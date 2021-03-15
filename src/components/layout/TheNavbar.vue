<template>
  <bui-navbar
    @toggle-sidebar="toggleSidebar"
    :sidebar-state="sidebarState"
    logo="https://booking.builderall.com/images/images/meta/logo.png"
    logo-sm="https://booking.builderall.com/images/images/meta/logo-icon.png"
  >
    <template #items-right>
      <bui-icon name="bell" v-b-toggle.bui-notifications></bui-icon>
    </template>
  </bui-navbar>
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