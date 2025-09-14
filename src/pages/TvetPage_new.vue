<template>
  <q-page class="tvet-page">
    <!-- Hero Section -->
    <section class="hero-section text-center">
      <div class="hero-content">
        <h1 class="hero-title">Your Future, Forged by Skill</h1>
        <p class="hero-tagline">
          Discover high-demand vocational programs designed to build Nigeria's
          future and launch your career.
        </p>
        <q-btn
          @click="scrollToSection('categories')"
          class="cta-button"
          label="Explore Career Paths"
          no-caps
          icon-right="arrow_downward"
        />
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="intro-section section">
      <div class="row items-center q-col-gutter-xl">
        <div class="col-md-6 col-sm-12">
          <div class="intro-content">
            <h2 class="section-title">
              Why TVET is Nigeria's Engine for Growth
            </h2>
            <p>
              A nation's greatest asset is its people. To achieve strategic
              autonomy and build a resilient economy, Nigeria must invest in
              developing a skilled, local workforce. Technical and Vocational
              Education and Training (TVET) is the key to unlocking this
              potential.
            </p>
            <p>
              Our programs are designed to bridge the gap between education and
              industry, providing hands-on training in high-demand sectors. By
              equipping Nigerians with practical skills, we are not just
              creating jobs—we are building the foundation for a self-reliant
              and prosperous future.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="intro-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Team collaborating"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Program Categories Section -->
    <section id="categories" class="categories-section section">
      <h2 class="section-title gradient">Explore Our Fields</h2>
      <p class="section-subtitle">
        From technology to trades, find the career path that inspires you.
      </p>

      <div class="categories-grid">
        <div
          class="category-card"
          v-for="category in categories"
          :key="category.id"
        >
          <div class="category-icon-wrapper">
            <q-icon :name="category.icon" class="category-icon" />
          </div>
          <h3 class="category-title">{{ category.title }}</h3>
          <p class="category-description">{{ category.description }}</p>

          <div class="career-details">
            <img
              :src="category.careerImage"
              :alt="category.title + ' careers'"
              class="career-image"
            />
            <div class="career-examples-title">Career Paths:</div>
            <div class="career-examples">
              <span
                class="career-tag"
                v-for="career in category.careers"
                :key="career"
              >
                {{ career }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Programs Section -->
    <section id="programs" class="programs-section section">
      <h2 class="section-title">Featured Programs</h2>
      <div class="programs-grid">
        <div
          class="program-card"
          v-for="program in programs"
          :key="program.id"
          @click="openProgramModal(program)"
        >
          <div class="program-icon">
            <q-icon :name="program.icon" />
          </div>
          <div class="program-category">{{ program.category }}</div>
          <h3 class="program-title">{{ program.title }}</h3>
          <p class="program-description">{{ program.description }}</p>
          <div class="program-skills">
            <strong>Key Skills You'll Learn:</strong>
            <ul>
              <li v-for="skill in program.skills" :key="skill">
                {{ skill }}
              </li>
            </ul>
          </div>
          <q-btn class="program-cta" label="Apply Now" no-caps flat />
        </div>
      </div>
    </section>

    <!-- Program Details Modal -->
    <q-dialog v-model="showProgramModal" maximized>
      <q-card class="program-modal">
        <q-card-section class="modal-header">
          <div class="text-h4">
            {{ selectedProgram?.title || 'Program Details' }}
          </div>
          <q-btn
            icon="close"
            flat
            round
            dense
            @click="showProgramModal = false"
            class="close-btn"
          />
        </q-card-section>

        <q-card-section class="modal-content">
          <!-- Full Stack Web Development Content -->
          <div v-if="selectedProgram?.id === 1">
            <!-- Boundless Edge Developer Training Program -->
            <div class="program-details-header text-center">
              <div class="logo">BOUNDLESS EDGE</div>
              <h2 class="section-title gradient">
                Boundless Edge Developer Training Program
              </h2>
              <p class="section-subtitle">
                Empowering Africa's Next Generation of Fullstack Engineers.
              </p>
            </div>

            <!-- What You'll Learn Section -->
            <div class="curriculum-section">
              <h2 class="section-title gradient">WHAT YOU'LL LEARN</h2>
              <p class="section-subtitle">
                Choose your path: Backend or Frontend. Both tracks are hands-on,
                project-based, and mentored.
              </p>

              <div class="curriculum-tracks row q-col-gutter-lg justify-center">
                <!-- Backend Track -->
                <div class="col-md-5 col-sm-12">
                  <div class="track-card">
                    <div class="track-header">
                      <q-icon name="build" class="track-icon" />
                      <h3>Backend Track</h3>
                    </div>
                    <ul class="track-skills">
                      <li>
                        <strong>JavaScript & TypeScript:</strong> language
                        fundamentals
                      </li>
                      <li><strong>Node.js:</strong> serverside programming</li>
                      <li><strong>Express.js:</strong> API development</li>
                      <li>
                        <strong>NestJS:</strong> enterprise backend architecture
                      </li>
                      <li>
                        <strong>SQL:</strong> database design and querying
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Frontend Track -->
                <div class="col-md-5 col-sm-12">
                  <div class="track-card">
                    <div class="track-header">
                      <q-icon name="palette" class="track-icon" />
                      <h3>Frontend Track</h3>
                    </div>
                    <ul class="track-skills">
                      <li>
                        <strong>HTML & CSS:</strong> responsive design and
                        accessibility
                      </li>
                      <li>
                        <strong>JavaScript & TypeScript:</strong> interactive UI
                        logic
                      </li>
                      <li>
                        <strong>Vue.js OR React.js:</strong> component-based,
                        front-end frameworks
                      </li>
                      <li><strong>SPA routing and state management</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Training Format -->
              <div class="training-format">
                <h3 class="text-center">TRAINING FORMAT</h3>
                <q-markup-table flat bordered class="training-table">
                  <thead>
                    <tr>
                      <th>Week</th>
                      <th>Backend Focus</th>
                      <th>Frontend Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Week 1-2</td>
                      <td colspan="2">JS, Git, TypeScript (for both tracks)</td>
                    </tr>
                    <tr>
                      <td>Week 3-4</td>
                      <td>Express.js + SQL</td>
                      <td>HTML, CSS + Vue/React Basics</td>
                    </tr>
                    <tr>
                      <td>Week 5-6</td>
                      <td>NestJS + Project Capstone</td>
                      <td>Capstone</td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>

              <!-- Technologies Covered -->
              <div class="tech-covered">
                <h3 class="text-center">TECHNOLOGIES COVERED</h3>
                <div class="tech-logos-grid">
                  <div class="tech-logo-item" title="JavaScript">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0V0h24v24H0z" fill="#f7df1e" />
                      <path
                        d="M4.333 4.337H19.64v15.326H4.333zm2.133 2.133v11.06h11.041V6.47zm2.834 2.454h2.08v6.15h2.833v-6.15h2.08v8.283h-6.993zm-2.834.387c0-.33.09-.58.27-.753a.92.92 0 01.68-.257c.287 0 .52.08.697.247.177.167.267.41.267.73v5.91h2.133v-5.9c0-.8-.24-1.44-.72-1.92-.48-.48-1.11-.72-1.89-.72-.793 0-1.433.24-1.92.72-.487.48-.73 1.12-.73 1.92v5.9h2.133z"
                      />
                    </svg>
                    <span>JavaScript</span>
                  </div>
                  <div class="tech-logo-item" title="TypeScript">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.5 0h21v21h-21z" fill="#3178c6" />
                      <path
                        d="M12.42 12.312h4.445v2.185h-6.633V7.86h2.188zm-4.523-4.445h2.188v8.89h2.187v-2.186H7.9v-6.704z"
                        fill="#fff"
                      />
                    </svg>
                    <span>TypeScript</span>
                  </div>
                  <div class="tech-logo-item" title="Node.js">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.698 24l-6.83-3.943V3.943L11.698 0l6.83 3.943v16.114zm-5.32-4.712l3.812 2.2V6.188l-3.812-2.2zm10.64 0V5.488l-5.32-3.07v13.164zM12.81 11.37v-1.12l3.22-1.86v1.12zm-2.224 1.283v-1.12l3.22-1.86v1.12zm0 1.283v-1.12l3.22-1.86v1.12zm-2.224 1.283v-1.12l3.22-1.86v1.12zm0 1.283v-1.12l3.22-1.86v1.12z"
                      />
                    </svg>
                    <span>Node.js</span>
                  </div>
                  <div class="tech-logo-item" title="NestJS">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.333c-2.88 0-5.613 1.067-7.787 2.88L12 8.4l7.787-4.187C17.613 2.4 14.88 1.333 12 1.333zm7.813 3.147l-4.16 2.24-3.653-3.653 7.813 1.413zm-15.626 0l7.813-1.413-3.653 3.653-4.16-2.24zM3.413 7.36L12 22.667l8.587-15.307-3.627 3.626-4.96-9.253-4.96 9.253-3.627-3.626z"
                        fill="#e0234e"
                      />
                    </svg>
                    <span>NestJS</span>
                  </div>
                  <div class="tech-logo-item" title="HTML5">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438z"
                        fill="#e34f26"
                      />
                      <path
                        d="M12 17.56l5.547-1.513.53-6.15H9.65v2.87h3.32l-.24 2.62-2.87.79v.01H9.65v-2.87z"
                        fill="#fff"
                      />
                    </svg>
                    <span>HTML5</span>
                  </div>
                  <div class="tech-logo-item" title="CSS3">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438z"
                        fill="#1572b6"
                      />
                      <path
                        d="M12 17.56l5.547-1.513.53-6.15H9.65v2.87h3.32l-.24 2.62-2.87.79v.01H9.65v-2.87z"
                        fill="#fff"
                      />
                    </svg>
                    <span>CSS3</span>
                  </div>
                  <div class="tech-logo-item" title="Vue.js">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 1.61h-9.74L12 5.16 9.74 1.61H0L12 22.39z"
                        fill="#41b883"
                      />
                      <path
                        d="M0 1.61h9.74L12 5.16 14.26 1.61h9.74L12 22.39z"
                        fill="#41b883"
                      />
                      <path
                        d="M12 14.08L5.16 2.23h4.58L12 6.4l2.26-4.17h4.58z"
                        fill="#35495e"
                      />
                    </svg>
                    <span>Vue.js</span>
                  </div>
                  <div class="tech-logo-item" title="React">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v8h-2v-8zm0 10h2v2h-2v-2z"
                        fill="#61dafb"
                      />
                    </svg>
                    <span>React</span>
                  </div>
                  <div class="tech-logo-item" title="SQL">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.64 4.36a8.32 8.32 0 00-15.28 0H1v2.773h3.36a8.32 8.32 0 0015.28 0H23V4.36zM12 14.09a5.545 5.545 0 110-11.09 5.545 5.545 0 010 11.09zm8.36 2.774h-3.36a8.32 8.32 0 00-15.28 0H1v2.773h22z"
                      />
                    </svg>
                    <span>SQL</span>
                  </div>
                  <div class="tech-logo-item" title="PostgreSQL">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13.5V19h2v-3.5c1.93 0 3.5-1.57 3.5-3.5S12.93 8.5 11 8.5H8.5V19H6V5h5c3.04 0 5.5 2.46 5.5 5.5S14.04 15.5 11 15.5z"
                        fill="#336791"
                      />
                    </svg>
                    <span>PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Application Form -->
            <div class="modal-form-section">
              <h3 class="text-center q-mb-lg">
                Apply for Software Development
              </h3>
              <q-form @submit="onModalSubmit" class="modal-form">
                <div class="row q-col-gutter-md">
                  <div class="col-md-6 col-sm-12">
                    <q-input
                      v-model="modalForm.name"
                      label="Full Name *"
                      filled
                      required
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <q-input
                      v-model="modalForm.email"
                      label="Email Address *"
                      type="email"
                      filled
                      required
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <q-input
                      v-model="modalForm.phone"
                      label="Phone Number *"
                      type="tel"
                      filled
                      required
                    />
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <q-select
                      v-model="modalForm.track"
                      :options="trackOptions"
                      label="Choose Your Track *"
                      filled
                      required
                    />
                  </div>
                  <div class="col-12">
                    <q-input
                      v-model="modalForm.message"
                      label="Why are you interested in this program? (Optional)"
                      type="textarea"
                      filled
                      rows="3"
                    />
                  </div>
                </div>
                <div class="form-actions text-center q-mt-lg">
                  <q-btn
                    type="submit"
                    label="Submit Application"
                    color="primary"
                    size="lg"
                    :loading="isModalSubmitting"
                    no-caps
                  />
                </div>
              </q-form>
            </div>
          </div>

          <!-- Coming Soon for Other Programs -->
          <div v-else class="coming-soon-content text-center">
            <q-icon name="schedule" size="4rem" color="grey-6" />
            <h3 class="q-mt-md">Coming Soon</h3>
            <p class="text-grey-7">
              This program is currently being developed. Please check back later
              for more details.
            </p>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Why Choose Us Section -->
    <section class="why-us-section section">
      <h2 class="section-title">Why Boundless Edge TVET?</h2>
      <div class="why-us-grid">
        <div class="why-us-card" @click="scrollToSection('apply')" tabindex="0">
          <q-icon name="engineering" class="why-us-icon" />
          <h3>Practical, Hands-On Training</h3>
          <p>
            Learn by doing. Our programs focus on real-world projects and
            practical skills that employers are looking for.
          </p>
        </div>
        <div class="why-us-card" @click="scrollToSection('apply')" tabindex="0">
          <q-icon name="groups" class="why-us-icon" />
          <h3>Expert Instructors</h3>
          <p>
            Be mentored by industry professionals with years of experience in
            their fields, dedicated to your success.
          </p>
        </div>
        <div class="why-us-card" @click="scrollToSection('apply')" tabindex="0">
          <q-icon name="work" class="why-us-icon" />
          <h3>Career Support & Placement</h3>
          <p>
            We provide career counseling, resume building, and connect our
            graduates with our network of industry partners.
          </p>
        </div>
      </div>
    </section>

    <!-- Application Section -->
    <section id="apply" class="application-section section">
      <div class="application-container">
        <h2 class="section-title">Start Your Journey Today</h2>
        <p class="section-subtitle">
          Take the first step towards your new career. Fill out the form below
          to apply for your chosen program.
        </p>

        <div v-if="!formSubmitted">
          <q-form @submit="onSubmit" class="application-form">
            <div class="form-grid row q-col-gutter-md">
              <q-input
                class="col-md-4 col-12"
                v-model="form.name"
                label="Full Name"
                outlined
                :rules="[(val) => !!val || 'Name is required']"
              />
              <q-input
                class="col-md-4 col-12"
                v-model="form.email"
                label="Email Address"
                type="email"
                outlined
                :rules="[
                  (val) => !!val || 'Email is required',
                  (val) => /.+@.+\..+/.test(val) || 'Email is invalid',
                ]"
              />
              <q-input
                class="col-md-4 col-12"
                v-model="form.phone"
                label="Phone Number"
                type="tel"
                outlined
                :rules="[(val) => !!val || 'Phone number is required']"
              />
              <q-select
                class="col-md-6 col-12"
                v-model="form.program"
                :options="programOptions"
                label="Program of Interest"
                outlined
                :rules="[(val) => !!val || 'Please select a program']"
              />
              <q-input
                class="col-6 col-12"
                v-model="form.experience"
                label="Previous Experience (Optional)"
                outlined
              />
              <q-input
                class="col-12"
                v-model="form.message"
                label="Tell us about your career goals"
                type="textarea"
                outlined
                rows="4"
                :rules="[(val) => !!val || 'Please tell us about your goals']"
              />
            </div>

            <div class="form-actions">
              <q-btn
                type="submit"
                label="Submit Application"
                color="primary"
                size="lg"
                :loading="isSubmitting"
                no-caps
                class="submit-btn"
              />
            </div>
          </q-form>
        </div>

        <div v-else class="thank-you-message text-center">
          <q-icon name="check_circle" class="success-icon" />
          <h3>Thank You!</h3>
          <p>
            Your application has been submitted successfully. We'll be in touch
            within 2-3 business days.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer-section">
      <div class="footer-content">
        <div class="footer-grid row q-col-gutter-lg">
          <div class="col-md-3 col-sm-6 col-12">
            <div class="footer-brand">
              <h4>Boundless Edge</h4>
              <p>
                Empowering Nigeria through skills development and vocational
                education.
              </p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <div class="footer-links">
              <h5>Programs</h5>
              <ul>
                <li><a href="#programs">Technology</a></li>
                <li><a href="#programs">Healthcare</a></li>
                <li><a href="#programs">Engineering</a></li>
                <li><a href="#programs">Business</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <div class="footer-links">
              <h5>About</h5>
              <ul>
                <li><a href="/">Our Mission</a></li>
                <li><a href="/">Success Stories</a></li>
                <li><a href="/">Industry Partners</a></li>
                <li><a href="/">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-12">
            <div class="footer-contact">
              <h5>Get in Touch</h5>
              <div class="contact-item">
                <q-icon name="email" />
                <span>info@boundlessedge.org</span>
              </div>
              <div class="contact-item">
                <q-icon name="phone" />
                <span>+234 (0) 800 SKILLS</span>
              </div>
              <div class="contact-item">
                <q-icon name="location_on" />
                <span>Lagos, Abuja, Port Harcourt</span>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            &copy; 2024 Boundless Edge. Building Nigeria's skilled workforce.
          </p>
        </div>
      </div>
    </footer>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Interfaces
