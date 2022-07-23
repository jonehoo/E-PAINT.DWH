<template>
  <div class="box">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside style="width:auto;">
          <Aside ref="open" />
        </el-aside>
        <el-container>
          <el-main style="padding: 0px">
            <!-- <div class="breadcrumb">
              <i :class="zhedie_icon" style="font-size:24px;cursor: pointer;" @click="open"></i>
              <Breadcrumb />
            </div> -->
<Breadcrumb />
            <router-view :key="key" />
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './Header.vue';
import Aside from './Aside.vue';
import Breadcrumb from './Breadcrumb'
export default {
  name: "layout-vue",
  components: { Header, Aside,Breadcrumb  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  data() {
    return {
      zhedie_icon: "el-icon-s-unfold"
    }
  },
  methods: {
    open() {
      this.$refs.open.collapse()
      if (this.zhedie_icon == "el-icon-s-fold") {
        this.zhedie_icon = "el-icon-s-unfold"
      } else {
        this.zhedie_icon = "el-icon-s-fold"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: calc(100vh - 60px);
}
.breadcrumb {
  height: 30px;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
  align-items: center;
}
.el-header,
.el-footer {
  padding: 0px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  // text-align: center;
  // line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  // text-align: center;
  // line-height: 160px;
}
</style>