<script setup>
function printCV() {
  window.print()
}
</script>

<template>
  <div class="cv-page">
    <div class="page-heading cv-intro">
      <p class="eyebrow">06 / PROFILE AT A GLANCE</p>
      <h2>CV / Resume<span class="dot">.</span></h2>
      <p>A concise record of my education, project work, skills, and involvement.</p>
      <button class="button primary print-button" type="button" @click="printCV">Print / Save as PDF</button>
    </div>

    <article class="cv-sheet" aria-label="Aldren Ross Luga CV">
      <header class="cv-header">
        <div>
          <p class="eyebrow">SOFTWARE DEVELOPMENT / STUDENT</p>
          <h3>Aldren Ross Luga</h3>
          <p>Fourth-year BS Information Technology student · Davao del Norte, Philippines</p>
        </div>
        <a href="mailto:mamalealdren@gmail.com">mamalealdren@gmail.com</a>
      </header>

      <section class="cv-section">
        <h4>Professional Summary</h4>
        <p>Information Technology student building web and mobile applications through coursework and independent projects. Interested in backend development, computer vision, and AI-assisted developer tools. Seeking an internship or entry-level software development opportunity.</p>
      </section>

      <section class="cv-section">
        <h4>Education</h4>
        <div class="cv-item"><strong>Bachelor of Science in Information Technology</strong><span>Davao del Norte State College · Fourth year, ongoing</span></div>
      </section>

      <section class="cv-section">
        <h4>Technical Skills</h4>
        <p><strong>Languages & frameworks:</strong> JavaScript, Python, Dart, Vue, Flutter, FastAPI</p>
        <p><strong>Data & tools:</strong> PostgreSQL, SQLite, Git, GitHub, Docker</p>
        <p><strong>Applied areas:</strong> API integration, mobile development, object detection, testing</p>
      </section>

      <section class="cv-section">
        <h4>Academic and Personal Projects</h4>
        <div class="cv-item"><strong>SAFEWAY · Academic capstone in development</strong><span>Flutter driver app with on-device YOLO/TFLite hazard detection and alerts; FastAPI backend with PostgreSQL for trip and hazard data.</span></div>
        <div class="cv-item"><strong>Campus Store POS · IT415 team project</strong><span>Vue self-service kiosk for browsing products, managing a cart, simulated payments, and printable receipts.</span></div>
        <div class="cv-item"><strong>OrcaDev · Developer tool</strong><span>Python CLI for inspecting Git projects, planning tasks with Codex CLI, and running them with verification and scoped checkpoints.</span></div>
      </section>

      <section class="cv-section">
        <h4>Experience & Leadership</h4>
        <div class="cv-item"><strong>Independent software development</strong><span>Built and explored applications, APIs, databases, developer tools, and AI-assisted workflows through personal projects.</span></div>
        <div class="cv-item"><strong>Academic software development</strong><span>Applied system design, mobile development, backend integration, and collaborative problem-solving in coursework and capstone work.</span></div>
        <div class="cv-item"><strong>Vice President · Codex Programming</strong><span>Contribute to student organization leadership and a community focused on programming and technical learning.</span></div>
      </section>

      <section class="cv-section">
        <h4>Competitions & Activities</h4>
        <div class="cv-item"><strong>Code in the Dark</strong><span>Participated in a competitive programming activity and applied technical and problem-solving skills.</span></div>
      </section>

      <section class="cv-section cv-contact">
        <h4>Contact Information</h4>
        <p><a href="mailto:mamalealdren@gmail.com">mamalealdren@gmail.com</a> · <a href="https://github.com/drennndrenn" target="_blank" rel="noopener noreferrer">github.com/drennndrenn</a></p>
        <p>Sto. Tomas, Davao del Norte, Philippines</p>
      </section>
    </article>
  </div>
</template>

<style scoped>
.cv-intro { display: flex; flex-direction: column; align-items: flex-start; }
.cv-intro .print-button { margin-top: 20px; }
.cv-sheet { max-width: 900px; margin: 0 auto; padding: 44px 52px; border: 1px solid #354158; border-radius: 9px; background: #141d30; box-shadow: 0 18px 45px #050a1670; }
.cv-header { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; border-bottom: 2px solid var(--accent); padding-bottom: 24px; }
.cv-header h3 { font-size: 32px; margin: 0 0 5px; }
.cv-header p:not(.eyebrow) { color: #c5cee0; font-size: 13px; margin: 0; }
.cv-header a { font-size: 12px; color: var(--accent); overflow-wrap: anywhere; }
.cv-section { padding-top: 23px; break-inside: avoid; }
.cv-section h4 { color: var(--accent); font: 700 14px 'Space Grotesk', sans-serif; letter-spacing: .3px; margin: 0 0 11px; text-transform: uppercase; }
.cv-section p, .cv-item span { display: block; color: #d1d8e7; font-size: 13px; line-height: 1.65; margin: 0 0 8px; }
.cv-item { margin-bottom: 11px; break-inside: avoid; }
.cv-item strong { display: block; font-size: 14px; margin-bottom: 2px; }
.cv-contact a { color: var(--accent); }
@media(max-width:700px) { .cv-sheet { padding: 25px 22px; } .cv-header { display: block; } .cv-header h3 { font-size: 27px; } .cv-header a { display: inline-block; margin-top: 10px; } }
</style>
