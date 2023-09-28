<template>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
    <section class="experiences">
        <h2>Top experiences in {{ destination.name }}</h2>
        <div class="cards">
            <RouterLink v-for="experience in destination.experiences" :key="experience.slug"
                :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
                <ExperienceCards :experience="experience"></ExperienceCards>
            </RouterLink>
        </div>
    </section>
</template>

<script>
import ExperienceCards from '../components/ExperienceCards.vue'
export default {
    components: {
        ExperienceCards
    },
    props: {
        id: { type: Number, required: true }
    },
    data() {
        return {
            destination: null
        }
    },
    computed: {
        destinationId() {
            return this.id
        }
    },
    methods: {
        async initData() {
            const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`)
            this.destination = await response.json()
        }
    },
    async created() {
        this.initData()
        this.$watch(() => this.$route.params, async () => { this.initData() })
    }
}
</script>