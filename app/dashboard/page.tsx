import React from "react";
import Image from "next/image";
import friend1 from "@/public/friend-1.png";

import TodoCard from "../_components/TodoCard";
import { BiTask } from "react-icons/bi";
import CompletedTask from "../_components/CompletedTask";
import { getTasks } from "@/app/_lib/data-service";
import { auth } from "../_lib/auth";

import AddTaxButton from "../_components/AddTaxButton";
import { IoDocumentTextOutline } from "react-icons/io5";
import NoTasksView from "../_components/NoTasksView";
import Chart from "../_components/Chart";

export default async function page() {
  const tasks = await getTasks();
  const normalTasks = tasks?.filter(
    (task) => task.vital === false && task.completed === false
  );
  const completedTasks = tasks?.filter((task) => task.completed === true);

  // tasks?.forEach((data) =>
  //   data.taskcategories.forEach((cat) => console.log(cat))
  // );
  tasks?.forEach((data) => {
    console.log(data);
    data.taskcategories.forEach((task) =>
      console.log("TASK CATEGORIES: ", task)
    );
  });
  // tasks?.forEach((data) =>
  //   data.taskcategories.forEach((cat) => console.log("Taskcategory: ", cat))
  // );

  // const normalTasks = tasks?.filter((task) => task.priority != "Extreme");
  const session = await auth();
  const firstName = session?.user?.name?.split(" ").at(0);

  return (
    <div>
      <div className="flex justify-between flex-wrap items-center">
        <h1 className="text-2xl font-bold">Welcome back, {firstName}✋</h1>

        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            <Image src={friend1} className="w-7 h-7" alt="friend image" />
            <Image src={friend1} className="w-7 h-7" alt="friend image" />
            <Image src={friend1} className="w-7 h-7" alt="friend image" />
            <Image src={friend1} className="w-7 h-7" alt="friend image" />
          </div>
          <button className="flex items-center border border-red py-1 gap-x-1 px-2 rounded-md">
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.351 10.1276V11.7398H5.67752V10.1276C5.67752 10.1276 5.67752 6.90308 10.5143 6.90308C15.351 6.90308 15.351 10.1276 15.351 10.1276ZM12.9326 2.87247C12.9326 2.39416 12.7908 1.9266 12.5251 1.5289C12.2593 1.1312 11.8816 0.82123 11.4397 0.63819C10.9978 0.455149 10.5116 0.407258 10.0425 0.500571C9.57334 0.593884 9.14243 0.824211 8.80421 1.16243C8.466 1.50064 8.23567 1.93155 8.14236 2.40067C8.04905 2.86979 8.09694 3.35604 8.27998 3.79794C8.46302 4.23984 8.77299 4.61753 9.17069 4.88327C9.56838 5.149 10.036 5.29084 10.5143 5.29084C11.1556 5.29084 11.7708 5.03605 12.2243 4.58251C12.6778 4.12898 12.9326 3.51386 12.9326 2.87247ZM15.5122 6.95145C15.9529 7.35798 16.3081 7.84821 16.5573 8.39353C16.8064 8.93885 16.9444 9.52833 16.9632 10.1276V11.7398H19.3816V10.1276C19.3816 10.1276 19.3816 7.34645 15.5122 6.95145ZM14.5449 0.454102C14.3013 0.454248 14.0593 0.492323 13.8274 0.56696C14.299 1.24327 14.5519 2.04795 14.5519 2.87247C14.5519 3.69699 14.299 4.50167 13.8274 5.17798C14.0593 5.25262 14.3013 5.29069 14.5449 5.29084C15.1863 5.29084 15.8014 5.03605 16.2549 4.58251C16.7084 4.12898 16.9632 3.51386 16.9632 2.87247C16.9632 2.23108 16.7084 1.61596 16.2549 1.16243C15.8014 0.708894 15.1863 0.454102 14.5449 0.454102ZM6.48365 4.48471H4.06528V2.06635H2.45304V4.48471H0.034668V6.09696H2.45304V8.51533H4.06528V6.09696H6.48365V4.48471Z"
                fill="#FF6767"
              />
            </svg>
            <span className="text-xs text-red font-semibold">Invite</span>
          </button>
        </div>
      </div>

      <div className="sm:border border-border-color  sm:mx-0 mt-3 sm:px-4 py-2">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-5 mt-1">
          <div className="sm:shadow-md -ml-2.5 sm:ml-0 sm:px-5 pt-1 pb-4 rounded-md">
            <div className="flex sm:justify-between gap-x-[230px]">
              <span>
                <p className="text-lg">To-Do</p>
              </span>
              <AddTaxButton />
            </div>
            <div className="sm:h-[350px] overflow-y-auto sm:[&::-webkit-scrollbar]:hidden sm:[-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {normalTasks?.map((task) => (
                <TodoCard task={task} key={task.id} />
              ))}
              {normalTasks?.length === 0 && <NoTasksView />}
            </div>
          </div>

          <div>
            <div className="shadow-lg px-3 pt-4 -ml-2.5 pb-2 rounded-xl">
              <p>Task status</p>
              <div className="flex  items-center gap-x-2 justify-center">
                <Chart tasks={tasks} />
              </div>
            </div>

            <div className="sm:shadow-md sm:px-10 pt-4 pb-8 mt-2 rounded-md ">
              <span className="flex items-center gap-x-1">
                <BiTask className="text-xl text-gray" />
                <p className="text-red text-sm">Completed Task</p>
              </span>
              <div className="sm:h-[190px] -ml-2.5 sm:overflow-y-auto sm:[&::-webkit-scrollbar]:hidden sm:[-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {completedTasks?.map((task) => (
                  <CompletedTask key={task.id} task={task} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
