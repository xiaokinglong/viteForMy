<template>
  <div class="home">
    <BaseSearch
      :formList="formList"
      :formValue="formValue"
      :rules="rules"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import BaseSearch from "/src/components/base-search/index.vue";

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
  console.log({value});
};
</script>

<style scoped lang="less"></style>
