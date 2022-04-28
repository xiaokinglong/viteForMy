<template>
  <n-layout has-sider class="base-layout">
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="0"
      :width="240"
      show-trigger="arrow-circle"
      content-style="padding: 24px;"
      bordered
    >
      <p>海淀桥 海淀桥 海淀桥 海淀桥 海淀桥</p>
    </n-layout-sider>
    <n-layout-header style="height: 64px" class="base-layout-header" bordered>
      <n-popover trigger="hover">
        <template #trigger>
          <n-badge value="999+">
            <n-avatar>Long</n-avatar>
          </n-badge>
        </template>
        <n-list bordered>
          <n-list-item>设置</n-list-item>
          <n-list-item>用户信息</n-list-item>
        </n-list>
      </n-popover>
    </n-layout-header>
    <n-layout-content content-style="">
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const headerOptions: Ref<string[]> = ref(["设置"]);
</script>

<style lang="less" scoped>
.base-layout {
  height: 100%;
  .base-layout-header {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding-right: 24px;
  }
}
</style>
