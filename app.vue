<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
  const admin = false;
  const layout = admin ? 'custom' : 'default';
</script>
