import React from "react";

import { getTasks } from "../_lib/data-service";
import MyTaskView from "../_components/MyTaskView";

export default async function page() {
  const tasks = await getTasks();
  const myTasks = tasks?.filter(
    (task) => task.vital === false && task.completed === false
  );
  return (
    <div>
      <MyTaskView tasks={myTasks || []} />
    </div>
  );
}
