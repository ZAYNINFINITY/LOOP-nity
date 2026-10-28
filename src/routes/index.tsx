import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LoopMark } from "@/components/LoopMark";
import { PosMock } from "@/components/PosMock";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { EASE, Ext, Label, LINKEDIN, Reveal } from "@/components/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LOOP-nity — Software for real-world work" },
      {
        name: "description",
        content:
          "LOOP-nity is an independent software company in Pakistan. We build our own software products and deliver practical web, mobile, desktop, and AI-assisted solutions for clients.",
      },
      { property: "og:title", content: "LOOP-nity — Software for real-world work" },
      {
        property: "og:description",
        content:
          "An independent software company building its own products and practical software for clients: web, mobile, desktop, AI integrations, and custom business systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

/* ---------- hero ---------- */

function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const intensity = useTransform(scrollY, [0, 500], [1, 0.6]);
  const loopY = useTransform(scrollY, [0, 600], [0, 24]);
  const lines = [["Software", "for"], ["real-world", "work"]];
  let k = 0;

  return (
    <section className="relative pt-16">
      <div className="shell grid min-h-[calc(100svh-4rem)] grid-rows-[auto_1fr_auto] gap-y-10 pb-10 pt-10 md:pt-14">
        <motion.div
          className="grid grid-cols-2 gap-6 border-t border-border pt-4 md:grid-cols-12"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="eyebrow md:col-span-6">Independent software company</p>
          <p className="eyebrow text-right md:col-span-6">Based in Pakistan</p>
        </motion.div>

        <div className="relative grid items-center md:grid-cols-12">
          <h1 className="hero-title relative z-10 md:col-span-11">
            {lines.map((line, li) => (
              <span key={li} className="block">
                {line.map((w) => {
                  const i = k++;
                  return (
                    <motion.span
                      key={w}
                      className="mr-[0.2em] inline-block last:mr-0"
                      initial={reduce ? false : { opacity: 0, y: "0.3em", filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.08 }}
                    >
                      {w}
                      {w === "work" && <span className="text-primary">.</span>}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[-6%] top-1/2 hidden w-[46%] -translate-y-1/2 md:block"
            style={{ y: reduce ? 0 : loopY }}
            initial={reduce ? false : { scale: 1.06, opacity: 0, filter: "blur(6px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.6, ease: EASE }}
          >
            <LoopMark draw track strokeWidth={1.5} intensity={intensity} className="w-full" />
          </motion.div>
        </div>

        <motion.div
          className="grid gap-8 border-t border-border pt-6 md:grid-cols-12 md:gap-6"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
        >
          <LoopMark draw track strokeWidth={1.25} className="w-40 md:hidden" />
          <p className="max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted-foreground md:col-span-6 lg:col-span-5">
            LOOP-nity builds its own software products and delivers practical software for clients —
            web and mobile apps, desktop and offline-first tools, AI integrations, and custom
            business systems.
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4 md:col-span-6 md:justify-end lg:col-span-7">
            <Link to="/contact" className="btn-primary group">
              Start a conversation
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <Link to="/solutions" className="text-link">
              Explore solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- products vs client work ---------- */

function TwoSides() {
  return (
    <section aria-labelledby="sides-h" className="border-t border-border bg-surface">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <Label n="01">What LOOP-nity does</Label>
          <h2 id="sides-h" className="h-section mt-8 max-w-[16ch]">
            One company, two kinds of work.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
          <Reveal className="group flex flex-col bg-background p-8 md:p-12">
            <p className="eyebrow">Owned products</p>
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight md:text-3xl">
              Software we design, build, and stand behind.
            </h3>
            <p className="mt-4 max-w-[30rem] leading-relaxed text-muted-foreground">
              LOOP-nity develops its own products for real-world work. The first is POS-it, an
              offline-first point-of-sale and inventory application, currently in development.
            </p>
            <Link
              to="/products"
              className="text-link mt-auto inline-flex w-fit items-center gap-1.5 pt-8"
            >
              See our products
              <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="group flex flex-col bg-background p-8 md:p-12">
            <p className="eyebrow">Client work</p>
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight md:text-3xl">
              Software built around your problem.
            </h3>
            <p className="mt-4 max-w-[30rem] leading-relaxed text-muted-foreground">
              For businesses, we design and build web apps, mobile apps, desktop tools, AI-assisted
              workflows, and the integrations that tie existing systems together.
            </p>
            <Link
              to="/solutions"
              className="text-link mt-auto inline-flex w-fit items-center gap-1.5 pt-8"
            >
              See what we can build for you
              <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- problems we solve ---------- */

const NEEDS = [
  ["Run a shop or counter without depending on the internet", "Offline-first desktop software"],
  ["Stop doing the same manual work every day", "AI integrations & workflow automation"],
  ["Sell online or give customers a self-service portal", "Web apps & e-commerce"],
  ["Reach people on whatever device they carry", "Cross-platform mobile apps"],
  ["Replace spreadsheets and paper with a real system", "Custom business software"],
  ["Make the tools you already use talk to each other", "APIs & integrations"],
];

function Needs() {
  return (
    <section aria-labelledby="needs-h" className="border-t border-border">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-6">
        <Reveal className="lg:col-span-4">
          <Label n="02">Client problems</Label>
          <h2 id="needs-h" className="h-section mt-8 lg:sticky lg:top-28">
            Start from the problem, not the technology.
          </h2>
        </Reveal>
        <ol className="lg:col-span-7 lg:col-start-6">
          {NEEDS.map(([need, answer], i) => (
            <li key={need} className="service-row group">
              <span className="font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[1.25rem] font-semibold leading-snug tracking-[-0.02em] md:text-[1.5rem]">
                {need}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground sm:col-start-2 md:col-start-auto">
                {answer}
              </p>
            </li>
          ))}
        </ol>
        <Reveal className="lg:col-span-7 lg:col-start-6">
          <Link to="/solutions" className="btn-outline group inline-flex items-center gap-2">
            All solutions
            <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- POS-it teaser ---------- */

function ProductTeaser() {
  return (
    <section aria-labelledby="teaser-h" className="border-t border-border bg-surface">
      <div className="shell py-20 md:py-28">
        <Reveal className="grid gap-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-12">
            <Label n="03">Our first product</Label>
          </div>
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="tag">In development</span>
              <span className="eyebrow">Desktop application</span>
            </div>
            <h2
              id="teaser-h"
              className="mt-6 font-display text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold leading-[0.85] tracking-[-0.055em]"
            >
              POS-it
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:self-end">
            <p className="max-w-[36rem] text-lg leading-relaxed text-muted-foreground">
              An offline-first point-of-sale and inventory application for day-to-day shop
              operations, built around local data and practical workflows. It is in development —
              the preview below is a concept, not a finished product.
            </p>
            <Link to="/products" className="text-link mt-6 inline-flex items-center gap-1.5">
              More about POS-it
              <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 md:mt-16">
          <figure>
            <div className="mock-stage">
              <PosMock />
            </div>
            <figcaption className="mt-4 border-t border-border pt-4">
              <span className="eyebrow">
                Concept preview · illustrative interface with sample data, not a product screenshot
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- how to start ---------- */

const START_STEPS = [
  ["Send a message", "Reach out on LinkedIn with a short description of what you need — a product idea, a process to fix, or a system to replace."],
  ["Scope it together", "We talk through the problem, constraints, and budget, and agree on what the first version should and should not include."],
  ["Get a written proposal", "You receive a clear scope, timeline, and price before any work starts. No surprises partway through."],
];

function HowToStart() {
  return (
    <section aria-labelledby="start-h" className="border-t border-border">
      <div className="shell py-20 md:py-28">
        <Reveal className="grid gap-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5">
            <Label n="04">Working together</Label>
            <h2 id="start-h" className="h-section mt-8">
              Starting is simple.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:self-end">
            <p className="max-w-[36rem] text-lg leading-relaxed text-muted-foreground">
              You do not need a specification document or a technical background. A plain-language
              description of the problem is enough to begin.
            </p>
          </div>
        </Reveal>
        <ol className="mt-14 grid sm:grid-cols-3">
          {START_STEPS.map(([t, d], i) => (
            <li key={t} className="step">
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{t}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <Reveal className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Ext href={LINKEDIN} className="btn-primary group">
            Message on LinkedIn
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Ext>
          <Link to="/approach" className="text-link">
            How we work
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <TwoSides />
        <Needs />
        <ProductTeaser />
        <HowToStart />
        <section aria-label="Scroll" className="border-t border-border">
          <div className="shell flex items-center justify-between py-6">
            <p className="eyebrow">LOOP-nity</p>
            <ArrowDown aria-hidden className="size-4 text-muted-foreground" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}