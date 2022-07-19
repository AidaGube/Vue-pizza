<template>
<div class="admin">
<SideBar/>
        <AddPizza />
</div>
</template>

<script>
import AddPizza from "@/components/Admin/AddPizza.vue";
import SideBar from "@/components/Admin/SideBar.vue"
export default {
components: {AddPizza,SideBar},
};
</script>


<style>

</style>