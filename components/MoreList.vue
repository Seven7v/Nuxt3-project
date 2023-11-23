<template>
  <div class="mod-more-list">
    <div
      v-for="item of props.list"
      :key="item.id"
      class="more-item"
      @click="handleToProduct(item.id)"
    >
      <img :src="item.img" width="250" height="130" alt="" />
      <div class="more-word">
        <h3>
          {{ $t(`previewCard.${item.title}`) }}
        </h3>
        <div class="more-desc">
          {{ $t(`previewCard.${item.desc}`) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const props = defineProps({
  list: {
    type: Array,
    default: {}
  }
})
const handleToProduct = (id: number) => {
  router.push(`/product/${id}`)
}
</script>

<style lang="scss">
.mod-more-list {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .more-item {
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 4px rgba(10, 10, 10, 0.15);
  }
  .more-item:hover {
    transform: scale(1.05);
  }
  .more-word {
    margin-left: 20px;
    padding-right: 20px;
  }
  .more-desc {
    word-break: break-all; // 允许单词内自动换行，如果一个单词很长的话
    text-overflow: ellipsis; // 溢出用省略号显示
    overflow: hidden; // 超出的文本隐藏
    display: -webkit-box; // 作为弹性伸缩盒子模型显示
    -webkit-line-clamp: 2; // 显示的行
    -webkit-box-orient: vertical;
  }
}
</style>
