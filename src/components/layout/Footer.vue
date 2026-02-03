<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-left">
        <p>© {{ currentYear }} Account Manager. All rights reserved.</p>
      </div>
      <div class="footer-links">
        <n-tag type="info" size="small">
          Made with ❤️ using Vue 3
        </n-tag>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1e293b;
  color: #cbd5e1;
  padding: 0;
  height: 60px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
}

.footer-left p {
  margin: 0;
  font-size: 14px;
  color: #94a3b8;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>