<script lang="ts" setup>
const user = ref({
  name: "", // store.user?.displayName,
  email: "", // store.user?.email,
  password: "",
});

const loading = ref(false);

// watch(
//   () => store.user,
//   (value) => {
//     user.value = {
//       name: value?.displayName,
//       email: value?.email,
//       password: ''
//     }
//   }
// )

const submit = async () => {
  // loading.value = true
  // try {
  //   if (typeof user.value.name === 'string' && typeof user.value.email === 'string') {
  //     profileUpdate({ name: user.value.name, email: user.value.email, password: user.value.password })
  //   }
  // } catch (error) {
  //   console.error(error)
  // } finally {
  //   loading.value = false
  // }
};

const stylelineVertical = {
  height: "100%",
  backgroundColor: "#FF2E00",
  width: "3px",
};
</script>

<template>
  <div class="profile-wrapper grid pt24 pl24 pr24 pb24 mt24 mb24">
    <a-row>
      <a-col :offset="4">
        <a-divider
          type="vertical"
          :style="stylelineVertical"
        />
      </a-col>
      <a-col class="pl24">
        <a-typography-title class="mb64 mt0">
          <span class="color-red">Настройка</span> профиля
        </a-typography-title>
      </a-col>
    </a-row>
    <a-row>
      <a-col :offset="4">
        <a-divider
          type="vertical"
          :style="stylelineVertical"
        />
      </a-col>
      <a-col class="pl24">
        <div class="pb24">
          <a-typography-text strong>
            Имя
          </a-typography-text>
          <a-input v-model:value="user.name" />
        </div>
        <div class="pb24">
          <a-typography-text strong>
            Email
          </a-typography-text>
          <a-input v-model:value="user.email" />
        </div>
        <div class="pb24">
          <a-typography-text strong>
            Пароль
          </a-typography-text>
          <a-input v-model:value="user.password" />
        </div>
        <a-typography-text strong>
          Роль: Пользователь
        </a-typography-text>
      </a-col>
    </a-row>
    <a-row>
      <a-col :offset="4">
        <a-divider
          type="vertical"
          :style="stylelineVertical"
        />
      </a-col>
      <a-col class="pl24">
        <a-button
          :loading="loading"
          :disabled="loading"
          type="primary"
          @click="submit"
        >
          Сохранить
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/variables/colors";
.profile-wrapper {
  grid-template-rows: auto 1fr auto;
  position: relative;
  background-color: get-color("white");
  min-height: calc(100vh - (64px + 48px));
  border-radius: 24px;
  box-shadow: 0 0 2px 0 rgb(197, 197, 197);
}
</style>
