<template>
<div class="admin">
<SideBar/>
        <AddScore/>
</div>
</template>

<script>
import AddScore from "@/components/Admin/AddScore.vue";
import SideBar from "@/components/Admin/SideBar.vue"
export default {
components: {AddScore,SideBar},
};
</script>


<style>

</style>