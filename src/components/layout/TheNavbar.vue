<template>
  <bui-navbar
    :sidebar-state="sidebarState"
    :user="user"
    logo="https://booking.builderall.com/images/images/meta/logo.png"
    logo-sm="https://booking.builderall.com/images/images/meta/logo-icon.png"
    @toggle-sidebar="toggleSidebar"
    @change-language="changeLanguage"
  >
    <template #items-right>
      <bui-icon
        v-b-toggle.bui-notifications
        name="bell"
        size="18"
      />
    </template>
  </bui-navbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['sidebarState', 'user']),

  methods: {
    toggleSidebar (state) {
      this.$store.commit('toggleSidebar', state)
    },
    changeLanguage (lang) {
      console.log(lang)
    }
  }
}
</script>
