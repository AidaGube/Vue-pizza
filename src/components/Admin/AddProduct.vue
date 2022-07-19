<template>
    <div class="add__product">
        <h1>Добавить новый продукт</h1>
        <h3>Выберите тип продукта</h3>

        <div class="select__product-type">
            <div 
                :class="{active:activeItem === index}" 
                v-for="(item,index) in cardItems" 
                :key="item" 
                class="select__card"
                @click="handleActiveItem(index)"
            >
                <img v-if="activeItem !== index" :src="item.icon" alt="">
                <img v-else :src="item.whiteIcon" alt="">
            </div>
        </div>
        <div class="down__info">
            <p>В данном блоке вы определяете тип добавляемого продукта, в следующем блоке вы будете выбирать его параметры*</p>
            <button @click="handleClick" class="button">Далее</button>
        </div>
    </div>
</template>

<script>
import pizzaIcon from "@/assets/icons/pizza.svg"
import combo from "@/assets/icons/combo.svg"
import chockolateIcon from "@/assets/icons/chockolate.svg"
import drinkIcon from "@/assets/icons/drink.svg"
import pizzaIconWhite from "@/assets/icons/pizza-white.svg"
import comboWhite from "@/assets/icons/combo-white.svg"
import chockolateIconWhite from "@/assets/icons/chockolate-white.svg"
import drinkIconWhite from "@/assets/icons/drink-white.svg"
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter()
        const cardItems = [
            {
                icon: pizzaIcon,
                whiteIcon: pizzaIconWhite
            },
            {
                icon: chockolateIcon,
                whiteIcon: chockolateIconWhite
            },
            {
                icon: combo,
                whiteIcon: comboWhite
            },
            {
                icon: drinkIcon,
                whiteIcon: drinkIconWhite
            },
        ]
        const activeItem = ref(0)

        const handleActiveItem = (index) => {
            activeItem.value = index
        };

        const handleClick = () => {
         router.push('/admin/add-product')
        };

        return{
            cardItems,
            activeItem,
            handleActiveItem,
            pizzaIcon,
            handleClick
        }
    }
}
</script>

<style lang="scss">
.add__product{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 60px;

    

    .select__product-type{
        display: flex;
        margin-bottom: 65px;

        .select__card{
            transition: 0.2s;
            width: 190px;
            height: 190px;
            margin-right: 57px;
            background: #FFFFFF;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                height: 90px;
            }
            &.active{
                background: #FE5F1E;
            }
        }
        :last-child{
            margin-right: 0;
        }
    }
    h1{
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        line-height: 56px;
        letter-spacing: 0.01em;
        color: #2C2C2C;
    }

    h3{
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
        letter-spacing: 0.01em;
        color: #2C2C2C;
        margin: 15px 0 60px;
    }
    .down__info{
        display: flex;
        justify-content: space-between;
        p{
            max-width: 690px;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.01em;
            color: #2C2C2C;
        }
        .button{
            background: #2C2C2C;
            padding: 13px 65px;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.01em;
            color: #FFFFFF;
        }
    }
}
</style>