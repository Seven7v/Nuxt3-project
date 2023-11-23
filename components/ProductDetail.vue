<template>
  <div class="mod-product-detail">
    <div class="article-content">
      <div class="article-top">
        <div class="join-left">
          <h2>{{ $t('joinDesc') }}</h2>
        </div>
      </div>
      <h1>{{ $t(`${props.from}.title`) }}</h1>
      <p v-for="item of 5" :key="item" class="article-p">
        {{ $t(`${props.from}.desc${item + 1}`) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  from: {
    type: String,
    default: 'article'
  }
})
</script>

<style lang="scss">
.mod-product-detail {
  padding-top: 80px;
  .article-content {
    width: 1400px;
    margin: 20px auto;
    padding-bottom: 50px;
    .article-p {
      margin-bottom: 30px;
      font-size: 20px;
      line-height: 60px;
    }
    h1 {
      margin-bottom: 50px;
    }
    .article-top {
      height: 280px;
      border-radius: 8px;
      overflow: hidden;
      background-image: url(https://pic4.zhimg.com/80/v2-dc798e81415e6bbcf7a37946640c1997_1440w.webp);
      background-size: 50% 100%;
      background-repeat: no-repeat;
      background-position: right;
      margin-bottom: 50px;
      h2 {
        margin: 0;
        padding-top: 110px;
        color: #fff;
      }
      .join-left {
        margin: 0;
        height: 280px;
        padding-left: 320px;
        color: #fff;
        width: 70%;
        background-image: linear-gradient(
          121deg,
          #303030 0%,
          #051420 60%,
          rgba(255, 255, 255, 0) 60%
        );
      }
    }
  }
}
</style>
