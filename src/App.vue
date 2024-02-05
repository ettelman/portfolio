<template>
  <div id="app">
    <Navbar />
    <div class="hero">
      <router-view v-slot="{ Component, route }">
        <Transition name="switch">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </Transition>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.hero {
  height: calc(100vh - 170px);
  /* subtracting navbar height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #ECF0F1, #ffffff);
}



a {
  text-decoration: none;
  color: inherit;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.switch-enter-from,
.switch-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.switch-enter-active {
  transition: all 1.5s ease;
}

.switch-leave-active {
  transition: all 1.5s ease;
  position: absolute;
  width: 100%;
}

@media (max-width: 992px) {
  .hero {
  height: auto;
  padding: 0.5rem;
}
  body {
    margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: linear-gradient(to bottom, #ECF0F1, #ffffff);
  color: #333;
  text-align: center;
  }
}
@media (min-width: 993px) {
  body,
html {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: linear-gradient(to bottom, #ECF0F1, #ffffff);
  color: #333;
  overflow: hidden;
  /* Hide scrollbars */
}

}
</style>