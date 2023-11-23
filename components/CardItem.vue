<template>
  <div
    class="mod-card"
    :style="{
      backgroundImage: 'url(' + props.img + ')',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat'
    }"
    @click="handleToProduct"
  >
    <h2 v-if="props.title">
      {{ $t(`showCard.${props.title}`) }}
      <div v-if="props.desc" class="card-desc">
        {{ $t(`showCard.${props.desc}`) }}
      </div>
    </h2>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    defalut: ''
  },
  desc: {
    type: String,
    defalut: ''
  },
  img: {
    type: String,
    defalut: ''
  },
  id: {
    type: Number,
    defalut: 1
  }
})
const handleToProduct = () => {
  router.push(`/product/${props.id}`)
}
</script>

<style lang="scss">
.mod-card {
  width: 100%;
  min-width: 680px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(30, 30, 30, 0.15);
  cursor: pointer;
  h2 {
    margin: 0;
    padding-left: 60px;
    padding-top: 60px;
    width: 60%;
    background-image: linear-gradient(121deg, #1c1c1c 0%, #082033 60%, rgba(255, 255, 255, 0) 60%);
  }
  img {
    width: 100%;
  }
  .card-desc {
    font-size: 14px;
    margin-top: 20px;
    width: 45%;
    text-overflow: ellipsis; // 溢出用省略号显示
    overflow: hidden; // 超出的文本隐藏
    display: -webkit-box; // 作为弹性伸缩盒子模型显示
    -webkit-line-clamp: 2; // 显示的行
    -webkit-box-orient: vertical;
  }
}
.mod-card:hover {
  border: 1px solid #ccc;
}
</style>
