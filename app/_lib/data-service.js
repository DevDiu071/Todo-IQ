import { supabase } from "./supabase";

export const getTasks = async function () {
  let { data: tasks, error } = await supabase.from("tasks").select("*");

  if (error) {
    console.error("Something went wrong");
    throw new Error("Task were not fetched correctly");
  }
  return tasks;
};
