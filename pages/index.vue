<template>
  <h1>Main Page</h1>
  <h2>{{ $hello('World') }}</h2>
  <div>
    <img src="~/assets/icon.png" alt="Nuxt3 Icon" />
    <img src="/icon.png" alt="Nuxt3 Icon" />
  </div>
  <div>Count:{{ count }}</div>
  <div>
    <button @click="() => inc()">increase</button>
    <button @click="() => dec()">decrease</button>
  </div>
  <button @click="handleClick">Coupon Get</button>
  <Coupon v-if="show" />
</template>
<script setup>
  const { $hello } = useNuxtApp();

  const show = ref(false);

  const handleClick = () => {
    show.value = true;
  };

  const { count, inc, dec } = useCounter(100);
</script>
