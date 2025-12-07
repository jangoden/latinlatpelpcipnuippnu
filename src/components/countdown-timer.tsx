"use client";

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft | null => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft | null = null;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="text-center text-4xl font-bold text-accent animate-pulse">
        The Wait Is Over
      </div>
    );
  }

  const timeUnits = [
    { unit: 'days', value: timeLeft.days },
    { unit: 'hours', value: timeLeft.hours },
    { unit: 'minutes', value: timeLeft.minutes },
    { unit: 'seconds', value: timeLeft.seconds },
  ];

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex justify-center gap-3 md:gap-6">
      {timeUnits.map(({ unit, value }) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="relative w-[70px] h-[70px] md:w-28 md:h-28 flex items-center justify-center bg-primary/30 border border-primary/50 rounded-lg backdrop-blur-sm shadow-2xl shadow-black/30">
            <span className="text-4xl md:text-6xl font-black text-primary-foreground font-headline tracking-tighter tabular-nums transition-all duration-300">
              {formatNumber(value)}
            </span>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary-foreground/20"></div>
          </div>
          <p className="mt-3 text-xs md:text-base font-medium text-foreground/70 uppercase tracking-widest">
            {unit}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
