<script lang="ts" setup>
import { UserOutlined } from "@ant-design/icons-vue";

// Types
import type { ItemType } from "ant-design-vue";

const items: ItemType[] = reactive([
  {
    key: "Profile",
    label: "Настройка профиля",
    onClick: () => {
      return navigateTo({
        name: "profile",
      });
    },
  },
  {
    key: "LogOut",
    label: "Выйти",
    onClick: async () => {
      await logOut();
      return navigateTo({
        name: "auth",
      });
    },
  },
]);
</script>

<template>
  <client-only>
    <template #fallback>
      <a-button
        :shape="'circle'"
        :type="'primary'"
        :size="'large'"
        :icon="h(UserOutlined)"
      ></a-button>
    </template>
    <a-dropdown>
      <a-button
        :shape="'circle'"
        :type="'primary'"
        :size="'large'"
        :icon="h(UserOutlined)"
      ></a-button>
      <template #overlay>
        <a-menu :items="items" />
      </template>
    </a-dropdown>
  </client-only>
</template>
