<template>
  <bui-sidebar
    :menus="menus"
    :menus-bottom="[]"
    :sidebar-state="sidebarState"
  />
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => {
    return {
      menus: [
        { title: "Home", icon: "dashboard", to: "/" },
        { title: "About", icon: "gear", to: "/about" },
      ],
    };
  },

  computed: mapState(["sidebarState"]),
};
</script>