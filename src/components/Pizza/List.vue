<template>
<div v-for="pizza in filteredPizzas" :key="pizza.id" >
    <Item :pizza="pizza" />
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

import Item from "./Item.vue"

export default {
    props: ["pizzas"],
    components: {Item},
    setup(props) {
        const store = useStore()

        const filteredPizzas = computed(() => {
            return props.pizzas.filter((pizza) => pizza.name.includes(store.state.searchValues))
        })

        return{
            filteredPizzas
        }
    }
}
</script>

<style>

</style>