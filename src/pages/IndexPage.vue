<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="floating-elements">
        <div class="floating-element bubble-1"></div>
        <div class="floating-element bubble-2"></div>
        <div class="floating-element bubble-3"></div>
        <div class="floating-element bubble-4"></div>
        <div class="floating-element bubble-5"></div>
        <div class="floating-element bubble-6"></div>
        <div class="floating-element bubble-7"></div>
        <div class="floating-element bubble-8"></div>
      </div>
      <div class="hero-content">
        <h1 ref="heroTitle">{{ heroText }}</h1>
        <p class="tagline">Transforming Ideas into Reality</p>
        <div class="hero-buttons">
          <a
            href="#portfolio"
            class="btn-primary"
            @click="scrollToSection('portfolio')"
            >View Our Work</a
          >
          <a
            href="#contact"
            class="btn-secondary"
            @click="scrollToSection('contact')"
            >Start Your Project</a
          >
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section" id="services">
      <h2 class="section-title gradient">Our Services</h2>
      <p class="section-subtitle">
        We provide comprehensive digital solutions to help your business thrive
        in the modern world. From custom software development to digital
        transformation, we've got you covered.
      </p>

      <div class="services-grid fade-in" ref="servicesSection">
        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-icon">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- TVET Section -->
    <section class="tvet-intro-section section">
      <div class="tvet-intro-grid">
        <div class="tvet-intro-content">
          <h2 class="tvet-main-title">Empowering Nigeria's Future Workforce</h2>
          <p class="section-subtitle">
            Join our Technical and Vocational Education and Training (TVET)
            programs designed to build practical skills for high-demand careers.
          </p>
          <p>
            Our TVET programs bridge the gap between education and industry,
            providing hands-on training in technology, healthcare, skilled
            trades, and creative fields. We're committed to developing Nigeria's
            local talent for a self-reliant and prosperous future.
          </p>
          <div class="tvet-highlights">
            <div class="highlight-item">
              <q-icon name="school" size="2rem" color="primary" />
              <div>
                <h4>Industry-Focused Training</h4>
                <p>Programs designed with real employer needs in mind</p>
              </div>
            </div>
            <div class="highlight-item">
              <q-icon name="work" size="2rem" color="primary" />
              <div>
                <h4>Job-Ready Skills</h4>
                <p>Graduate with immediately applicable technical expertise</p>
              </div>
            </div>
            <div class="highlight-item">
              <q-icon name="people" size="2rem" color="primary" />
              <div>
                <h4>Expert Mentorship</h4>
                <p>
                  Learn from industry professionals and experienced trainers
                </p>
              </div>
            </div>
          </div>
          <div class="tvet-cta">
            <q-btn
              color="primary"
              size="lg"
              label="Explore TVET Programs"
              no-caps
              @click="$router.push('/tvet')"
              icon-right="arrow_forward"
            />
          </div>
        </div>
        <div class="tvet-intro-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Students learning technical skills"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section section" id="about">
      <div class="about-grid fade-in" ref="aboutSection">
        <div class="about-content">
          <h2>Innovating the Future of Technology</h2>
          <p>
            At Boundless Edge, we're passionate about turning innovative ideas
            into powerful digital solutions. Our team of experienced developers,
            designers, and strategists work collaboratively to deliver
            exceptional results that drive business growth.
          </p>
          <p>
            With expertise spanning multiple industries and technologies, we
            provide end-to-end solutions that not only meet your current needs
            but scale with your future ambitions.
          </p>

          <div class="stats-grid">
            <div class="stat-item" v-for="stat in stats" :key="stat.id">
              <span class="stat-number">{{ stat.number }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div class="about-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Team collaboration"
          />
          <div class="about-image-content">
            <h3>Expert Team</h3>
            <p>Dedicated professionals committed to your success</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="section" id="portfolio">
      <h2 class="section-title gradient">Our Portfolio</h2>
      <p class="section-subtitle">
        Explore some of our recent projects and see how we've helped businesses
        achieve their digital transformation goals.
      </p>

      <div class="portfolio-grid fade-in" ref="portfolioSection">
        <div
          class="portfolio-card"
          v-for="project in portfolio"
          :key="project.id"
        >
          <div class="portfolio-image">
            <span class="icon">{{ project.icon }}</span>
          </div>
          <div class="portfolio-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="contact-container">
        <div class="contact-grid">
          <div class="contact-info" ref="contactInfoSection">
            <h2>Let's Build Something Amazing Together</h2>
            <p>
              Ready to transform your ideas into reality? We're here to help you
              navigate the digital landscape and create solutions that drive
              real results for your business.
            </p>

            <ul class="contact-methods">
              <li v-for="method in contactMethods" :key="method.id">
                <span class="icon">{{ method.icon }}</span>
                <div>
                  <strong>{{ method.title }}</strong
                  ><br />
                  <span v-html="method.details"></span>
                </div>
              </li>
            </ul>
          </div>

          <q-form
            class="contact-form"
            @submit="onSubmit"
            ref="contactFormSection"
          >
            <div class="form-group">
              <label for="name">Full Name</label>
              <q-input
                v-model="form.name"
                filled
                dark
                placeholder="Enter your full name"
                :rules="[(val) => !!val || 'Name is required']"
                class="contact-input"
              />
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <q-input
                v-model="form.email"
                type="email"
                filled
                dark
                placeholder="Enter your email address"
                :rules="[(val) => !!val || 'Email is required', isValidEmail]"
                class="contact-input"
              />
            </div>

            <div class="form-group">
              <label for="company">Company</label>
              <q-input
                v-model="form.company"
                filled
                dark
                placeholder="Enter your company name"
                class="contact-input"
              />
            </div>

            <div class="form-group">
              <label for="project">Project Type</label>
              <q-select
                v-model="form.projectType"
                :options="projectTypes"
                filled
                dark
                placeholder="Select project type"
                class="contact-input"
              />
            </div>

            <div class="form-group">
              <label for="message">Project Details</label>
              <q-input
                v-model="form.message"
                type="textarea"
                filled
                dark
                placeholder="Tell us about your project..."
                :rules="[(val) => !!val || 'Message is required']"
                class="contact-input"
                rows="4"
              />
            </div>

            <q-btn
              type="submit"
              :loading="isSubmitting"
              class="submit-btn"
              no-caps
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </q-btn>
          </q-form>
        </div>
      </div>
    </section>

    <!-- Footer -->
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
              solutions. We help businesses of all sizes achieve their
              technology goals.
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
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const $q = useQuasar();
    const heroText = ref('');
    const isSubmitting = ref(false);

    // Refs for intersection observer
    const servicesSection = ref(null);
    const aboutSection = ref(null);
    const portfolioSection = ref(null);
    const contactInfoSection = ref(null);
    const contactFormSection = ref(null);

    // Form data
    const form = ref({
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: '',
    });

    // Services data
    const services = ref([
      {
        id: 1,
        icon: '🚀',
        title: 'Custom Software Development',
        description:
          'Tailored software solutions designed specifically for your business needs and goals.',
        features: [
          'Web Applications',
          'Mobile Apps (iOS & Android)',
          'Desktop Applications',
          'API Development',
          'Database Design',
        ],
      },
      {
        id: 2,
        icon: '🌐',
        title: 'Web Development',
        description:
          'Modern, responsive websites that deliver exceptional user experiences across all devices.',
        features: [
          'Responsive Design',
          'E-commerce Solutions',
          'Content Management Systems',
          'SEO Optimization',
          'Performance Optimization',
        ],
      },
      {
        id: 3,
        icon: '📱',
        title: 'Mobile App Development',
        description:
          'Native and cross-platform mobile applications that engage users and drive business growth.',
        features: [
          'iOS & Android Apps',
          'Cross-platform Development',
          'UI/UX Design',
          'App Store Optimization',
          'Maintenance & Support',
        ],
      },
      {
        id: 4,
        icon: '☁️',
        title: 'Cloud Solutions',
        description:
          'Scalable cloud infrastructure and services to modernize your business operations.',
        features: [
          'Cloud Migration',
          'AWS & Azure Services',
          'DevOps Implementation',
          'Backup & Security',
          '24/7 Monitoring',
        ],
      },
      {
        id: 5,
        icon: '🎨',
        title: 'UI/UX Design',
        description:
          'Beautiful, intuitive designs that create meaningful connections between your brand and users.',
        features: [
          'User Research',
          'Wireframing & Prototyping',
          'Visual Design',
          'Usability Testing',
          'Brand Identity',
        ],
      },
      {
        id: 6,
        icon: '🔧',
        title: 'Digital Transformation',
        description:
          'Complete digital transformation solutions to modernize your business processes and workflows.',
        features: [
          'Process Automation',
          'System Integration',
          'Data Analytics',
          'Digital Strategy',
          'Change Management',
        ],
      },
    ]);

    // Stats data
    const stats = ref([
      { id: 1, number: '10+', label: 'Projects Completed' },
      { id: 2, number: '100%', label: 'Client Satisfaction' },
      { id: 3, number: '24/7', label: 'Support Available' },
      { id: 4, number: '2+', label: 'Years In Existence' },
    ]);

    // Portfolio data
    const portfolio = ref([
      {
        id: 1,
        icon: '🏢',
        title: 'Municipal Management Platform',
        description:
          'Comprehensive waste management system serving multiple municipalities with automated billing and real-time tracking capabilities.',
      },
      {
        id: 2,
        icon: '💰',
        title: 'Financial Management System',
        description:
          'Secure cooperative management platform handling financial transactions with advanced user verification and compliance features.',
      },
      {
        id: 3,
        icon: '🎓',
        title: 'Learning Management System',
        description:
          'Enterprise-grade educational platform with integrated video conferencing, automated assessments, and progress tracking.',
      },
      {
        id: 4,
        icon: '🛒',
        title: 'E-commerce Platform',
        description:
          'Modern online marketplace with advanced search, payment integration, and inventory management for growing businesses.',
      },
      {
        id: 5,
        icon: '📊',
        title: 'Analytics Dashboard',
        description:
          'Real-time business intelligence platform providing actionable insights through interactive visualizations and reporting.',
      },
      {
        id: 6,
        icon: '📱',
        title: 'Mobile Banking App',
        description:
          'Secure mobile banking solution with biometric authentication, transaction history, and seamless money transfer capabilities.',
      },
    ]);

    // Contact methods
    const contactMethods = ref([
      {
        id: 1,
        icon: '📧',
        title: 'Email Us',
        details: 'dev@boundlesedge.com',
      },
      {
        id: 2,
        icon: '📞',
        title: 'Call Us',
        details: '+2347011630342',
      },
      {
        id: 3,
        icon: '📍',
        title: 'Visit Us',
        details: '106 Hob and Hog Plaza, Shasha Road<br>Lagos State, Nigeria',
      },
      {
        id: 4,
        icon: '⏰',
        title: 'Business Hours',
        details: 'Monday - Friday: 9:00 AM - 6:00 PM',
      },
    ]);

    // Project types for form
    const projectTypes = ref([
      'Web Development',
      'Mobile App Development',
      'Custom Software',
      'UI/UX Design',
      'Digital Transformation',
      'Consulting',
      'Other',
    ]);

    // Footer sections
    const footerSections = ref([
      {
        title: 'Services',
        links: [
          { name: 'Custom Software Development', url: '#services' },
          { name: 'Web Development', url: '#services' },
          { name: 'Mobile App Development', url: '#services' },
          { name: 'UI/UX Design', url: '#services' },
          { name: 'Cloud Solutions', url: '#services' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', url: '#about' },
          { name: 'Portfolio', url: '#portfolio' },
          { name: 'Contact', url: '#contact' },
          { name: 'Careers', url: '#careers' },
          { name: 'Blog', url: '#blog' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { name: 'LinkedIn', url: '#linkedin' },
          { name: 'Twitter', url: '#twitter' },
          { name: 'GitHub', url: '#github' },
          { name: 'Dribbble', url: '#dribbble' },
        ],
      },
    ]);

    // Methods
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const targetPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    };

    const typeWriter = (text, element, speed = 150) => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          heroText.value += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
    };

    const isValidEmail = (val) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(val) || 'Please enter a valid email address';
    };

    const onSubmit = async () => {
      isSubmitting.value = true;

      try {
        // Prepare the data for our Netlify function
        const formData = {
          name: form.value.name,
          email: form.value.email,
          company: form.value.company || '',
          projectType: form.value.projectType || '',
          message: form.value.message,
        };

        // Send to our Netlify function
        const response = await fetch('/.netlify/functions/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Failed to send message');
        }

        $q.notify({
          color: 'positive',
          message:
            result.message ||
            "Thank you! Your message has been sent and you'll receive a confirmation email shortly.",
          icon: 'check_circle',
          timeout: 5000,
        });

        // Reset form
        form.value = {
          name: '',
          email: '',
          company: '',
          projectType: '',
          message: '',
        };

        // Reset form validation states
        if (contactFormSection.value) {
          contactFormSection.value.resetValidation();
        }
      } catch (error) {
        console.error('Contact form error:', error);

        let errorMessage =
          'Failed to send message. Please try again or contact us directly at service@boundlessedge.com';

        if (error.message) {
          errorMessage = error.message;
        }

        $q.notify({
          color: 'negative',
          message: errorMessage,
          icon: 'error',
          timeout: 5000,
        });
      } finally {
        isSubmitting.value = false;
      }
    };

    onMounted(() => {
      // Start typing effect
      setTimeout(() => {
        typeWriter('Boundless Edge', { value: '' });
      }, 500);

      // Set up intersection observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      // Observe all fade-in elements
      setTimeout(() => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((el) => observer.observe(el));
      }, 100);
    });

    return {
      heroText,
      isSubmitting,
      form,
      services,
      stats,
      portfolio,
      contactMethods,
      projectTypes,
      footerSections,
      servicesSection,
      aboutSection,
      portfolioSection,
      contactInfoSection,
      contactFormSection,
      scrollToSection,
      isValidEmail,
      onSubmit,
    };
  },
});
</script>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

