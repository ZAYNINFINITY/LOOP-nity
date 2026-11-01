import { createFileRoute, Link } from "@tanstack/react-router";

import { DocPage, DocSection } from "@/components/DocPage";
import { Ext } from "@/components/ui";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: `Careers — ${SITE.name}` },
      {
        name: "description",
        content:
          "Loopnity does not charge for internships and does not run unpaid work schemes. What we look for, and how to get in touch.",
      },
      { property: "og:title", content: `Careers — ${SITE.name}` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <DocPage
      eyebrow="Careers"
      title={
        <>
          No paid internships<span className="text-primary">.</span>
        </>
      }
      lede="Loopnity is not hiring paid roles yet. This page exists so the position is stated openly instead of discovered later."
    >
      <div className="space-y-8">
        <DocSection n={1} title="Where we are">
          <p>
            {SITE.name} is a young studio with one person in it. There is no revenue to fund a
            salary yet, so there is no job to offer. Saying that plainly is more useful to you than
            a "we are always looking for talent" paragraph.
          </p>
        </DocSection>

        <DocSection n={2} title="We will not charge you to work here">
          <p>
            Some software houses in this market charge students a fee for "enrolment" or
            "internship", then use the intake to staff client projects. That model is a business,
            not a training programme, and it transfers the cost of doing business onto the person
            with the least money.
          </p>
          <p>
            <strong>{SITE.name} does not charge for internships, and will not start.</strong> If a
            placement here ever exists, it is paid or it is not offered.
          </p>
        </DocSection>

        <DocSection n={3} title="What we look for">
          <p>When there is a role, it will be for someone who can show work rather than describe it:</p>
          <ul>
            <li>
              <strong>Something you finished.</strong> A small deployed project beats a large
              abandoned one. It does not need users — it needs to run.
            </li>
            <li>
              <strong>Evidence you can debug.</strong> The ability to find why something broke
              matters more than knowing a framework's API surface.
            </li>
            <li>
              <strong>Willingness to write things down.</strong> A clear commit message and a short
              README are strong signals about how someone will work with others.
            </li>
            <li>
              <strong>Curiosity about the problem.</strong> Understanding why the software exists is
              what separates engineering from typing.
            </li>
          </ul>
        </DocSection>

        <DocSection n={4} title="If you are a student now">
          <p>
            Do not wait for an opening. Build something small and finish it, then write down what
            you learned. That artefact is worth more in an interview than any certificate, and it is
            the thing that gets remembered.
          </p>
          <p>
            If you want a second pair of eyes on something you built, send a link. Feedback is free
            and it does not come with an invoice.
          </p>
        </DocSection>

        <DocSection n={5} title="Getting in touch">
          <p>
            Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with a link to something you
            built. If there is no role, you will still get a reply.
          </p>
        </DocSection>

        <div className="border-t border-border pt-8">
          <Link to="/approach" className="text-link">
            How we work
          </Link>
          <span className="mx-4 text-muted-foreground">·</span>
          <Ext href={SITE.socials.github} className="text-link">
            Code on GitHub
          </Ext>
        </div>
      </div>
    </DocPage>
  );
}
