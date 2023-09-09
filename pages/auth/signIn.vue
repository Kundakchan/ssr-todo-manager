<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});

const username = ref("");
const email = ref("");
const password = ref("");

const submit = async () => {
  try {
    await registration(password.value, email.value, username.value);
    navigateTo({ name: "index" });
  } catch (error) {
    // console.error(error);
  }
};
</script>

<template>
  <div class="login">
    <a-typography-title :level="3">Регистрация</a-typography-title>
    <a-typography-title :level="5">Имя пользователя</a-typography-title>
    <a-input v-model:value="username" />
    <a-typography-title :level="5">Email</a-typography-title>
    <a-input v-model:value="email" />
    <a-typography-title :level="5">Пароль</a-typography-title>
    <a-input-password v-model:value="password" />
    <a-row class="mt24" :gutter="16" align="middle" justify="space-between">
      <a-col>
        <a-button type="primary" @click="submit">Регистрация</a-button>
      </a-col>
      <a-col>
        <nuxt-link :to="{ name: 'auth' }">Авторизоваться</nuxt-link>
      </a-col>
    </a-row>
  </div>
</template>