/* Global CSS Variables */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --blue-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --purple-gradient: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  --dark-gradient: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%);
  --text-primary: #2d3748;
  --text-secondary: #4a5568;
  --text-light: #718096;
  --white: #ffffff;
  --gray-50: #f7fafc;
  --gray-100: #edf2f7;
  --gray-200: #e2e8f0;
}
</style>

<style scoped>
/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="g"><stop offset="0%" stop-color="rgba(255,255,255,0.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs><circle cx="200" cy="200" r="300" fill="url(%23g)"/><circle cx="800" cy="600" r="250" fill="url(%23g)"/><circle cx="600" cy="300" r="200" fill="url(%23g)"/></svg>')
    no-repeat center;
  background-size: cover;
  pointer-events: none;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  min-height: 1.2em;
}

.hero .tagline {
  font-size: clamp(1.2rem, 4vw, 2rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-weight: 300;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.btn-primary,
.btn-secondary {
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Floating elements */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.floating-element {
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1);
}

/* Individual bubble animations with varying sizes and movements */
.bubble-1 {
  width: 80px;
  height: 80px;
  top: 15%;
  right: 10%;
  animation: floatRightToLeft 25s infinite linear,
    breathe 4s infinite ease-in-out;
  animation-delay: 0s, 0s;
}

.bubble-2 {
  width: 120px;
  height: 120px;
  top: 45%;
  right: 85%;
  animation: floatRightToLeft 30s infinite linear,
    breathe 5s infinite ease-in-out;
  animation-delay: -5s, -1s;
}

.bubble-3 {
  width: 60px;
  height: 60px;
  top: 75%;
  right: 20%;
  animation: floatRightToLeft 20s infinite linear,
    breathe 3s infinite ease-in-out;
  animation-delay: -10s, -2s;
}

.bubble-4 {
  width: 100px;
  height: 100px;
  top: 25%;
  right: 60%;
  animation: floatRightToLeft 35s infinite linear,
    breathe 4.5s infinite ease-in-out;
  animation-delay: -15s, -0.5s;
}

.bubble-5 {
  width: 40px;
  height: 40px;
  top: 60%;
  right: 5%;
  animation: floatRightToLeft 18s infinite linear,
    breathe 3.5s infinite ease-in-out;
  animation-delay: -8s, -1.5s;
}

.bubble-6 {
  width: 150px;
  height: 150px;
  top: 10%;
  right: 75%;
  animation: floatRightToLeft 40s infinite linear,
    breathe 6s infinite ease-in-out;
  animation-delay: -20s, -3s;
}

.bubble-7 {
  width: 70px;
  height: 70px;
  top: 85%;
  right: 50%;
  animation: floatRightToLeft 22s infinite linear,
    breathe 3.8s infinite ease-in-out;
  animation-delay: -12s, -2.5s;
}

.bubble-8 {
  width: 90px;
  height: 90px;
  top: 35%;
  right: 30%;
  animation: floatRightToLeft 28s infinite linear,
    breathe 4.2s infinite ease-in-out;
  animation-delay: -18s, -1.8s;
}

@keyframes floatRightToLeft {
  from {
    transform: translateX(0) translateY(0);
  }
  to {
    transform: translateX(calc(-100vw - 200px)) translateY(-30px);
  }
}

@keyframes breathe {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.9;
  }
}

/* Sections */
.section {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.section-title.gradient {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.8;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.service-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--gray-200);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-gradient);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: var(--primary-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.service-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  margin: 0;
  padding: 0;
}

.service-features li {
  color: var(--text-light);
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

/* TVET Section */
.tvet-intro-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 6rem 2rem;
}

.tvet-intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.85) 0%,
      rgba(118, 75, 162, 0.85) 100%
    ),
    radial-gradient(
      circle at 30% 40%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 0.1) 0%, transparent 50%);
  z-index: 1;
}

