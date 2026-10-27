import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import About from './pages/About.vue'
import Education from './pages/Education.vue'
import Skills from './pages/Skills.vue'
import Projects from './pages/Projects.vue'
import Experience from './pages/Experience.vue'
import CV from './pages/CV.vue'
import Contact from './pages/Contact.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'About', component: About },
    { path: '/education', name: 'Education', component: Education },
    { path: '/skills', name: 'Skills', component: Skills },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/experience', name: 'Experience', component: Experience },
    { path: '/cv', name: 'CV / Resume', component: CV },
    { path: '/achievements', redirect: '/experience' },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
router.afterEach(to => { document.title = `${to.name} · Aldren Ross` })
createApp(App).use(router).mount('#app')
