<template>
    <Transition name="upcoming" mode="out-in">
        <section class="main__upcoming">
            <UpcomingItem v-for="(movie, idx) in upcomings" :key="movie.id" :movie="movie" :idx="idx"
                :slideView="slideView" :next="upcomings[idx + 1 == upcomings.length ? 0 : idx + 1]"
                :totalSlides="upcomings.length"
                @slideNext="slideNext" @slidePrev="slidePrev" @slideTo="slideTo" />
        </section>
    </Transition>
</template>

<script setup>
import UpcomingItem from "@/components/Upcoming/UpcomingItem.vue";
import { ref, onMounted } from 'vue'

const upcomings = ref([
    {
        title: 'Title',
        overview: 'Overview for this anime with detailed description and interesting facts about the plot and characters.',
        backdrop_path: 'backdrop_path',
        id: 1,
        genre: 'Приключения, Фэнтези',
        episodes: 12
    },
    {
        title: 'Title2',
        overview: 'Overview two with more information about this exciting anime series that fans are looking forward to.',
        backdrop_path: 'backdrop_path',
        id: 2,
        genre: 'Боевик, Драма',
        episodes: 24
    },
    {
        title: 'Title3',
        overview: 'Overview three containing all the details about this upcoming release that anime fans should know about.',
        backdrop_path: 'backdrop_path',
        id: 3,
        genre: 'Романтика, Комедия',
        episodes: 13
    },
    {
        title: 'Title4',
        overview: 'Overview four with the most interesting information about this highly anticipated anime release.',
        backdrop_path: 'backdrop_path',
        id: 4,
        genre: 'Мистика, Ужасы',
        episodes: 10
    }
])
const slideView = ref(0)
const timeout = ref(null)

const slide = () => {
    if (upcomings.value.length - 1 == slideView.value) {
        slideView.value = 0
    } else {
        slideView.value++
    }
    timeout.value = setTimeout(slide, 10000);
}

const slideNext = () => {
    clearTimeout(timeout.value)
    slide()
}

const slidePrev = () => {
    clearTimeout(timeout.value)
    if (slideView.value === 0) {
        slideView.value = upcomings.value.length - 1
    } else {
        slideView.value--
    }
    timeout.value = setTimeout(slide, 10000);
}

const slideTo = (index) => {
    clearTimeout(timeout.value);
    slideView.value = index;
    timeout.value = setTimeout(slide, 10000);
}

onMounted(async () => {
    timeout.value = setTimeout(slide, 10000);
})
</script>

<style></style>