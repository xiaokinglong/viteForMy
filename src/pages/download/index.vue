<template>
  <div calss="download" @click="handlerClick">下载</div>
</template>

<script setup lang="ts">
import asyncPool from "tiny-async-pool";

console.log(asyncPool);

const handlerClick:void = () => {
  console.log('download')
}


</script>
