<script setup>
import { computed, ref, watch } from 'vue'

const filter = ref('All')
const flipped = ref(new Set())
const projects = [
  {
    id: 'road-hazard', name: 'Safeway — Road Hazard Detection', type: 'Mobile',
    category: 'MOBILE / MACHINE LEARNING', symbol: '⌁',
    description: 'Safeway helps drivers spot road hazards through on-device detection and spoken warnings.',
    tech: ['Flutter', 'YOLO / TFLite', 'React', 'FastAPI', 'PostgreSQL', 'SQLite'], context: 'Thesis / Capstone · 2025–Present',
    overview: 'A road safety system with a Flutter driver app, React admin dashboard, and separate Python / FastAPI backend.',
    flow: 'Flutter app + React dashboard ↔ Separate FastAPI backend ↔ PostgreSQL',
    details: [
      'YOLO / TFLite detects hazards on-device, grades severity, and triggers spoken and visual alerts.',
      'GPS speed monitoring and local SQLite trip records synchronize with the API.',
      'FastAPI provides Google / JWT sign-in, guest access, trip history, and admin analytics.',
      'PostgreSQL stores backend data; Cloudinary stores hazard images.',
      'SQLAlchemy, Alembic, and Docker Compose support data access, migrations, and local setup.',
    ],
  },
  {
    id: 'collection', name: 'Collection Management System', type: 'Web',
    category: 'WEB / COLLECTION MANAGEMENT', symbol: '▤',
    description: 'Manage student contributions, track payments, and review financial records in one place.',
    tech: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Django REST', 'PostgreSQL / MySQL'], context: 'Team project · 2025',
    overview: 'A shared platform for student payment records, reporting, and controlled access across schools and institutes.',
    flow: 'Vue + TypeScript → Django REST Framework → SQL database',
    details: [
      'Tracks student contributions, multiple fee categories, and payment statuses.',
      'Keeps detailed transaction records and audit logs for financial oversight.',
      'Uses Django groups and permissions for school and institute administrators and staff.',
      'Gives students read-only access to their payment and contribution history.',
      'Links locker, attendance, voting, and portal systems for fee and eligibility checks.',
    ],
  },
  {
    id: 'bus-tracker', name: 'Smart Bus Tracker', type: 'Mobile',
    category: 'MOBILE / WEB / REALTIME', symbol: '↝',
    description: 'A commuter app and admin dashboard that demonstrate bus tracking with simulated movement.',
    tech: ['Flutter', 'React', 'Firebase Auth', 'Firestore'], context: 'Full-stack project · Simulation prototype',
    overview: 'A commuter app and admin dashboard connected through Firebase. Bus movement is simulated for testing and presentations; displayed positions are not real-world bus GPS data.',
    flow: 'Flutter commuter app ↔ Firebase / Firestore ↔ React dashboard',
    details: [
      'Displays simulated bus locations with route, stop, and ETA information in Flutter.',
      'Synchronizes simulation and management data through Cloud Firestore.',
      'Provides a React dashboard for managing buses, routes, schedules, and users.',
      'Uses Firebase Authentication and Super Admin / Sub Admin roles.',
      'Redirects signed-in administrators to the appropriate dashboard based on their Firestore role.',
    ],
  },
  {
    id: 'ocean-view', name: 'Ocean View Resort Booking & Management', type: 'Web',
    category: 'WEB / RESORT MANAGEMENT', symbol: '≈',
    description: 'Browse resort rooms, reserve a stay, and manage bookings through a shared web platform.',
    tech: ['React', 'PHP', 'MySQL'], context: 'Academic web project',
    overview: 'A team-built web platform designed to move resort reservations and resource management from manual processes into guest and administrative dashboards.',
    flow: 'React + React Router → PHP backend → MySQL',
    details: [
      'Lets guests browse rooms and amenities, check availability, and manage reservations.',
      'Provides guest access to booking history, payment records, and personal details.',
      'Gives resort administrators tools for room details, pricing, bookings, and guest records.',
      'Separates Super Admin, Resort Admin, and Guest permissions.',
      'Includes reporting for bookings, occupancy, revenue, and resort activity.',
      'Uses a React interface with a raw PHP backend and MySQL database for the course project.',
    ],
  },
  {
    id: 'orca-bridge', name: 'OrcaBridge', type: 'Tools',
    category: 'DEVELOPER TOOLS / TELEGRAM', symbol: '⇄',
    description: 'Manage Codex conversations, approvals, and sessions from PowerShell or a private Telegram chat.',
    tech: ['Python', 'PowerShell', 'Telegram', 'Codex CLI'], context: 'Developer tooling project · Windows 11',
    overview: 'A bridge for working with Codex from a terminal or private Telegram chat. Requires Python 3.11+ and an authenticated Codex CLI, with no third-party Python runtime packages.',
    flow: 'PowerShell / Telegram → Python bridge → Codex CLI',
    details: [
      'Send prompts, steer running work, and queue follow-up turns.',
      'Review command and file-change approvals from the bridge.',
      'Create, switch, and recover workspace-bound sessions.',
      'View provider token usage and available account limits.',
      'Receive complete long responses as UTF-8 text files.',
    ],
  },
]
const shown = computed(() => projects.filter(project => filter.value === 'All' || project.type === filter.value))
watch(filter, () => { flipped.value = new Set() })

