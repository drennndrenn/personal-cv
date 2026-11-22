<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const menuOpen = ref(false)
const main = ref(null)
const links = [{name:'About',path:'/'},{name:'Education',path:'/education'},{name:'Skills',path:'/skills'},{name:'Projects',path:'/projects'},{name:'Experience',path:'/experience'},{name:'CV',path:'/cv'},{name:'Contact',path:'/contact'}]
watch(() => route.path, async () => { menuOpen.value = false; await nextTick(); main.value?.focus({ preventScroll: true }) })
</script>

<template>
  <a class="skip" href="#main">Skip to content</a>
  <header class="header">
    <div class="topbar wrap">
      <RouterLink class="wordmark" to="/">aldren<span>.ross</span><small>PERSONAL CV</small></RouterLink>
      <span class="student"><i></i> BSIT / FOURTH YEAR</span>
      <button class="menu-button" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-controls="navigation">{{ menuOpen ? 'Close ✕' : 'Menu ☰' }}</button>
    </div>
    <nav id="navigation" class="navigation wrap" :class="{open:menuOpen}" aria-label="Main navigation">
      <RouterLink v-for="link in links" :key="link.path" :to="link.path" :class="{active:route.path === link.path}" :aria-current="route.path === link.path ? 'page' : undefined">{{ link.name }}</RouterLink>
    </nav>
  </header>
  <div class="wrap body-wrap">
    <section class="profile-banner" aria-label="Personal introduction">
      <img src="/image/download.jpg" alt="Aldren Ross" width="112" height="112" class="portrait">
      <div class="profile-copy"><p class="eyebrow">SOFTWARE DEVELOPER & BSIT STUDENT</p><h1>Aldren Ross<span class="dot">.</span></h1><p>Building thoughtful interfaces, practical systems,<br class="desktop-break"> and a little intelligence along the way.</p><span class="location">⌖ Sto. Tomas, Davao del Norte, Philippines</span></div>
      <div class="banner-actions"><RouterLink class="button primary" to="/contact">Say hello <span>↗</span></RouterLink><a class="button secondary" href="https://github.com/drennndrenn" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
    </section>
    <main id="main" ref="main" tabindex="-1">
      <RouterView v-slot="{ Component }"><Transition name="page" mode="out-in"><component :is="Component" /></Transition></RouterView>
    </main>
    <div class="closing-strip"><span><i></i> Aldren Ross <b>/</b> Personal portfolio</span><span>LEARNING. BUILDING. IMPROVING.</span></div>
  </div>
  <footer class="footer"><div class="wrap"><RouterLink class="wordmark" to="/">aldren<span>.ross</span></RouterLink><p>Made with care, curiosity, and Vue.</p><span>© {{ new Date().getFullYear() }} Aldren Ross</span></div></footer>
</template>
