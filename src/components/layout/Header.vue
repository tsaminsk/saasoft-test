<script setup lang="ts">
</script>

<template>
  <header class="header">
    <div class="header-content container">
      <div class="logo-text">Account Manager</div>
      <div class="header-actions">
        <n-tag type="success" size="small">
          Vue 3 + TypeScript
        </n-tag>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0;
  height: 70px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  color: white;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: -0.5px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>