<template>
  <div class="mode-home">
    <el-carousel height="900px" class="banner">
      <el-carousel-item v-for="(item, index) in bannerList" :key="item.to">
        <div :class="`banner banner${index + 1}`">
          <div class="banner-title">
            {{ $t(item.title) }}
            <div class="banner-desc">{{ $t(item.desc) }}</div>
            <el-button class="banner-btn" v-if="item.btn">
              {{ $t(item.btn) }}
            </el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <preview-card :title="$t('whatWeDo')" :content="content" />
    <div class="show-content">
      <show-card :title="$t('whatWeHave')" :content="showContent"></show-card>
      <show-card style="margin-top: 60px" :title="$t('news')" :content="showContent2"></show-card>
    </div>
    <JoinUS />
  </div>
</template>

<script setup lang="ts">
import type { PreviewContent, ShowListItem } from '~/types/home'
import { ref, onMounted } from 'vue'
const bannerList = [
  {
    to: '/product/introduce',
    title: 'lyberpink',
    desc: 'whyus',
    btn: 'go'
  },
  {
    to: '/product/introduce',
    title: 'newTry',
    desc: 'whyus'
  },
  {
    to: '/product/introduce',
    title: 'newTry',
    desc: 'whyus'
  }
]

const previewContent: PreviewContent = {
  img: 'https://pic3.zhimg.com/v2-06f7dd55a1df07f7c962fa95f2945532_r.jpg',
  title: 'beauty',
  moreList: [
    {
      title: 'title',
      desc: 'desc',
      img: 'https://pic4.zhimg.com/80/v2-ebea10b64b1275f03bdfc40e9dc76a9b_1440w.webp',
      id: 2
    },
    {
      title: 'title',
      desc: 'desc',
      img: 'https://pic4.zhimg.com/80/v2-5dae7e92968e4a3098812d2e4ee092eb_1440w.webp',
      id: 3
    },
    {
      title: 'title',
      desc: 'desc',
      img: 'https://pic2.zhimg.com/80/v2-ba5949ec2bd3508fad2031a71386d5bd_1440w.webp',
      id: 4
    },
    {
      title: 'title',
      desc: 'desc',
      img: 'https://pic2.zhimg.com/80/v2-00a687a78a1671661c5363aea8fb911d_1440w.webp',
      id: 1
    }
  ]
}

const showList: Array<ShowListItem> = [
  {
    title: 'proName',
    desc: 'proDesc',
    img: 'https://pic4.zhimg.com/80/v2-1a4c1d71e4a181ed1204a505cb0eaa23_1440w.webp',
    id: 1
  },
  {
    title: 'proName',
    desc: 'proDesc',
    img: 'https://pic1.zhimg.com/80/v2-9dbe6dcb0de181647e84a8a2135932f0_1440w.webp',
    id: 2
  },
  {
    title: 'proName',
    desc: 'proDesc',
    img: 'https://pic1.zhimg.com/80/v2-f6a4b4fc2fb29fc985e97c04e409d150_1440w.webp',
    id: 3
  },
  {
    title: 'proName',
    desc: 'proDesc',
    img: 'https://pic1.zhimg.com/80/v2-d72bc22911664ce37601b738689be5dc_1440w.webp',
    id: 4
  }
]
const showList2: Array<ShowListItem> = [
  {
    title: 'proName',
    desc: 'proDesc',
    img: 'https://pic3.zhimg.com/80/v2-a3e81a37b2d86970ad346b3d3e864912_1440w.webp',
    id: 1
  },
  {
    title: 'proName',
    desc: 'proDesc',
    img: 'https://pic1.zhimg.com/80/v2-1f713db7d4f71474b387fad0d7936580_1440w.webp',
    id: 2
  },
  {
    title: 'proName',
    desc: 'proDesc',
    img: 'https://pic4.zhimg.com/80/v2-bb2a80b35242409ecde163776b6d4c03_1440w.webp',
    id: 3
  },
  {
    title: 'proName',
    desc: 'proDesc',
    img: 'https://pic4.zhimg.com/80/v2-0485656f86e438e43904b25904376e9f_1440w.webp',
    id: 4
  },
  {
    title: 'proName',
    desc: 'proDesc',
    img: 'https://pic3.zhimg.com/80/v2-08df055fb24e8bc9e3004ea8a4d373f6_1440w.webp',
    id: 6
  },
  {
    title: 'proName',
    desc: 'proDesc',
    img: 'https://pic1.zhimg.com/80/v2-bc2970f701f1b066430b0f7bc06916e0_1440w.webp',
    id: 7
  }
]
const showContent = ref(showList)
const showContent2 = ref(showList2)
const content = ref(previewContent)
const list = ref([])
const scorll = ref(0)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
const handleScroll = () => {
  scorll.value = document.documentElement.scrollTop || document.body.scrollTop
  const navStyle = useState('navStyle')
  if (scorll.value > 100) {
    navStyle.value = {
      backgroundColor: '#000'
    }
  } else {
    navStyle.value = {
      backgroundColor: 'transparent'
    }
  }
}
</script>

<style lang="scss">
.mode-home {
  .banner {
    width: 100%;
    height: 900px;
    background-size: cover;
    background-position: center;
    &-title {
      color: #fff;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
        sans-serif;
      font-size: 60px;
      font-weight: 900;
      padding: 300px 500px;
    }
    &-desc {
      font-size: 40px;
      margin-top: 50px;
    }
    &-btn {
      margin-top: 30px;
      padding: 30px 50px !important;
      font-size: 48px;
      color: #000;
    }
  }
  .show-content {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
      sans-serif;
    color: #fff;
    // background: linear-gradient(#393939, #022043);
    background: radial-gradient(
      70.71% 70.71% at 50% 50%,
      rgb(9, 31, 44) 0,
      rgb(52, 51, 51) 75%,
      rgb(39, 38, 38) 100%
    );
    padding: 50px;
  }
  .banner1 {
    background-image: url(https://pic2.zhimg.com/v2-84695046fe3f6a97c1e6868a1a43f641_r.jpg);
  }
  .banner2 {
    background-image: url(https://pic2.zhimg.com/v2-a8055d40599528dcc84c67355dac91f1_r.jpg);
  }
  .banner3 {
    background-image: url(https://pic1.zhimg.com/v2-c2bc308ed73d97e1c27b8be03d73781c_r.jpg);
  }
}
</style>
