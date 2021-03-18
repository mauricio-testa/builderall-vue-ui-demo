<template>
  <bui-navbar
    @toggle-sidebar="toggleSidebar"
    @change-language="changeLanguage"
    :sidebar-state="sidebarState"
    :user="user"
    logo="https://booking.builderall.com/images/images/meta/logo.png"
    logo-sm="https://booking.builderall.com/images/images/meta/logo-icon.png"
  >
    <template #items-right>
      <bui-icon name="bell" size="18" v-b-toggle.bui-notifications></bui-icon>
    </template>
  </bui-navbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["sidebarState", "user"]),

  methods: {
    toggleSidebar(state) {
      this.$store.commit("toggleSidebar", state);
    },
    changeLanguage(lang) {
      this.$store.commit('changeLanguage', lang)
    }
  },
};
</script>