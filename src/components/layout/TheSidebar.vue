<template>
  <bui-sidebar
    :menus="menus"
    :menus-bottom="menus_bottom"
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
        { title: "Sites", icon: "site", to: "/sites" },
        { title: "Elements", icon: "gear", to: "/elements" },
      ],
      menus_bottom: [
        {
          title: "Github",
          icon: "gear",
          href: "https://github.com/mauricio-testa/builderall-vue-ui-demo",
          target: "_blank",
        },
        {
          title: "Docs",
          icon: "gear",
          href: "http://builderall-vue-ui.netlify.app/",
          target: "_blank",
        },
      ],
    };
  },

  computed: mapState(["sidebarState"]),
};
</script>