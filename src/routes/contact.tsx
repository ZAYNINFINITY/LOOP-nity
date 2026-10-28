import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { Ext, GITHUB, LINKEDIN, PageHead, Reveal } from "@/components/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LOOP-nity" },
      {
        name: "description",
        content:
          "Start a project with LOOP-nity. The direct route is a message on LinkedIn — describe the problem in plain language and get a personal reply.",
      },
      { property: "og:title", content: "Contact — LOOP-nity" },
      {
        property: "og:description",
        content:
          "The direct route to LOOP-nity is a message on LinkedIn. Describe the problem in plain language and get a personal reply.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const INCLUDE = [
  "What you need in one or two plain sentences — a product idea, a process to fix, or a system to replace.",
  "Who it is for: your customers, your staff, or your own business.",
  "Any constraints that matter: timeline, budget range, or systems it must work with.",
];

function Contact() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <PageHead
          eyebrow="Contact"
          title={
            <>
              Tell us what you need built<span className="text-primary">.</span>
            </>
          }
          lede="The direct route is a message on LinkedIn. It goes to the person who will actually do the work, and every message gets a personal reply."
        />

        <section aria-label="Contact routes" className="shell py-16 md:py-24">
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            <Reveal className="flex flex-col bg-background p-8 md:p-12">
              <p className="eyebrow">Primary route</p>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-tight md:text-3xl">
                LinkedIn
              </h2>
              <p className="mt-4 max-w-[30rem] leading-relaxed text-muted-foreground">
                The fastest way to start. Send a connection request or a message with a short
                description of what you need — no formal brief required.
              </p>
              <Ext href={LINKEDIN} className="btn-primary group mt-auto w-fit pt-0">
                <span className="mt-8 inline-flex items-center gap-3">
                  Message on LinkedIn
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Ext>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col bg-background p-8 md:p-12">
              <p className="eyebrow">See the work first</p>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-tight md:text-3xl">
                GitHub
              </h2>
              <p className="mt-4 max-w-[30rem] leading-relaxed text-muted-foreground">
                Prefer to judge the code before the conversation? Repositories, prototypes, and
                experiments are public.
              </p>
              <Ext href={GITHUB} className="btn-outline group mt-auto w-fit">
                <span className="mt-8 inline-flex items-center gap-2">
                  View projects on GitHub
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Ext>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="include-h" className="border-t border-border bg-surface">
          <div className="shell grid gap-10 py-16 md:grid-cols-12 md:gap-6 md:py-24">
            <Reveal className="md:col-span-5">
              <h2 id="include-h" className="h-section">
                What to include in your first message.
              </h2>
            </Reveal>
            <div className="md:col-span-6 md:col-start-7">
              <ol>
                {INCLUDE.map((item, i) => (
                  <Reveal key={item} delay={i * 0.06}>
                    <li className="flex gap-5 border-b border-border py-6 first:border-t">
                      <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                      <p className="leading-relaxed text-foreground/90">{item}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
              <Reveal delay={0.2}>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  If the project is not a fit, you will hear that honestly — along with a suggestion
                  of where to look instead.
                </p>
                <Link to="/approach" className="text-link mt-6 inline-block">
                  What happens after you write
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}