<template>
  <div v-if="pizza" class="pizza-block">
    <img class="pizza-block__image" :src="pizza.imageUrl" alt="Pizza" />
    <h4 class="pizza-block__title">{{ pizza.name }}</h4>
    <div class="pizza-block__selector">
      <Types :availableTypes="pizza.types" />
      <Sizes
        @activeSizePrice="selectedPizzaPrice=$event"
        :availableSizes="pizza.sizes"
      />
    </div>
    <div class="pizza-block__bottom">
      <div class="pizza-block__price">
        от {{ pizza.price[selectedPizzaPrice] }} ₽
      </div>
      <div @click="handleAddCount" class="button button--outline button--add">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
        <i v-if="count">{{ count }}</i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Sizes from "./Sizes.vue";
import Types from "./Types.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  props: ["pizza"],
  components: { Types, Sizes },
  setup(props) {
    const store = useStore();

    const selectedPizzaPrice = ref(0);
    
    const count = computed(
      () =>
        store.state.cartItems.get(
          props.pizza.id + props.pizza.price[selectedPizzaPrice.value]
        )?.count
    );

    const handleAddCount = () => {
      const pizzainCart = {
        ...props.pizza,
        count: count.value,
        price: props.pizza.price[selectedPizzaPrice.value],
      };
      console.log(pizzainCart);
      store.commit("ADD_TO_CART", pizzainCart);
    };

    return {
      handleAddCount,
      count,
      selectedPizzaPrice,
    };
  },
};
</script>

<style>
</style>