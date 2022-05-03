<template>
  <n-layout has-sider class="base-layout">
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="0"
      :width="240"
      show-trigger="arrow-circle"
      bordered
    >
      <Logo />
      <Menus />
    </n-layout-sider>
    <n-layout>
      <n-layout-header style="height: 64px" class="base-layout-header" bordered>
        <n-dropdown :options="headerOptions">
          <n-badge value="999+">
            <n-avatar>Long</n-avatar>
          </n-badge>
        </n-dropdown>
      </n-layout-header>
      <n-layout-content
        :content-style="{
          padding: '24px',
        }"
      >
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { ref, h } from "vue";
import type { Ref, Component } from "vue";
import Logo from "/src/components/logo/index.vue";
import Menus from "/src/components/menus/index.vue";
import { NIcon } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";
interface OptionsItem {
  label: string;
  key: string;
  icon: Function;
}

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

const headerOptions: Ref<OptionsItem[]> = ref([
  {
    label: "用户资料",
    key: "profile",
    icon: renderIcon(UserIcon),
  },
  {
    label: "编辑用户资料",
    key: "editProfile",
    icon: renderIcon(EditIcon),
  },
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
]);
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
