<template>
  <div class="mod-join-us">
    <div class="join-left">
      <h2>{{ $t('joinDesc') }}</h2>
      <el-button class="join-btn">{{ $t('joinus') }}</el-button>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.mod-join-us {
  height: 450px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
  width: 100%;
  background-image: url(https://pic1.zhimg.com/80/v2-6516307135e5f9e272615931906cfbf0_1440w.webp);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: right;
  .join-left {
    margin: 0;
    height: 450px;
    padding-left: 600px;
    width: 70%;
    background-image: linear-gradient(121deg, #303030 0%, #051420 60%, rgba(255, 255, 255, 0) 60%);
  }
  h2 {
    margin: 0;
    padding-top: 140px;
    color: #fff;
  }
  .join-btn {
    color: #000;
    padding: 30px 50px;
    font-weight: 900;
    margin-top: 30px;
    font-size: 36px;
  }
}
</style>
