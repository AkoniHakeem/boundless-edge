<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-section">
          <div class="footer-logo">
            <img
              src="/images/Boundless_Edge_-Logo-nobg.png"
              alt="Boundless Edge"
              class="footer-logo-image"
            />
            <h3>Boundless Edge</h3>
          </div>
          <p style="color: rgba(255, 255, 255, 0.7); line-height: 1.6">
            Transforming ideas into reality through innovative digital
            solutions. We help businesses of all sizes achieve their technology
            goals.
          </p>
        </div>

        <div
          class="footer-section"
          v-for="section in footerSections"
          :key="section.title"
        >
          <h3>{{ section.title }}</h3>
          <ul>
            <li v-for="link in section.links" :key="link.name">
              <a :href="link.url">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 Boundless Edge Limited. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { toRefs } from 'vue';
const props = defineProps({
  footerSections: {
    type: Array,
    required: true,
  },
});
const { footerSections } = toRefs(props);
</script>

<style scoped>
.footer {
  background: #0c0c0c;
  color: rgba(255, 255, 255, 0.8);
  padding: 3rem 2rem 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-family: 'Space Grotesk', sans-serif;
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.footer-logo-image {
  height: 32px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 6px 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  filter: brightness(1.2);
  transition: all 0.3s ease;
}

.footer-logo-image:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.footer-logo h3 {
  margin: 0;
  font-size: 1.3rem;
  background: linear-gradient(135deg, #ffffff 0%, #a8edea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-section ul li {
  margin: 0.5rem 0;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #667eea;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
