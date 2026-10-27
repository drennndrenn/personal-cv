<script setup>
import { reactive, ref } from "vue";
const form = reactive({ name: "", email: "", subject: "", message: "" });
const feedback = ref("");
function send() {
  const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
  window.location.href = `mailto:mamalealdren@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  feedback.value =
    "Your email app has been requested. Review and send the draft there. If no app opens, email mamalealdren@gmail.com directly.";
}
async function copy() {
  try {
    await navigator.clipboard.writeText("mamalealdren@gmail.com");
    feedback.value = "Email address copied.";
  } catch {
    feedback.value = "Copy this address: mamalealdren@gmail.com";
  }
}
</script>
<template>
  <div>
    <div class="page-heading">
      <p class="eyebrow">07 / START A CONVERSATION</p>
      <h2>Let's build something useful<span class="dot">.</span></h2>
      <p>
        Have an opportunity, a project idea, or a question? I'd love to hear
        from you.
      </p>
    </div>
    <div class="contact-grid">
      <div class="stack">
        <article class="panel">
          <p class="eyebrow">DIRECT CHANNELS</p>
          <h3>Get in touch</h3>
          <p>
            For internships, development opportunities, academic discussions,
            and collaborations.
          </p>
          <div class="contact-channel">
            <span class="channel-icon" aria-hidden="true">✉</span>
            <div>
              <small>Email</small
              ><a href="mailto:mamalealdren@gmail.com"
                >mamalealdren@gmail.com</a
              >
            </div>
            <button class="copy" @click="copy" aria-label="Copy email address">
              ⧉
            </button>
          </div>
          <div class="contact-channel">
            <span class="channel-icon" aria-hidden="true">☎</span>
            <div>
              <small>Phone / SMS</small
              ><a href="tel:+639519441718">0951 944 1718</a>
            </div>
          </div>
          <div class="contact-channel">
            <span class="channel-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.53v-2.08c-3.09.67-3.74-1.31-3.74-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .17 1.71-.72 2.13-1.11-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.22-5.08 5.5.44.38.83 1.12.83 2.26V22c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"/></svg></span>
            <div>
              <small>GitHub</small
              ><a
                href="https://github.com/drennndrenn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile, opens in a new tab">@drennndrenn ↗</a
              >
            </div>
          </div>
          <div class="contact-channel">
            <span class="channel-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/></svg></span>
            <div><small>Instagram</small><a href="https://www.instagram.com/aldwin.raws/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile, opens in a new tab">@aldwin.raws ↗</a></div>
          </div>
          <div class="contact-channel">
            <span class="channel-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.25 0-1.64.78-1.64 1.58V12h2.79l-.45 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg></span>
            <div><small>Facebook</small><a href="https://www.facebook.com/aldrenross.mamale.21" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile, opens in a new tab">Aldren Ross ↗</a></div>
          </div>
        </article>
        <article class="panel location-card">
          <p class="eyebrow">⌖ BASED IN THE PHILIPPINES</p>
          <h3>Sto. Tomas,<br />Davao del Norte</h3>
          <p>Philippine Standard Time · UTC+8</p>
        </article>
      </div>
      <article class="panel form-panel">
        <p class="eyebrow">A NOTE TO SAY HELLO</p>
        <h3>What's on your mind?</h3>
        <p>
          This form prepares a draft in your email app. You'll send the message
          from there.
        </p>
        <form @submit.prevent="send">
          <div class="form-row">
            <label
              >Your name<input
                v-model="form.name"
                name="name"
                autocomplete="name"
                maxlength="100"
                required
                placeholder="Alex Rivera" /></label
            ><label
              >Your email<input
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                maxlength="254"
                required
                placeholder="alex@example.com"
            /></label>
          </div>
          <label
            >Subject<input
              v-model="form.subject"
              name="subject"
              required
              maxlength="150"
              placeholder="Internship opportunity"
          /></label>
          <div class="presets">
            <span>Suggestions</span
            ><button
              type="button"
              v-for="subject in [
                'Internship',
                'Collaboration',
                'Academic inquiry',
              ]"
              :key="subject"
              @click="form.subject = subject"
            >
              {{ subject }}
            </button>
          </div>
          <label
            >Message<textarea
              v-model="form.message"
              name="message"
              required
              rows="6"
              maxlength="2500"
              placeholder="Tell me a little about your idea…"
            ></textarea></label
          ><button class="button primary send" type="submit">
            Open email draft ↗
          </button>
        </form>
      </article>
    </div>
    <p class="feedback" role="status" aria-live="polite">{{ feedback }}</p>
  </div>
</template>

<style scoped>
.channel-icon { display: inline-flex; align-items: center; justify-content: center; }
.channel-icon svg { width: 19px; height: 19px; }
</style>
