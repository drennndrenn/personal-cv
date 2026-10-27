<script setup>
const sections = [
  {
    category: 'Personal & Technical Projects',
    title: 'Independent Software Developer',
    description: 'Developing software applications and experimenting with backend systems, developer tools, and AI-assisted workflows. My projects involve application development, API integration, database management, debugging, testing, and exploring automation techniques to improve development processes.',
    skills: ['Flutter', 'Dart', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Git & GitHub'],
    link: '/projects',
    linkText: 'Explore personal projects',
  },
  {
    category: 'Academic Experience',
    title: 'Academic Software Developer',
    description: 'Applying software engineering concepts through academic projects involving application design, system integration, backend development, databases, and collaborative problem-solving.',
    project: 'SAFEWAY — Computer Vision-Based Mobile Road Hazard Detection and Driver Alert System',
    projectDescription: 'An academic capstone in development. The Flutter driver app uses on-device YOLO/TFLite detection and alerts, with a separate FastAPI service and PostgreSQL database for trip and hazard data.',
    skills: ['Flutter', 'Dart', 'YOLO / TFLite', 'FastAPI', 'PostgreSQL', 'Docker'],
    link: '/projects',
    linkText: 'See SAFEWAY and other academic work',
  },
  {
    category: 'Organization & Leadership',
    title: 'Vice President',
    organization: 'Codex Programming',
    description: 'Contributing to student organization leadership while collaborating with fellow IT students and supporting a community centered on programming, technical learning, and software development.',
  },
  {
    category: 'Competitions & Activities',
    title: 'Code in the Dark',
    description: 'Participated in Code in the Dark, gaining experience in a competitive programming environment and applying technical and problem-solving skills.',
  },
]
</script>

<template>
  <div>
    <div class="page-heading">
      <p class="eyebrow">05 / PRACTICE & PARTICIPATION</p>
      <h2>Experience & Development Journey<span class="dot">.</span></h2>
      <p>Exploring software development through academic projects, independent technical work, programming activities, and student organization leadership.</p>
    </div>
    <div class="experience-list">
      <article v-for="(entry, index) in sections" :key="entry.title" class="panel experience-card">
        <div class="experience-index" aria-hidden="true">0{{ index + 1 }}</div>
        <div class="experience-content">
          <p class="eyebrow">{{ entry.category }}</p>
          <h3>{{ entry.title }}</h3>
          <p v-if="entry.organization" class="experience-subtitle">{{ entry.organization }}</p>
          <p>{{ entry.description }}</p>
          <div v-if="entry.project" class="experience-project">
            <strong>{{ entry.project }}</strong>
            <p>{{ entry.projectDescription }}</p>
          </div>
          <div v-if="entry.skills" class="tags experience-skills"><span v-for="skill in entry.skills" :key="skill">{{ skill }}</span></div>
          <RouterLink v-if="entry.link" class="text-link" :to="entry.link">{{ entry.linkText }} →</RouterLink>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.experience-list { display: grid; gap: 18px; max-width: 1000px; }
.experience-card { display: grid; grid-template-columns: 60px minmax(0, 1fr); gap: 20px; border-left: 3px solid var(--accent); }
.experience-index { color: var(--accent); font: 600 15px 'Space Grotesk', sans-serif; letter-spacing: 1px; padding-top: 2px; }
.experience-card h3 { margin-bottom: 10px; }
.experience-card p:not(.eyebrow) { color: #c8d1e2; font-size: 14px; line-height: 1.8; margin: 0 0 14px; }
.experience-card .experience-subtitle { color: var(--accent) !important; font-weight: 600; }
.experience-project { background: #0d1627; border: 1px solid #2d3850; border-radius: 6px; padding: 15px 18px; margin: 18px 0; }
.experience-project strong { display: block; font-size: 14px; line-height: 1.5; }
.experience-project p { margin: 8px 0 0 !important; }
.experience-skills { margin-top: 14px; }
@media(max-width:700px) { .experience-card { grid-template-columns: 1fr; gap: 8px; } .experience-index { font-size: 12px; } }
</style>
