import { motion, useReducedMotion, type MotionValue } from "motion/react";

/**
 * The Loopnity mark: a lemniscate of Bernoulli, slightly widened so the
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

/** Same curve as the ease used across the site for brand motion. */
const MORPH_EASE = [0.65, 0, 0.35, 1] as const;

/**
 * The "oo" resting state: two rings that sit inside the lemniscate's own
 * footprint, so the morph reads as the letters connecting rather than as one
 * glyph replacing another.
 */
const RING = { cx: [33, 87] as const, cy: 24, rx: 23, ry: 21.5 };

/**
 * Tight bounds of LOOP_PATH in the 120x48 coordinate space it is drawn in.
 * The wordmark crops to these so the glyph sits on the type baseline at
 * x-height, with no invisible padding skewing the optical alignment.
 */
const LOOP_BOX = { x: 6, y: 2.76, w: 108, h: 42.48 } as const;

type Props = {
  className?: string;
  draw?: boolean;
  strokeWidth?: number;
  intensity?: MotionValue<number>;
  track?: boolean;
  label?: string;
  /**
   * Start as the two "oo" rings and connect them into the ∞ once, on mount.
   * Used where the mark is large enough for the morph to read (the hero).
   * Reduced-motion visitors get the finished ∞ immediately.
   */
  connect?: boolean;
};

export function LoopMark({
  className,
  draw = false,
  strokeWidth = 6,
  intensity,
  track = false,
  label,
  connect = false,
}: Props) {
  const reduce = useReducedMotion();
  const animate = draw && !reduce;
  /* "connect" only makes sense as the opening beat of a draw. */
  const morph = connect && animate;

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
      {track && (
        <motion.path
          d={LOOP_PATH}
          stroke="var(--border)"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          initial={morph ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: morph ? 1.15 : 0, ease: MORPH_EASE }}
        />
      )}
      {morph &&
        RING.cx.map((cx) => (
          <motion.ellipse
            key={cx}
            cx={cx}
            cy={RING.cy}
            rx={RING.rx}
            ry={RING.ry}
            stroke="var(--primary)"
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: MORPH_EASE, delay: 0.5 }}
          />
        ))}
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
        transition={{
          duration: morph ? 1.05 : 1.5,
          ease: MORPH_EASE,
          delay: morph ? 0.45 : 0.2,
        }}
      />
    </svg>
  );
}

/* ---------- wordmark ---------- */

type WordmarkProps = {
  className?: string;
  /**
   * Stroke weight in em. Because the glyph is drawn with
   * `vectorEffect="non-scaling-stroke"`, the browser keeps this exact weight at
   * every size instead of scaling it through the viewBox — so the mark stays
   * crisp at 17px in the nav and optically matched at display sizes.
   */
  weight?: number;
  /** Set false to render the still ∞ (no rings, no draw). */
  play?: boolean;
};

/**
 * "Loopnity" set with its two middle letters as an inline ∞.
 *
 * Rest state: two rings reading as "oo". On mount they dissolve while the
 * lemniscate draws itself through them, so the "oo" becomes the brand mark.
 * Reduced-motion visitors get the finished ∞ immediately.
 */
export function LoopnityWordmark({ className = "", weight = 0.13, play = true }: WordmarkProps) {
  const reduce = useReducedMotion();
  const morph = play && !reduce;

  return (
    <span
      className={`inline-flex items-baseline font-display font-extrabold leading-none tracking-[-0.035em] ${className}`}
    >
      <span className="sr-only">Loopnity</span>
      <span aria-hidden="true" className="inline-flex items-baseline whitespace-nowrap">
        L
        <svg
          viewBox={`${LOOP_BOX.x} ${LOOP_BOX.y} ${LOOP_BOX.w} ${LOOP_BOX.h}`}
          fill="none"
          focusable="false"
          className="shrink-0 overflow-visible"
          style={{
            /* x-height of the "oo" it replaces, with the aspect ratio of the cropped path. */
            height: "0.53em",
            width: `${0.53 * (LOOP_BOX.w / LOOP_BOX.h)}em`,
            /* Optical side bearings: the "L" already carries a right bearing, while
               the converging ∞ tip needs more room before the "p". */
            margin: "0 0.05em 0 0.01em",
            strokeWidth: `${weight}em`,
          }}
        >
          {morph &&
            RING.cx.map((cx) => (
              <motion.ellipse
                key={cx}
                cx={cx}
                cy={RING.cy}
                rx={RING.rx}
                ry={RING.ry}
                stroke="var(--primary)"
                vectorEffect="non-scaling-stroke"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.42, ease: MORPH_EASE, delay: 0.3 }}
              />
            ))}
          <motion.path
            d={LOOP_PATH}
            stroke="var(--primary)"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={morph ? { pathLength: 0 } : false}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, ease: MORPH_EASE, delay: 0.15 }}
          />
        </svg>
        pnity
      </span>
    </span>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return <LoopnityWordmark className={`text-[1.0625rem] ${className}`} />;
}
