<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header class="custom-header" :class="{ scrolled: isScrolled }">
      <q-toolbar class="custom-toolbar">
        <div class="logo">
          <div class="logo-container">
            <img
              src="/images/Boundless_Edge_-Logo-nobg.png"
              alt="Boundless Edge"
              class="logo-image"
            />
          </div>
          <span class="logo-text">Boundless Edge</span>
        </div>

        <q-space />

        <div class="nav-links gt-sm">
          <a
            href="#services"
            @click="scrollToSection('services')"
            class="nav-link"
            >Services</a
          >
          <a href="#about" @click="scrollToSection('about')" class="nav-link"
            >About</a
          >
          <a
            href="#portfolio"
            @click="scrollToSection('portfolio')"
            class="nav-link"
            >Portfolio</a
          >
          <router-link to="/tvet" class="nav-link">TVET Program</router-link>
        </div>

        <div class="header-actions gt-sm">
          <a
            href="#contact"
            class="cta-button"
            @click="scrollToSection('contact')"
          >
            <span>Get Started</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <q-btn
          flat
          round
          dense
          icon="menu"
          class="mobile-menu-toggle lt-md"
          @click="toggleMobileMenu"
        >
          <q-menu v-model="mobileMenuOpen" class="mobile-menu">
            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="scrollToSection('services')"
              >
                <q-item-section>Services</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="scrollToSection('about')">
                <q-item-section>About</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                @click="scrollToSection('portfolio')"
              >
                <q-item-section>Portfolio</q-item-section>
              </q-item>
              <q-item clickable v-close-popup :to="{ path: '/tvet' }">
                <q-item-section>TVET Program</q-item-section>
              </q-item>
              <q-separator />
              <q-item
                clickable
                v-close-popup
                @click="scrollToSection('contact')"
              >
                <q-item-section class="text-primary text-weight-medium"
                  >Get Started</q-item-section
                >
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80;
    const targetPosition = element.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
  mobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Global CSS Variables */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --text-primary: #2d3748;
}

/* Header Styling */
.custom-header {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.custom-header.scrolled {
  background: rgba(255, 255, 255, 0.98) !important;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.custom-toolbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  min-height: 80px;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 1rem;
}

.logo-container {
  background: var(--primary-gradient);
  border-radius: 12px;
  padding: 8px 12px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-container:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
}

.logo-image {
  height: 32px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: brightness(0) invert(1); /* Makes the logo white on gradient background */
}

.custom-header.scrolled .logo-image {
  height: 28px;
}

.logo-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
}

.custom-header.scrolled .logo-image {
  height: 35px;
}

.custom-header.scrolled .logo-text {
  font-size: 1.3rem;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: #667eea;
  transform: translateY(-1px);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--primary-gradient);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  margin-left: 2rem;
}

.cta-button {
  background: var(--primary-gradient);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  outline: none;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(2px);
}

.mobile-menu-toggle {
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.mobile-menu-toggle:hover {
  background-color: rgba(0, 0, 0, 0.05) !important;
}

.mobile-menu {
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .custom-toolbar {
    padding: 1rem 1.5rem;
  }

  .logo-container {
    padding: 6px 10px;
  }

  .logo-image {
    height: 28px;
  }

  .custom-header.scrolled .logo-image {
    height: 26px;
  }

  .logo-text {
    font-size: 1.3rem;
  }
}
</style>
