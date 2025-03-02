<template>
  <main class="main">
    <Upcoming/>
  </main>
</template>

<script setup>
import {ref, reactive, computed, onMounted, onUnmounted} from 'vue'
import Upcoming from '@/components/Upcoming/Upcoming.vue'

onUnmounted(() => {
  window.scrollTo(0, 0);
})
</script>

<style>

</style>