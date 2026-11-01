import { createFileRoute } from "@tanstack/react-router";

import { DocPage } from "@/components/DocPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ — ${SITE.name}` },
      {
        name: "description",
        content:
          "Straight answers about how Loopnity works: who you deal with, how projects are priced, who owns the code, and what is actually shipped today.",
      },
      { property: "og:title", content: `FAQ — ${SITE.name}` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Faq,
});

/**
 * Questions are answered in the order a serious buyer asks them: who am I
 * dealing with, can you actually do it, what does it cost, what do I own, and
 * what happens if it goes wrong. Answering the uncomfortable ones is what
 * separates a studio from a brochure.
 */
const FAQ = [
  {
    q: "Is Loopnity a company or one person?",
    a: "Both, stated plainly. Loopnity is an independent studio founded and run by Zain Ul Abideen. There is no account manager and no delivery team behind the curtain — the person who scopes your project also designs it and writes the code. That is a deliberate choice at this size, and it is the honest answer rather than an org chart drawn for a pitch.",
  },
  {
    q: "What does Loopnity actually do?",
    a: "Two things. First, it builds its own products — POS-it, an offline-first point-of-sale and inventory application, is in development. Second, it takes on client work: web applications, cross-platform mobile apps, desktop tools, AI-assisted workflows, and the integrations that connect systems that were never designed to talk to each other.",
  },
  {
    q: "Can I use POS-it today?",
    a: "No. It is in development and it is labelled that way everywhere it appears. The interface previews on this site are concepts rendered with sample data, not screenshots of a finished product. When there is something to install, it will be on the products page with a real download.",
  },
  {
    q: "How is work priced?",
    a: "Fixed scope, fixed price, agreed in writing before any work begins. You get a written proposal covering what is included, what is deliberately excluded, the timeline, and the price. If the scope changes mid-project, the change is quoted separately — it is never quietly absorbed into the invoice.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope, and the proposal states a specific timeline rather than a range designed to sound safe. Small internal tools are typically weeks, not months. Anything with authentication, payments, or a migration of existing data takes longer, and the proposal says why.",
  },
  {
    q: "Who owns the code?",
    a: "You do, once the final invoice is paid. Ownership transfer is written into the project agreement, along with the repositories, deployment access, and documentation. No lock-in, no licence fee to keep using your own software.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. Work is delivered remotely and the studio operates in a timezone that overlaps with Europe, the Gulf, and a good part of the US working day. Calls are scheduled in your timezone, not ours.",
  },
  {
    q: "What kind of AI work do you do?",
    a: "Applied work, not research. That means things like document extraction, classification, assistants grounded in your own data, and automation of repetitive back-office steps. If a problem does not need a model, we say so and build the simpler thing — a model is a cost and a liability, not a feature.",
  },
  {
    q: "Do you charge for internships?",
    a: "No, and we never will. Charging a student for the privilege of working is a business model, not a training programme. See the careers page for what we actually offer.",
  },
  {
    q: "Can I see the work before hiring you?",
    a: "Yes, and you should. The work page lists what exists with its real stage, and the GitHub account is public. The site you are reading is itself a sample — its identity, layout, and code were built in-house.",
  },
  {
    q: "What if my project is not a fit?",
    a: "You will be told directly, along with where to look instead. Turning down work that would be badly done is cheaper for both of us than taking it and failing.",
  },
];

function Faq() {
  return (
    <DocPage
      eyebrow="FAQ"
      title={
        <>
          Questions worth asking<span className="text-primary">.</span>
        </>
      }
      lede="The answers below are the ones a serious buyer asks, including the uncomfortable ones about size, price and ownership."
    >
      <div className="border-t border-border">
        {FAQ.map((item, i) => (
          <details key={item.q} className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-baseline gap-5 py-6 [&::-webkit-details-marker]:hidden">
              <span className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-display text-lg font-semibold tracking-tight md:text-xl">
                {item.q}
              </span>
              <span
                aria-hidden
                className="relative mt-1 grid size-4 shrink-0 place-items-center text-muted-foreground transition-transform duration-300 group-open:rotate-45"
              >
                <span className="absolute h-px w-4 bg-current" />
                <span className="absolute h-4 w-px bg-current" />
              </span>
            </summary>
            <p className="max-w-[46rem] pb-7 pl-9 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
        Something not answered here? Ask directly —{" "}
        <a href={`mailto:${SITE.email}`} className="text-primary underline underline-offset-4">
          {SITE.email}
        </a>
        .
      </p>
    </DocPage>
  );
}
