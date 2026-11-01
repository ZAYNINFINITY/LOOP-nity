import { createFileRoute, Link } from "@tanstack/react-router";

import { DocPage, DocSection } from "@/components/DocPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms of Service — ${SITE.name}` },
      {
        name: "description",
        content: `The terms that apply to using the ${SITE.name} website, and how they relate to client project agreements.`,
      },
      { property: "og:title", content: `Terms of Service — ${SITE.name}` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <DocPage
      eyebrow="Legal"
      title={
        <>
          Terms of Service<span className="text-primary">.</span>
        </>
      }
      lede="These terms cover this website. They do not cover client projects — those are governed by a signed agreement."
      updated="2026-10-31"
    >
      <div className="space-y-8">
        <DocSection n={1} title="Scope">
          <p>
            These terms apply to your use of this website, operated by {SITE.legalName}{" "}
            ({SITE.name}). By using the site you accept them. If you do not, please stop using the
            site.
          </p>
          <p>
            <strong>These terms do not govern client work.</strong> Any project we take on is
            governed by a separate written agreement covering scope, price, timeline, ownership and
            liability. Where the two documents conflict, the project agreement wins.
          </p>
        </DocSection>

        <DocSection n={2} title="What this site is">
          <p>
            This site describes what we do and shows work in progress. Product pages describe
            software that may still be in development, and each one is labelled with its actual
            stage. Nothing on this site is an offer capable of acceptance, and no description of an
            unshipped product is a commitment to ship it.
          </p>
        </DocSection>

        <DocSection n={3} title="Accuracy">
          <p>
            We try to keep everything accurate and current, but the site is provided as-is without
            warranty of any kind. Content may change without notice. If something on the site is
            wrong, tell us and we will fix it.
          </p>
        </DocSection>

        <DocSection n={4} title="Intellectual property">
          <p>
            The design, text, and code of this website belong to {SITE.legalName}, unless stated
            otherwise. You may read it, link to it, and quote short passages with attribution. You
            may not republish it wholesale or present it as your own.
          </p>
          <p>
            Source code published in our public repositories is licensed under the terms stated in
            each repository. Where a repository states no licence, all rights are reserved — a
            public repository is not automatically an open-source one.
          </p>
          <p>
            Ownership of software built for a client transfers on final payment, as set out in the
            project agreement.
          </p>
        </DocSection>

        <DocSection n={5} title="Acceptable use">
          <p>Do not use this site to:</p>
          <ul>
            <li>attempt to gain unauthorised access to any system,</li>
            <li>send automated bulk traffic or scrape it in a way that degrades service,</li>
            <li>submit content that is unlawful, or that you do not have the right to submit.</li>
          </ul>
          <p>
            If you are researching security, read the{" "}
            <Link to="/security" className="text-primary underline underline-offset-4">
              security page
            </Link>{" "}
            first — it explains how to report a problem without either of us wasting time.
          </p>
        </DocSection>

        <DocSection n={6} title="Limitation of liability">
          <p>
            To the extent permitted by law, {SITE.legalName} is not liable for indirect or
            consequential loss arising from use of this website, including lost profits or lost
            data. Nothing here limits liability that cannot lawfully be limited.
          </p>
        </DocSection>

        <DocSection n={7} title="Governing law">
          <p>
            These terms are governed by the laws of {SITE.location}. Disputes will be handled by the
            courts of that jurisdiction.
          </p>
        </DocSection>

        <DocSection n={8} title="Contact">
          <p>
            Questions about these terms: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </DocSection>
      </div>
    </DocPage>
  );
}
