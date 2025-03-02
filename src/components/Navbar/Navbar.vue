<template>
    <header class="header">
        <nav class="header__nav">
            <div class="header__nav-container container">
                <ul class="header__nav-list">
                    <li>
                        <router-link to="/" class="header__nav-logo">
                            <img src="@/assets/images/logo.svg" alt="Logo">
                        </router-link>
                    </li>
                    <li v-for="link in links" :key="link.url">
                        <router-link :to="link.url" class="header__nav-link">
                            {{ link.title }}
                        </router-link>
                    </li>
                    <li class="header__nav-catalog">
                        <span class="header__nav-link header__nav-catalog-span">Каталог</span>
                        <fa :icon="['fas', 'caret-down']" class="header__nav-catalog-icon"/>
                    </li>
                </ul>
                <div class="header__nav-list2">
                    <div class="header__nav-link">
                        <fa icon="search"/>
                    </div>
                    <div class="header__nav-link">
                        <fa :icon="['fas', 'user']" />
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const links = reactive([
    { title: 'Релизы', url: '/catalog' },
    { title: 'Новинки', url: '/new' },
    { title: 'Популярное', url: '/popular' },
])
</script>

<style></style>