<template>
    <div class="side-bar active">
        <router-link to="/" class="header__logo">
            <img width="38" :src="logoIcon" alt="Pizza logo" />
            <div>
                <h1>React Pizza</h1>
            </div>
        </router-link>

        <ul>
            <li 
                v-for="(item,index) in sideBarItems" 
                :key="item" 
                :class="{active: activeItem === index}"
                @click="handleActiveItem(index)"
            >
                {{item.title}}
                <img v-if="activeItem !== index" :src="item.icon" alt="">
                <img v-else :src="item.whiteIcon" alt="">
            </li>
            <li class="admin-li">
                Админ
                <img :src="userIcon" alt="">
                
            </li>
        </ul>


    </div>
</template>

<script>
import logoIcon from "@/assets/img/pizza-logo.svg"
import homeIcon from "@/assets/icons/home.svg"
import pizzaIcon from "@/assets/icons/pizza.svg"
import combo from "@/assets/icons/combo.svg"
import chockolateIcon from "@/assets/icons/chockolate.svg"
import drinkIcon from "@/assets/icons/drink.svg"
import userIcon from "@/assets/icons/user.svg"

import homeIconWhite from "@/assets/icons/home-white.svg"
import pizzaIconWhite from "@/assets/icons/pizza-white.svg"
import comboWhite from "@/assets/icons/combo-white.svg"
import chockolateIconWhite from "@/assets/icons/chockolate-white.svg"
import drinkIconWhite from "@/assets/icons/drink-white.svg"

import { ref } from '@vue/reactivity'
export default {
    setup() {
        const sideBarItems = [
            {
                title: "Главная",
                icon: homeIcon,
                whiteIcon: homeIconWhite
            },
            {
                title: "Пиццы",
                icon: pizzaIcon,
                whiteIcon: pizzaIconWhite
            },
            {
                title: "Десерты",
                icon: chockolateIcon,
                whiteIcon: chockolateIconWhite
            },
            {
                title: "Комбо",
                icon: combo,
                whiteIcon: comboWhite
            },
            {
                title: "Напитки",
                icon: drinkIcon,
                whiteIcon: drinkIconWhite
            }
        ]

        const activeItem = ref(0)

        const handleActiveItem = (index) => {
            activeItem.value = index
        }


        return{
            logoIcon,
            sideBarItems,
            activeItem,
            handleActiveItem,
            userIcon
        }
    }
}
</script>

<style lang="scss">
.side-bar{
    width: 21%;
    height: 100vh;
    background: #F2F2F2;
    transform: translateX(-320px);
    display: none;

    &.active{
        transform: translateX(0);
        display: block;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    ul{
        margin-top: 60px;
        li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
            cursor: pointer;
            color: #2C2C2C;
            margin-bottom: 20px;
            background: #FFFFFF;
            border-radius: 30px;
            width: 225px;
            padding: 14px 18px;

            transition: 0.2s;

            &:hover{
                background: #f5f5f5;
                box-shadow: 1px 4px 10px rgba(0,0,0,0.1);
            }

            img{
                // background: #fff;
                width: 24px;
                height: 24px;
            }

            &.active{
                background: #2C2C2C;
                color: #fff;
                img{
                    color: #fff;
                }
            }

        }
        .admin-li{
            background-color: #FE5F1E !important;
            color: #fff;
        }
    }
}
</style>