interface Program {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  skills: string[];
  icon: string;
}

interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
  careerImage: string;
  careers: string[];
}

// Reactive data
const showProgramModal = ref(false);
const selectedProgram = ref<Program | null>(null);
const formSubmitted = ref(false);
const isSubmitting = ref(false);
const isModalSubmitting = ref(false);

// Form data
const form = ref({
  name: '',
  email: '',
  phone: '',
  program: '',
  experience: '',
  message: '',
});

// Modal form data
const modalForm = ref({
  name: '',
  email: '',
  phone: '',
  track: '',
  message: '',
});

// Options
const programOptions = [
  'Full Stack Web Development',
  'Digital Marketing & E-commerce',
  'Renewable Energy Systems',
  'Healthcare Technology',
  'Financial Technology (FinTech)',
  'Agricultural Technology',
  'Other - Please specify in message',
];

const trackOptions = ['Backend Track', 'Frontend Track'];

// Categories data
const categories = ref<Category[]>([
  {
    id: 1,
    title: 'Technology & Digital Skills',
    description:
      'Master the digital tools shaping the future of work in Nigeria.',
    icon: 'computer',
    careerImage:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: [
      'Software Developer',
      'Data Analyst',
      'UI/UX Designer',
      'Digital Marketer',
      'Cybersecurity Specialist',
      'Cloud Engineer',
    ],
  },
  {
    id: 2,
    title: 'Healthcare & Wellness',
    description:
      'Join the essential workforce keeping Nigeria healthy and strong.',
    icon: 'local_hospital',
    careerImage:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: [
      'Medical Technician',
      'Nursing Assistant',
      'Pharmacy Technician',
      'Medical Equipment Specialist',
      'Health Information Manager',
      'Telemedicine Coordinator',
    ],
  },
  {
    id: 3,
    title: 'Engineering & Manufacturing',
    description:
      'Build the infrastructure and products that power economic growth.',
    icon: 'engineering',
    careerImage:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: [
      'Manufacturing Technician',
      'Quality Control Specialist',
      'Maintenance Engineer',
      'Automation Specialist',
      'Project Coordinator',
      'Safety Inspector',
    ],
  },
  {
    id: 4,
    title: 'Renewable Energy',
    description: 'Power Nigeria sustainably with clean energy technologies.',
    icon: 'wb_sunny',
    careerImage:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: [
      'Solar Panel Installer',
      'Wind Technician',
      'Energy Auditor',
      'Grid Technician',
      'Energy Storage Specialist',
      'Sustainable Design Consultant',
    ],
  },
  {
    id: 5,
    title: 'Financial Services',
    description:
      'Drive financial inclusion and economic empowerment across Nigeria.',
    icon: 'account_balance',
    careerImage:
      'https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: [
      'FinTech Developer',
      'Loan Officer',
      'Investment Advisor',
      'Digital Payment Specialist',
      'Risk Analyst',
      'Microfinance Coordinator',
    ],
  },
  {
    id: 6,
    title: 'Agriculture & Food Security',
    description:
      'Feed the nation with modern agricultural techniques and technology.',
    icon: 'eco',
    careerImage:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: [
      'Precision Agriculture Specialist',
      'Food Safety Inspector',
      'Agricultural Drone Operator',
      'Crop Management Consultant',
      'Livestock Technician',
      'Supply Chain Coordinator',
    ],
  },
]);

