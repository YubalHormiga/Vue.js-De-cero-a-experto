<script setup>
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
</script>

<template>
  <h1>Mi primera App</h1>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <hr />
  <MyCounter :value="3" />
  <MyCounterScript :value="5" />
  <MyCounterScript2 :value="10" />
</template>
<style scoped></style>
