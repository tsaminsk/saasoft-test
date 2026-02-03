<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="app-layout">
    <Header />

    <main class="main-content">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #e6eaee;
  padding: 32px 24px;
}
</style>