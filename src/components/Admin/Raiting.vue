<template>
    <div class="raiting">
        <span>Определите рейтинг пиццы</span>
        <div class="stars">
            <div class="star__col">
                <img v-for="star in starIcons" :key="star" :src="star.star" >
            </div>
            <div class="star__col">
                <img v-for="star in starIcons" :key="star" :src="star.star" >
            </div>
            <div class="star__col">
                <img v-for="star in starIcons" :key="star" :src="star.star" >
            </div>
            <div class="star__col">
                <img v-for="star in starIcons" :key="star" :src="star.star" >
            </div>
        </div>
    </div>
</template>

<script>
import starIcon from "@/assets/icons/star.svg"
import starEmptyIcon from "@/assets/icons/star-empty.svg"
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const starIcons = [
            {
                star: starIcon,
                starEpmty: starEmptyIcon
            },
            {
                star: starIcon,
                starEpmty: starEmptyIcon
            },
            {
                star: starIcon,
                starEpmty: starEmptyIcon
            },
            {
                star: starIcon,
                starEpmty: starEmptyIcon
            },
            {
                star: starIcon,
                starEpmty: starEmptyIcon
            },
        ]


        return{
            starIcon,
            starEmptyIcon,
            starIcons
        }
    }
}
</script>

<style lang="scss">
.raiting{
    margin-top: 30px;
    .stars{
        margin: 10px 0 20px;
        .star__col{
            margin-bottom: 10px;
            img{
                margin-right: 15px;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
}
</style>