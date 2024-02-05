import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importing Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Adding icons to the library
library.add(faFacebook, faTwitter, faLinkedin);

const app = createApp(App);

// Registering FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount('#app');