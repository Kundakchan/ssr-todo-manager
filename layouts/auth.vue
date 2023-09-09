<script lang="ts" setup>
import ruRU from "ant-design-vue/es/locale/ru_RU";
const locale = reactive(ruRU);
const theme = reactive({
  token: {
    colorBgLayout: "#fff",
    borderRadius: 0,
  },
});
</script>

<template>
  <a-config-provider :theme="theme" :locale="locale">
    <a-layout class="content">
      <a-row align="middle">
        <a-col class="background-container" :span="17">
          <img
            class="background"
            src="@/assets/images/authorization/background.webp"
            alt=""
          />
        </a-col>
        <a-col class="pt24 pb24 pr64" :span="7">
          <slot></slot>
        </a-col>
      </a-row>
    </a-layout>
  </a-config-provider>
</template>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
}
.background-container {
  height: 100vh;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 0, 40% 100%, 0 100%);
}
.background {
  height: 100%;
  float: right;
}
</style>
