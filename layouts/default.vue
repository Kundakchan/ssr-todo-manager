<script lang="ts" setup>
import ru_RU from "ant-design-vue/es/locale/ru_RU";
const locale = reactive(ru_RU);
const theme = reactive({
  token: {
    borderRadius: 0,
  },
});
</script>

<template>
  <a-config-provider :theme="theme" :locale="locale">
    <a-layout>
      <a-layout-header class="header">
        <header-menu />
      </a-layout-header>
      <a-layout-content class="content pl24 pr24">
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-config-provider>
</template>

<style lang="scss" scoped>
.header {
  background-color: transparent;
  padding-inline: 24px;
}
.content {
  min-height: calc(100vh - 64px);
}
</style>
