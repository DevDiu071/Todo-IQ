"use server";

import { signOut } from "./auth";
import { signIn } from "./auth";

export async function signinAction() {
  await signIn("google", { redirectTo: "/dashboard" });
}

export async function signoutAction() {
  await signOut({ redirectTo: "/" });
}
