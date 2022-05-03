<template>
  <n-form ref="formRef" inline :model="formValue" :rules="rules">
    <n-grid cols="1 400:2 600:3 800:4 1000:5" x-gap="10" y-gap="0">
      <n-grid-item v-for="(item, i) in formList" :key="i">
        <n-grid cols="12" x-gap="10" class="my-form-item">
          <n-grid-item span="4" class="label-text">{{
            item.label
          }}</n-grid-item>
          <n-grid-item span="8">
            <n-form-item :path="item.path">
              <n-input
                v-model:value="formValue[item.key]"
                :placeholder="
                  item.placeholder ? item.placeholder : '请输入' + item.label
                "
              />
            </n-form-item>
          </n-grid-item>
        </n-grid>
      </n-grid-item>

      <n-grid-item>
        <n-form-item>
          <n-button attr-type="button" @click="handleValidateClick">
            验证
          </n-button>
        </n-form-item>
      </n-grid-item>
    </n-grid>
  </n-form>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
import type { Ref } from "vue";
import { FormInst } from "naive-ui";

const { formList, formValue, rules } = defineProps({
  formList: {
    type: Array,
    default: [],
  },
  formValue: {
    type: Object,
    default: {},
  },
  rules: {
    type: Object,
    default: {},
  },
});
const formRef = ref<FormInst | null>(null);

const emit = defineEmits(['submit']);
const baseList: Ref<string[]> = ref(["light-green", "green", "green"]);

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log(formValue);
      emit('submit', formValue)
      // formValue
      // message.success("Valid");
    } else {
      console.log(errors);
      // message.error("Invalid");
    }
  });
};
</script>

<style lang="less" scoped>
.my-form-item {
  display: flex;
  align-items: center;
  .label-text {
    text-align: right;
  }
}

.light-green {
  /* height: 108px; */
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  /* height: 108px; */
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
