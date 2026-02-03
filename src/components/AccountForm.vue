<script setup lang="ts">
import { Account, AccountType, ACCOUNT_TYPE_LABELS } from "@/types/account";
import { TrashOutline } from "@vicons/ionicons5";
// import { computed } from "vue";

const data: Account[] = [
  {
    id: crypto.randomUUID(),
    label: "XXX",
    type: AccountType.locale,
    login: "Значение",
    password: crypto.randomUUID().substring(0, 8),
  },
  {
    id: crypto.randomUUID(),
    label: "XXX; YYYYYYYYYYY",
    type: AccountType.LDAP,
    login: "Значение",
    password: crypto.randomUUID().substring(0, 8),
  },
];
console.log('data',data);

const typeOptions = ACCOUNT_TYPE_LABELS
</script>

<template>
  <div class="form">
    <n-grid
      class="form-grid"
      :x-gap="20"
      :y-gap="10"
      :cols="5"
      style="grid-template-columns: 1fr 20% 1fr 1fr 60px"
      item-responsive
      layout-shift-disabled
    >
      <n-gi>
        <div class="form-grid__title">Метки</div>
      </n-gi>
      <n-gi>
        <div class="form-grid__title">Тип записи</div>
      </n-gi>
      <n-gi>
        <div class="form-grid__title">Логин</div>
      </n-gi>
      <n-gi :span="2">
        <div class="form-grid__title">Пароль</div>
      </n-gi>
      <template v-for="item in data" :key="item.id">
        <n-gi>
          <div class="form-grid__ceil">
            <n-input
              :value="item.label"
              type="textarea"
              :autosize="{
                minRows: 1,
                maxRows: 3
              }"
              placeholder="Basic Textarea"
            />
          </div>
        </n-gi>
        <n-gi>
          <div class="form-grid__ceil">
            <n-select :value="item.type" :options="typeOptions" />
          </div>
        </n-gi>
        <n-gi :span="item.type === AccountType.LDAP ? 2 : 1">
          <div class="form-grid__ceil">
            <n-input :value="item.login" type="text" placeholder="Login" />
          </div>
        </n-gi>
        <n-gi v-if="item.type === AccountType.locale">
          <div class="form-grid__ceil">
            <n-input :value="item.password" type="password" placeholder="Password" />
          </div>
        </n-gi>
        <n-gi>
          <div class="form-grid__ceil form-grid__ceil--actions">
            <n-button quaternary circle type="error">
              <template #icon>
                <TrashOutline class="form-grid__action-icon"  />
              </template>
            </n-button>
          </div>
        </n-gi>
      </template>
    </n-grid>
  </div>
</template>

<style scoped>
.form-grid__title {
  font-size: 0.75rem;
  color: #666;
}
.form-grid__ceil--actions {
  font-size: 10px;
}

.form-grid__action-icon {
  width: 20px;
}
</style>
