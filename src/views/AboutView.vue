<template>
  <div class="about-view">
    <n-card class="card">
      <n-page-header title="О проекте">
        <template #subtitle>
          Тестовое задание для Vue Frontend Developer
        </template>
      </n-page-header>

      <n-space vertical :size="24">
        <!-- Описание проекта -->
        <n-card embedded>
          <n-space vertical :size="12">
            <h3>📋 Описание</h3>
            <p class="description">
              Приложение для управления учетными записями с поддержкой различных
              типов аутентификации (LDAP и локальные). Реализовано с
              использованием современного стека технологий и соответствует
              требованиям тестового задания.
            </p>
          </n-space>
        </n-card>

        <!-- Технологии -->
        <n-card embedded>
          <n-space vertical :size="12">
            <h3>🛠 Используемые технологии</h3>
            <n-space :size="12" wrap>
              <n-tag type="success" size="large">
                <n-icon :size="18" style="margin-right: 6px">
                  <LogoVue />
                </n-icon>
                Vue 3
              </n-tag>
              <n-tag type="warning" size="large">
                <n-icon :size="18" style="margin-right: 6px">
                  <LogoJavascript />
                </n-icon>
                TypeScript
              </n-tag>
              <n-tag type="info" size="large">
                <n-icon :size="18" style="margin-right: 6px">
                  <GitCompare />
                </n-icon>
                Pinia
              </n-tag>
              <n-tag type="primary" size="large">
                <n-icon :size="18" style="margin-right: 6px">
                  <GridOutline />
                </n-icon>
                Naive UI
              </n-tag>
              <n-tag type="error" size="large">
                <n-icon :size="18" style="margin-right: 6px">
                  <NavigateOutline />
                </n-icon>
                Vite
              </n-tag>
              <n-tag type="default" size="large">
                <n-icon :size="18" style="margin-right: 6px">
                  <LogoChrome />
                </n-icon>
                IndexedDB
              </n-tag>
              <n-tag type="success" size="large">
                <n-icon :size="18" style="margin-right: 6px">
                  <GitBranch />
                </n-icon>
                Vue Router
              </n-tag>
            </n-space>
          </n-space>
        </n-card>

        <!-- Возможности -->
        <n-card embedded>
          <n-space vertical :size="12">
            <h3>✨ Возможности</h3>
            <n-list>
              <n-list-item>
                <n-space align="center">
                  <n-icon :size="20" color="#10b981">
                    <CheckmarkCircleOutline />
                  </n-icon>
                  <span>Управление учетными записями</span>
                </n-space>
              </n-list-item>
              <n-list-item>
                <n-space align="center">
                  <n-icon :size="20" color="#10b981">
                    <CheckmarkCircleOutline />
                  </n-icon>
                  <span>Валидация полей ввода</span>
                </n-space>
              </n-list-item>
              <n-list-item>
                <n-space align="center">
                  <n-icon :size="20" color="#10b981">
                    <CheckmarkCircleOutline />
                  </n-icon>
                  <span>Сохранение состояния при перезагрузке</span>
                </n-space>
              </n-list-item>
              <n-list-item>
                <n-space align="center">
                  <n-icon :size="20" color="#10b981">
                    <CheckmarkCircleOutline />
                  </n-icon>
                  <span>Реактивный пользовательский интерфейс</span>
                </n-space>
              </n-list-item>
              <n-list-item>
                <n-space align="center">
                  <n-icon :size="20" color="#10b981">
                    <CheckmarkCircleOutline />
                  </n-icon>
                  <span>Адаптивный дизайн</span>
                </n-space>
              </n-list-item>
            </n-list>
          </n-space>
        </n-card>

        <!-- Архитектура -->
        <n-card embedded>
          <n-space vertical :size="12">
            <h3>🏗 Архитектура</h3>
            <n-descriptions bordered :column="1" label-placement="left">
              <n-descriptions-item label="State Management">
                <n-tag type="info">Pinia</n-tag>
              </n-descriptions-item>
              <n-descriptions-item label="Routing">
                <n-tag type="success">Vue Router 4</n-tag>
              </n-descriptions-item>
              <n-descriptions-item label="UI Framework">
                <n-tag type="primary">Naive UI</n-tag>
              </n-descriptions-item>
              <n-descriptions-item label="Data Storage">
                <n-tag type="default">IndexedDB (idb)</n-tag>
              </n-descriptions-item>
              <n-descriptions-item label="Build Tool">
                <n-tag type="error">Vite</n-tag>
              </n-descriptions-item>
              <n-descriptions-item label="Type System">
                <n-tag type="warning">TypeScript</n-tag>
              </n-descriptions-item>
            </n-descriptions>
          </n-space>
        </n-card>

        <!-- Версия и статус -->
        <n-card embedded>
          <n-space vertical :size="12">
            <h3>📊 Информация</h3>
            <n-descriptions bordered :column="2" label-placement="left">
              <n-descriptions-item label="Версия">
                <n-tag type="default">v1.0.0</n-tag>
              </n-descriptions-item>
              <n-descriptions-item label="Статус">
                <n-tag type="success">Активен</n-tag>
              </n-descriptions-item>
              <n-descriptions-item label="Сборка">
                <n-tag type="primary">{{ buildDate }}</n-tag>
              </n-descriptions-item>
              <n-descriptions-item label="Окружение">
                <n-tag :type="envTagType">{{ envName }}</n-tag>
              </n-descriptions-item>
            </n-descriptions>
          </n-space>
        </n-card>
      </n-space>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  LogoVue,
  LogoJavascript,
  GitCompare,
  GridOutline,
  NavigateOutline,
  LogoChrome,
  GitBranch,
  CheckmarkCircleOutline,
} from "@vicons/ionicons5";

// Дата сборки
const buildDate = computed(() => {
  const date = new Date();
  return date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

// Окружение
const envName = computed(() => {
  return import.meta.env.MODE === "production" ? "Production" : "Development";
});

const envTagType = computed(() => {
  return import.meta.env.MODE === "production" ? "success" : "warning";
});
</script>

<style scoped>
.about-view {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
}

.description {
  margin: 0;
  line-height: 1.6;
  color: #475569;
}

:deep(.n-card__content) {
  padding: 16px;
}

:deep(.n-card-header) {
  padding: 16px;
}

:deep(.n-card__header) {
  padding: 16px;
}
</style>
