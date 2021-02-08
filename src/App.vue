<template>
  <div>
    <the-sidebar />
    <the-navbar />
    <bui-container :sidebar-state="sidebarState">
      <router-view />
    </bui-container>
  </div>
</template>
<script>
import TheSidebar from "./components/layout/TheSidebar";
import TheNavbar from "./components/layout/TheNavbar";
import { mapState } from "vuex";

export default {
  components: {
    TheSidebar,
    TheNavbar,
  },
  computed: mapState(["sidebarState"]),
};
</script>