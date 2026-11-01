import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo, LoopMark, LoopnityWordmark } from "@/components/LoopMark";
import { EASE, Ext } from "@/components/ui";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/solutions", label: "Solutions" },
  { to: "/work", label: "Work" },
  { to: "/approach", label: "Approach" },
  { to: "/about", label: "About" },
] as const;

/**
 * Information pages live in the footer rather than the main nav. A five-item
 * primary nav is what a real company uses; a twelve-item one is what a site
 * with no hierarchy uses.
 */
const COMPANY = [
  { to: "/faq", label: "FAQ" },
  { to: "/careers", label: "Careers" },
  { to: "/security", label: "Security" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    const wide = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", esc);
    window.addEventListener("resize", wide);
    return () => {
      window.removeEventListener("keydown", esc);
      window.removeEventListener("resize", wide);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-border bg-background/92 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <Link to="/" aria-label="Loopnity — home" className="-m-2 p-2">
          <Logo />
        </Link>
        <nav aria-label="Primary" className="hidden items-center md:flex">
          <ul className="mr-8 flex items-center gap-7">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="nav-link" activeProps={{ "aria-current": "location" }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-outline">
            Get in touch
          </Link>
        </nav>
        <button
          ref={btn}
          type="button"
          className="-mr-2 grid size-11 place-items-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="shell py-3">
              {NAV.map((n, i) => (
                <li key={n.to} className="border-b border-border">
                  <Link
                    to={n.to}
                    className="flex items-baseline justify-between py-4 font-display text-2xl font-bold tracking-tight"
                  >
                    {n.label}
                    <span className="eyebrow">0{i + 1}</span>
                  </Link>
                </li>
              ))}
              <li className="py-5">
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Get in touch
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5">
            <LoopnityWordmark className="text-[1.25rem]" />
            <p className="mt-5 max-w-[26rem] text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline} We build web, mobile and AI systems for teams that need the work
              done properly the first time.
            </p>
            <address className="mt-6 flex flex-col gap-2 not-italic">
              <a
                href={`mailto:${SITE.email}`}
                className="w-fit text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
              >
                {SITE.email}
              </a>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {SITE.location}
              </span>
            </address>
            <LoopMark className="mt-8 w-28 opacity-60" strokeWidth={2} />
          </div>
          <nav aria-label="Site" className="md:col-span-2 md:col-start-7">
            <p className="eyebrow">Site</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[{ to: "/", label: "Home" }, ...NAV, { to: "/contact", label: "Contact" }].map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground transition-colors hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company" className="md:col-span-2 md:col-start-9">
            <p className="eyebrow">Company</p>
            <ul className="mt-5 space-y-3 text-sm">
              {COMPANY.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground transition-colors hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2 md:col-start-11">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Ext
                  href={SITE.socials.linkedin}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </Ext>
              </li>
              <li>
                <Ext
                  href={SITE.socials.github}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                </Ext>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            © {SITE.founded}–{new Date().getFullYear()} {SITE.name}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Built in-house · No trackers
          </p>
        </div>
      </div>
    </footer>
  );
}
