<script lang="ts" setup>
import {
  HomeOutlined,
  InfoCircleOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons-vue";

const navigations = reactive([
  {
    name: "index",
    icon: HomeOutlined,
  },
  {
    name: "about",
    icon: InfoCircleOutlined,
  },
  {
    name: "users",
    icon: UsergroupAddOutlined,
  },
]);
</script>

<template>
  <a-row class="menu-background">
    <a-col flex="auto">
      <a-row justify="center">
        <a-col>
          <a-space>
            <NuxtLink
              v-for="(item, index) in navigations"
              :key="index"
              :to="{ name: item.name }"
            >
              <a-button :shape="'circle'" :size="'large'" :type="'primary'">
                <template #icon>
                  <component :is="item.icon"></component>
                </template>
              </a-button>
            </NuxtLink>
          </a-space>
        </a-col>
      </a-row>
    </a-col>
    <a-col flex="none">
      <header-user-menu></header-user-menu>
    </a-col>
  </a-row>
</template>

<style lang="scss" scoped>
.menu-background {
  background-color: white;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 32px;
  margin-top: 8px;
  box-shadow: 0px 0px 2px 0 rgb(197, 197, 197);
}
</style>
