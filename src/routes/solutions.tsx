import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { PageHead, Reveal } from "@/components/ui";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — LOOP-nity" },
      {
        name: "description",
        content:
          "Software solutions organized by client need: SaaS products, AI integrations and workflow automation, web apps and e-commerce, mobile, desktop and offline-first software, and APIs and custom business systems.",
      },
      { property: "og:title", content: "Solutions — LOOP-nity" },
      {
        property: "og:description",
        content:
          "Practical software for client problems: products, automation, web and mobile apps, offline-first desktop tools, and system integrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Solutions,
});

const SOLUTIONS = [
  {
    title: "SaaS & software products",
    need: "You have a product idea and need it designed, built, and shipped — not just prototyped.",
    build:
      "We take products from a first workable version to something complete: architecture, interface, billing-ready structure, and a codebase that can grow after launch.",
    examples: ["Subscription web products", "Internal tools turned into products", "MVPs with a real foundation"],
  },
  {
    title: "AI integrations & workflow automation",
    need: "Your team repeats the same manual steps every day, or your software should do more of the thinking.",
    build:
      "We integrate AI where it genuinely saves time — drafting, classifying, extracting, summarizing — and automate the workflows around it, with a human checkpoint where one is needed.",
    examples: ["Document and data processing", "Assisted customer replies", "Automated back-office routines"],
  },
  {
    title: "Web apps, e-commerce & dashboards",
    need: "You need to sell online, give customers a portal, or see your business numbers in one place.",
    build:
      "Browser-based applications built around real workflows: storefronts, customer portals, admin dashboards, and browser extensions that put your tool where people already work.",
    examples: ["Storefronts & ordering systems", "Reporting dashboards", "Browser extensions"],
  },
  {
    title: "Cross-platform mobile apps",
    need: "Your customers or staff need your service in their pocket, on any device.",
    build:
      "One codebase, both platforms. We build mobile apps that share logic with your web systems instead of duplicating them.",
    examples: ["Customer-facing apps", "Field and staff tools", "Companions to existing systems"],
  },
  {
    title: "Desktop & offline-first software",
    need: "Your work cannot stop when the internet does — at a counter, in a warehouse, on the road.",
    build:
      "Desktop applications that keep working offline with local data, and sync when a connection is available. This is the same approach behind our own product, POS-it.",
    examples: ["Point-of-sale & inventory", "Offline data collection", "Tools for low-connectivity sites"],
  },
  {
    title: "APIs, integrations & custom business systems",
    need: "Your tools do not talk to each other, or your business runs on spreadsheets and memory.",
    build:
      "We connect the systems you already use, build the APIs your partners need, and replace fragile manual processes with software shaped around how your business actually operates.",
    examples: ["Payment & courier integrations", "Data sync between systems", "Custom operational systems"],
  },
];

function Solutions() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <PageHead
          eyebrow="Solutions"
          title={
            <>
              Software shaped around the problem<span className="text-primary">.</span>
            </>
          }
          lede="Every engagement starts from what you need to achieve, not from a technology list. These are the kinds of problems LOOP-nity takes on — if yours is not here, ask anyway."
        />
        <section aria-label="Solution areas" className="shell py-16 md:py-24">
          <ol>
            {SOLUTIONS.map((s, i) => (
              <li key={s.title}>
                <Reveal
                  className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-6 md:py-14"
                  delay={0.05}
                >
                  <div className="flex items-baseline gap-4 md:col-span-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl font-bold leading-tight tracking-[-0.025em] md:text-[1.75rem]">
                      {s.title}
                    </h2>
                  </div>
                  <div className="md:col-span-4">
                    <p className="eyebrow mb-3">The problem</p>
                    <p className="leading-relaxed text-muted-foreground">{s.need}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="eyebrow mb-3">What we build</p>
                    <p className="leading-relaxed text-foreground/90">{s.build}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.examples.map((e) => (
                        <li
                          key={e}
                          className="border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal className="flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-border pt-12">
            <Link to="/contact" className="btn-primary group">
              Discuss your project
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <Link to="/approach" className="text-link">
              How an engagement works
            </Link>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}