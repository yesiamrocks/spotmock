import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Flame } from "lucide-react";
import logoAsset from "@/assets/spotmock-logo.png.asset.json";

const primaryNav = [
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Results", href: "/#results" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Announcement bar */}
      <div className="hidden bg-brand-ink text-background/90 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-1.5 text-[11px] font-medium sm:px-6 lg:px-8">
          <Flame className="h-3 w-3 text-brand-yellow" />
          <span>
            <span className="font-bold text-brand-yellow">Booking July —</span> only 3 audit slots left this week.
          </span>
          <a href="/#contact" className="ml-2 underline underline-offset-4 hover:text-brand-yellow">
            Grab yours →
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all ${
          scrolled
            ? "border-border/60 bg-background/85 shadow-card backdrop-blur-md"
            : "border-transparent bg-background/70 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:-translate-y-0.5">
            <img src={logoAsset.url} alt="SpotMock — Design That Performs" className="h-8 w-auto sm:h-9" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {primaryNav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-3.5 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <Link
              to="/about"
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-full px-3.5 py-2 text-sm font-semibold text-primary bg-primary/10" }}
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a href="/#contact" className="hidden sm:block">
              <Button className="group rounded-full bg-primary px-5 font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5 hover:bg-primary-glow">
                Book Free Audit
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-card text-foreground md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border/60 bg-background md:hidden">
            <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {primaryNav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-foreground/85 hover:bg-secondary"
                >
                  {n.label}
                </a>
              ))}
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-foreground/85 hover:bg-secondary"
              >
                About
              </Link>
              <a href="/#contact" onClick={() => setOpen(false)} className="mt-2">
                <Button className="w-full rounded-full bg-primary py-6 text-base font-bold shadow-elegant">
                  Book Free Audit <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}