function turn(id, showBack) {
  const next = new Set(flipped.value)
  if (showBack) next.add(id)
  else next.delete(id)
  flipped.value = next
}

function hover(event, id, showBack) {
  if (event.pointerType === 'mouse') turn(id, showBack)
}

function tap(event, id) {
  // Mouse users rotate on hover; touch users rotate by tapping the card.
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || event.pointerType === 'touch') {
    turn(id, !flipped.value.has(id))
  }
}
</script>

<template>
  <div>
    <div class="page-heading">
      <p class="eyebrow">04 / SELECTED WORK</p>
      <h2>Ideas turned into projects<span class="dot">.</span></h2>
      <p>Academic, team, and developer tooling projects across web, mobile, and machine learning.</p>
    </div>
    <p id="flip-help" class="flip-help">Hover a card to rotate it. On touch screens, tap to turn it over. With a keyboard, focus a card and press Enter or Space.</p>
    <div class="project-toolbar">
      <span class="muted" role="status">{{ shown.length }} projects</span>
      <div class="filters" aria-label="Filter projects">
        <button v-for="type in ['All', 'Web', 'Mobile', 'Tools']" :key="type" @click="filter = type" :aria-pressed="filter === type" :class="{ selected: filter === type }">{{ type }}</button>
      </div>
    </div>
    <div class="projects-grid">
      <article
        v-for="project in shown" :key="project.id"
        class="project-card flip-card" :class="{ 'is-flipped': flipped.has(project.id) }"
        tabindex="0" role="button" :aria-label="`${project.name}: ${flipped.has(project.id) ? 'details' : 'summary'}`"
        :aria-pressed="flipped.has(project.id)" :aria-describedby="`${project.id}-${flipped.has(project.id) ? 'back' : 'front'} flip-help`"
        @pointerenter="hover($event, project.id, true)" @pointerleave="hover($event, project.id, false)"
        @click="tap($event, project.id)" @blur="turn(project.id, false)"
        @keydown.enter.prevent="turn(project.id, !flipped.has(project.id))"
        @keydown.space.prevent="turn(project.id, !flipped.has(project.id))"
        @keydown.esc.prevent="turn(project.id, false)"
      >
        <div class="flip-inner">
          <div :id="`${project.id}-front`" class="card-face card-front" :aria-hidden="flipped.has(project.id)">
            <div class="project-visual" :class="'visual-' + project.type.toLowerCase()" aria-hidden="true">
              <span class="visual-number">PROJECT / 0{{ projects.indexOf(project) + 1 }}</span>
              <span class="visual-symbol">{{ project.symbol }}</span>
              <span class="visual-caption">{{ project.tech.join(' + ') }}</span>
            </div>
            <div class="project-content">
              <p class="eyebrow">{{ project.category }}</p>
              <h3>{{ project.name }}</h3>
              <p class="project-summary">{{ project.description }}</p>
              <div class="tags"><span v-for="tech in project.tech" :key="tech">{{ tech }}</span></div>
              <div class="card-bottom"><span>{{ project.context }}</span><span class="rotate-cue" aria-hidden="true">↻</span></div>
            </div>
          </div>
          <div :id="`${project.id}-back`" class="card-face card-back" :aria-hidden="!flipped.has(project.id)">
            <div class="card-top"><p class="eyebrow">BEHIND THE PROJECT</p><span class="rotate-cue" aria-hidden="true">↻</span></div>
            <h3>{{ project.name }}</h3>
            <p class="back-overview">{{ project.overview }}</p>
            <p class="architecture"><span>HOW IT CONNECTS</span>{{ project.flow }}</p>
            <h4>Features & implementation</h4>
            <ul><li v-for="detail in project.details" :key="detail">{{ detail }}</li></ul>
            <div class="back-footer"><div class="tags"><span v-for="tech in project.tech" :key="tech">{{ tech }}</span></div><p class="muted">{{ project.context }}</p><span class="return-hint">Move away or tap again to return · Esc with keyboard</span></div>
          </div>
        </div>
      </article>
    </div>
    <div class="note"><span>↗</span><p>Source repositories are private. These summaries describe my project work; public demos are currently unavailable.</p></div>
  </div>