// Programs data
const programs = ref<Program[]>([
  {
    id: 1,
    title: 'Full Stack Web Development',
    category: 'Technology',
    description:
      'Master modern web development with JavaScript, TypeScript, and popular frameworks.',
    duration: '6 weeks',
    level: 'Beginner to Intermediate',
    skills: [
      'JavaScript & TypeScript',
      'Vue.js or React',
      'Node.js & Express',
      'Database Design',
      'API Development',
    ],
    icon: 'code',
  },
  {
    id: 2,
    title: 'Digital Marketing & E-commerce',
    category: 'Business',
    description:
      'Learn to grow businesses online with digital marketing strategies and e-commerce platforms.',
    duration: '4 weeks',
    level: 'Beginner',
    skills: [
      'Social Media Marketing',
      'SEO & Content Marketing',
      'Google Ads & Analytics',
      'E-commerce Platforms',
      'Email Marketing',
    ],
    icon: 'campaign',
  },
  {
    id: 3,
    title: 'Renewable Energy Systems',
    category: 'Engineering',
    description:
      'Install and maintain solar, wind, and other renewable energy systems.',
    duration: '8 weeks',
    level: 'Beginner to Advanced',
    skills: [
      'Solar Panel Installation',
      'Electrical Systems',
      'Energy Storage',
      'System Design',
      'Maintenance & Troubleshooting',
    ],
    icon: 'solar_power',
  },
  {
    id: 4,
    title: 'Healthcare Technology',
    category: 'Healthcare',
    description:
      'Operate and maintain medical equipment and health information systems.',
    duration: '10 weeks',
    level: 'Intermediate',
    skills: [
      'Medical Equipment Operation',
      'Health Information Systems',
      'Patient Data Management',
      'Telemedicine Technologies',
      'Medical Device Maintenance',
    ],
    icon: 'medical_services',
  },
]);

