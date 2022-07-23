<template>
  <div class="box">
    <el-menu :unique-opened="true" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#236EF3" :router="true">
      <!-- <el-menu-item @click="collapse">
        <i :class="zhedie_icon"></i>
        <span slot="title">{{zhedie_text}}</span>
      </el-menu-item> -->
      <template v-for="(menu, index) in list">

        <el-menu-item :index="menu.path" v-if="menu.show==true&&menu.children.length==1" :key="index">
          <i :class='menu.icon'></i>
          <span class="tohide" slot="title">{{menu.name}}</span>
        </el-menu-item>

        <el-submenu v-if="menu.show==true&&menu.children.length>1" :key="index" :index="menu.path">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span class="tohide">{{ menu.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(menuItem, menuIndex) in menu.children" :key="menuIndex" :index="menuItem.path">
              <i class="el-icon-caret-right"></i>
              <span slot="title">{{ menuItem.name }}</span>

            </el-menu-item>
          </el-menu-item-group>
        
        </el-submenu>
      </template>
        <div class="zd-buttom">
            <el-menu-item @click="collapse">
              <i :class="zhedie_icon"></i>
              <span slot="title">{{zhedie_text}}</span>
            </el-menu-item>
          </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "s-Aside",
  data() {
    return {
      isCollapse: true,
      zhedie_icon: "el-icon-s-unfold",
      zhedie_text: "展开菜单",
      list: []
    };
  },
  created() {
    this.list = this.$router.options.routes;
  },
  mounted() {
    console.log(this.list)
  },
  methods: {
    collapse() {
      this.isCollapse = this.isCollapse ? false : true;
      if (this.zhedie_icon == "el-icon-s-fold") {
        this.zhedie_icon = "el-icon-s-unfold"
        this.zhedie_text = "展开菜单"
      } else {
        this.zhedie_icon = "el-icon-s-fold"
        this.zhedie_text = "折叠菜单"
      }

    },

  }
}
</script>
<style lang="scss" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu--collapse {
  width: 64px;
  height: 100%;
}
.el-menu {
  border-right: solid 1px #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #fff;
  height: 100%;
}
.zd-buttom {
  position: fixed;
  bottom: 0px;
  width: auto;
  span {
    color: #fff;
    font-family:"";
  text-shadow: 0px 0px 0px rgb(21, 68, 90);

  }
  i {
    color: #fff !important;
    text-shadow: 0px 0px 0px rgb(21, 68, 90);
  }
  li:hover {
    background-color: #fff0 !important;
  }
}
</style>

