"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = Date.UTC(2027, 7, 2, 7, 30, 11);

type CountdownTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeRemaining(): CountdownTime {
  const difference = Math.max(0, TARGET_DATE - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const units: { key: keyof CountdownTime; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function EclipseCountdown() {
  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      setTime(getTimeRemaining());
    };

    updateCountdown();

    const interval = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="mt-9 grid w-full max-w-xl grid-cols-4 gap-3 sm:gap-5"
      role="timer"
      aria-label="Countdown to the August 2, 2027 solar eclipse"
    >
      {units.map(({ key, label }) => (
        <div key={key} className="min-w-0 text-center">
          <div
            aria-hidden="true"
            className="font-mono text-4xl font-medium tracking-tight tabular-nums sm:text-5xl md:text-6xl"
          >
            {String(time[key]).padStart(2, "0")}
          </div>

          <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
