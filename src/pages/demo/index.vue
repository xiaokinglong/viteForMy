<template>
  <div class="demo" v-html="html"></div>
</template>

<script setup lang="ts">
import Markdoc from "@markdoc/markdoc";

import { ref } from "vue";

let html = ref<String>("");
const doc = `
# Hello world.
> My first Markdoc page
`;

const ast = Markdoc.parse(doc);

console.log(ast);
const content = Markdoc.transform(ast);

html = Markdoc.renderers.html(content);
console.log(html);
</script>
