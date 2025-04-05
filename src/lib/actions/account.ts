"use server";

import { eq } from "drizzle-orm";
import { db } from "../db";
import { accounts } from "../db/schema";

export default async function getAccountByUserId(userId: string) {
  try {
    const account = db
      .select()
      .from(accounts)
      .where(eq(accounts.userId, userId))
      .limit(1);

    return account;
  } catch (err) {
    console.log(err);
  }
}
