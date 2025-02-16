import React from "react";
import TaskView from "../_components/TaskView";
import { getTasks } from "../_lib/data-service";
import MyTaskView from "../_components/MyTaskView";

export default async function page() {
  const tasks = await getTasks();
  const myTasks = tasks?.filter((task) => task.priority !== "Extreme");
  return (
    <div>
      <MyTaskView tasks={myTasks || []} />
    </div>
  );
}
