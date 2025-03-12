"use client";

import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function Chart({ tasks }) {
  const totalTasks = tasks.length || 1;

  const statusCounts = {
    completed: tasks.filter((task) => task.completed === true).length,
    inProgress: tasks.filter((task) => task.inProgress === true).length,

    notStarted: tasks.filter((task) => !task.completed && !task.inProgress)
      .length,
  };
  const data = [
    {
      name: "Completed",
      value: Math.round((statusCounts.completed / totalTasks) * 100),
      color: "#008000",
    },
    {
      name: "In Progress",
      value: Math.round((statusCounts.inProgress / totalTasks) * 100),
      color: "#0000FF",
    },
    {
      name: "Not Started",
      value: Math.round((statusCounts.notStarted / totalTasks) * 100),
      color: "#FF0000",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      {data.map((entry, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <PieChart width={100} height={100}>
            {/* Background Circle */}
            <Pie
              data={[{ value: 100 }]} // Full circle
              cx={50}
              cy={50}
              innerRadius={30}
              outerRadius={40}
              fill="#ddd"
              dataKey="value"
            />
            {/* Foreground Arc */}
            <Pie
              data={[entry]}
              cx={50}
              cy={50}
              innerRadius={30}
              outerRadius={40}
              startAngle={90}
              endAngle={90 + (entry.value * 360) / 100}
              fill={entry.color}
              dataKey="value"
            />
          </PieChart>
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>
            {entry.value}%
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                backgroundColor: entry.color,
                borderRadius: "50%",
                marginRight: 5,
              }}
            ></span>
            {entry.name}
          </div>
        </div>
      ))}
    </div>
  );
}