// Methods
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const openProgramModal = (program: Program) => {
  selectedProgram.value = program;
  showProgramModal.value = true;
};

const onSubmit = async () => {
  isSubmitting.value = true;
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    formSubmitted.value = true;

    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      program: '',
      experience: '',
      message: '',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    isSubmitting.value = false;
  }
};

const onModalSubmit = async () => {
  isModalSubmitting.value = true;
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset modal form
    modalForm.value = {
      name: '',
      email: '',
      phone: '',
      track: '',
      message: '',
    };

    showProgramModal.value = false;

    // Show success message or redirect
    console.log('Modal form submitted successfully');
  } catch (error) {
    console.error('Error submitting modal form:', error);
  } finally {
    isModalSubmitting.value = false;
  }
};

onMounted(() => {
  // Add any initialization logic here
});
</script>

<style lang="scss" scoped>
.tvet-page {
  min-height: 100vh;
  overflow-x: hidden;
}

// Hero Section Styles
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    animation: float 20s infinite linear;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #fff, #e3f2fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }

  .hero-tagline {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
    line-height: 1.6;
  }

  .cta-button {
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    color: white;
    padding: 14px 36px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    box-shadow: 0 8px 32px rgba(255, 107, 107, 0.3);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 40px rgba(255, 107, 107, 0.4);
    }
  }
}

