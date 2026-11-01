import { createFileRoute } from "@tanstack/react-router";

import { DocPage, DocSection } from "@/components/DocPage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${SITE.name}` },
      {
        name: "description",
        content: `What ${SITE.name} collects, why, where it is stored, and how to have it deleted.`,
      },
      { property: "og:title", content: `Privacy Policy — ${SITE.name}` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <DocPage
      eyebrow="Legal"
      title={
        <>
          Privacy Policy<span className="text-primary">.</span>
        </>
      }
      lede="This site collects as little as possible. Here is exactly what that means, in plain language."
      updated="2026-10-31"
    >
      <div className="space-y-8">
        <DocSection n={1} title="Who is responsible">
          <p>
            {SITE.legalName} ({SITE.name}) is an independent software studio operating from{" "}
            {SITE.location}. For any question about this policy or your data, write to{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </DocSection>

        <DocSection n={2} title="What this website collects">
          <p>
            <strong>No analytics, no advertising pixels, no tracking cookies.</strong> This site does
            not set cookies of its own and does not build a profile of you.
          </p>
          <p>Two things are still recorded, because any website on the public internet records them:</p>
          <ul>
            <li>
              <strong>Server logs.</strong> Our hosting provider records the request time, the page
              requested, the referring page, and the IP address. This is standard infrastructure
              logging, retained briefly for security and abuse prevention.
            </li>
            <li>
              <strong>Messages you choose to send.</strong> If you email us or message us on
              LinkedIn, we receive your name, address and whatever you wrote.
            </li>
          </ul>
        </DocSection>

        <DocSection n={3} title="Why we hold it">
          <p>
            To reply to your enquiry, to keep a record of work agreed, and to keep the site online
            and secure. Nothing else. We do not sell data, and we do not share it for marketing.
          </p>
        </DocSection>

        <DocSection n={4} title="Third parties involved">
          <p>Running this site requires a small number of suppliers:</p>
          <ul>
            <li>
              <strong>Hosting.</strong> The site is served by a cloud hosting provider, which
              processes requests on our behalf and keeps the server logs described above.
            </li>
            <li>
              <strong>Fonts.</strong> Typefaces are loaded from Google Fonts, which means your
              browser makes a request to Google when the page loads. Google receives your IP address
              as part of that request.
            </li>
            <li>
              <strong>Email.</strong> Enquiries are received through a standard email provider.
            </li>
          </ul>
          <p>
            We do not use any other embedded third-party service on this site — no chat widget, no
            session recorder, no heatmap tool.
          </p>
        </DocSection>

        <DocSection n={5} title="How long it is kept">
          <p>
            Server logs are kept only as long as the hosting provider retains them by default.
            Enquiry correspondence is kept while the conversation is active and for as long as
            needed to honour any agreement that follows. If you ask us to delete it, we delete it.
          </p>
        </DocSection>

        <DocSection n={6} title="Your rights">
          <p>
            You can ask us to show you what we hold about you, correct it, or delete it. Write to{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we will respond within 30 days.
            There is no charge and no form to fill in.
          </p>
        </DocSection>

        <DocSection n={7} title="Client project data">
          <p>
            If you become a client, the data handling for your project — what is stored, where, for
            how long, and who can access it — is agreed in writing before work starts, as part of
            the project agreement. That document takes precedence over this page for project data.
          </p>
        </DocSection>

        <DocSection n={8} title="Children">
          <p>
            This site is aimed at businesses and is not directed at anyone under 16. We do not
            knowingly collect information from children.
          </p>
        </DocSection>

        <DocSection n={9} title="Changes">
          <p>
            If this policy changes, the date at the top of this page changes with it. Material
            changes will be noted on the page rather than made silently.
          </p>
        </DocSection>
      </div>
    </DocPage>
  );
}
