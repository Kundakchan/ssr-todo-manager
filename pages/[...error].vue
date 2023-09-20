<script lang="ts" setup>
definePageMeta({
  layout: "error",
});

const page = useRoute().params.error;
const goToHome = () => {
  return navigateTo({
    name: "index",
  });
};
</script>

<template>
  <a-result
    status="404"
    title="404"
    :sub-title="`Извините, мы не можем найти страницу: ${page}`"
  >
    <template #extra>
      <a-button
        type="primary"
        @click="goToHome"
      >
        Вернуться на главную страницу
      </a-button>
    </template>
  </a-result>
</template>
