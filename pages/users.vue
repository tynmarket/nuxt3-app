<template>
  <h1>Usersページ</h1>
  <p>Count: {{ counter }}</p>
  <NuxtErrorBoundary @error="someErrorLogger">
    <NuxtPage />
    <template #error="{ error }">
      <p>{{ error }}</p>
      <button @click="resetError(error)">Clear Error</button>
    </template>
</NuxtErrorBoundary>
</template>
<script setup>
const counter = useCounter2();

const resetError = (error) => {
  error.value = null;
};

const someErrorLogger = (error) => {
  //取得したエラーで別の処理を行う
  console.log('someErrorLogger', error);
};
</script>
