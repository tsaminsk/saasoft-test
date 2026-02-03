import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { Account, AccountType } from "@/types/account";

export const useAccountsStore = defineStore("accounts", () => {
  const data = ref<Account[]>([
    {
      id: "cdc4446a-908f-4099-89c1-3061fd80bf06",
      label: "XXX",
      type: AccountType.locale,
      login: "Значение",
      password: "5c3f4a98",
    },
    {
      id: "d0d954d9-cf4d-414e-80e2-c3e50a3a2937",
      label: "XXX; YYYYYYYYYYY",
      type: AccountType.LDAP,
      login: "Значение",
      password: "db07f580sadfsadf",
    },
  ]);

  function addItem() {
    data.value.push({
      id: crypto.randomUUID(),
      label: "",
      type: AccountType.locale,
      login: "",
      password: "",
    })
  }

  function removeItem(id: string) {
    const index = data.value.findIndex((item) => item.id === id)
    if (index >= 0) {
      const newData = [ ...data.value ];
      const res = newData.splice(index, 1);
      data.value = newData;
      return res[0]?.label ?? '';
    }
  }

  return {
    data,
    addItem,
    removeItem,
  };
});