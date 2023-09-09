<script lang="ts" setup>
import type { TableColumnProps } from "ant-design-vue";

const searchText = ref("");
const onSearch = () => {
  console.log("onSearch");
};

interface Users {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

const usersList = ref([]);
const columns: TableColumnProps<Users>[] = reactive([
  {
    title: "Пользователь",
    dataIndex: "name",
    sorter: true,
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Почта",
    dataIndex: "emali",
    sorter: true,
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Пароль",
    dataIndex: "password",
  },
  {
    title: "Роль",
    dataIndex: "role",
  },
  {
    title: "Действия",
    key: "actions",
  },
]);
</script>

<template>
  <a-row :justify="'center'">
    <a-col>
      <a-typography-title class="fs-64 mb48 mt48"
        ><span class="color-red">П</span>ользователи</a-typography-title
      >
    </a-col>
  </a-row>
  <a-row :justify="'center'" class="mb24">
    <a-col :span="12">
      <a-input-search
        v-model:value="searchText"
        placeholder="Имя пользователя"
        enter-button="Поиск"
        size="large"
        @search="onSearch"
      />
    </a-col>
  </a-row>
  <a-row :span="24">
    <ClientOnly>
      <a-table
        class="table-users"
        row-key="id"
        :data-source="usersList"
        :columns="columns"
      ></a-table>
    </ClientOnly>
  </a-row>
</template>

<style lang="scss" scoped>
.table-users {
  width: 100%;
}
</style>
