<template>
  <nav>
    <div class="logo">
      <router-link to="/"><span class="initials">BE</span></router-link>
      <span class="fullname">Björn Ettelman</span>
    </div>
    
    <button class="hamburger" @click="toggleMenu">
      &#9776;
    </button>
    
    <ul id="ham">
      <li><router-link to="/" @click="closeMenu">Home</router-link></li>
      <li><router-link to="/about" @click="closeMenu">About</router-link></li>
      <li><router-link to="/portfolio" @click="closeMenu">Portfolio</router-link></li>
      <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      let mobileMenu = document.querySelector('#ham');
    // kontrollerar ifall elementet har en viss klass, annars läggs den till
    if (mobileMenu.classList.contains("temp")) {
        mobileMenu.style.height = '0';
        mobileMenu.classList.remove("temp");
    } else {
        mobileMenu.classList.add("temp");
        mobileMenu.style.height = '220px';
    }
      
    },
    closeMenu() {
      let mobileMenu = document.querySelector('#ham');
      if (mobileMenu.classList.contains("temp")) {
        mobileMenu.style.height = '0';
        mobileMenu.classList.remove("temp");
      }
    }
  }
}
</script>

<style scoped>
/* Navbar Styles */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C3E50;
  padding: 1.2rem 1rem;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
  margin-right: 20px;
}

nav ul li {
  cursor: pointer;
  color: white;
}

nav ul li:hover {
  color: #E74C3C;
}

.logo {
  margin: 0 ;
  position: relative;
  max-width: 200px;
}
.initials{
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2em;
  color: white;
  background-color: #962619;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
  transition: transform .5s;
  white-space: nowrap;
  position: relative; /* Ensure that the child's absolute positioning is relative to this container */
}


.fullname {
  color: white;
  font-size: .9em;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity .5s;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  white-space: nowrap;
}

.logo:hover .initials {
  transform: translateY(-20px);
}

.logo:hover .fullname {
  opacity: 1;
}

.hamburger {
  background: none;
  border: none;
  color: white;
  font-size: 2em;
  display: none; 
  cursor: pointer;
}

@media (max-width: 900px) {
  .hamburger {
    display: block;
  }
  #ham {
    position: absolute;
            top: -20px;
            left: 0;
            height: 0;
            overflow: hidden;
            z-index: 100;
            transition: all 1s ease;
            background: linear-gradient(to bottom, rgb(0, 0, 0), #2C3E50);
            border-radius: 10px;
           
  }
  nav ul {
 
 
  display: block;
  gap: 20px;
  margin-right: 0;
}
  nav ul li {
    text-align: center;
    padding: 1rem;
  }
  nav ul li:hover {
    background-color: #E74C3C;
    color: white;
  }
}
</style>