<template>
  <div id="tags">
    <el-tag
      type="info"
      v-for="tag in tags"
      :closable="tag.path!=='/'"
      :key="tag.path"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
    >{{tag.label}}</el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SELECT_MENU, CLOSE_TAB } from "store/types";

export default {
  name: "Tab",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    ...mapMutations({
      close: CLOSE_TAB
    }),
    handleClose(tag) {
      this.close(tag);
      this.$router.go(-1)
    },
    changeMenu(item){
      this.$router.push(item.path)
      this.$store.commit(SELECT_MENU, item)
    }
  }
};
</script>

<style lang="scss" scoped>
.el-tag {
  margin-right: 3px;
  cursor: pointer;
}
</style>