import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Progress } from "rsuite";
const { Line } = Progress;

export const ProgressBar = () => {
  const [percent, setPercent] = useState(0);
  const [color, setColor] = useState("#2196f3");
  const [status, setStatus] = useState<"success" | "fail" | "active">("active");

  const [startTime, setStartTime] = useState(dayjs());
  const [goalTime, setGoalTime] = useState(dayjs().add(10, "seconds"));

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    const now = dayjs();
    const percent =
      ((now.unix() - startTime.unix()) / (goalTime.unix() - startTime.unix())) *
      100;

    if (percent > 100) {
      setPercent(100);
      setStatus("success");
      setColor("green");
      return;
    }
    setPercent(Math.floor(percent));
  }

  return (
    <div>
      <Line percent={percent} strokeColor={color} status={status} />
    </div>
  );
};
