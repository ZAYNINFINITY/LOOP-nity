/**
 * Single source of truth for company identity.
 *
 * Why a config file instead of literals: the brand name, contact address and
 * legal entity name appear in the header, footer, page metadata and JSON-LD.
 * Scattering them as string literals means one rename touches a dozen files and
 * a single miss leaves the site contradicting itself — which is exactly the
 * signal that makes a small studio read as untrustworthy.
 *
 * Everything here is a fact about the company. If a value is not yet true,
 * leave it out rather than inventing a placeholder.
 */

export const SITE = {
  /** Trading name. One word, capital L, no hyphen. */
  name: "Loopnity",
  /** Legal/registration name, shown in legal documents. */
  legalName: "Loopnity",
  /** Short positioning line used in metadata and the footer. */
  tagline: "An independent software and AI studio.",

  /**
   * Contact address for new work. Kept separate from the personal address so
   * the inbox can be delegated later without changing the website.
   *
   * The studio owns `loopnity.eu.org` (registered free via eu.org, routed via
   * Cloudflare Email Routing) so business mail is a real address, not a personal
   * one. When a custom domain like loopnity.com is purchased later, switch this
   * one line to hello@<domain> — nothing else on the site hardcodes the address.
   */
  email: "hello@loopnity.eu.org",

  /** City and country. A real place is a trust signal; vagueness is not. */
  location: "Islamabad, Pakistan",

  /** Year the studio started trading. */
  founded: 2026,

  founder: "Zain Ul Abideen",

  /**
   * Canonical origin, used for absolute URLs in metadata, JSON-LD and the
   * sitemap. Update this the moment a custom domain is attached.
   */
  url: "https://loopnity.vercel.app",

  socials: {
    linkedin: "https://www.linkedin.com/in/zain-ul-abideen-429735231/",
    github: "https://github.com/ZAYNINFINITY",
  },
} as const;

/** Pages that should appear in sitemap.xml, with their relative priority. */
export const SITEMAP_ROUTES = [
  { path: "/", priority: "1.0" },
  { path: "/solutions", priority: "0.9" },
  { path: "/products", priority: "0.9" },
  { path: "/work", priority: "0.8" },
  { path: "/approach", priority: "0.8" },
  { path: "/about", priority: "0.7" },
  { path: "/contact", priority: "0.8" },
  { path: "/faq", priority: "0.6" },
  { path: "/careers", priority: "0.5" },
  { path: "/security", priority: "0.5" },
  { path: "/privacy", priority: "0.3" },
  { path: "/terms", priority: "0.3" },
] as const;
