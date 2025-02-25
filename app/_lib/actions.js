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

export async function editTask(formData) {
  const session = await auth();
  const newTask = {
    title: formData.get("title"),
    userId: session.user.userId,
    date: formData.get("date"),
    description: formData.get("description"),
  };

  const taskId = formData.get("id");
  if (taskId) console.log("************: ", taskId);

  const { error: taskUpdateError } = await supabase
    .from("tasks")
    .update(newTask)
    .eq("id", formData.get("id"))
    .select();

  if (taskUpdateError) throw new Error("Failed to update task!");

  // FIND categoryValueId FOR PRIORITY (categoryId = 1)
  const { data: priorityCategoryData, error: priorityError } = await supabase
    .from("taskcategories")
    .select("categoryValueId")
    .eq("taskId", formData.get("id"))
    .order("created_at", { ascending: false }) // Get the latest one
    .limit(1)
    .maybeSingle();

  if (priorityError) throw new Error("Failed to find priority category value!");

  if (!priorityCategoryData)
    throw new Error("No priority category value found for this task!");

  const priorityCategoryValueId = priorityCategoryData.categoryValueId;

  // UPDATE PRIORITY CATEGORY VALUE
  const { error: priorityUpdateError } = await supabase
    .from("categoryvalues")
    .update({ value: formData.get("priority") }) // Only updating value
    .eq("id", priorityCategoryValueId)
    .select();

  if (priorityUpdateError) throw new Error("Failed to update priority value!");
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
export async function removeVital(id) {
  const { error } = await supabase
    .from("tasks")
    .update({ vital: false })
    .eq("id", id)
    .select();

  if (error) throw new Error("Unable to remove vital");

  revalidatePath("/dashboard");
}

export async function deleteTask(id) {
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) throw new Error("Unable to delete the task!");

  revalidatePath("/dashboard");
}

export async function finishTask(id) {
  const { error } = await supabase
    .from("tasks")
    .update({ completed: true })
    .eq("id", id)
    .select();

  if (error) throw new Error("Unable to mark completed");

  revalidatePath("/dashboard");
}
export async function unfinishTask(id) {
  const { error } = await supabase
    .from("tasks")
    .update({ completed: false })
    .eq("id", id)
    .select();

  if (error) throw new Error("Unable to unfinish");

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

export async function updateSettings(formData) {
  const session = await auth();
  const email = session.user.email;
  const { data, error } = await supabase
    .from("users")
    .update({ contact: formData.get("contact") })
    .eq("email", email)
    .select();

  revalidatePath("/settins");
}

export async function signinAction() {
  await signIn("google", { redirectTo: "/dashboard" });
}

export async function signoutAction() {
  await signOut({ redirectTo: "/" });
}
