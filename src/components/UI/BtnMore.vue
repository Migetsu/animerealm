<template>
    <router-link class="more" :to="page + id">
        <!-- <fa icon="bars" class="more__icon" /> -->
        <span class="more__span">Смотреть</span>
    </router-link>
</template>

<script setup>
const props = defineProps({
    id: Number,
    page: {
        type: String,
        default: '/movie/'
    }
})
</script>

<style lang="scss">
.more {
    // width: 180px;
    // height: 50px;
    width: 140px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    // background: rgb(20, 154, 3);
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    // padding: 20px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }

    &__icon {
        font-size: 20px;
    }

    &__span {
        font-size: 20px;
        line-height: 30px;
    }
}
</style>