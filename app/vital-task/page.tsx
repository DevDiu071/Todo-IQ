import React from "react";
import TaskView from "../_components/TaskView";
import { getTasks } from "../_lib/data-service";

export default async function page() {
  const tasks = await getTasks();
  const vitalTasks = tasks?.filter((task) => task.priority === "Extreme");
  return <TaskView tasks={vitalTasks || []} />;
}
