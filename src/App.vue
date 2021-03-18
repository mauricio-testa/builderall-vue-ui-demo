<template>
  <div>
    <the-sidebar />
    <the-navbar/>
    <the-notification-center/>

    <bui-container :sidebar-state="sidebarState">
      <router-view />
    </bui-container>
  </div>
</template>
<script>
import TheSidebar from "./components/layout/TheSidebar";
import TheNavbar from "./components/layout/TheNavbar";
import TheNotificationCenter from './components/layout/TheNotificationCenter'
import { mapState } from "vuex";

export default {
  components: {
    TheSidebar,
    TheNavbar,
    TheNotificationCenter
  },
  computed: mapState(["sidebarState"]),
};
</script>