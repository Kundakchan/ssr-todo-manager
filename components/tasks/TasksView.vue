<script lang="ts" setup>
import type { TableColumnProps } from "ant-design-vue";
interface Task {
  id: string;
  created: string;
  updated: string;
  name: string;
}
const columns: TableColumnProps<Task>[] = reactive([
  {
    title: "Дата создания",
    dataIndex: "created",
    sorter: true,
    sortDirections: ["ascend", "descend"],
    width: 150,
  },
  {
    title: "Дата обновления",
    dataIndex: "updated",
    sorter: true,
    sortDirections: ["ascend", "descend"],
    width: 180,
  },
  {
    title: "Названия",
    dataIndex: "name",
    sorter: true,
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Действия",
    dataIndex: "actions",
    width: 80,
  },
]);

const tasks = ref([]);
</script>

<template>
  <ClientOnly>
    <a-table
      class="table-tasks"
      :data-source="tasks"
      :columns="columns"
    />
  </ClientOnly>
</template>

<style lang="scss" scoped>
.table-tasks {
  width: 100%;
}
</style>
