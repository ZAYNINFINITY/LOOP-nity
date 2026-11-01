import { createFileRoute } from "@tanstack/react-router";

import { DocPage, DocSection } from "@/components/DocPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: `Security — ${SITE.name}` },
      {
        name: "description",
        content:
          "How Loopnity handles security on this site and in client work, what we do not claim, and how to report a vulnerability responsibly.",
      },
      { property: "og:title", content: `Security — ${SITE.name}` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Security,
});

function Security() {
  return (
    <DocPage
      eyebrow="Security"
      title={
        <>
          Security, stated honestly<span className="text-primary">.</span>
        </>
      }
      lede="What is actually in place, what is not, and how to report a problem. No certifications we do not hold."
    >
      <div className="space-y-8">
        <DocSection n={1} title="What this site does">
          <ul>
            <li>
              <strong>HTTPS only</strong>, with HTTP Strict Transport Security enabled so the
              browser refuses to downgrade.
            </li>
            <li>
              <strong>No trackers, no advertising scripts, no session recording.</strong> Fewer
              third-party scripts means fewer ways for something to go wrong on a visitor's
              machine.
            </li>
            <li>
              <strong>Minimal data collection.</strong> There is no account system, no payment
              flow, and no database of visitors on this site.
            </li>
            <li>
              <strong>Dependencies kept current</strong>, and reviewed before being added rather
              than installed because a tutorial used them.
            </li>
          </ul>
        </DocSection>

        <DocSection n={2} title="What we do not claim">
          <p>
            {SITE.name} does <strong>not</strong> hold SOC 2, ISO 27001, or any other certification.
            Claiming compliance we have not been audited for would be a lie, and it is a common one.
          </p>
          <p>
            This site also does not set a Content Security Policy that would break legitimate use,
            purely to make a scanner report look greener. Where a hardening step is missing, it is
            listed here rather than hidden.
          </p>
        </DocSection>

        <DocSection n={3} title="How security is handled in client work">
          <p>
            For projects, the approach is the unglamorous one that actually prevents breaches:
          </p>
          <ul>
            <li>
              <strong>Input is validated on the server</strong>, never trusted from the browser.
            </li>
            <li>
              <strong>Authorisation is checked per request</strong> — being logged in is not the
              same as being allowed.
            </li>
            <li>
              <strong>Secrets live in environment configuration</strong>, never in the repository
              and never in client-side code.
            </li>
            <li>
              <strong>Rate limits and abuse controls</strong> on anything that writes data or sends
              email.
            </li>
            <li>
              <strong>Data handling is agreed in writing</strong> before a project starts — what is
              stored, where, for how long, and who can reach it.
            </li>
          </ul>
          <p>
            Where a project handles personal, financial or health data, the extra obligations are
            discussed before the first line of code, not after launch.
          </p>
        </DocSection>

        <DocSection n={4} title="Reporting a vulnerability">
          <p>
            If you believe you have found a security issue in this site or in a {SITE.name} product,
            email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with the subject line{" "}
            <strong>Security</strong>, including what you found and how to reproduce it.
          </p>
          <p>What you can expect:</p>
          <ul>
            <li>an acknowledgement within 3 working days,</li>
            <li>an honest assessment of severity, including if we think it is not a real issue,</li>
            <li>credit on this page if you want it, once a fix is out.</li>
          </ul>
          <p>
            Please do not test against real user data, run automated scanners that degrade service,
            or access data that is not yours. Report it and stop — that is enough.
          </p>
        </DocSection>

        <DocSection n={5} title="Out of scope">
          <p>
            Missing email authentication records on a domain we do not yet control, reports produced
            entirely by an automated scanner with no demonstrated impact, and social engineering of
            individuals are not in scope.
          </p>
        </DocSection>
      </div>
    </DocPage>
  );
}
