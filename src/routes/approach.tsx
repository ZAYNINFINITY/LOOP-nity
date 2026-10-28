import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { PageHead, Reveal } from "@/components/ui";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Approach — LOOP-nity" },
      {
        name: "description",
        content:
          "How LOOP-nity works: discovery and scope, design, build, then test and iterate — with honest estimates and plain communication throughout.",
      },
      { property: "og:title", content: "Approach — LOOP-nity" },
      {
        property: "og:description",
        content:
          "A steady loop, not a straight line: discovery and scope, design, build, test and iterate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Approach,
});

const STEPS = [
  [
    "Discover & scope",
    "We start with the problem, not a feature list. What is the task, who does it, what does it cost today? The output is a written scope: what the first version includes, what it deliberately leaves out, and what it will cost.",
  ],
  [
    "Design",
    "Screens and flows come before code. You see and react to the actual interface early — layout, wording, and the path a user takes — so changes happen on paper, not in a finished build.",
  ],
  [
    "Build",
    "Development in small, visible increments. You see working software regularly instead of waiting months for a single reveal, and priorities can adjust as real pieces land.",
  ],
  [
    "Test & iterate",
    "Real use exposes what planning cannot. We test against the actual workflow, fix what breaks, refine what is slow or confusing, and loop back — build, refine, repeat.",
  ],
];

const PRINCIPLES = [
  ["Honest estimates", "If something is hard or uncertain, you hear that before work starts, not after a deadline passes."],
  ["Small first versions", "A focused first release that solves the core problem beats a large one that solves everything poorly."],
  ["Plain communication", "No jargon wall. You always know what is done, what is next, and what it costs."],
  ["Software that lasts", "Built to be maintained and extended after the first release, not just to survive a demo."],
];

function Approach() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <PageHead
          eyebrow="Approach"
          title={
            <>
              A steady loop, not a straight line<span className="text-primary">.</span>
            </>
          }
          lede="Good software is rarely built in one pass. LOOP-nity works in a deliberate cycle — understand, design, build, test, refine — so each version is better than the last."
        />

        <section aria-label="Process" className="shell py-16 md:py-24">
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="step">
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-5 font-display text-xl font-semibold tracking-tight">{t}</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="principles-h" className="border-t border-border bg-surface">
          <div className="shell py-16 md:py-24">
            <Reveal>
              <h2 id="principles-h" className="h-section max-w-[18ch]">
                Principles that hold on every project.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
              {PRINCIPLES.map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.06} className="bg-background p-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link to="/contact" className="btn-primary group">
                Start with a conversation
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <Link to="/solutions" className="text-link">
                What we can build
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}