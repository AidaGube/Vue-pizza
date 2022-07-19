<template>
    <div class="add__product">
        <h1>Рейтинг и Категория</h1>
        <h3>Определите настройки для пиццы</h3>
        <div class="score__content">
            <div class="prevu">
                <span>Превью</span>
                <div class="prevu__item">
                    <PizzaItem :pizza="pizza" />
                </div>
            </div>
            <div>
                <Categories />
                <Positions />
                <Raiting />
                <div class="down__info">
                    <button class="button">Создать</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PizzaItem from "@/components/Pizza/PrevuItem.vue"
import Checkbox from "@/components/Checkbox/Checkbox.vue"
import Categories from "./Categories.vue"
import Positions from "./Position.vue"
import Raiting from "./Raiting.vue"
export default {
    components: {PizzaItem,Checkbox,Categories,Positions,Raiting},
    setup() {

    }

}
</script>
<style lang="scss">
.score__content{
    display: flex;
    span{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.01em;
        color: rgba(44, 44, 44, 0.5);
    }
     
}

</style>