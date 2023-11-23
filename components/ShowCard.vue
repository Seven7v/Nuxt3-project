<template>
  <div class="mod-show-card">
    <h2>{{ props.title }}</h2>
    <div v-if="props.content.length" class="item-wrap">
      <div v-for="item of props.content" :key="item.id">
        <card-item :title="item.title" :id="item.id" :desc="item.desc" :img="item.img"></card-item>
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
    type: Array,
    default: []
  }
})
</script>

<style lang="scss">
.mod-show-card {
  width: 1400px;
  margin: 0 auto;
  .item-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
