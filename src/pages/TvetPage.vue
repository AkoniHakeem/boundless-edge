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
            <!-- Program Header -->
            <div class="program-header text-center q-mb-xl">
              <h1 class="text-h3 text-weight-bold text-grey-9 q-mb-md">
                Your 9-Month Journey to a
                <span class="text-primary">Pro Developer</span>
              </h1>
              <div class="text-h6 text-weight-medium text-primary q-mb-md">
                Program Starts: September 29th, 2025
              </div>
              <p
                class="text-body1 text-grey-6 q-mb-lg"
                style="max-width: 600px; margin: 0 auto"
              >
                This intensive program is designed to transform you from a
                beginner into a job-ready software engineer with a portfolio of
                real-world projects.
              </p>
              <q-btn
                @click="openCurriculumModal"
                class="program-cta-btn q-px-xl q-py-md"
                color="primary"
                label="Explore The Curriculum"
                no-caps
                rounded
                size="lg"
              />
            </div>

            <!-- Key Stats Section -->
            <div class="stats-grid row q-col-gutter-lg q-mb-xl">
              <div class="col-md-4 col-sm-12">
                <q-card class="stats-card text-center q-pa-lg">
                  <div class="text-h2 text-weight-bold text-primary">3</div>
                  <div class="text-subtitle1 text-weight-medium text-grey-8">
                    Core Languages
                  </div>
                  <div class="text-caption text-grey-6">
                    (JS/TS, Python, Java)
                  </div>
                </q-card>
              </div>
              <div class="col-md-4 col-sm-12">
                <q-card class="stats-card text-center q-pa-lg">
                  <div class="text-h2 text-weight-bold text-primary">3</div>
                  <div class="text-subtitle1 text-weight-medium text-grey-8">
                    Major Frontend Frameworks
                  </div>
                  <div class="text-caption text-grey-6">
                    (React, Vue, Angular)
                  </div>
                </q-card>
              </div>
              <div class="col-md-4 col-sm-12">
                <q-card class="stats-card text-center q-pa-lg">
                  <div class="text-h2 text-weight-bold text-primary">1</div>
                  <div class="text-subtitle1 text-weight-medium text-grey-8">
                    Month-Long Capstone Project
                  </div>
                  <div class="text-caption text-grey-6">
                    To Showcase Your Skills
                  </div>
                </q-card>
              </div>
            </div>

            <!-- Learning Path Section -->
            <div id="learning-path" class="learning-path-section q-mb-xl">
              <div class="text-center q-mb-lg">
                <h2 class="text-h4 text-weight-bold text-grey-9">
                  The 9-Month Learning Path
                </h2>
                <p class="text-body1 text-grey-6">
                  A spiral curriculum where you introduce, apply, and deepen
                  your knowledge over three trimesters.
                </p>
              </div>

              <div class="timeline row q-col-gutter-lg">
                <div
                  v-for="trimester in trimesterSummaries"
                  :key="trimester.id"
                  class="col-md-4 col-sm-12"
                >
                  <q-card
                    class="timeline-card q-pa-lg"
                    :class="[
                      trimester.color === 'purple' ? 'purple-border' : '',
                      trimester.color === 'pink' ? 'pink-border' : '',
                    ]"
                  >
                    <div
                      class="trimester-label text-weight-bold text-caption"
                      :class="[
                        trimester.color === 'blue' ? 'text-primary' : '',
                        trimester.color === 'purple' ? 'text-purple' : '',
                        trimester.color === 'pink' ? 'text-pink' : '',
                      ]"
                    >
                      TRIMESTER {{ trimester.id }}
                    </div>
                    <h3 class="text-h6 text-weight-bold q-mt-sm q-mb-sm">
                      {{ trimester.title }}
                    </h3>
                    <p class="text-body2 text-grey-6">
                      {{ trimester.description }}
                    </p>
                  </q-card>
                </div>
              </div>
            </div>

            <!-- Technologies Section -->
            <div class="technologies-section q-mb-xl">
              <div class="text-center q-mb-lg">
                <h2 class="text-h4 text-weight-bold text-grey-9">
                  Key Technologies & Tools You'll Master
                </h2>
                <p class="text-body1 text-grey-6">
                  This program covers the complete modern tech stack to make you
                  a job-ready professional.
                </p>
              </div>

              <div class="tech-grid row q-col-gutter-md">
                <div
                  class="col-lg-3 col-md-4 col-sm-6 col-xs-6"
                  v-for="tech in technologies"
                  :key="tech"
                >
                  <q-card class="tech-card text-center q-pa-md">
                    <div class="text-subtitle2 text-weight-medium">
                      {{ tech }}
                    </div>
                  </q-card>
                </div>
              </div>
            </div>

            <!-- Capstone Project Section -->
            <div class="capstone-section q-mb-xl">
              <q-card class="q-pa-lg">
                <div class="text-center q-mb-lg">
                  <h2 class="text-h4 text-weight-bold text-grey-9">
                    Your Capstone Project Success Plan
                  </h2>
                  <p class="text-body1 text-grey-6">
                    The final month is dedicated to your capstone project. We
                    set you up for success.
                  </p>
                </div>

                <q-list>
                  <q-item v-for="tip in capstoneStrategy" :key="tip.title">
                    <q-item-section avatar>
                      <q-icon name="check_circle" color="primary" size="sm" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-medium">{{
                        tip.title
                      }}</q-item-label>
                      <q-item-label caption class="text-grey-7">{{
                        tip.description
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card>
            </div>

            <!-- Program Options Section -->
            <div class="investment-section q-mb-xl">
              <!-- Program Options Header -->
              <div class="text-center q-mb-xl">
                <h2 class="text-h4 text-weight-bold text-grey-9 q-mb-md">
                  Choose Your Learning Path
                </h2>
                <p
                  class="text-body1 text-grey-6"
                  style="max-width: 600px; margin: 0 auto"
                >
                  Join at any trimester or take the complete program. Flexible
                  options designed to fit your schedule, experience level, and
                  budget.
                </p>
              </div>

              <!-- Individual Trimesters -->
              <div class="section-header text-center q-mb-lg">
                <h3 class="text-h5 text-weight-bold text-grey-8 q-mb-sm">
                  Individual Trimesters
                </h3>
                <p class="text-body2 text-grey-6">
                  Take one trimester at a time
                </p>
              </div>

              <div
                class="pricing-grid row q-col-gutter-lg justify-center q-mb-xl"
              >
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <q-card
                    class="pricing-card individual-trimester q-pa-lg text-center"
                  >
                    <div
                      class="trimester-badge text-caption text-weight-bold text-primary q-mb-md"
                    >
                      TRIMESTER 1
                    </div>
                    <div class="text-h6 text-weight-bold text-grey-8 q-mb-sm">
                      Foundations & First Slice
                    </div>
                    <div class="text-h3 text-weight-bold text-primary q-mb-sm">
                      ₦300,000
                    </div>
                    <div
                      class="text-subtitle2 text-weight-medium text-grey-7 q-mb-md"
                    >
                      3 months • Perfect for beginners
                    </div>
                    <div class="features-list text-left q-mb-md">
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ Git & Command Line
                      </div>
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ JavaScript Fundamentals
                      </div>
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ HTML/CSS & Frontend Basics
                      </div>
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ First Full-Stack App
                      </div>
                      <div class="feature-item text-body2 text-grey-7">
                        ✓ Project Management Tools
                      </div>
                    </div>
                    <div class="prerequisites">
                      <span class="text-caption text-green-6"
                        >No experience required</span
                      >
                    </div>
                  </q-card>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12">
                  <q-card
                    class="pricing-card individual-trimester q-pa-lg text-center"
                  >
                    <div
                      class="trimester-badge text-caption text-weight-bold text-purple q-mb-md"
                    >
                      TRIMESTER 2
                    </div>
                    <div class="text-h6 text-weight-bold text-grey-8 q-mb-sm">
                      Full-Stack Development
                    </div>
                    <div class="text-h3 text-weight-bold text-purple q-mb-sm">
                      ₦400,000
                    </div>
                    <div
                      class="text-subtitle2 text-weight-medium text-grey-7 q-mb-md"
                    >
                      3 months • Intermediate level
                    </div>
                    <div class="features-list text-left q-mb-md">
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ React/Vue/Angular Frameworks
                      </div>
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ Database Design (PostgreSQL)
                      </div>
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ Backend APIs & Authentication
                      </div>
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ Python & Java Introduction
                      </div>
                      <div class="feature-item text-body2 text-grey-7">
                        ✓ Complete Full-Stack Project
                      </div>
                    </div>
                    <div class="prerequisites">
                      <span class="text-caption text-orange-6"
                        >Requires Trimester 1 or equivalent</span
                      >
                    </div>
                  </q-card>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12">
                  <q-card
                    class="pricing-card individual-trimester q-pa-lg text-center"
                  >
                    <div
                      class="trimester-badge text-caption text-weight-bold text-pink q-mb-md"
                    >
                      TRIMESTER 3
                    </div>
                    <div class="text-h6 text-weight-bold text-grey-8 q-mb-sm">
                      Engineering Excellence
                    </div>
                    <div class="text-h3 text-weight-bold text-pink q-mb-sm">
                      ₦400,000
                    </div>
                    <div
                      class="text-subtitle2 text-weight-medium text-grey-7 q-mb-md"
                    >
                      3 months • Advanced level
                    </div>
                    <div class="features-list text-left q-mb-md">
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ Algorithms & Data Structures
                      </div>
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ System Design Principles
                      </div>
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ Performance Optimization
                      </div>
                      <div class="feature-item text-body2 text-grey-7 q-mb-xs">
                        ✓ CI/CD & Cloud Deployment
                      </div>
                      <div class="feature-item text-body2 text-grey-7">
                        ✓ Capstone Project
                      </div>
                    </div>
                    <div class="prerequisites">
                      <span class="text-caption text-red-6"
                        >Portfolio review required</span
                      >
                    </div>
                  </q-card>
                </div>
              </div>

              <!-- Package Deals -->
              <div class="section-header text-center q-mb-lg">
                <h3 class="text-h5 text-weight-bold text-grey-8 q-mb-sm">
                  Package Deals - Save More
                </h3>
                <p class="text-body2 text-grey-6">
                  Combine trimesters for better value
                </p>
              </div>

              <div
                class="pricing-grid row q-col-gutter-lg justify-center q-mb-xl"
              >
                <div class="col-md-6 col-sm-12">
                  <q-card class="pricing-card package-deal q-pa-lg text-center">
                    <div class="text-h6 text-weight-bold text-grey-8 q-mb-md">
                      Advanced Developer Track
                    </div>
                    <div class="text-h3 text-weight-bold text-grey-9 q-mb-sm">
                      ₦750,000
                    </div>
                    <div class="text-subtitle2 text-weight-medium text-grey-7">
                      Trimesters 2 & 3 Combined
                    </div>
                    <div class="text-caption text-green-6 q-mb-md">
                      Save ₦50,000 (vs individual pricing)
                    </div>
                    <div class="text-body2 text-grey-7">
                      6 months • For developers with basic skills
                    </div>
                  </q-card>
                </div>

                <div class="col-md-6 col-sm-12">
                  <q-card
                    class="pricing-card featured-plan q-pa-lg text-center relative-position"
                  >
                    <q-badge
                      class="absolute-top-right q-mr-sm q-mt-sm"
                      color="pink"
                      label="Best Value"
                      rounded
                    />
                    <div class="text-h6 text-weight-bold text-white q-mb-md">
                      Complete Developer Program
                    </div>
                    <div class="text-h3 text-weight-bold text-white q-mb-sm">
                      ₦900,000
                    </div>
                    <div class="text-subtitle2 text-weight-medium text-blue-2">
                      All 3 Trimesters • Full 9-Month Program
                    </div>
                    <div class="text-caption text-blue-3 q-mb-md">
                      Save ₦200,000
                    </div>
                    <div class="text-body2 text-blue-2">
                      Complete journey from beginner to pro developer
                    </div>
                  </q-card>
                </div>
              </div>
            </div>

            <!-- Application Form -->
            <div class="modal-form-section">
              <h3 class="text-center q-mb-lg">
                Apply for Software Development Program
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
                    rounded
                    class="q-px-xl"
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

    <!-- Curriculum Modal -->
    <q-dialog v-model="showCurriculumModal" maximized>
      <q-card class="curriculum-modal bg-grey-9 text-white">
        <q-card-section class="modal-header">
          <div class="text-h4">
            {{ curriculumData.title }}
          </div>
          <q-btn
            icon="close"
            flat
            round
            dense
            @click="closeCurriculumModal"
            class="close-btn text-white"
          />
        </q-card-section>

        <q-card-section class="modal-content">
          <div class="curriculum-container q-pa-md">
            <!-- Header -->
            <header class="text-center q-mb-xl">
              <h1 class="text-h3 text-weight-bold text-white q-mb-md">
                {{ curriculumData.title }}
              </h1>
              <p
                class="text-h6 text-grey-4 q-mb-lg"
                style="max-width: 800px; margin: 0 auto"
              >
                {{ curriculumData.subtitle }}
              </p>
            </header>

            <div class="max-w-4xl mx-auto">
              <!-- Loop through each trimester -->
              <div
                v-for="(trimester, trimesterIndex) in curriculumData.trimesters"
                :key="trimester.id"
                class="relative timeline-item q-pb-xl"
              >
                <!-- Timeline Circle and Title -->
                <div
                  class="flex items-start q-mb-lg cursor-pointer timeline-header"
                  @click="toggleTrimester(trimester)"
                >
                  <div class="flex-shrink-0 timeline-circle">
                    <q-avatar
                      size="48px"
                      class="bg-cyan-5 text-white text-weight-bold text-h6"
                    >
                      {{ trimester.id }}
                    </q-avatar>
                  </div>
                  <div class="q-ml-md flex-grow">
                    <h2 class="text-h5 text-weight-bold text-white q-mb-xs">
                      {{ trimester.title }}
                    </h2>
                    <p class="text-grey-4 q-mt-none">{{ trimester.goal }}</p>
                    <div class="row q-gutter-sm q-mt-sm">
                      <q-btn
                        @click.stop="openTrimesterModal(trimester)"
                        size="sm"
                        color="cyan-5"
                        label="View Details"
                        no-caps
                        rounded
                        outline
                      />
                    </div>
                  </div>
                  <div
                    class="q-ml-md flex-shrink-0 text-cyan-4 transition-transform"
                    :class="{ 'rotate-180': trimester.isExpanded }"
                  >
                    <q-icon name="expand_more" size="md" />
                  </div>
                </div>

                <!-- Modules Section (Collapsible) -->
                <q-slide-transition>
                  <div v-if="trimester.isExpanded" class="q-pl-xl q-md-pl-20">
                    <div class="row q-col-gutter-lg">
                      <div
                        v-for="module in trimester.modules"
                        :key="module.title"
                        class="col-12 q-mb-md"
                      >
                        <q-card
                          class="module-card bg-grey-8 border-l-4 border-cyan-5"
                        >
                          <q-card-section class="row items-start">
                            <div class="col-auto">
                              <div
                                class="module-icon bg-grey-7 rounded"
                                v-html="getIcon(module.icon)"
                              ></div>
                            </div>
                            <div class="col">
                              <h3
                                class="text-h6 text-weight-semibold text-white q-mb-xs"
                              >
                                {{ module.title }}
                              </h3>
                              <p
                                v-if="module.goal"
                                class="text-caption text-grey-5 q-mb-sm"
                              >
                                {{ module.goal }}
                              </p>
                              <ul
                                class="text-grey-3 q-ma-none q-pa-none"
                                style="list-style: disc; margin-left: 20px"
                              >
                                <li
                                  v-for="topic in module.topics"
                                  :key="topic"
                                  class="q-mb-xs"
                                >
                                  {{ topic }}
                                </li>
                              </ul>
                            </div>
                          </q-card-section>
                        </q-card>
                      </div>
                    </div>

                    <!-- Trimester Project / Outcome -->
                    <div
                      v-if="trimester.outcome"
                      class="outcome-card gradient-bg q-pa-lg q-mb-lg rounded"
                    >
                      <div class="row items-start">
                        <div class="col-auto">
                          <div
                            class="outcome-icon"
                            v-html="curriculumData.icons.trophy"
                          ></div>
                        </div>
                        <div class="col">
                          <h3
                            class="text-h6 text-weight-bold text-white q-mb-xs"
                          >
                            {{ trimester.outcome.title }}
                          </h3>
                          <p class="text-white q-ma-none">
                            {{ trimester.outcome.description }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </q-slide-transition>

                <!-- Break section -->
                <div v-if="trimester.break" class="q-pl-xl q-md-pl-20 q-mt-lg">
                  <div
                    class="row items-center bg-grey-8 border-l-4 border-yellow-5 q-pa-md rounded-r"
                  >
                    <div class="col-auto">
                      <div
                        class="break-icon text-yellow-5"
                        v-html="curriculumData.icons.break"
                      ></div>
                    </div>
                    <div class="col">
                      <p class="text-weight-semibold text-yellow-2 q-ma-none">
                        {{ trimester.break }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Timeline line (except for last item) -->
                <div
                  v-if="trimesterIndex < curriculumData.trimesters.length - 1"
                  class="timeline-line"
                ></div>
              </div>

              <!-- Final Capstone Project -->
              <div class="relative capstone-section">
                <div class="row items-start q-mb-lg">
                  <div class="col-auto">
                    <q-avatar
                      size="48px"
                      class="bg-emerald-5 text-white text-weight-bold"
                    >
                      🎓
                    </q-avatar>
                  </div>
                  <div class="col">
                    <h2 class="text-h5 text-weight-bold text-white q-mb-xs">
                      {{ curriculumData.capstone.title }}
                    </h2>
                    <p class="text-grey-4 q-ma-none">
                      {{ curriculumData.capstone.task }}
                    </p>
                  </div>
                </div>

                <div class="q-pl-xl q-md-pl-20">
                  <div class="capstone-details text-grey-3 q-mb-lg">
                    <p class="q-mb-sm">
                      <strong class="text-white"
                        >Languages & Frameworks:</strong
                      >
                      {{ curriculumData.capstone.languageChoice }}
                    </p>
                    <p class="q-mb-sm">
                      <strong class="text-white">Key Requirements:</strong>
                      {{ curriculumData.capstone.requirements }}
                    </p>
                  </div>

                  <div class="capstone-guide bg-grey-8 rounded q-pa-lg q-mb-lg">
                    <h4 class="text-lg text-weight-semibold text-white q-mb-md">
                      Guide to Capstone Success:
                    </h4>
                    <ul
                      class="text-grey-3 q-ma-none q-pa-none"
                      style="list-style: disc; margin-left: 20px"
                    >
                      <li
                        v-for="tip in curriculumData.capstone.guide"
                        :key="tip"
                        class="q-mb-xs"
                      >
                        {{ tip }}
                      </li>
                    </ul>
                  </div>

                  <div class="final-outcome gradient-emerald q-pa-lg rounded">
                    <div class="row items-start">
                      <div class="col-auto">
                        <div
                          class="outcome-icon"
                          v-html="curriculumData.icons.outcome"
                        ></div>
                      </div>
                      <div class="col">
                        <h3 class="text-h6 text-weight-bold text-white q-mb-xs">
                          Final Outcome
                        </h3>
                        <p class="text-white q-ma-none">
                          {{ curriculumData.capstone.outcome }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Trimester Detail Modal -->
    <q-dialog v-model="showTrimesterModal" maximized>
      <q-card class="trimester-modal bg-grey-9 text-white">
        <q-card-section class="modal-header">
          <div class="text-h4">
            {{ selectedTrimester?.title }}
          </div>
          <q-btn
            icon="close"
            flat
            round
            dense
            @click="closeTrimesterModal"
            class="close-btn text-white"
          />
        </q-card-section>

        <q-card-section class="modal-content" v-if="selectedTrimester">
          <div class="trimester-content q-pa-md">
            <!-- Trimester Header -->
            <div class="text-center q-mb-xl">
              <div
                class="trimester-number text-h2 text-weight-bold text-cyan-5 q-mb-md"
              >
                Trimester {{ selectedTrimester.id }}
              </div>
              <h1 class="text-h4 text-weight-bold text-white q-mb-md">
                {{ selectedTrimester.title }}
              </h1>
              <p class="text-h6 text-grey-4">{{ selectedTrimester.goal }}</p>
            </div>

            <!-- Modules Grid -->
            <div class="modules-grid row q-col-gutter-lg q-mb-xl">
              <div
                v-for="module in selectedTrimester.modules"
                :key="module.title"
                class="col-lg-6 col-md-12 col-sm-12 q-mb-lg"
              >
                <q-card class="module-detail-card bg-grey-8 h-full">
                  <q-card-section>
                    <div class="module-header row items-center q-mb-md">
                      <div
                        class="module-icon bg-cyan-5 rounded q-mr-md"
                        v-html="getIcon(module.icon)"
                      ></div>
                      <h3 class="text-h6 text-weight-bold text-white q-ma-none">
                        {{ module.title }}
                      </h3>
                    </div>
                    <p v-if="module.goal" class="text-grey-4 q-mb-md">
                      {{ module.goal }}
                    </p>
                    <div class="module-topics">
                      <h4
                        class="text-subtitle1 text-weight-semibold text-white q-mb-sm"
                      >
                        What you'll learn:
                      </h4>
                      <ul
                        class="text-grey-3 q-ma-none q-pa-none"
                        style="list-style: disc; margin-left: 20px"
                      >
                        <li
                          v-for="topic in module.topics"
                          :key="topic"
                          class="q-mb-xs"
                        >
                          {{ topic }}
                        </li>
                      </ul>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>

            <!-- Trimester Outcome -->
            <div
              v-if="selectedTrimester.outcome"
              class="outcome-section q-mb-xl"
            >
              <div class="outcome-card gradient-bg q-pa-xl rounded text-center">
                <div
                  class="outcome-icon-large q-mb-md"
                  v-html="curriculumData.icons.trophy"
                ></div>
                <h3 class="text-h5 text-weight-bold text-white q-mb-md">
                  {{ selectedTrimester.outcome.title }}
                </h3>
                <p class="text-h6 text-white q-ma-none">
                  {{ selectedTrimester.outcome.description }}
                </p>
              </div>
            </div>

            <!-- Break Information -->
            <div
              v-if="selectedTrimester.break"
              class="break-section text-center"
            >
              <div
                class="break-card bg-grey-8 border-l-4 border-yellow-5 q-pa-lg rounded-r"
              >
                <div
                  class="break-icon-large text-yellow-5 q-mb-sm"
                  v-html="curriculumData.icons.break"
                ></div>
                <p class="text-h6 text-weight-semibold text-yellow-2 q-ma-none">
                  {{ selectedTrimester.break }}
                </p>
              </div>
            </div>
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
              solutions and comprehensive TVET programs. Building tomorrow's
              tech leaders.
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

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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

interface Module {
  title: string;
  goal?: string;
  icon: string;
  topics: string[];
}

interface Outcome {
  title: string;
  description: string;
}

interface Trimester {
  id: number;
  title: string;
  goal: string;
  isExpanded: boolean;
  modules: Module[];
  outcome?: Outcome;
  break?: string;
}

interface CapstoneProject {
  title: string;
  task: string;
  languageChoice: string;
  requirements: string;
  guide: string[];
  outcome: string;
}

interface CurriculumData {
  title: string;
  subtitle: string;
  icons: { [key: string]: string };
  trimesters: Trimester[];
  capstone: CapstoneProject;
}

interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
  careerImage: string;
  careers: string[];
}

// Router setup
const route = useRoute();
const router = useRouter();

// Reactive data
const showProgramModal = ref(false);
const showCurriculumModal = ref(false);
const showTrimesterModal = ref(false);
const selectedProgram = ref<Program | null>(null);
const selectedTrimester = ref<Trimester | null>(null);
const isModalSubmitting = ref(false);

// Modal form data
const modalForm = ref({
  name: '',
  email: '',
  phone: '',
  track: '',
  message: '',
});

// Options

const trackOptions = [
  // Individual Trimesters
  'Trimester 1 Only - Foundations (₦300,000)',
  'Trimester 2 Only - Full-Stack Development (₦400,000)',
  'Trimester 3 Only - Engineering Excellence (₦400,000)',

  // Package Deals
  'Advanced Developer Track - Trimesters 2&3 (₦750,000)',
  'Complete Program - All 3 Trimesters (₦900,000)',
];

// Footer sections
const footerSections = ref([
  {
    title: 'TVET Programs',
    links: [
      { name: 'Full Stack Development', url: '#programs' },
      { name: 'Digital Marketing', url: '#programs' },
      { name: 'Renewable Energy', url: '#programs' },
      { name: 'Healthcare Technology', url: '#programs' },
      { name: 'FinTech Solutions', url: '#programs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', url: '/#about' },
      { name: 'Services', url: '/#services' },
      { name: 'Portfolio', url: '/#portfolio' },
      { name: 'Contact', url: '/#contact' },
      { name: 'Home', url: '/' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'LinkedIn', url: '#linkedin' },
      { name: 'Twitter', url: '#twitter' },
      { name: 'GitHub', url: '#github' },
      { name: 'Email Us', url: 'mailto:info@boundlessedge.ng' },
    ],
  },
]);

// Technologies data
const technologies = [
  'JavaScript/TypeScript',
  'Python (Flask/Django)',
  'Java (Spring Boot)',
  'React, Vue & Angular',
  'Node.js & Express',
  'PostgreSQL & SQL',
  'Git & GitHub',
  'Postman',
  'Linear/ClickUp',
  'Redis',
  'GitHub Actions (CI/CD)',
  'Cloud Deployment',
];

// Capstone project strategy
const capstoneStrategy = [
  {
    title: 'Start Early',
    description:
      'Begin planning and prototyping during the first two months of the final trimester.',
  },
  {
    title: 'Scope Realistically',
    description:
      'A polished, working MVP is better than an unfinished, buggy one.',
  },
  {
    title: 'Plan & Design First',
    description:
      'Create a project plan, design your database schema, and map out API endpoints before coding.',
  },
  {
    title: 'Use PM Tools',
    description:
      'Break down the entire project into small, actionable tasks in Linear or ClickUp.',
  },
  {
    title: 'Iterate & Get Feedback',
    description:
      'Build in small increments and seek regular feedback from instructors and peers.',
  },
];

// Comprehensive curriculum data
const curriculumData = ref<CurriculumData>({
  title: '9-Month Software Developer TVET Program: The Spiral Learning Path',
  subtitle:
    'This curriculum uses a spiral, iterative approach and a multi-language teaching model. JavaScript/TypeScript is the primary language used to introduce and explain core concepts. Java and Python are introduced in the second trimester as alternative backend languages, allowing students to compare paradigms and choose a language of specialization for their capstone project. The principle is: Introduce, Apply, Deepen.',
  icons: {
    tools:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
    frontend:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    backend:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>',
    theory:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>',
    pm: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    trophy:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/></svg>',
    break:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    outcome:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>',
  },
  trimesters: [
    {
      id: 1,
      title: 'Trimester 1 (Months 1-3): Foundations & The First Full Slice',
      goal: 'To rapidly move students from zero knowledge to building a complete, albeit simple, application slice, while introducing professional tools and workflows from day one.',
      isExpanded: true,
      modules: [
        {
          title: 'Module 1: Core Toolkit & Programming Logic',
          icon: 'tools',
          topics: [
            'Git & Version Control: git init, add, commit, push, pull, branch, merge',
            'Command Line (Linux): Navigating (ls, cd, pwd) and managing files (mkdir, touch, cp, rm)',
            'JavaScript Fundamentals: Variables, data types, operators, conditionals (if/else), loops (for, while), functions',
          ],
        },
        {
          title: 'Module 2: Bringing Code to Life (Frontend - Shallow Dive)',
          goal: 'Show how JavaScript can make a webpage interactive.',
          icon: 'frontend',
          topics: [
            'HTML: The structure of a webpage (semantic HTML5)',
            'CSS: Simple styling and layout with Flexbox',
            'The DOM (Document Object Model): Using JavaScript to select, change, and create HTML elements dynamically',
            'Mini-Project: A simple to-do list application that works entirely in the browser',
          ],
        },
        {
          title: 'Module 3: The Other Side of the Web (Backend - Shallow Dive)',
          goal: 'Introduce the client-server model and the essential tools for testing APIs.',
          icon: 'backend',
          topics: [
            'Node.js & Express.js: Setting up a basic server that listens for requests',
            'Simple API: Creating an endpoint that responds with a simple text or JSON message',
            'API Clients: Introduction to Postman for testing and documenting API endpoints',
            'Mini-Project: A "Hello World" server, tested and verified using Postman',
          ],
        },
        {
          title:
            'Module 4: Planting the Seeds (OOP & Algorithms - Shallow Dive)',
          goal: 'Introduce advanced concepts through practical problems in JavaScript.',
          icon: 'theory',
          topics: [
            'OOP as a Pattern: Grouping related data and functions into a single JavaScript Object',
            'Algorithmic Thinking: Posing efficiency questions. "How can we find a specific item in a list? Let\'s write a function to loop through it. Could this be slow if the list is huge?"',
          ],
        },
        {
          title: 'Module 5: Working in a Team: Project Management Basics',
          goal: 'Introduce the fundamentals of modern software project management.',
          icon: 'pm',
          topics: [
            'Team Roles: Understanding the roles of Product Manager, UI/UX Designer, Developer, and QA Engineer',
            'Project Management Tools: Using a tool like Linear/ClickUp to manage tasks (tickets/issues)',
            'Connecting Code to Tasks: The workflow of creating a Git branch for a specific ticket',
            'Collaborative Workflows: Using GitHub for code reviews via Pull Requests',
          ],
        },
      ],
      outcome: {
        title: '✅ Outcome of Trimester 1',
        description:
          'Students have built a simple application slice, understand the full client-server loop, and are familiar with the basic tools of professional development and collaboration.',
      },
      break: '🗓️ End of Trimester 1: 1-Week Break',
    },
    {
      id: 2,
      title:
        'Trimester 2 (Months 4-6): Building a Robust Full-Stack Application',
      goal: 'To deepen knowledge by building a complete, database-driven application, while introducing Python and Java as powerful backend alternatives and applying project management principles.',
      isExpanded: false,
      modules: [
        {
          title: 'Module 1: Modern Frontend Development (Deep Dive)',
          goal: 'Move from direct DOM manipulation to a powerful, component-based framework, understanding the core principles shared by modern frameworks and gaining practical experience in React, Vue, and Angular.',
          icon: 'frontend',
          topics: [
            'The "Why": Modern Framework Concepts: Understanding the virtual DOM, component-based architecture, state management, and props',
            'Primary Framework: React & TypeScript: Core Concepts (Components, JSX, State), Side Effects & Data Fetching (useEffect), and Client-Side Routing',
            'Introduction to Alternative Frameworks: Vue.js (Templates, reactive state) and Angular (Modules, Components, Services, Dependency Injection)',
            'Comparative Analysis: Highlighting differences in philosophy, syntax, and state management approaches',
          ],
        },
        {
          title: 'Module 2: Professional Backend Development (Deep Dive)',
          goal: 'Build a secure, persistent backend API and compare backend ecosystems, using Postman for all testing.',
          icon: 'backend',
          topics: [
            'Databases: Understanding the difference between SQL and NoSQL',
            'SQL Specifics (PostgreSQL): Database Design & Schema, Tables & Data Types, Primary & Foreign Keys, CRUD Operations (SELECT, INSERT, UPDATE, DELETE), and Basic JOINs',
            'RESTful APIs (CRUD): Building a full API in Node.js',
            'Regular Expressions (Regex): For powerful string searching, data validation (e.g., email, password strength), and sanitization',
            'Authentication & Security: Hashing passwords (bcrypt) and using JWTs',
            'Introduction to Alternative Backends: Python (Flask/Django) and Java (Spring Boot) for building basic CRUD APIs',
            'Comparative Analysis: Highlighting differences in typing, concurrency models, and ecosystem strengths',
          ],
        },
        {
          title: 'Module 3: Formal Object-Oriented Programming (Deep Dive)',
          goal: 'Formally learn OOP principles by comparing implementations in JavaScript, Java, and Python.',
          icon: 'theory',
          topics: [
            'Formal Theory & The Four Pillars: Encapsulation, Abstraction, Inheritance, Polymorphism',
            'Language-Specific OOP: Comparing class syntax and object models across the three languages',
          ],
        },
      ],
      outcome: {
        title: '🏆 Trimester Project',
        description:
          'Build a complete full-stack application. The frontend can be built in React, Vue, or Angular. The backend can be built in Node.js, Python, or Java. The entire project must be managed on a PM tool, with all work done in feature branches and merged via Pull Requests on GitHub.',
      },
      break: '🗓️ End of Trimester 2: 1-Week Break',
    },
    {
      id: 3,
      title: 'Trimester 3 (Months 7-9): The Engineering Mindset',
      goal: 'To transition from a developer into an engineer by focusing on universal principles of performance, scalability, design, and deployment, culminating in a major capstone project.',
      isExpanded: false,
      modules: [
        {
          title: 'Module 1: Formal Algorithms & Data Structures (Deep Dive)',
          goal: 'Learn to formally analyze and choose performant code, recognizing that these principles are language-agnostic.',
          icon: 'theory',
          topics: [
            'Performance Analysis (Theory): Big O Notation, Time & Space Complexity',
            'Core Data Structures: Hash Maps, Stacks, Queues, Trees. Implementations will be compared across JS, Python, and Java',
            'Essential Algorithms: Searching and Sorting',
          ],
        },
        {
          title: 'Module 2: Formal OS & Computer Architecture for Developers',
          goal: 'Understand the underlying system to make informed architectural decisions, regardless of language.',
          icon: 'theory',
          topics: [
            "The Runtime Environment: Memory (Stack vs. Heap), Garbage Collection. Comparing the JS Event Loop to Java's multi-threaded model",
            'Operating System Interaction: Processes vs. Threads, Concurrency vs. Parallelism',
          ],
        },
        {
          title: 'Module 3: Formal System Design Principles (Deep Dive)',
          goal: 'Learn the foundational principles of designing scalable and resilient systems.',
          icon: 'theory',
          topics: [
            'Foundations: Client-Server Architecture, API Gateways, Network Protocols (DNS, HTTP)',
            'Designing for Scale: Load Balancing, Caching (Redis), Database Scaling (Read Replicas)',
            'Architectural Patterns (Theory): Monolith vs. Microservices',
          ],
        },
        {
          title: 'Module 4: Deployment, CI/CD, and Maintenance',
          goal: 'Understand the full lifecycle of software from code to live production.',
          icon: 'backend',
          topics: [
            'Cloud Platforms: Overview of IaaS (AWS EC2), PaaS (Heroku, Vercel), and FaaS (Serverless)',
            'Deployment Strategies: Hands-on guide to deploying the capstone project to a PaaS',
            'CI/CD (Continuous Integration/Deployment): Automating testing and deployment with GitHub Actions',
            'Maintenance & Monitoring: Introduction to application logging and monitoring for errors and uptime',
          ],
        },
      ],
    },
  ],
  capstone: {
    title: '🎓 Final Capstone Project (Final Month)',
    task: 'Build a new, complex, full-stack application from scratch, managed via a PM tool and GitHub. The final month of this trimester is dedicated to this project.',
    languageChoice:
      'Frontend can be React, Vue, or Angular. Backend can be Node.js/TypeScript, Java (Spring Boot), or Python (Django/Flask).',
    requirements:
      'Students must justify their architectural choices, design for potential scale, and deploy the application using a CI/CD pipeline.',
    guide: [
      'Start Early: Begin planning, research, and prototyping during the first two months of the trimester. Do not wait for the final month to start.',
      "Scope Realistically: Define a clear Minimum Viable Product (MVP). It's better to have a smaller, polished, working application than a large, buggy, unfinished one.",
      'Plan & Design First: Before writing code, create a project plan, design the database schema, map out API endpoints, and create simple wireframes for the UI.',
      'Use Your PM Tools: Break down the entire project into small, actionable tasks (e.g., "Create user login component," "Set up user database table") in your project management tool.',
      'Iterate and Get Feedback: Build in small increments. Get a feature working, merge it, and move to the next. Seek regular feedback from instructors and peers.',
    ],
    outcome:
      'A live, portfolio-ready project that showcases their full range of skills as a job-ready developer.',
  },
});

// Simple trimester summaries for curriculum modal
const trimesterSummaries = ref([
  {
    id: 1,
    title: 'Foundations & The First Full Slice',
    description:
      'Build your first complete application while mastering Git, command line, JavaScript fundamentals, HTML/CSS, basic backend APIs, and professional project management tools like Linear/ClickUp.',
    color: 'blue',
  },
  {
    id: 2,
    title: 'Building a Robust Full-Stack Application',
    description:
      'Master modern frontend frameworks (React/Vue/Angular), build secure database-driven APIs with PostgreSQL, explore multiple backend languages (Node.js, Python, Java), and implement authentication & security.',
    color: 'purple',
  },
  {
    id: 3,
    title: 'The Engineering Mindset',
    description:
      'Transition from developer to engineer by learning algorithms & data structures, system design principles, performance optimization, scalability patterns, cloud deployment, and CI/CD pipelines.',
    color: 'pink',
  },
]);

// Categories data
const categories = ref<Category[]>([
  {
    id: 1,
    title: 'Skilled Trades',
    description:
      "Master essential trade skills that build and maintain Nigeria's infrastructure.",
    icon: 'build',
    careerImage:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: ['Plumber', 'Welder', 'Carpenter', 'Auto Mechanic'],
  },
  {
    id: 2,
    title: 'Healthcare',
    description:
      'Join the essential workforce keeping Nigeria healthy and strong.',
    icon: 'local_hospital',
    careerImage:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: [
      'Dental Assistant',
      'Pharmacy Technician',
      'Licensed Practical Nurse (LPN)',
    ],
  },
  {
    id: 3,
    title: 'Technology',
    description:
      'Master the digital tools shaping the future of work in Nigeria.',
    icon: 'computer',
    careerImage:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: ['IT Support Specialist', 'Network Technician', 'Web Developer'],
  },
  {
    id: 4,
    title: 'Culinary Arts',
    description:
      'Create exceptional dining experiences and culinary innovations.',
    icon: 'restaurant',
    careerImage:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: ['Chef', 'Baker', 'Restaurant Manager'],
  },
  {
    id: 5,
    title: 'Creative Fields',
    description:
      'Express creativity while building rewarding careers in design and beauty.',
    icon: 'palette',
    careerImage:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    careers: ['Cosmetologist', 'Graphic Designer', 'Fashion Designer'],
  },
]);

// Programs data
const programs = ref<Program[]>([
  {
    id: 1,
    title: 'Full-Stack Web Development',
    category: 'Technology',
    description:
      'Master Git workflows, the command line, and professional PM tools like Linear/ClickUp. Learn JavaScript fundamentals, HTML5, CSS, React/Vue frameworks, Node.js, databases, and deploy complete web applications.',
    duration: '9 months',
    level: 'Beginner to Professional',
    skills: [
      'JavaScript/TypeScript & Python/Java',
      'React, Vue & Angular Frameworks',
      'Node.js, Express & API Development',
      'PostgreSQL & Database Design',
      'Git, GitHub & Professional Workflows',
      'Cloud Deployment & CI/CD Pipelines',
    ],
    icon: 'code',
  },
  {
    id: 2,
    title: 'Welding Technology',
    category: 'Skilled Trades',
    description:
      'Learn various welding techniques for construction, manufacturing, and repair work.',
    duration: '6 weeks',
    level: 'Beginner',
    skills: [
      'Arc Welding',
      'MIG/TIG Welding',
      'Metal Fabrication',
      'Safety Procedures',
      'Blueprint Reading',
    ],
    icon: 'construction',
  },
  {
    id: 3,
    title: 'Dental Assistant Program',
    category: 'Healthcare',
    description:
      'Support dental professionals while providing quality patient care and clinical assistance.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    skills: [
      'Patient Care',
      'Dental Equipment Operation',
      'X-ray Procedures',
      'Infection Control',
      'Administrative Tasks',
    ],
    icon: 'medical_services',
  },
  {
    id: 4,
    title: 'Plumbing & Pipe Fitting',
    category: 'Skilled Trades',
    description:
      'Master plumbing installation, repair, and maintenance for residential and commercial buildings.',
    duration: '8 weeks',
    level: 'Beginner to Intermediate',
    skills: [
      'Pipe Installation & Repair',
      'Water System Design',
      'Drainage Systems',
      'Fixture Installation',
      'Leak Detection & Repair',
    ],
    icon: 'plumbing',
  },
  {
    id: 5,
    title: 'Culinary Arts & Restaurant Management',
    category: 'Culinary Arts',
    description:
      'Master cooking techniques and restaurant operations for a successful culinary career.',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    skills: [
      'Professional Cooking Techniques',
      'Menu Planning & Costing',
      'Food Safety & Sanitation',
      'Kitchen Management',
      'Customer Service',
    ],
    icon: 'restaurant',
  },
  {
    id: 6,
    title: 'Graphic Design & Digital Media',
    category: 'Creative Fields',
    description:
      'Create compelling visual designs for print and digital media using professional tools.',
    duration: '8 weeks',
    level: 'Beginner to Intermediate',
    skills: [
      'Adobe Creative Suite',
      'Brand Identity Design',
      'Layout & Typography',
      'Digital Illustration',
      'Portfolio Development',
    ],
    icon: 'palette',
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

const openCurriculumModal = async () => {
  // Close program modal first if it's open
  showProgramModal.value = false;
  // Then open curriculum modal
  // showCurriculumModal.value = true;
  // Update URL without page reload
  await router.push({ path: '/tvet', query: { path: 'fullstack' } });
  console.log('this is show curriculum modal', showCurriculumModal.value);
};

const closeCurriculumModal = async () => {
  showCurriculumModal.value = false;
  // Remove query parameter
  await router.push({ path: '/tvet' });
  console.log('this is show curriculum modal', showCurriculumModal.value);
};

const toggleTrimester = (trimester: Trimester) => {
  trimester.isExpanded = !trimester.isExpanded;
};

const openTrimesterModal = (trimester: Trimester) => {
  selectedTrimester.value = trimester;
  showTrimesterModal.value = true;
};

const closeTrimesterModal = () => {
  showTrimesterModal.value = false;
  selectedTrimester.value = null;
};

const getIcon = (name: string) => {
  return curriculumData.value.icons[name] || '';
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
  // Check URL parameters on mount
  if (route.query.path === 'fullstack') {
    showCurriculumModal.value = true;
  }
});

// Watch for route query changes
watch(
  () => route.query.path,
  (newPath) => {
    if (newPath === 'fullstack') {
      showCurriculumModal.value = true;
    } else {
      showCurriculumModal.value = false;
    }
  }
);
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
  z-index: 1;

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
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

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
      margin-top: 1rem;
      text-align: center;
      align-self: flex-end;
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

    // New modal styles for infographic content
    .program-header {
      .program-cta-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
        }
      }
    }

    .stats-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      }
    }

    .timeline-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border-top: 4px solid #667eea;
      transition: all 0.3s ease;

      &.purple-border {
        border-top-color: #7c3aed;
      }

      &.pink-border {
        border-top-color: #ec4899;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      }

      .trimester-label {
        font-size: 0.75rem;
        letter-spacing: 1px;
      }
    }

    .tech-grid {
      .tech-card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
        transition: all 0.3s ease;
        border: 1px solid #f1f3f4;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }
      }
    }

    .pricing-card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 1px solid #e9ecef;

      &.featured-plan {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        transform: scale(1.05);
        border: none;
        box-shadow: 0 16px 48px rgba(102, 126, 234, 0.3);
      }

      &:hover:not(.featured-plan) {
        transform: translateY(-5px);
        box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
      }
    }

    .capstone-section {
      .q-card {
        background: #f8f9fa;
        border: 1px solid #e9ecef;
      }

      .q-item {
        padding: 12px 0;
      }
    }
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
}

