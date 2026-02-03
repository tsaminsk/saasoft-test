import { Account } from "@/types/account";
import { openDB } from "idb";
import { toRaw } from "vue";

export const initDB = async () => {
  return openDB("AccountManagerDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("accounts")) {
        db.createObjectStore("accounts", { keyPath: "id" });
      }
    },
  });
};

export const saveAccounts = async (accounts: Account[]) => {
  const db = await initDB();
  const tx = db.transaction("accounts", "readwrite");
  await tx.store.clear();

  for (const account of accounts) {
    await tx.store.put(toRaw(account));
  }

  await tx.done;
};

export const loadAccounts = async (): Promise<Account[]> => {
  const db = await initDB();
  return db.getAll("accounts");
};
