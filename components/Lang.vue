<template>
  <div>
    <el-radio-group v-model="$i18n.locale" size="large">
      <el-radio-button label="zh">中文</el-radio-button>
      <el-radio-button label="en">English</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const handleChange = () => {
  const cookieLang = useCookie('lang')
  cookieLang.value = locale.value
}
</script>

<style lang="scss">
.el-radio-button__original-radio:checked + .el-radio-button__inner {
  background: #fff;
  color: #000;
  border-color: #fff !important;
  box-shadow: none !important;
}
.el-radio-button__inner {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
}
.el-radio-button__inner:hover {
  color: #f1f1f1;
}
</style>
