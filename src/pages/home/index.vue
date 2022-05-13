<template>
  <div class="home">
    <BaseSearch
      :formList="formList"
      :formValue="formValue"
      :rules="rules"
      @submit="handleSubmit"
    />

    <div @click="handleUpdate">{{ counter }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import BaseSearch from "/src/components/base-search/index.vue";
import { store } from "/src/store/index.ts";
import { storeToRefs } from 'pinia';
interface BaseType {
  label: string;
  key: string;
  path: string;
  placeholder?: string;
}

interface formValueType {
  name: string;
  age: string;
  rules: {};
}

interface RulesType {}
const formList: Ref<BaseType[]> = ref([
  {
    label: "姓名",
    key: "name",
    path: "name",
    placeholder: "请输入姓名",
  },
  {
    label: "年龄",
    key: "age",
    path: "age",
  },
]);

// const { counter , updateCounter } = storeToRefs(store());
const stores = store();
const { counter } = storeToRefs(stores);
// const stores = storeToRefs(store());
console.log(stores);
// console.log(stores.updateCounter);
const formValue = ref({
  name: "",
  age: "",
});

const rules = ref({
  name: {
    required: true,
    message: "请输入姓名",
    trigger: ["input", "blur"],
  },
  age: {
    required: true,
    message: "请输入年龄",
    trigger: ["input", "blur"],
  },
});
const handleSubmit = (value) => {
  console.log({ value });
};
const handleUpdate = () => {
  stores.updateCounter();
  // counter+ 1;
}
</script>

<style scoped lang="less"></style>
