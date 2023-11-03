<template>
  <h1>About Page</h1>
  <p>Count: {{ counter }}</p>
  <div><button @click="counter++">+</button></div>
</template>
<script setup>
  definePageMeta({
    middleware: 'auth',
  });

  const counter = useCounter2();
  /*
  definePageMeta({
    layout: 'custom',
  });
  */
</script>
