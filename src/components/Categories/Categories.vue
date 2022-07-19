<template>
    <div class="categories">
        <ul>
        <li 
            :class="{active:handleActiveItem === null}"
            @click="handleChangeActiveItem(null)"
        >
            Все
        </li>
        <li 
            @click="handleChangeActiveItem(index)" 
            v-for="(item,index) in categoriesItem" 
            :key="item"
            :class="{active: handleActiveItem === index}"
        >
            {{item}}
        </li>
        </ul>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
    setup() {
        const store = useStore()
        const handleActiveItem = computed(() => store.state.category)
        const categoriesItem = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые',]

        const handleChangeActiveItem = (index) => {
            store.dispatch("setCategory",index)
        }

        return{categoriesItem,handleActiveItem,handleChangeActiveItem}
    }
}
</script>

<style>

</style>