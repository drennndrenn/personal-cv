<script setup>
const groups = [
{ icon:'〈/〉',title:'Core languages',description:'The building blocks I use to turn ideas into working software.',skills:['JavaScript','Python','Java','Dart','PHP'] },
{ icon:'▣',title:'Frontend development',description:'Responsive interfaces and component-based applications for the web.',skills:['React','Vue.js','Tailwind CSS','Bootstrap'] },
{ icon:'▤',title:'Backend & databases',description:'Application logic, APIs, and structured data behind the interface.',skills:['Laravel','FastAPI','PostgreSQL','SQLite','MySQL'] },
{ icon:'◉',title:'Mobile & machine learning',description:'Mobile applications and object detection applied to practical problems.',skills:['Flutter','YOLO / Object detection','Firebase'] },
{ icon:'⌘',title:'Hardware & development',description:'Exploring physical computing and sharing development work.',skills:['Arduino','GitHub'] },
]
</script>
<template><div><div class="page-heading"><p class="eyebrow">03 / MY TOOLKIT</p><h2>Skills & technologies<span class="dot">.</span></h2><p>A growing toolkit, shaped by coursework and hands-on projects.</p></div><div class="skills-grid"><article class="panel skill-card" v-for="(group,index) in groups" :key="group.title"><div class="card-top"><span class="skill-icon">{{ group.icon }}</span><span class="muted mono">0{{ index+1 }}</span></div><h3>{{ group.title }}</h3><p>{{ group.description }}</p><div class="tags"><span v-for="skill in group.skills" :key="skill"><i></i>{{ skill }}</span></div></article><article class="panel skill-note"><p class="eyebrow">ALWAYS A STUDENT</p><h3>Learning by doing.</h3><p>These are technologies I've explored through my work. My projects show how I put them into practice.</p><RouterLink class="text-link" to="/projects">See the toolkit in action →</RouterLink></article></div></div></template>
