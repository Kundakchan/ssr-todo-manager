<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue'

// Types
import type { ItemType } from 'ant-design-vue'

const items: ItemType[] = reactive([
  {
    key: 'Profile',
    label: 'Настройка профиля',
    onClick: () => {
      return navigateTo({
        name: 'profile'
      })
    }
  },
  {
    key: 'LogOut',
    label: 'Выйти',
    onClick: async () => {
      await logOut()
      return navigateTo({
        name: 'auth'
      })
    }
  }
])

</script>

<template>
<a-dropdown>
  <a-button :shape="'circle'" :type="'primary'" :size="'large'" :icon="h(UserOutlined)"></a-button>
  <template #overlay>
    <div>
      <a-button v-for="(item) in 3">item - {{ item }}</a-button>
    </div>
    
    <!-- <a-menu
      :items="items"
    /> -->
  </template>
</a-dropdown>
</template>