// Curriculum Modal Styles
.curriculum-modal {
  .modal-header {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
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
    padding: 0;
    background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
    min-height: calc(100vh - 120px);
  }

  .curriculum-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .timeline-item {
    position: relative;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      width: 2px;
      background: linear-gradient(to bottom, #06b6d4, #0891b2);
      top: 4rem;
      bottom: -2rem;
      left: 23px;
      z-index: 1;
    }
  }

  .timeline-circle {
    position: relative;
    z-index: 2;
    box-shadow: 0 0 0 8px #111827;
  }

  .module-card {
    border-left: 4px solid #06b6d4;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(6, 182, 212, 0.2);
    }
  }

  .module-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #06b6d4;
  }

  .outcome-card.gradient-bg {
    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
    box-shadow: 0 8px 32px rgba(6, 182, 212, 0.3);
  }

  .outcome-icon {
    color: white;
    font-size: 32px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .break-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .capstone-section {
    .capstone-guide {
      border: 1px solid #374151;
    }

    .final-outcome.gradient-emerald {
      background: linear-gradient(135deg, #10b981 0%, #047857 100%);
      box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
    }
  }

  .rotate-180 {
    transform: rotate(180deg);
  }
}

// Trimester Modal Styles
.trimester-modal {
  .modal-header {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
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
    padding: 0;
    background: linear-gradient(135df, #111827 0%, #1f2937 100%);
    min-height: calc(100vh - 120px);
  }

  .trimester-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .module-detail-card {
    border: 1px solid #374151;
    transition: all 0.3s ease;
    height: 100%;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(6, 182, 212, 0.2);
      border-color: #06b6d4;
    }
  }

  .module-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
  }

  .outcome-card.gradient-bg {
    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
    box-shadow: 0 12px 48px rgba(6, 182, 212, 0.4);
  }

  .outcome-icon-large {
    font-size: 48px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 64px;
    height: 64px;
  }

  .break-card {
    max-width: 400px;
    margin: 0 auto;
  }

  .break-icon-large {
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 48px;
    height: 48px;
  }
}

