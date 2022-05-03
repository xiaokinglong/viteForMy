<template>
  <n-space vertical>
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :render-label="renderMenuLabel"
      :render-icon="renderMenuIcon"
      :expand-icon="expandIcon"
    />
  </n-space>
</template>

<script lang="ts">
import { h, ref, defineComponent } from "vue";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { BookmarkOutline, CaretDownOutline } from "@vicons/ionicons5";

const menuOptions: MenuOption[] = [
  {
    label: "且听风吟",
    key: "hear-the-wind-sing",
    href: "/home",
  },
  {
    label: "1973年的弹珠玩具",
    key: "pinball-1973",
    children: [
      {
        label: "鼠",
        key: "rat",
        href: "/statistical",
      },
    ],
  },
  {
    label: "寻羊冒险记",
    key: "a-wild-sheep-chase",
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    children: [
      {
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
          },
          {
            label: "羊男",
            key: "sheep-man",
          },
        ],
      },
      {
        label: "饮品",
        key: "beverage",
        children: [
          {
            label: "威士忌",
            key: "whisky",
          },
        ],
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich",
          },
        ],
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];

export default defineComponent({
  setup() {
    return {
      collapsed: ref(false),
      menuOptions,
      renderMenuLabel(option: MenuOption) {
        if ("href" in option) {
          return h(
            "a",
            {
              href: '#' + option.href,
            },
            option.label as string
          );
        }
        return option.label as string;
      },
      renderMenuIcon(option: MenuOption) {
        // 渲染图标占位符以保持缩进
        if (option.key === "sheep-man") return true;
        // 返回 falsy 值，不再渲染图标及占位符
        if (option.key === "food") return null;
        return h(NIcon, null, { default: () => h(BookmarkOutline) });
      },
      expandIcon() {
        return h(NIcon, null, { default: () => h(CaretDownOutline) });
      },
    };
  },
});
</script>
