<template>
  <div class="mod-preview-card">
    <div class="card">
      <h2>{{ props.title }}</h2>
      <div class="card-content">
        <div
          class="card-left"
          :style="{
            backgroundImage: 'url(' + props.content.img + ')',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }"
          v-if="props.content.img || props.content.video"
        >
          <h2 v-if="props.content.title" class="card-title">
            {{ $t(`previewCard.${props.content.title}`) }}
          </h2>
        </div>
        <div class="card-right" v-if="props.content.moreList">
          <more-list :list="props.content.moreList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    defalut: ''
  },
  content: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="scss">
.mod-preview-card {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
  color: #fff;
  background: linear-gradient(#393939, #022043);
  padding: 50px;
  .card {
    width: 1400px;
    margin: 0 auto;
    &-content {
      padding-top: 20px;
      height: 600px;
      display: flex;
    }
    &-left {
      max-width: 1100px;
      width: 65%;
      border-radius: 10px;
      height: 100%;
    }
    &-right {
      flex: 1;
    }
    &-title {
      width: 65%;
      margin: 0 auto;
      font-size: 48px;
      line-height: 60px;
      opacity: 0.6;
      margin-top: 200px;
    }
  }
}
</style>
