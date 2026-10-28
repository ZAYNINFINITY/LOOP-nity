import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PosMock } from "@/components/PosMock";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { Ext, GITHUB, PageHead, Reveal } from "@/components/ui";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — LOOP-nity" },
      {
        name: "description",
        content:
          "Genuine work from LOOP-nity: the POS-it product concept in development, this website designed and built in-house, and open code on GitHub.",
      },
      { property: "og:title", content: "Work — LOOP-nity" },
      {
        property: "og:description",
        content:
          "What LOOP-nity has actually built so far — shown honestly, including its current stage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <PageHead
          eyebrow="Work"
          title={
            <>
              What we have built so far<span className="text-primary">.</span>
            </>
          }
          lede="LOOP-nity is a young company, so this page is short on purpose. Everything here is real, labeled with its actual stage, and nothing is borrowed from a client list that does not exist yet."
        />

        {/* POS-it */}
        <section aria-labelledby="work-posit-h" className="shell py-16 md:py-24">
          <Reveal className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="tag">In development</span>
                <span className="eyebrow">Own product</span>
              </div>
              <h2 id="work-posit-h" className="mt-6 font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
                POS-it
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:self-end">
              <p className="max-w-[36rem] leading-relaxed text-muted-foreground">
                An offline-first point-of-sale and inventory desktop application, currently being
                designed and built. The preview below is an illustrative concept with sample data —
                it shows the direction of the interface, not a finished product.
              </p>
              <Link to="/products" className="text-link mt-5 inline-flex items-center gap-1.5">
                Product details
                <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <div className="mock-stage">
              <PosMock />
            </div>
          </Reveal>
        </section>

        {/* This site + GitHub */}
        <section aria-label="More work" className="border-t border-border bg-surface">
          <div className="shell grid gap-px py-16 md:grid-cols-2 md:gap-px md:py-24">
            <Reveal className="border border-border bg-background p-8 md:border-0 md:p-12">
              <p className="eyebrow">Designed & built in-house</p>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-tight md:text-3xl">
                This website.
              </h2>
              <p className="mt-4 max-w-[30rem] leading-relaxed text-muted-foreground">
                The site you are reading is LOOP-nity's own work: the identity, the loop mark, the
                layout, and the code. It is a small but honest example of how we approach interface
                design and front-end engineering.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="border border-border bg-background p-8 md:border-0 md:p-12">
              <p className="eyebrow">Code in the open</p>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-tight md:text-3xl">
                Experiments & repositories.
              </h2>
              <p className="mt-4 max-w-[30rem] leading-relaxed text-muted-foreground">
                Smaller projects, prototypes, and learning-in-public code live on GitHub. It is the
                most unfiltered view of how the work actually looks.
              </p>
              <Ext href={GITHUB} className="text-link mt-6 inline-flex items-center gap-1.5">
                View projects on GitHub
                <ArrowUpRight aria-hidden className="size-4" />
              </Ext>
            </Reveal>
          </div>
        </section>

        {/* Honest note + CTA */}
        <section aria-labelledby="honest-h" className="border-t border-border">
          <div className="shell grid gap-8 py-16 md:grid-cols-12 md:gap-6 md:py-24">
            <Reveal className="md:col-span-5">
              <h2 id="honest-h" className="h-section">
                Why this page is short.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-6 md:col-start-7">
              <p className="max-w-[36rem] text-lg leading-relaxed text-muted-foreground">
                We would rather show two real things than ten invented ones. As client work is
                delivered and products ship, they will appear here — with permission, and with
                honest descriptions of what was done.
              </p>
              <Link to="/contact" className="btn-primary group mt-8">
                Become part of this page
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}