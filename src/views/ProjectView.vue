<template>
  <div>
    <h1 class="portfolio-title">Portfolio</h1>
    <div class="portfolio">
      
      <div class="project" v-for="project in projects" :key="project.id">
        <a :href="project.url" target="_blank" class="project">
        <div class="project-image">
          
          <img :src="project.image" :alt="project.alt" class="projimg">
        
        </div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        
        </div>
      </a>
      </div>
      
    </div>

  </div>
  <div class="center">
    More of my projects can be find on my github
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredProjectId: null,
      projects: [
        { id: 1, title: 'University Thesis', description: 'This projects frontend was made in VUE.js and the backend was made in Node.js. The goal was to evaluate diffrent types of login methods and what users thinks of them. Uses JWT and Freja eID (expired). In swedish', image: require('@/assets/proj1.jpg'), url: 'https://tiny-lime-colt-belt.cyclic.app/' },
        { id: 2, title: 'BBQ and Burgers', description: 'Another university project, earlier in my education. This site is for a fake restaurant and uses self developed CMS-system to update menus and to handle table reservation. In swedish', image: require('@/assets/proj2.jpg'), url: 'https://studenter.miun.se/~bjet2100/writeable/dt173g/projekt/bbq' },
        // ... more projects
      ],
    };
  },
  methods: {
    hoverProject(projectId) {
      this.hoveredProjectId = projectId;
    },
    leaveProject() {
      this.hoveredProjectId = null;
    },
  },
};
</script>


<style scoped>
.portfolio {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 200px;
}

.project {
  width: 30%;
  transition: transform 0.3s;
  text-decoration: none; 
  color: inherit;
}

.project:hover {
  transform: scale(1.1);
}

.project-image img {
  width: 100%;
  height: 300px;
  border-radius: 5px;
  transition: transform 0.3s;
}

.project-info {
  padding: 10px;
}

.portfolio-title {
  text-align: center;
  margin-bottom: 20px;
}
.projimg {
  max-width: 400px;
}
.center {
  text-align: center;
}

@media (max-width: 993px) {
  .portfolio {
  display:block;
  padding: 20px 20px;
}
.project-image img {
  width: 100%;
  height: auto;
}
.project {
  width: 100%;
}

}
</style>