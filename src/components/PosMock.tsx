import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/components/ui";

const PRODUCTS = [
  ["Basmati rice 5 kg", "1,850"],
  ["Cooking oil 1 L", "560"],
  ["Black tea 475 g", "1,120"],
  ["Sugar 1 kg", "160"],
  ["Lentils 1 kg", "390"],
  ["Washing powder", "640"],
];
const CART = [
  ["Basmati rice 5 kg", 1, "1,850"],
  ["Black tea 475 g", 1, "1,120"],
  ["Sugar 1 kg", 2, "320"],
] as const;

/**
 * Illustrative concept preview of the POS-it interface, built in code with
 * sample data. Not a product screenshot.
 */
export function PosMock() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="mock select-none">
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-2.5 rounded-full bg-border" />
          ))}
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">POS-it</span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" /> Offline · local data
        </span>
      </div>

      <div className="grid sm:grid-cols-[1fr_15rem] lg:grid-cols-[8.5rem_1fr_17rem]">
        {/* sidebar */}
        <div className="hidden border-r border-border bg-surface p-3 lg:block">
          {["Sale", "Inventory", "Records", "Settings"].map((s, i) => (
            <div
              key={s}
              className={`mb-0.5 px-2.5 py-2 text-[12px] ${
                i === 0
                  ? "border-l-2 border-primary bg-background text-foreground"
                  : "border-l-2 border-transparent text-muted-foreground"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* products */}
        <div className="hidden p-4 sm:block">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex h-8 flex-1 items-center gap-2 border border-border px-2.5 text-[12px] text-muted-foreground">
              Search or scan item
              <span className="h-3.5 w-px bg-primary animate-blink" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">All items</span>
          </div>
          <div className="grid grid-cols-2 gap-px border border-border bg-border xl:grid-cols-3">
            {PRODUCTS.map(([n, p], i) => (
              <div
                key={n}
                className={`bg-background p-3 ${i === 2 ? "outline outline-1 -outline-offset-1 outline-primary" : ""}`}
              >
                <div className="mb-6 h-1 w-6 bg-surface-2" />
                <p className="truncate text-[12px] text-foreground">{n}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">Rs {p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* cart */}
        <div className="flex flex-col border-border bg-surface p-4 sm:border-l">
          <div className="flex items-baseline justify-between">
            <span className="text-[12px] font-semibold">Current sale</span>
            <span className="font-mono text-[10px] text-muted-foreground">3 items</span>
          </div>
          <div className="mt-3 border-t border-border">
            {CART.map(([n, q, p], i) => (
              <motion.div
                key={n}
                initial={reduce ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.4 + i * 0.15 }}
                className={`grid grid-cols-[1fr_auto] gap-x-3 border-b border-border py-2.5 text-[12px] ${
                  i === 1 ? "-mx-4 border-l-2 border-l-primary px-[14px]" : ""
                }`}
              >
                <span className="truncate">{n}</span>
                <span className="font-mono">{p}</span>
                <span className="font-mono text-[10px] text-muted-foreground">Qty {q}</span>
              </motion.div>
            ))}
          </div>
          <dl className="mt-auto space-y-1.5 pt-6 font-mono text-[11px] text-muted-foreground">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>3,290</dd>
            </div>
            <div className="flex justify-between">
              <dt>Discount</dt>
              <dd>0</dd>
            </div>
            <div className="flex items-baseline justify-between border-t border-border pt-3 text-foreground">
              <dt className="text-[11px] uppercase tracking-wider">Total</dt>
              <dd className="font-display text-2xl font-bold tracking-tight">Rs 3,290</dd>
            </div>
          </dl>
          <div className="mt-4 bg-primary py-2.5 text-center text-[12px] font-semibold text-primary-foreground">
            Complete sale
          </div>
        </div>
      </div>
    </div>
  );
}