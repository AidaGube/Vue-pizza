<template>
    <div class="position">
        <span>Место в списке пицц</span>
        <div class="position__checkboxs">
            <Checkbox labelValue="В конце списка" />
            <Checkbox labelValue="В начале списка" />
        </div>
    </div>
</template>

<script>
import Checkbox from "@/components/Checkbox/Checkbox.vue"
export default {
    components: {Checkbox}
}
</script>

<style lang="scss">
.position{
    margin-top: 20px;
    .position__checkboxs{
        margin-top: 15px;
    }
}
</style>