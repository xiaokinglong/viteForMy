import { defineStore } from "pinia";
import type { DefineSetupStoreOptions } from "pinia";

export const store = defineStore("root", {
  state: () => {
    return {
      counter: 0,
    };
  },

  actions: {
    updateCounter() {
      this.counter ++;
      // this.counter = counter;
    }
  }
});
