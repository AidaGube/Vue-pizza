<template>
    <div class="header">
        <div class="container">
          <router-link to="/">
            <div class="header__logo">
              <img width="38" :src="pizzaIcon" alt="Pizza logo" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </router-link>
          
          <div class="header__serch-bar">
            <div class="search-bar__input">
              <input @input="handleInput" v-model="seacrhData" type="text" placeholder="Введите текст для поиска...">
              <div class="search__icon">
                <img :src="seacrhIcon" >
              </div>
            </div>

            <div class="search-bar__results" :class="{active: false}">
                <ul>
                  <li class="active">
                    Результаты поиска
                    <img :src="seacrhIconBlack" alt="">
                  </li>
                  <li>
                    Результаты поиска
                    <img :src="seacrhIconBlack" alt="">
                  </li>
                  <li>
                    Результаты поиска
                    <img :src="seacrhIconBlack" alt="">
                  </li>
                </ul>
            </div>

          </div>
          <div class="header__cart">
            <router-link to="/cart" class="button button--cart">
              <span>{{totalSum ? totalSum : 0}} ₽</span>
              <div class="button__delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{{totalCount ? totalCount : 0}}</span>
            </router-link>
          </div>
        </div>
    </div>
</template>

<script>
import pizzaIcon from "@/assets/img/pizza-logo.svg"
import seacrhIcon from "@/assets/img/search-icon.svg"
import seacrhIconBlack from "@/assets/img/search-icon-black.svg"
import { computed, ref } from '@vue/runtime-core'
import {useStore} from "vuex"
export default {
    setup() {
      const store = useStore()
      const totalSum = computed(() =>  store.getters.totalSumOfPizzas)
      const totalCount = computed(() =>  store.getters.totalCountOfPizzas)
      let seacrhData = ref('')

      const handleInput = () => {
        store.commit("SET_SEARCH_RESULTS", seacrhData.value)
      }

      

      return{pizzaIcon,totalSum,totalCount,seacrhIcon,seacrhIconBlack,seacrhData,handleInput}
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.header {
  border-bottom: 1px solid $gray-line;
  padding: 40px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__serch-bar{
    background: #F2F2F2;
    border-radius: 30px;
    padding: 5px 5px 5px 25px;
    width: 40%;
    position: relative;

    .search-bar__results{
      position: absolute;
      width: 100%;
      left: 0px;
      top: 65px;
      height: auto;
      display: none;
      background: #FFFFFF;
      box-shadow: 1px 10px 7px rgba(0, 0, 0, 0.25);
      border-radius: 10px;


      ul li{
        padding: 9px 20px 9px 25px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        cursor: pointer;
        &.active{
          background: rgba(254, 95, 30, 0.05);
        }
      }
      &.active{
        display: block;
      }
    }

    .search-bar__input{
      display: flex;

    }
    .search__icon{
      padding: 12px;
      border-radius: 50%;
      background: #FE5F1E;
      width: 40px;
      height: 40px;
    }

    input{
      width: 100%;
      background: inherit;
      border: none;
      outline: none;
    }
  }

  &__logo {
    display: flex;

    img {
      margin-right: 15px;
    }

    h1 {
      color: #181818;
      font-size: 24px;
      letter-spacing: 1%;
      text-transform: uppercase;
      font-weight: 800;
    }

    p {
      color: #7b7b7b;
    }
  }
}

</style>