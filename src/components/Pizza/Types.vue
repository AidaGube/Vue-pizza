<template>
<ul>
    <li
        @click="handleActiveType(index)"
        :class="{active: activeType === index, disabled: !availableTypes.includes(index)}"
        v-for="(text,index) in typesText" 
        :key="text"
    >
        {{text}}
    </li>
</ul>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props: ["availableTypes"],
    setup(props) {
        const typesText = ["тонкое","традиционное"]
        const activeType = ref(props.availableTypes[0])

        const handleActiveType = (index) => {
            activeType.value = index
        }
        
        return{typesText,activeType,handleActiveType}
    }

}
</script>

<style>

</style>