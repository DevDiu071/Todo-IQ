"use server";

import { revalidatePath } from "next/cache";
import { auth, signOut } from "./auth";
import { signIn } from "./auth";
import { supabase } from "./supabase";

export async function createTask(formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in!");

  // CREATE TASK
  const newTask = {
    title: formData.get("title"),
    userId: session.user.userId,
    date: formData.get("date"),
    description: formData.get("description"),
  };

  const { data: taskData, error: taskError } = await supabase
    .from("tasks")
    .insert([newTask])
    .select("id")
    .single();

  if (taskError) throw new Error("Unable to create task");

  // CREATE VALUES
  const { data: categoryValues, error: categoryValError } = await supabase
    .from("categoryvalues")
    .insert([
      { value: formData.get("priority"), categoryId: 1 },
      { value: "Not started", categoryId: 2 },
    ])
    .select();

  if (categoryValError) throw new Error("Unable to create values");

  // CREATE TASKCATEGORY
  const { error: taskCatgoriesError } = await supabase
    .from("taskcategories")
    .insert([
      { taskId: taskData.id, categoryValueId: categoryValues?.[0].id },
      { taskId: taskData.id, categoryValueId: categoryValues?.[1].id },
    ])
    .select();

  if (taskCatgoriesError) throw new Error("unable to create task catgory");

  revalidatePath("/dashboard");
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

export async function markVital(id) {
  const { error } = await supabase
    .from("tasks")
    .update({ vital: true })
    .eq("id", id)
    .select();

  if (error) throw new Error("Unable to mark vital");

  revalidatePath("/dashboard");
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
