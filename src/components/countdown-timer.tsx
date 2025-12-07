"use client";

import { useState, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // Assuming cn is available in utils, which is standard with shadcn/ui

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const timerVariants = {
  container: cva('flex justify-center', {
    variants: {
      size: {
        medium: 'gap-3 md:gap-6',
        small: 'gap-2',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }),
  segment: cva(
    'relative flex flex-col items-center justify-center bg-primary/30 border border-primary/50 rounded-lg backdrop-blur-sm shadow-2xl shadow-black/30',
    {
      variants: {
        size: {
          medium: 'w-[70px] h-[70px] md:w-28 md:h-28',
          small: 'w-16 h-16',
        },
      },
      defaultVariants: {
        size: 'medium',
      },
    }
  ),
  number: cva(
    'font-black text-primary-foreground font-headline tracking-tighter tabular-nums transition-all duration-300',
    {
      variants: {
        size: {
          medium: 'text-4xl md:text-6xl',
          small: 'text-3xl',
        },
      },
      defaultVariants: {
        size: 'medium',
      },
    }
  ),
  label: cva('font-medium uppercase tracking-widest', {
    variants: {
      size: {
        medium: 'mt-3 text-xs md:text-base text-foreground/70',
        small: 'mt-2 text-[10px] text-white/70', // Adjusted for better fit
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }),
};

type TimerStyleProps = VariantProps<typeof timerVariants.container>;

const calculateTimeLeft = (targetDate: Date): TimeLeft | null => {
  const difference = +targetDate - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

const CountdownTimer = ({
  targetDate,
  size,
}: {
  targetDate: Date;
  size?: TimerStyleProps['size'];
}) => {
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
      <div className="text-center text-2xl font-bold text-accent animate-pulse">
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
    <div className={cn(timerVariants.container({ size }))}>
      {timeUnits.map(({ unit, value }) => (
        <div key={unit} className="flex flex-col items-center">
          <div className={cn(timerVariants.segment({ size }))}>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary-foreground/20 z-0"></div>
            <span className={cn(timerVariants.number({ size }), 'z-10')}>
              {formatNumber(value)}
            </span>
          </div>
          <p className={cn(timerVariants.label({ size }))}>{unit}</p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
