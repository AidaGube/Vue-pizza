<template>
<div class="add__category">
    <span @click="handleShowCategories" ref="sortRef">Выберите категорию</span>
        
    <div 
        :class="{active: showCategory}" 
        class="category__items"
    >
        <ul>
            <li 
                v-for="(item,index) in categoryItems" 
                :key="item" 
                :class="{active: index === activeCategoryItem}"
                @click="handleActiveItem(index)"
            >
                {{item}}
            </li>
        </ul>
    </div>
    <div class="active-category__item">
        {{categoryItems[activeCategoryItem]}}
    </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    setup() {
        const sortRef = ref(null)
        const activeCategoryItem = ref(0)
        const showCategory = ref(false)

        const categoryItems = ["Вегетерианская","Мясная","Сырная","Грибная","Закрытая",]

        const handleShowCategories = () => {
            showCategory.value = !showCategory.value
        }
        const handleActiveItem = (index) => {
            showCategory.value = !showCategory.value
            activeCategoryItem.value = index
        }

        onMounted(() => {
            document.body.addEventListener("click", (event) => {
                if (!event.path.includes(sortRef.value)) {
                  showCategory.value = false
                }
            })
        })

        return{
            showCategory,
            categoryItems,
            activeCategoryItem,
            sortRef,
            handleShowCategories,
            handleActiveItem
        }
    }
}
</script>

<style lang="scss">
.add__category{
    position: relative;
    span{
        cursor: pointer;
    }

    .category__items{
        position: absolute;
        background: #fff;
        width: 100%;
        display: none;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
        border-radius: 10px;

        ul{

            li{
                padding: 10px 0 10px 25px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 16px;
                letter-spacing: 0.015em;
                color: #000;
                cursor: pointer;
                &.active{
                    background: rgba(254, 95, 30, 0.05);
                    font-weight: bold;
                    border-radius: 10px;
                    color: #FE5F1E;
                }
            }
        }
        &.active{
            display: block;
        }
    }

    .active-category__item{
        background: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        width: 280px;
        padding: 15px 70px;
        margin-top: 10px;

        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.015em;
        color: #FE5F1E;
        text-align: center;
    }
}
</style>