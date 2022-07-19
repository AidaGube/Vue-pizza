<template>
    <label @click="checkbox" class="checkbox">
        <span :class="{active:checkboxActive}"></span>
        <div class="checkbox__text">{{labelValue}}</div>
        <input @click="handleActiveCheckbox" type="checkbox" :value="value">
    </label>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    props: ["labelValue",'value',"pizzaSizes"],
    setup(props,context) {
        const checkboxActive = ref(false)

        const handleActiveCheckbox = () => {
            checkboxActive.value = !checkboxActive.value
            context.emit("selectedValue",props.value);
        };

        return{
            checkboxActive,
            handleActiveCheckbox
        };
    },
      };
</script>

<style lang="scss">
.checkbox{
    display: flex;
    cursor: pointer;
    span{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 2px solid #FE5F1E;
        background: #fff;
        margin-top: 4px;
        &.active{
            background: #FE5F1E;
        }
    }

    &__text {
        font-style: normal;
        font-weight: 300 !important;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.01em;
        color: rgba(44, 44, 44, 0.5);
        margin: 0 0 10px 15px !important;
    }
    input {
        display: none;
    }
}
</style>