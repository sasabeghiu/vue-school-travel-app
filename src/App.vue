<template>
  <TheNavigation></TheNavigation>
  <div class="container">
    <RouterView class="view left-sidebar" name="LeftSidebar"></RouterView>
    <RouterView v-slot="{ Component }" class="main-view">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>

  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: { TheNavigation }
}
</script>

<style>
/* <transition name="slide" mode="out-in"> */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-form,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

/* <transition name="moveUp"> */
.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-400px);
  }
}

/* <transition name="fade" mode="out-in"> */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* sidebar */
.container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}
</style>