@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(-60px, -60px) rotate(360deg);
  }
}

// Global Section Styles
.section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 100px 20px;
  }
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
  text-align: center;

  &.gradient {
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.section-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

// Introduction Section
.intro-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

  .intro-content {
    h2 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #495057;
      margin-bottom: 1.5rem;
    }
  }

  .intro-image {
    img {
      width: 100%;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }
  }
}

// Categories Section
.categories-section {
  background: white;

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
  }

  .category-card {
    background: white;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid #f1f3f4;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(45deg, #667eea, #764ba2);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);

      &::before {
        transform: scaleX(1);
      }

      .category-icon {
        transform: scale(1.1);
      }
    }

    .category-icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      background: linear-gradient(45deg, #667eea, #764ba2);
      border-radius: 20px;
      margin-bottom: 1.5rem;
    }

    .category-icon {
      font-size: 2.5rem;
      color: white;
      transition: transform 0.3s ease;
    }

    .category-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #2c3e50;
      line-height: 1.3;
    }

    .category-description {
      color: #6c757d;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .career-details {
      .career-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 1rem;
      }

      .career-examples-title {
        font-weight: 600;
        color: #495057;
        margin-bottom: 0.5rem;
      }

      .career-examples {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .career-tag {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }
      }
    }
  }
}

