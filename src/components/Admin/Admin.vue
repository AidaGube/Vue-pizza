<template>
    <div class="admin">
        <SideBar />
        <AddProduct />


    </div>
</template>

<script>
import SideBar from "./SideBar.vue"
import AddProduct from "./AddProduct.vue"
import AddPizza from "./AddPizza.vue"
import AddScore from "./AddScore.vue"
export default {
    components: {SideBar,AddProduct,AddPizza,AddScore}
}
</script>

<style lang="scss">
.admin{
    display: flex;

}
</style>