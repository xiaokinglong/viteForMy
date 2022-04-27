<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from 'vue';
const count: Ref<number> = ref(0);
</script>

<template>
  <div class="home">{{ count }}</div>
</template>

<style scoped lang="less"></style>
