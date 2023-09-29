<template>
    <div id="nav">
        <RouterLink id="logo" to="/">Vue School Travel App</RouterLink>

        <RouterLink v-for="destination in destinations" :key="destination.id"
            :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
            {{ destination.name }}
        </RouterLink>
        <RouterLink :to="{ name: 'protected' }">Dashboard</RouterLink>
    </div>
</template>

<script>
import sourceData from '../data.json'

export default {
    data() {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>

<style lang="css">
#nav .active-link {
    color: magenta;
    border-bottom: 2px solid purple;
}
</style>