<template>
  <TheNavigation></TheNavigation>
  <div class="container">
    <RouterView />
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: { TheNavigation }
}
</script>