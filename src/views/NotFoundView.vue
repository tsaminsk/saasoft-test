<script setup lang="ts">
import { HomeOutline, ArrowBackOutline } from '@vicons/ionicons5'
</script>

<template>
  <div class="not-found">
    <div class="not-found-content">
      <div class="error-code">404</div>
      <h2>Страница не найдена</h2>
      <p class="error-message">
        К сожалению, запрошенная страница не существует или была удалена.
      </p>
      <n-space :size="16">
        <n-button type="primary" @click="$router.push('/')">
          <template #icon>
            <n-icon>
              <HomeOutline />
            </n-icon>
          </template>
          На главную
        </n-button>
        <n-button @click="$router.back()">
          <template #icon>
            <n-icon>
              <ArrowBackOutline />
            </n-icon>
          </template>
          Назад
        </n-button>
      </n-space>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 24px;
}

.not-found-content {
  text-align: center;
  color: white;
  max-width: 600px;
}

.error-code {
  font-size: 120px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 16px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.error-message {
  font-size: 16px;
  opacity: 0.9;
  margin-bottom: 32px;
  line-height: 1.6;
}
</style>