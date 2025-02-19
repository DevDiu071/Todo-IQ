import { supabase } from "./supabase";

// export const getTasks = async function () {
//   let { data: tasks, error } = await supabase.from("tasks").select("*");

//   if (error) {
//     throw new Error("Task were not fetched correctly");
//   }
//   return tasks;
// };

export const getTasks = async function () {
  let { data, error } = await supabase.from("tasks").select(`
    id,
    title,
    description,
    date,
    vital,
    created_at,
    completed,
    taskcategories (
      categoryvalues (
        value,
        categories (name)
      )
    )
  `);

  if (error) throw new Error("Unable to fetch Tasks and categories");

  return data;
};
