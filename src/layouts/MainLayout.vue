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
/* Component-specific styles - keeping only non-critical styles here */
/* All critical header styles are now in global app.scss to prevent refresh issues */
</style>