.tvet-intro-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.05) 50%,
    transparent 70%
  );
  z-index: 1;
  animation: shimmer 4s ease-in-out infinite;
}

@keyframes shimmer {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.tvet-intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  animation: slideInUp 1s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.tvet-intro-content {
  animation: fadeInLeft 1.2s ease-out 0.3s both;
}

.tvet-intro-image {
  animation: fadeInRight 1.2s ease-out 0.6s both;
}

.tvet-main-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.8rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;

  /* Make text highly visible with multiple contrast techniques */
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);

  /* Add a subtle background for extra contrast */
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  padding: 1.5rem 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);

  /* Animation for extra attention */
  animation: titlePulse 3s ease-in-out infinite alternate;
}

@keyframes titlePulse {
  0% {
    transform: scale(1);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
  }
  100% {
    transform: scale(1.02);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.9), 0 6px 12px rgba(0, 0, 0, 0.6),
      0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 215, 0, 0.3);
  }
}

.tvet-intro-content h2 {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.2;
  background: none;
  -webkit-background-clip: unset;
  background-clip: unset;
  -webkit-text-fill-color: white;
}

.tvet-intro-content .section-subtitle {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
}

.tvet-highlights {
  margin: 2rem 0;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.highlight-item:nth-child(1) {
  animation-delay: 0.9s;
}

.highlight-item:nth-child(2) {
  animation-delay: 1.1s;
}

.highlight-item:nth-child(3) {
  animation-delay: 1.3s;
}

.highlight-item h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.highlight-item p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.tvet-cta {
  margin-top: 2rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1.5s forwards;
  transform: translateY(20px);
}

.tvet-intro-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .tvet-intro-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .tvet-intro-image {
    order: -1;
  }

  .tvet-main-title {
    font-size: clamp(2rem, 8vw, 2.8rem);
    padding: 1rem 1.5rem;
    text-align: center;
  }

  .tvet-intro-section {
    padding: 4rem 1rem;
  }
} /* About Section */
.about-section {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-content h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.stat-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.about-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.about-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.about-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-gradient);
  opacity: 0.8;
  z-index: 1;
}

