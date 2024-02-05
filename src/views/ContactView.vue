<template>
    <div class="contact-container">
        <h1>Contact Me</h1>
        <div class="contact-content">
            <div class="contact-info">
                <h2>Get In Touch</h2>
                <p>If you have any questions or want to inquire about a job, feel free to drop me a message!</p>
                <ul>
                    <li>Email: bettelman[at]gmail.com</li>
                    <li>Location: Linköping, Sweden</li>
                </ul>
                <div class="social-media">
                    <a href="https://www.facebook.com/bjorn.ettelman"><font-awesome-icon :icon="['fab', 'facebook']" class="social-icon"/></a>
                    <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon"/>
                    <a href="https://www.linkedin.com/in/bj%C3%B6rn-ettelman-3a5a3714a/"><font-awesome-icon :icon="['fab', 'linkedin']" class="social-icon"/></a>
                </div>
            </div>
            <contact-form></contact-form>
        </div>
    </div>
</template>
  
<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
    components: {
        ContactForm
    }
}
</script>
  
<style scoped>
.contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.contact-content {
    display: flex;
    justify-content: space-between;
}

.contact-info {
    width: 45%;
}

.social-media {
    margin-top: 20px;
    text-align: right;
}

.social-icon {
    display: inline-block;
    margin-right: 10px;
    font-size: 1.5em;
}

.contact-form {
    width: 45%;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
@media (max-width: 993px) {
.contact-content {
    display: block;
}
.contact-info, .contact-form {
    width: 100%;
}
ul {
    text-align: left;
    padding: 0;
    margin: 0;
}
}
</style>