import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import "../styles/Cards.css";

const Chart1 = () => {
  const data = [
    {
      name: "2015",
      react: "50",
      angular: "60",
    },
    {
      name: "2016",
      react: "25", // Lower than 2015
      angular: "15", 
    },
    {
      name: "2017",
      react:'15',
      angular: "30",
    },
    {
      name: "2018",
      react:'25',
      angular: "30",
    },
    {
      name: "2019",
      react: "50",
      angular: "60",
    },
    {
      name: "2020",
      react: "25",
      angular: "30",
    },
  ];

  return (
    <div className="barWrap">
      <LineChart height={200} width={450} data={data}>
        <Line type="monotone" dataKey="react" stroke="#5041BC" strokeWidth={3}  />
        <Line type="monotone" dataKey="angular" stroke="#EA8F95" strokeWidth={3} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart1;
