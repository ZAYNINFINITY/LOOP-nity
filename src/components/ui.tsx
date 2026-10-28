import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const LINKEDIN = "https://www.linkedin.com/in/zain-ul-abideen-429735231/";
export const GITHUB = "https://github.com/ZAYNINFINITY";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Ext({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function Label({ n, children }: { n: string; children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="text-primary">{n}</span>
      <span aria-hidden className="h-px w-6 bg-border" />
      {children}
    </p>
  );
}

/** Shared page header for interior routes. */
export function PageHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
}) {
  const reduce = useReducedMotion();
  return (
    <header className="border-b border-border pt-16">
      <div className="shell pb-14 pt-16 md:pb-20 md:pt-24">
        <motion.p
          className="eyebrow"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-6 max-w-[18ch] font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em]"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-8 max-w-[40rem] text-lg leading-relaxed text-muted-foreground"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
        >
          {lede}
        </motion.p>
      </div>
    </header>
  );
}