// Programs Section
.programs-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

  .programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .program-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid #e9ecef;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
    }

    .program-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: linear-gradient(45deg, #667eea, #764ba2);
      border-radius: 12px;
      margin-bottom: 1rem;

      .q-icon {
        font-size: 1.8rem;
        color: white;
      }
    }

    .program-category {
      color: #6c757d;
      font-size: 0.9rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.5rem;
    }

    .program-title {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    .program-description {
      color: #6c757d;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .program-skills {
      margin-bottom: 1.5rem;

      ul {
        margin: 0.5rem 0 0 1rem;
        padding: 0;

        li {
          color: #495057;
          margin-bottom: 0.25rem;
          font-size: 0.9rem;
        }
      }
    }

    .program-cta {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      width: 100%;
      padding: 12px;
      border-radius: 8px;
      font-weight: 600;
    }
  }
}

// Program Modal Styles
.program-modal {
  .modal-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .close-btn {
      color: white;
    }
  }

  .modal-content {
    padding: 2rem;
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }

  .program-details-header {
    margin-bottom: 3rem;

    .logo {
      font-size: 1rem;
      font-weight: 700;
      color: #667eea;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }
  }

  .curriculum-section {
    margin-bottom: 3rem;

    .curriculum-tracks {
      margin: 2rem 0;
    }

    .track-card {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 1.5rem;
      height: 100%;

      .track-header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        .track-icon {
          font-size: 1.5rem;
          color: #667eea;
          margin-right: 0.5rem;
        }

        h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 0;
        }
      }

      .track-skills {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #e9ecef;
          color: #495057;

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }

    .training-format {
      margin: 3rem 0;

      h3 {
        color: #2c3e50;
        margin-bottom: 1.5rem;
      }

      .training-table {
        border-radius: 8px;
        overflow: hidden;

        th {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          font-weight: 600;
        }

        td {
          border-bottom: 1px solid #e9ecef;
        }
      }
    }

    .tech-covered {
      margin: 3rem 0;

      h3 {
        color: #2c3e50;
        margin-bottom: 2rem;
      }

      .tech-logos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }

      .tech-logo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 12px;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        svg {
          width: 40px;
          height: 40px;
          margin-bottom: 0.5rem;
        }

        span {
          font-size: 0.85rem;
          font-weight: 500;
          color: #495057;
        }
      }
    }
  }

  .modal-form-section {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 2rem;
    margin-top: 2rem;

    .modal-form {
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .coming-soon-content {
    padding: 4rem 2rem;

    h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
  }
}

// Why Choose Us Section
.why-us-section {
  background: white;

  .why-us-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .why-us-card {
    text-align: center;
    padding: 2.5rem 1.5rem;
    background: #f8f9fa;
    border-radius: 16px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;

      .why-us-icon {
        color: white;
        transform: scale(1.1);
      }
    }

    .why-us-icon {
      font-size: 3rem;
      color: #667eea;
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: inherit;
    }

    p {
      color: #6c757d;
      line-height: 1.6;
      transition: color 0.3s ease;
    }

    &:hover p {
      color: rgba(255, 255, 255, 0.9);
    }
  }
}

