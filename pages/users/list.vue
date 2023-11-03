<template>
  <h1>User Listページ</h1>
  <NuxtLink to="1">ID 1</NuxtLink><br>
  <p>User List Count: {{ counter }}</p>
  <div><button @click="inc">+</button></div>
</template>
<script setup>
const counter = ref(0);
const inc = () => {
  throw createError('エラー発生');
  counter.value++;
};
</script>
