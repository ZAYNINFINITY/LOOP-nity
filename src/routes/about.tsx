import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LoopMark } from "@/components/LoopMark";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { Ext, GITHUB, LINKEDIN, PageHead, Reveal } from "@/components/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LOOP-nity" },
      {
        name: "description",
        content:
          "LOOP-nity is an independent software company based in Pakistan, founded by Zain ul Abideen — building its own products and practical software for clients.",
      },
      { property: "og:title", content: "About — LOOP-nity" },
      {
        property: "og:description",
        content:
          "An independent software company based in Pakistan, building its own products and practical software for clients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <PageHead
          eyebrow="About"
          title={
            <>
              Independent by choice<span className="text-primary">.</span>
            </>
          }
          lede="LOOP-nity is an independent software company based in Pakistan. It builds its own products and takes on client work — deliberately small, so every project gets full attention."
        />

        <section aria-labelledby="story-h" className="shell grid gap-12 py-16 md:grid-cols-12 md:gap-6 md:py-24">
          <Reveal className="md:col-span-7">
            <h2 id="story-h" className="eyebrow">The company</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/90">
              <p>
                LOOP-nity was founded by Zain ul Abideen with a simple position: most software fails
                not because the idea was wrong, but because it was built in a hurry, for a demo
                instead of a workload. This company exists to build the other kind.
              </p>
              <p className="text-muted-foreground">
                The name is the method. Software is a loop — build, refine, repeat — and the
                infinity mark in the logo is that loop drawn as one continuous line. The work is
                never “done”; it gets steadily better.
              </p>
              <p className="text-muted-foreground">
                LOOP-nity is at an early stage and says so plainly. Its first product, POS-it, is in
                development, and its client portfolio is just beginning. What it offers instead of a
                long history is direct access to the person doing the work, honest scoping, and
                engineering that is meant to last.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <div className="border border-border bg-surface p-8">
              <LoopMark draw track strokeWidth={2} className="w-full" />
              <dl className="mt-8 space-y-4 text-sm">
                {[
                  ["Name", "LOOP-nity"],
                  ["Type", "Independent software company"],
                  ["Based in", "Pakistan"],
                  ["Founder", "Zain ul Abideen"],
                  ["Focus", "Products & client software"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                    <dt className="eyebrow">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="founder-h" className="border-t border-border bg-surface">
          <div className="shell grid gap-8 py-16 md:grid-cols-12 md:gap-6 md:py-24">
            <Reveal className="md:col-span-5">
              <h2 id="founder-h" className="h-section">
                The person behind it.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-6 md:col-start-7">
              <p className="max-w-[36rem] text-lg leading-relaxed text-muted-foreground">
                When you work with LOOP-nity, you work directly with its founder — the same person
                who scopes the project, designs the interface, and writes the code. No account
                managers, no hand-offs, no telephone game.
              </p>
              <div className="mt-8">
                <Ext href={LINKEDIN} className="link-row group">
                  <span>Message on LinkedIn</span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </Ext>
                <Ext href={GITHUB} className="link-row group">
                  <span>View projects on GitHub</span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </Ext>
              </div>
              <Link to="/contact" className="btn-primary group mt-10">
                Get in touch
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