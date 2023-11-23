<template>
  <div class="mod-header" :style="navStyle">
    <div class="menu-wrapper">
      <NuxtLink to="/home"> <img src="../assets/img/logo.png" class="logo" alt="" /></NuxtLink>
      <MenuItem
        v-for="item of menuList"
        :key="item.title"
        :title="item.title"
        :menus="item.children"
      />
      <Lang />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Menus } from '~/types/menu'
import { ref, onMounted, watchEffect, watch } from 'vue'
const route = useRoute()
const menus: Array<Menus> = [
  {
    title: 'product',
    children: [
      {
        name: 'introduce',
        desc: 'introduceProduct',
        path: '/product',
        img: 'https://img95.699pic.com/photo/60045/0889.jpg_wh300.jpg',
        children: [
          {
            name: 'design',
            path: '/product/introduce'
          },
          {
            name: 'preview',
            path: '/product/introduce'
          }
        ]
      },
      {
        name: 'class',
        desc: 'categories',
        path: '/product/introduce',
        img: 'https://img95.699pic.com/photo/50236/7640.jpg_wh300.jpg'
      },
      {
        name: 'template',
        desc: 'productTemplate',
        path: '/product/introduce',
        img: 'https://qmsck.com/wp-content/uploads/2023/04/10%E6%AC%BE%E9%AB%98%E6%B8%85%E6%9C%AA%E6%9D%A5%E6%B4%BE%E9%9C%93%E8%99%B9%E8%B5%9B%E5%8D%9A%E6%9C%8B%E5%85%8B%E9%A3%8E3D%E7%A9%BA%E9%97%B4%E8%B5%B0%E5%BB%8A%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87%E8%AE%BE%E8%AE%A1%E7%B4%A0%E6%9D%90-Sci-Fi-Futuristic-Ne_02.png'
      },
      {
        name: 'Product1',
        desc: 'introduceProduct',
        path: '/product/introduce',
        img: 'https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-cyberpunk-street-blue-cyberpunk-e-commerce-image_784236.jpg'
      },
      {
        name: 'Product2',
        desc: 'introduceProduct',
        path: '/product/introduce',
        img: 'https://xqimg.imedao.com/1767f2ca610a93d3fe93ce70.png!800.jpg'
      }
    ]
  },
  {
    title: 'consult',
    children: [
      {
        name: 'consult',
        desc: 'introduceProduct',
        path: '/consult',
        img: 'https://img95.699pic.com/photo/60045/0889.jpg_wh300.jpg',
        children: [
          {
            name: 'design',
            path: '/consult'
          },
          {
            name: 'preview',
            path: '/consult'
          }
        ]
      },
      {
        name: 'consultClass',
        desc: 'categories',
        path: '/product/introduce',
        img: 'https://img95.699pic.com/photo/50236/7640.jpg_wh300.jpg'
      },
      {
        name: 'consultMessage',
        desc: 'productTemplate',
        path: '/product/introduce',
        img: 'https://qmsck.com/wp-content/uploads/2023/04/10%E6%AC%BE%E9%AB%98%E6%B8%85%E6%9C%AA%E6%9D%A5%E6%B4%BE%E9%9C%93%E8%99%B9%E8%B5%9B%E5%8D%9A%E6%9C%8B%E5%85%8B%E9%A3%8E3D%E7%A9%BA%E9%97%B4%E8%B5%B0%E5%BB%8A%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87%E8%AE%BE%E8%AE%A1%E7%B4%A0%E6%9D%90-Sci-Fi-Futuristic-Ne_02.png'
      },
      {
        name: 'consult1',
        desc: 'introduceProduct',
        path: '/product/introduce',
        img: 'https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-cyberpunk-street-blue-cyberpunk-e-commerce-image_784236.jpg'
      },
      {
        name: 'consult2',
        desc: 'introduceProduct',
        path: '/product/introduce',
        img: 'https://xqimg.imedao.com/1767f2ca610a93d3fe93ce70.png!800.jpg'
      }
    ]
  },
  {
    title: 'about',
    children: [
      {
        name: 'about',
        desc: 'about',
        path: '/about',
        img: 'https://img95.699pic.com/photo/60045/0889.jpg_wh300.jpg',
        children: [
          {
            name: 'design',
            path: '/product/introduce'
          },
          {
            name: 'preview',
            path: '/product/introduce'
          }
        ]
      },
      {
        name: 'concate',
        desc: 'concate',
        path: '/product/introduce',
        img: 'https://img95.699pic.com/photo/50236/7640.jpg_wh300.jpg'
      }
    ]
  }
]
const menuList = ref([])
onMounted(() => {
  menuList.value = menus
})
const navStyle = useState('navStyle')

const changeStyle = () => {
  if (route.path === '/home') {
    navStyle.value = {
      backgroundColor: 'transparent'
    }
  } else {
    navStyle.value = {
      backgroundColor: '#000'
    }
    // 如果不打印会导致 card跳转顶部无颜色。先暂时这么处理
    console.info(navStyle.value)
    console.clear()
  }
}
watchEffect(() => {
  changeStyle()
})
</script>

<style lang="scss" scoped>
.mod-header {
  width: 100%;
  position: fixed;
  z-index: 999;
  .logo {
    width: 60px;
    display: block;
    margin: 10px;
  }
  .active {
    border-bottom: 2px solid #000;
  }
  .menu-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
