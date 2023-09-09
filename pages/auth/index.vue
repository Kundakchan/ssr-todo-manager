<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});

const email = ref("");
const password = ref("");

const submit = async () => {
  if (!email.value && !password.value) return;
  try {
    await logIn(password.value, email.value);
    navigateTo({ name: "index" });
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="login">
    <a-typography-title :level="3">Авторизация</a-typography-title>
    <a-typography-title :level="5">Email</a-typography-title>
    <a-input v-model:value="email" />
    <a-typography-title :level="5">Пароль</a-typography-title>
    <a-input-password v-model:value="password" />
    <a-row class="mt24" :gutter="16" align="middle" justify="space-between">
      <a-col>
        <a-button type="primary" @click="submit">Авторизоваться</a-button>
      </a-col>
      <a-col>
        <nuxt-link :to="{ name: 'auth-signIn' }">Регистрация</nuxt-link>
      </a-col>
    </a-row>
  </div>
</template>
