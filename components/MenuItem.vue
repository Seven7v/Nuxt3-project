<template>
  <div class="mod-menu">
    <el-tooltip placement="bottom">
      <template #content>
        <div class="menus-wrapper">
          <div class="menus-list">
            <div v-for="item of props.menus" :key="item.name">
              <div class="menu-item" @mouseover="mouseoverItem(item)" @mouseleave="mouseleaveItem">
                <NuxtLink :to="item.path">{{ $t(item.name) }}</NuxtLink>
                <div class="desc">{{ $t(item.desc) }}</div>
              </div>
            </div>
          </div>
          <div>
            <img class="menus-img" :src="current" alt="" />
          </div>
        </div>
      </template>
      <div class="title">{{ $t(props.title) }}</div>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from '~/types/menu'
import { ref } from 'vue'
const props = defineProps({
  title: {
    type: String,
    defalut: ''
  },
  menus: {
    type: Array,
    default: []
  }
})
const current = ref('')
const mouseoverItem = (item: MenuItem) => {
  console.log(item)
  current.value = item.img
}
const mouseleaveItem = () => {
  current.value = ''
}
</script>
<style lang="scss">
.mod-menu {
  .title {
    height: 80px;
    line-height: 80px;
    color: #fff;
    font-size: 18px;
    font-weight: 900;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
      sans-serif;
  }
}
.menus-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 40px;
}
.menu-item {
  padding: 40px;
  max-width: 300px;
  box-sizing: border-box;
}
.menus-list {
  display: flex;
  max-width: 700px;
  flex-wrap: wrap;
}
.menus-img {
  height: 350px;
}
a {
  text-decoration: none;
  display: block;
  color: #fff;
  font-size: 16px;
  min-width: 240px;
}
@media (max-width: 2250px) {
  .el-popper {
    width: 97vw !important;
    left: 0;
  }
}
@media (max-width: 1800px) {
  .el-popper {
    width: 94vw !important;
    left: 0;
  }
}

@media (max-width: 1500px) {
  .el-popper {
    width: 92vw !important;
    left: 0;
  }
}
.el-popper {
  width: 98vw;
  left: 0;
}
</style>