</template>

<style scoped>
.flip-help { color: var(--muted); font-size: 12px; margin: -8px 0 24px; max-width: 75ch; }
.projects-grid { grid-auto-rows: 1fr; }
.flip-card { perspective: 1600px; overflow: visible; cursor: pointer; min-width: 0; min-height: 674px; border-radius: 9px; }
.flip-card:focus-visible { outline: 2px solid var(--accent); outline-offset: 5px; }
.flip-inner { display: grid; height: 100%; transform-style: preserve-3d; transition: transform .65s cubic-bezier(.2,.65,.25,1); }
.is-flipped .flip-inner { transform: rotateY(180deg); }
.card-face { grid-area: 1 / 1; min-width: 0; border: 1px solid #2d3850; border-radius: 9px; background: #141d30; backface-visibility: hidden; -webkit-backface-visibility: hidden; overflow: hidden; }
.card-front { display: flex; flex-direction: column; }
.project-visual { height: 175px; flex-shrink: 0; }
.visual-caption { max-width: calc(100% - 44px); text-align: right; line-height: 1.6; }
.project-content { flex: 1; display: flex; flex-direction: column; padding: 27px; }
.project-content > p:not(.eyebrow) { min-height: 0; margin-top: 0; }
.project-content .project-summary { color: #d2dbee; font-size: 15px; line-height: 1.8; max-width: 45ch; }
.project-content .tags { margin-top: auto; padding-top: 20px; }
.card-bottom { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-top: 16px; border-top: 1px solid var(--line); color: var(--muted); font-size: 11px; }
.rotate-cue { color: var(--accent); font-size: 24px; line-height: 1; }
.card-back { transform: rotateY(180deg); padding: 27px; background: linear-gradient(145deg,#242c40,#162135); display: flex; flex-direction: column; }
.card-back .card-top { margin-bottom: 18px; }
.card-back h3 { font-size: 23px; margin-bottom: 14px; }
.back-overview { font-size: 13px; color: #c6cfdf; margin: 0 0 18px; line-height: 1.8; }
.architecture { margin: 0 0 20px; padding: 12px 14px; border-left: 2px solid var(--accent); border-radius: 3px; background: #0d1627; color: #d3deee; font-size: 12px; line-height: 1.7; overflow-wrap: anywhere; }
.architecture span { display: block; margin-bottom: 5px; color: var(--accent); font-size: 9px; letter-spacing: 1px; }
.card-back h4 { color: var(--accent); text-transform: uppercase; letter-spacing: 1px; font-size: 10px; margin: 0 0 10px; }
.card-back ul { margin: 0 0 24px; padding-left: 18px; }
.card-back li { color: #c6cfdf; font-size: 13px; margin-bottom: 9px; line-height: 1.7; }
.card-back li::marker { color: var(--accent); }
.back-footer { margin-top: auto; border-top: 1px solid #354158; padding-top: 18px; }
.back-footer .muted { margin: 12px 0 8px; }
.return-hint { display: block; color: var(--muted); font-size: 10px; }
.visual-tools { background: linear-gradient(130deg,#2e2940,#143137); }
@media(max-width:700px) { .project-content,.card-back { padding: 23px; } .project-visual { height: 150px; } }
@media(max-width:420px) { .project-toolbar { align-items: flex-start; gap: 10px; } .filters button { padding-inline: 11px; } }
@media(prefers-reduced-motion:reduce) { .flip-inner { transition: none; } }
</style>
