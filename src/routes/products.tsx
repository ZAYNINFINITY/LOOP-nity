import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PosMock } from "@/components/PosMock";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { PageHead, Reveal } from "@/components/ui";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — LOOP-nity" },
      {
        name: "description",
        content:
          "Software products owned and built by LOOP-nity. The first is POS-it, an offline-first point-of-sale and inventory desktop application, currently in development.",
      },
      { property: "og:title", content: "Products — LOOP-nity" },
      {
        property: "og:description",
        content:
          "POS-it is LOOP-nity's first product: an offline-first point-of-sale and inventory application, currently in development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

const GOALS = [
  ["Offline-first", "Sales and inventory keep working with no connection. Data lives on the machine, not in someone else's cloud."],
  ["Fast at the counter", "Search, scan, and complete a sale in as few actions as possible. The interface is built for speed, not decoration."],
  ["Practical inventory", "Stock levels update as sales happen, so the record matches the shelf without a separate end-of-day routine."],
  ["Plain records", "Sales history and reports a shop owner can actually read, export, and act on."],
];

function Products() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <PageHead
          eyebrow="Products"
          title={
            <>
              Products we own and build<span className="text-primary">.</span>
            </>
          }
          lede="Alongside client work, LOOP-nity develops its own software products. They are built slowly and honestly — announced when they exist, not before."
        />

        <section aria-labelledby="posit-h" className="shell py-16 md:py-24">
          <Reveal className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="tag">In development</span>
                <span className="eyebrow">Desktop application</span>
              </div>
              <h2
                id="posit-h"
                className="mt-6 font-display text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold leading-[0.85] tracking-[-0.055em]"
              >
                POS-it
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:self-end">
              <p className="max-w-[36rem] text-lg leading-relaxed text-muted-foreground">
                POS-it is an offline-first point-of-sale and inventory application for day-to-day
                shop operations. It is actively being designed and built. There is no launch date
                yet — this page will change when there is.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 md:mt-16">
            <figure>
              <div className="mock-stage">
                <PosMock />
              </div>
              <figcaption className="mt-4 grid gap-3 border-t border-border pt-4 sm:grid-cols-[1fr_auto]">
                <span className="eyebrow">
                  Concept preview · illustrative interface with sample data, not a product screenshot
                </span>
                <dl className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                  {[
                    ["Type", "Point of sale & inventory"],
                    ["Data", "Offline-first, local"],
                    ["Status", "In development"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {GOALS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06} className="bg-background p-7">
                <h3 className="font-display text-lg font-semibold tracking-tight">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="next-h" className="border-t border-border bg-surface">
          <div className="shell grid gap-8 py-16 md:grid-cols-12 md:gap-6 md:py-24">
            <Reveal className="md:col-span-5">
              <h2 id="next-h" className="h-section">
                What comes next.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-6 md:col-start-7">
              <p className="max-w-[36rem] text-lg leading-relaxed text-muted-foreground">
                POS-it is the first product, not the only one planned. Future products will follow
                the same rule: built for a real, specific job, and shown here only when there is
                something real to show.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link to="/solutions" className="btn-outline group inline-flex items-center gap-2">
                  Need something built for you?
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link to="/work" className="text-link">
                  See our work
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}