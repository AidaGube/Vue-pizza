<template>
  <ul>
    <li
      :class="{
        active: activeSize === index && availableSizes.includes(item),
        disabled: !availableSizes.includes(item),
      }"
      v-for="(item, index) in sizesItems"
      :key="item"
      @click="handleActiveSize(index)"
    >
      {{ item }} см
    </li>
  </ul>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["availableSizes"],
  setup(props,context) {
    const sizesItems = [26, 30, 40];
    const activeSize = ref(0);

    if (props.availableSizes[0] !== sizesItems[0]) {
      activeSize.value = sizesItems.findIndex(
        (item) => item === props.availableSizes[0]
      );
    }

    const handleActiveSize = (index) => {
      activeSize.value = index;
      context.emit('activeSizePrice', index)
    };

    return { sizesItems, activeSize, handleActiveSize };
  },
};
</script>

<style>
</style>