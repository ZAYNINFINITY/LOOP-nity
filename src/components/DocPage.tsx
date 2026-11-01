import type { ReactNode } from "react";

import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { PageHead } from "@/components/ui";

/**
 * Shared layout for documents and information pages (privacy, terms, FAQ,
 * careers, security).
 *
 * Why one layout: these pages differ only in their prose. Duplicating the
 * shell in five files is how sites drift into five slightly different header
 * spacings — the kind of inconsistency readers register as carelessness.
 */
export function DocPage({
  eyebrow,
  title,
  lede,
  updated,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  /** ISO date of the last substantive edit. Omit for pages that are not legal documents. */
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <PageHead eyebrow={eyebrow} title={title} lede={lede} />
        <div className="shell grid gap-12 py-16 md:grid-cols-12 md:gap-6 md:py-24">
          <article className="md:col-span-8">{children}</article>
          {updated && (
            <aside className="md:col-span-3 md:col-start-10">
              <div className="border-t border-border pt-4 md:sticky md:top-28">
                <p className="eyebrow">Last updated</p>
                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  <time dateTime={updated}>{updated}</time>
                </p>
              </div>
            </aside>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

/**
 * One numbered section of a document. Numbering is deliberate: it gives readers
 * a way to reference a clause ("section 4") in an email, which is how legal
 * correspondence actually works.
 */
export function DocSection({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) {
  const id = `s${n}`;
  return (
    <section aria-labelledby={id} className="border-t border-border pt-8 first:border-0 first:pt-0">
      <h2 id={id} className="flex items-baseline gap-4 font-display text-xl font-bold tracking-tight">
        <span className="font-mono text-xs font-normal text-primary">
          {String(n).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[0.9375rem] leading-relaxed text-foreground/85 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}
