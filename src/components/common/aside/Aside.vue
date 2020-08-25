<template>
  <el-menu
    :default-active="activePath"
    class="el-menu-vertical-demo"
    background-color="#383546"
    text-color="#8b9199"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <el-menu-item
      :index="item.path"
      v-for="item in menuItem"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>

    <el-submenu :index="item.path" v-for="item in submenuItem" :key="item.path">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subitem.path"
          v-for="subitem in item.children"
          :key="subitem.path"
          @click="clickMenu(subitem)"
        >{{subitem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { SELECT_MENU, SELECT_TAB, ACTIVE_PATH } from "store/types";
import { mapMutations } from "vuex";

export default {
  name: "Aside",
  data() {
    return {
      menu: [
        {
          path: "/",
          label: "首页",
          icon: "s-home",
        },
        {
          path: "/video",
          label: "视频管理",
          icon: "video-play",
        },
        {
          path: "/user",
          label: "用户管理",
          icon: "user",
        },
        {
          path: "/page",
          label: "其他",
          icon: "video-play",
          children: [
            {
              path: "/page1",
              label: "页面1",
              icon: "setting",
            },
          ],
        },
      ],
    };
  },
  computed: {
    menuItem() {
      return this.menu.filter((item) => !item.children);
    },
    submenuItem() {
      return this.menu.filter((item) => item.children);
    },
    activePath() {
      return this.$route.path;
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
  methods: {
    ...mapMutations({
      activeMenu: ACTIVE_PATH,
    }),
    clickMenu(item) {
      this.$store.commit(SELECT_MENU, item);
      this.$store.commit(SELECT_TAB, item);
      this.$router.push(item.path);
    },
    getMenu() {
      const amenu = this.menu.filter((item) => item.path === this.$route.path);
      this.activeMenu(amenu);
    },
  },
  created() {
    this.getMenu();
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
.el-menu-item,
.el-submenu {
  text-align: left;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>