<script setup>
  /*
  const { data: posts, error, refresh, } = await useFetch(
    'https://jsonplaceholder.typicode.com/posts/'
  );
  */
  console.log('useNuxtApp().payload.data');
  console.log(useNuxtApp().payload.data);
  const { data: posts, error } = await useAsyncData('posts',() =>
    $fetch('https://jsonplaceholder.typicode.com/posts/')
  );
  console.log(('error', error.value));
</script>
<template>
  <div>
    <h1>Posts一覧</h1>
    <button @click="refresh()">再取得</button>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
