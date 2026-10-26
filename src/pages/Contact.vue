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
      <p class="eyebrow">05 / START A CONVERSATION</p>
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
            <span class="channel-icon">@</span>
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
            <span class="channel-icon">↗</span>
            <div>
              <small>Phone / SMS</small
              ><a href="tel:+639519441718">0951 944 1718</a>
            </div>
          </div>
          <div class="contact-channel">
            <span class="channel-icon">⌘</span>
            <div>
              <small>GitHub</small
              ><a
                href="https://github.com/drennndrenn"
                target="_blank"
                rel="noopener noreferrer"
                >@drennndrenn ↗</a
              >
            </div>
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
