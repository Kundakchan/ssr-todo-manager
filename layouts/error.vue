<script lang="ts" setup>
import ru_RU from 'ant-design-vue/es/locale/ru_RU'
const locale = reactive(ru_RU)
const theme = reactive({
  token: {
    borderRadius: 0
  }
})
</script>

<template>
  <a-config-provider :theme="theme" :locale="locale">
    <a-layout class="content">
      <slot></slot>
    </a-layout>
  </a-config-provider>
</template>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
  display: grid;
  align-items: center;
}
</style>