// Application Section
.application-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

  .application-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .application-form {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);

    .form-grid {
      margin-bottom: 2rem;
    }

    .form-actions {
      text-align: center;
    }

    .submit-btn {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      padding: 14px 48px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.1rem;
      box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
      }
    }
  }

  .thank-you-message {
    background: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);

    .success-icon {
      font-size: 4rem;
      color: #28a745;
      margin-bottom: 1.5rem;
    }

    h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    p {
      color: #6c757d;
    }
  }
}

// Footer Section
.footer-section {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 4rem 20px 2rem;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-grid {
    margin-bottom: 2rem;
  }

  .footer-brand {
    h4 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    p {
      color: #bdc3c7;
      line-height: 1.6;
    }
  }

  .footer-links {
    h5 {
      font-weight: 600;
      margin-bottom: 1rem;
      color: #ecf0f1;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: #bdc3c7;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: #667eea;
          }
        }
      }
    }
  }

  .footer-contact {
    h5 {
      font-weight: 600;
      margin-bottom: 1rem;
      color: #ecf0f1;
    }

    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 0.75rem;
      color: #bdc3c7;

      .q-icon {
        margin-right: 0.75rem;
        color: #667eea;
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #34495e;
    color: #95a5a6;
  }
}

// Responsive Design
@media (max-width: 768px) {
  .hero-section {
    padding: 80px 20px 60px;
  }

  .section {
    padding: 60px 20px;
  }

  .categories-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .programs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .why-us-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .tech-logos-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }

  .modal-content {
    padding: 1rem;
  }

  .track-card {
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-tagline {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .category-card,
  .program-card {
    padding: 1.5rem;
  }

  .application-form {
    padding: 1.5rem;
  }

  .footer-section {
    padding: 3rem 20px 1.5rem;
  }
}
</style>
