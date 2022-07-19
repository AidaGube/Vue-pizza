import { createStore } from "vuex";
export default createStore({
  state: {
    pizzas: [],
    category: null,
    sort: "raiting",
    cartItems: new Map(),
    searchValues: "",
  },
  getters: {
    totalSumOfPizzas(state) {
      const price = state.cartItems;
      let sum = 0;

      for (const pizza of price.values()) {
        sum += pizza.price * pizza.count;
      }
      return sum;
    },
    totalCountOfPizzas(state) {
      const price = state.cartItems;
      let count = 0;

      for (const pizza of price.values()) {
        count += pizza.count;
      }
      return count;
    },
  },
  mutations: {
    SET_PIZZAS(state, json) {
      state.pizzas = json;
    },
    SET_CATEGORY(state, value) {
      state.category = value;
    },
    SET_SORT(state, sortKey) {
      state.sort = sortKey;
    },
    ADD_TO_CART(state, pizza) {
      const uniqIdFromStr = pizza.id + '' + pizza.price + pizza.type
      const isPizzaAlreadyAdded = state.cartItems.get(uniqIdFromStr);
      if (isPizzaAlreadyAdded) {
        const modifiedPizza = {
          ...pizza,
          count: isPizzaAlreadyAdded.count + 1,
        };
        state.cartItems.set(uniqIdFromStr, modifiedPizza);
      } else {
        state.cartItems.set(uniqIdFromStr, { ...pizza, count: 1 });
      }
    },
    DEC_TO_CART(state, pizza) {
      const uniqIdFromStr = pizza.id + '' + pizza.price
      const isPizzaAlreadyAdded = state.cartItems.get(uniqIdFromStr);
      const modifiedPizza = {
        ...pizza,
        count: isPizzaAlreadyAdded.count - 1,
      };
      state.cartItems.set(uniqIdFromStr, modifiedPizza);

      if (isPizzaAlreadyAdded.count <=1) {
        state.cartItems.delete(uniqIdFromStr);
      }
    },
    DELETE_PIZZA_IN_CART(state, id) {
      state.cartItems.delete(id);
    },
    DELETE_ALL_PIZZAS_IN_CART(state) {
      if (window.confirm("Вы уверены что хотите очистить корзину?")) {
        state.cartItems.clear();
      }
    },
    SET_SEARCH_RESULTS(state, data) {
      state.searchValues = data;
    },
  },
  actions: {
    async getPizzas({ commit }) {
      const response = await fetch("http://localhost:3000/pizzas");
      const json = await response.json();
      commit("SET_PIZZAS", json);
    },
    async setCategory({ commit, state }, value) {
      const query =
        value !== null
          ? `?category=${value}&_sort=${state.sort}`
          : `?_sort=${state.sort}`;

      const response = await fetch(
        `http://localhost:3000/pizzas${query}&_order=desc`
      );
      const json = await response.json();

      commit("SET_PIZZAS", json);
      commit("SET_CATEGORY", value);
    },
    async setSortBy({ commit, state }, sortKey) {
      const query =
        state.category !== null
          ? `?category=${state.category}&_sort=${sortKey}`
          : `?_sort=${sortKey}`;

      const response = await fetch(
        `http://localhost:3000/pizzas${query}&_order=desc`
      );
      const json = await response.json();
      commit("SET_PIZZAS", json);
      commit("SET_SORT", sortKey);
    },

    async fetchSearchResults({ commit }, searchValue) {
      const response = await fetch(
        `http://localhost:3000/pizzas/?q=${searchValue}`
      );
      const data = await response.json();
      commit("SET_SEARCH_RESULTS", data);
      console.log(searchValue);
    },
  },
  modules: {},
});