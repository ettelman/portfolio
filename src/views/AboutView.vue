<template>
  <div class="about">
    
    <!-- Left Column - Content -->
   
    <div class="left-column">
      <section class="introduction">
        <h1>About Me</h1>
        <p>
          My name is Björn Ettelman and I am a passionate fullstack developer with a love for crafting 
          elegant web solutions. I have a diverse set of skills ranging from design, to frontend and backend development.
        </p>
      </section>
    
      <section class="skills">
        <h2>Frontend</h2>
        <ul>
          <li>HTML, CSS</li>
          <li>JavaScript (Vue.js, React)</li>
          <li>Sass, SCSS</li>
        </ul>

        <h2>Backend</h2>
        <ul>
          <li>Javascript (Node.js)</li>
          <li>PHP (Laravel, Wordpress)</li>
          <li>C# (ASP.NET)</li>
        </ul>
      </section>

      <section class="education">
        <h2>Education</h2>
        <ul>
        <li>Webdeveloper Program at Mittuniversitet, Sweden, 120HP</li>
        <li>Courses in Cyber Security and AI at Linköpingsuniversitet, Sweden</li>
        </ul>
      </section>
      
    </div>
  
    <!-- Right Column - Image -->
    <div class="right-column">
      <img src="../assets/profile.png" alt="Profilepic of Björn Ettelman" class="profile-pic">
    </div>
  
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      showContent: false
    };
  },
  mounted() {
    this.showContent = true;
  }
}
</script>

<style scoped>

.about {
  display: flex;
  justify-content: space-between;
  padding: 5%;
  padding-left: 20%;
  padding-right: 20%;
  font-family: 'Roboto', sans-serif;
}

.left-column {
  flex: 3;
  padding: 20px;
}
.right-column {
  flex: 1;
  padding: 20px;
}

.left-column {
  padding-right: 40px; /* To give more space between columns */
}

.right-column {
  padding-left: 40px;  /* To give more space between columns */
  display: flex;
  justify-content: center; /* Horizontally center the content */
  align-items: center;     /* Vertically center the content */
}

.introduction, .skills, .experience {
  margin-bottom: 30px;
}

h1, h2, h3 {
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  padding: 5px 0;
}

.profile-pic {
  max-width: 90%;       /* Adjusted for better spacing and aesthetics */
  border-radius: 10px;
}
.skills li {
    position: relative;
    overflow: hidden;
}

.skills li::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;  /* Start from the left out of view */
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);  /* Or any other color */
    transition: left 1s;
}

.skills li:hover::after {
    left: 0;
}
@media (max-width: 992px) {
  .about, .left-column, .right-column {
    display: block;
    padding: 0;
  }
  .profile-pic {
    display: none; }
   }
</style>