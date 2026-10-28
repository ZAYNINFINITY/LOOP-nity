import { motion, useReducedMotion, type MotionValue } from "motion/react";

/**
 * The LOOP-nity mark: a lemniscate of Bernoulli, slightly widened so the
 * crossing reads clearly at small sizes. Generated once at module load.
 */
function lemniscate(cx: number, cy: number, a: number, squash = 1.18, steps = 160) {
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const d = 1 + Math.sin(t) ** 2;
    const x = cx + (a * Math.cos(t)) / d;
    const y = cy + (a * squash * Math.sin(t) * Math.cos(t)) / d;
    pts.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `M${pts.join("L")}Z`;
}

export const LOOP_PATH = lemniscate(60, 24, 54);

type Props = {
  className?: string;
  draw?: boolean;
  strokeWidth?: number;
  intensity?: MotionValue<number>;
  track?: boolean;
  label?: string;
};

export function LoopMark({ className, draw = false, strokeWidth = 6, intensity, track = false, label }: Props) {
  const reduce = useReducedMotion();
  const animate = draw && !reduce;
  return (
    <svg
      viewBox="0 0 120 48"
      className={className}
      role={label ? "img" : undefined}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      fill="none"
      overflow="visible"
    >
      {track && <path d={LOOP_PATH} stroke="var(--border)" strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" />}
      <motion.path
        d={LOOP_PATH}
        stroke="var(--primary)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={track ? "non-scaling-stroke" : undefined}
        style={{ opacity: intensity }}
        initial={animate ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LoopMark className="h-[14px] w-[34px] shrink-0" strokeWidth={9} />
      <span className="font-display text-[1.0625rem] font-extrabold leading-none tracking-[-0.035em]">
        LOOP<span className="text-primary">-</span>nity
      </span>
    </span>
  );
}