<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <a-row :justify="'center'">
      <a-col>
        <a-typography-title class="fs-64 mb48 mt48">
          <span class="color-red">Todo</span> manager
        </a-typography-title>
      </a-col>
    </a-row>
    <a-row>
      <a-col>
        <tasks-filters />
      </a-col>
    </a-row>
    <a-row>
      <tasks-view />
    </a-row>
  </div>
</template>
