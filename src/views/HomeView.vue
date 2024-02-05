<template>
  <div>
    <transition name="switch">
      <div v-if="showHero">
        <section class="hero">
          <img src="../assets/profile.png" alt="Profilepic of Björn Ettelman" class="profilepic">
          <h1>Hello, I'm Björn Ettelman.</h1>
          <p>I'm a fullstack developer from Linköping, Sweden.
          This is my personal portfolio</p>
          <router-link to="/portfolio"><button>See My Work</button></router-link>
        </section>
      </div>
      <div v-else>
        <Portfolio />
      </div>
    </transition>
  </div>
</template>

<script>


export default {
  data() {
    return {
      showHero: true
      
    };
  },
  methods: {
  scrollToPortfolio() {
      this.showHero = false;
    
    }
  }
}

</script>

<style>



.hero h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 3em;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #962619;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #C0392B;
}
.profilepic {
  border-radius: 10px;
}
@media (max-width: 992px) {
.hero h1 {
  font-size: 2em;
  margin-bottom: 10px;
}
}
</style>