.about-image-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
}

.about-image-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

/* Portfolio Section */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.portfolio-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.portfolio-image {
  height: 200px;
  background: var(--blue-gradient);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portfolio-image .icon {
  font-size: 3rem;
  color: white;
}

.portfolio-content {
  padding: 2rem;
}

.portfolio-content h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.portfolio-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Contact Section */
.contact-section {
  background: var(--dark-gradient);
  color: white;
  padding: 6rem 2rem;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.contact-info p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.contact-methods {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-methods li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  color: rgba(255, 255, 255, 0.9);
}

.contact-methods .icon {
  width: 24px;
  text-align: center;
}

.dev-notice {
  margin: 1.5rem 0;
  border-radius: 12px;
  overflow: hidden;
}

.contact-form {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.contact-input :deep(.q-field__control) {
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: 10px !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
}

.contact-input :deep(.q-field__native) {
  color: white !important;
}

.contact-input :deep(.q-placeholder) {
  color: rgba(255, 255, 255, 0.6) !important;
}

.submit-btn {
  background: var(--primary-gradient);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

/* Footer */
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

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }

  .section {
    padding: 4rem 1rem;
  }

  .contact-section {
    padding: 4rem 1rem;
  }
}

@media (max-width: 480px) {
  .services-grid,
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
