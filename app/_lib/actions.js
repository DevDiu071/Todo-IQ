"use server";

import { signIn } from "./auth";

export async function signinAction() {
  await signIn("google", { redirect: "/dashboard" });
}