// Additional responsive improvements for curriculum modals
@media (max-width: 768px) {
  .curriculum-modal,
  .trimester-modal {
    .modal-header {
      padding: 1rem;

      .text-h4 {
        font-size: 1.5rem;
      }
    }

    .curriculum-container,
    .trimester-content {
      padding: 1rem;
    }
  }

  .timeline-item {
    &:not(:last-child)::after {
      left: 19px;
    }
  }

  .timeline-circle {
    box-shadow: 0 0 0 4px #111827;
  }
}

// Individual trimester and package pricing styles
.individual-trimester {
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    border-color: #d1d5db;
  }

  .trimester-badge {
    background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
    color: #374151;
    padding: 4px 12px;
    border-radius: 12px;
    display: inline-block;
  }

  .features-list {
    .feature-item {
      position: relative;
      padding-left: 8px;
    }
  }
}

.package-deal {
  border: 2px solid #e5e7eb;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    border-color: #10b981;
  }

  &::before {
    content: 'SAVE';
    position: absolute;
    top: -10px;
    left: 20px;
    background: #10b981;
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 10px;
    font-weight: bold;
  }
}

.section-header {
  margin-bottom: 2rem;

  h3,
  h4 {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 2px;
      background: linear-gradient(45deg, #667eea, #764ba2);
    }
  }
}

@media (max-width: 768px) {
  .individual-trimester,
  .package-deal {
    margin-bottom: 1.5rem;
  }
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

/* Ensure modals appear above header */
:deep(.q-dialog) {
  z-index: 10000 !important;
}

:deep(.q-dialog__backdrop) {
  z-index: 9999 !important;
}

:deep(.q-dialog__inner) {
  z-index: 10001 !important;
}

/* Additional Quasar modal overrides */
.q-dialog {
  z-index: 10000 !important;
}

.q-dialog__backdrop {
  z-index: 9999 !important;
}

.q-dialog__inner {
  z-index: 10001 !important;
}
</style>
