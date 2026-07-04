import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Mail, MessageCircle, MapPin, Clock, ShieldCheck, Star,
  Sparkles, Instagram, Youtube, Linkedin, Twitter,
} from "lucide-react";
import logoAsset from "@/assets/spotmock-logo.png.asset.json";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "YouTube Thumbnails", href: "/#services" },
      { label: "Ad Creatives", href: "/#services" },
      { label: "Landing Pages", href: "/#services" },
      { label: "Healthcare Design", href: "/#services" },
      { label: "Brand Identity", href: "/#services" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "About", to: "/about" as const },
      { label: "Case Studies", href: "/#case-studies" },
      { label: "Results", href: "/#results" },
      { label: "Reviews", href: "/#reviews" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      { label: "Book a free audit", href: "/#contact" },
      { label: "hello@spotmock.com", href: "mailto:hello@spotmock.com" },
      { label: "WhatsApp us", href: "https://wa.me/" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-ink text-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 motion-reduce:hidden"
        style={{
          backgroundImage:
            "radial-gradient(600px 300px at 10% 0%, oklch(0.65 0.16 165 / 0.4), transparent 60%), radial-gradient(500px 300px at 90% 100%, oklch(0.7 0.19 20 / 0.3), transparent 60%)",
        }}
      />

      {/* Newsletter / CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-yellow">
              <Sparkles className="h-3.5 w-3.5" /> Free creative teardown
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-background sm:text-4xl">
              Get 3 conversion fixes for your creative — <span className="text-gradient-primary">free, in 48 hours.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-background/70">
              Drop your email. We'll send a short, personal teardown of one thumbnail, ad, or landing page — no pitch, no spam.
            </p>
          </div>
          <div className="lg:col-span-5 lg:pl-6">
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <input
                required
                type="email"
                placeholder="you@brand.com"
                aria-label="Email address"
                className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-background outline-none placeholder:text-background/40 focus:border-primary-glow focus:bg-white/10"
              />
              <Button
                type="submit"
                className="group rounded-full bg-primary px-6 py-6 text-sm font-bold text-primary-foreground shadow-elegant hover:bg-primary-glow"
              >
                Send my teardown
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-background/60">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3 w-3" /> NDA on request</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> Reply within 1 business day</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src={logoAsset.url} alt="SpotMock" className="h-9 w-auto brightness-0 invert" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
            SpotMock is a boutique performance-design studio for creators, DTC sellers, and healthcare brands. Design briefed against the metric — never the mood board.
          </p>

          <div className="mt-6 flex items-center gap-2 text-brand-yellow">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-1 text-xs font-bold text-background">4.9 / 5</span>
            <span className="text-xs text-background/60">· 120+ brands</span>
          </div>

          <div className="mt-6 space-y-2 text-xs text-background/70">
            <a href="mailto:hello@spotmock.com" className="inline-flex items-center gap-2 hover:text-brand-yellow">
              <Mail className="h-3.5 w-3.5" /> hello@spotmock.com
            </a>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp · replies within 1 business day
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> Remote-first · serving brands worldwide
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Youtube, href: "#", label: "YouTube" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Twitter, href: "#", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-background/70 transition-all hover:-translate-y-0.5 hover:border-primary-glow/50 hover:bg-white/10 hover:text-brand-yellow motion-reduce:hover:transform-none"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
          {columns.map((col) => (
            <div key={col.heading}>
              <div className="text-[11px] font-bold uppercase tracking-widest text-brand-yellow">{col.heading}</div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) =>
                  "to" in l && l.to ? (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-background/75 transition-colors hover:text-background">
                        {l.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-background/75 transition-colors hover:text-background">
                        {l.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-background/60 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>© {new Date().getFullYear()} SpotMock Design Studio · Design that performs.</div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="/#contact" className="hover:text-background">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}