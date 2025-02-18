import React from "react";
import { getTasks } from "../_lib/data-service";
import VitalTaskView from "../_components/VitalTaskView";

export default async function page() {
  const tasks = await getTasks();
  const vitalTasks = tasks?.filter((task) => task.vital === true);

  return <VitalTaskView tasks={vitalTasks || []} />;
}
