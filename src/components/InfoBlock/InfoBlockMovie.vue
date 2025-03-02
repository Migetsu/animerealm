<template>
  <div class="info-block" v-if="popularMovieStore.selectedMovie">
    <div class="info-block__content">
      <h3 class="info-block__title">{{ popularMovieStore.selectedMovie.title }}</h3>
      <div class="info-block__rating">
        <span>Рейтинг: {{ popularMovieStore.selectedMovie.vote_average }}</span>
      </div>
      <p class="info-block__overview">{{ popularMovieStore.selectedMovie.overview }}</p>
      <router-link :to="'/movie/' + popularMovieStore.selectedMovie.id" class="info-block__link">Подробнее</router-link>
    </div>
  </div>
</template>

<script setup>
import { usePopularMovieStore } from '@/store/popularMovieStore.js'

const props = defineProps({
  page: {
    type: String,
    default: '/'
  }
})

const popularMovieStore = usePopularMovieStore()
</script>

<style scoped>
.info-block {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  color: white;
  max-width: 600px;
}

.info-block__title {
  font-size: 24px;
  margin-bottom: 10px;
}

.info-block__rating {
  margin-bottom: 10px;
  font-weight: bold;
  color: #ffcc00;
}

.info-block__overview {
  margin-bottom: 15px;
  line-height: 1.5;
}

.info-block__link {
  display: inline-block;
  padding: 8px 16px;
  background-color: #7e57c2;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.info-block__link:hover {
  background-color: #5e35b1;
}
</style>
