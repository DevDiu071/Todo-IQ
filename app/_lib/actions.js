"use server";

import { revalidatePath } from "next/cache";
import { auth, signOut } from "./auth";
import { signIn } from "./auth";
import { supabase } from "./supabase";

export async function createTask(formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in!");

  const newTask = {
    title: formData.get("title"),
    userId: session.user.userId,
    date: formData.get("date"),
    priority: formData.get("priority"),
    description: formData.get("description"),
  };

  const { data, error } = await supabase
    .from("tasks")
    .insert([newTask])
    .select();

  if (error) {
    console.error("Unable to create task");
  }

  revalidatePath("/dashboard");

  console.log(formData);
}

export async function createUser(newUser) {
  const { data, error } = await supabase
    .from("users")
    .insert([newUser])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}

export async function getUser(email) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      console.error("Supabase error in getUser:", error);
      return null; // Return null instead of throwing
    }

    return data;
  } catch (error) {
    console.error("Unexpected error in getUser:", error);
    return null;
  }
}

export async function signinAction() {
  await signIn("google", { redirectTo: "/dashboard" });
}

export async function signoutAction() {
  await signOut({ redirectTo: "/" });
}
