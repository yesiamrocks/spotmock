import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, Check, X, Play, Zap, Target, TrendingUp, Users, Heart,
  MousePointerClick, Palette, LayoutTemplate, Video, ShoppingBag,
  Youtube, Instagram, Facebook, Sparkles, MessageCircle, Search,
  Stethoscope, Building2, ChevronRight, Star, Mail, Globe,
} from "lucide-react";
import logoAsset from "@/assets/spotmock-logo.png.asset.json";
import heroVisual from "@/assets/hero-visual.jpg";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Bundles", href: "#bundles" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "3x", label: "Avg. CTR Lift" },
  { value: "200+", label: "Creatives Shipped" },
  { value: "48h", label: "Fast Turnaround" },
  { value: "100%", label: "Conversion Focus" },
];

const creatorServices = [
  { icon: Youtube, title: "YouTube Thumbnails", desc: "Scroll-stopping thumbnails engineered to spike CTR and channel growth." },
  { icon: Instagram, title: "Social Media Design", desc: "Strategic creatives that boost engagement, reach, and brand authority." },
  { icon: Target, title: "Ad Creatives", desc: "Performance ads for Meta, TikTok & Google — built to convert." },
  { icon: Video, title: "Video Ad Creatives", desc: "Short-form video ads that stop the scroll and maximize ROAS." },
  { icon: ShoppingBag, title: "Amazon & Shopify Pages", desc: "Optimized listings and product pages that turn browsers into buyers." },
  { icon: LayoutTemplate, title: "Landing Pages", desc: "Conversion-focused pages built to capture leads and drive action." },
  { icon: Palette, title: "Brand Identity", desc: "Visual systems that make you look credible, memorable, premium." },
  { icon: Globe, title: "Website Design", desc: "Modern, conversion-focused websites built for growth and credibility." },
];

const healthcareServices = [
  { icon: Stethoscope, title: "Healthcare Social Design", desc: "Trust-building content for clinics, doctors, diagnostics, and pharmacies." },
  { icon: MousePointerClick, title: "Patient Acquisition Pages", desc: "Landing pages that convert visits into booked appointments." },
  { icon: Sparkles, title: "Healthcare Ad Creatives", desc: "Patient-focused campaigns that lift awareness and inquiries." },
  { icon: Video, title: "Healthcare Video Marketing", desc: "Educational and promotional videos that build trust." },
  { icon: Building2, title: "Clinic Brand Identity", desc: "Professional branding that reinforces credibility and confidence." },
  { icon: Search, title: "Google Maps & Local SEO", desc: "Help patients discover your clinic first in local search." },
  { icon: Users, title: "Doctor Personal Branding", desc: "Authority and visibility strategy for doctors and specialists." },
  { icon: MessageCircle, title: "WhatsApp Automation", desc: "Automated inquiry and appointment flows on WhatsApp & Messenger." },
];

const process = [
  { n: "01", title: "Discovery", desc: "We review your goals, brand, audience, and performance targets." },
  { n: "02", title: "Concept & Design", desc: "Initial concepts based on brief — you review and give feedback." },
  { n: "03", title: "Revisions", desc: "Refine until the design is exactly right — precise, on-brand." },
  { n: "04", title: "Final Delivery", desc: "All final files in agreed formats, ready to publish and run." },
  { n: "05", title: "Retainer (optional)", desc: "Monthly support for ongoing design that scales with your growth." },
];

const pricing = [
  {
    name: "YouTube Thumbnails",
    tiers: [
      { name: "Starter", price: "$25", unit: "one-off", features: ["1 thumbnail", "2 concepts", "2 revision rounds", "24 hr delivery", "PNG + PSD"], recommended: false },
      { name: "Growth", price: "$60", unit: "one-off", features: ["3 thumbnails", "3 concepts each", "Unlimited revisions", "48 hr delivery", "CTR analysis"], recommended: true },
      { name: "Pro Retainer", price: "$120", unit: "per month", features: ["8 thumbnails / month", "Unlimited concepts", "12 hr delivery", "A/B versions", "Monthly CTR report"], recommended: false },
    ],
  },
  {
    name: "Landing Pages",
    tiers: [
      { name: "Starter", price: "$150", unit: "one-off", features: ["1 landing page", "Mobile responsive", "2 revision rounds", "4 day delivery"], recommended: false },
      { name: "Growth", price: "$280", unit: "one-off", features: ["Landing + Thank You", "Copywriting", "CTA optimization", "Unlimited revisions"], recommended: true },
      { name: "Pro", price: "$500", unit: "one-off", features: ["Multi-section funnel", "A/B layout testing", "Dev handoff ready", "Analytics setup guide"], recommended: false },
    ],
  },
  {
    name: "Brand Identity",
    tiers: [
      { name: "Starter", price: "$120", unit: "one-off", features: ["3 logo concepts", "Color palette", "Font system", "2 revision rounds"], recommended: false },
      { name: "Growth", price: "$250", unit: "one-off", features: ["Everything in Starter", "Business card", "Social profile kit", "Brand guidelines PDF"], recommended: true },
      { name: "Pro", price: "$450", unit: "one-off", features: ["Full brand system", "Brand strategy doc", "All source files", "Unlimited revisions"], recommended: false },
    ],
  },
];

const bundles = [
  {
    name: "Creator Starter Pack",
    audience: "For creators & influencers",
    includes: ["Thumbnail Design (Growth)", "Social Media Design (Growth)", "Brand Identity (Starter)"],
    was: "$390", now: "$320", save: "$70",
    accent: "bg-accent/10 text-accent",
  },
  {
    name: "Seller Growth Pack",
    audience: "For product sellers",
    includes: ["Product Page (Growth)", "Ad Creative (Growth)", "Landing Page (Growth)"],
    was: "$550", now: "$480", save: "$70",
    accent: "bg-brand-orange/15 text-brand-orange",
  },
  {
    name: "Clinic Launch Pack",
    audience: "For healthcare brands",
    includes: ["Healthcare Page (Growth)", "Clinic Brand Identity (Growth)", "Social Media (Growth)"],
    was: "$550", now: "$480", save: "$70",
    accent: "bg-primary/10 text-primary",
  },
  {
    name: "Patient Growth Pack",
    audience: "For clinics & doctors",
    includes: ["Patient Acquisition LP (Growth)", "Video Ad Creatives (Growth)", "Social Media (Growth)"],
    was: "$550", now: "$480", save: "$70",
    accent: "bg-brand-yellow/25 text-brand-ink",
  },
];

const problems = [
  "Thumbnails that look great but flatline your CTR",
  "Ads that drain budget without generating clicks",
  "Product pages that get traffic but no purchases",
  "Landing pages built for aesthetics, not conversion",
  "Healthcare branding that fails to build patient trust",
  "Design vendors who deliver on time, but not on outcome",
];

const platforms = [
  "YouTube", "TikTok", "Instagram", "Facebook", "LinkedIn",
  "Amazon", "Shopify", "WooCommerce", "Webflow", "Framer",
  "Meta Ads", "Google Ads", "TikTok Ads", "WhatsApp", "ManyChat",
];

export function Home() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="SpotMock" className="h-9 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact">
            <Button className="rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-elegant hover:bg-primary-glow">
              Book Free Call
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
          <div className="lg:col-span-6 lg:pt-8">
            <Badge className="rounded-full border-none bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary/10">
              Content & Conversion Design Studio
            </Badge>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Design That{" "}
              <span className="relative inline-block">
                <span className="text-gradient-primary">Performs.</span>
                <svg viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full" fill="none">
                  <path d="M2 9 Q 80 2 150 6 T 298 4" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We design high-performing visuals that drive clicks, conversions, and sales
              for creators, sellers, and healthcare brands. Every pixel — engineered for outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="rounded-full bg-primary px-7 py-6 text-base font-semibold shadow-elegant hover:bg-primary-glow">
                  Start Your Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-foreground/15 bg-background px-7 py-6 text-base font-semibold hover:border-primary hover:text-primary">
                  <Play className="mr-1 h-4 w-4" /> Explore Services
                </Button>
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-extrabold text-foreground">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-warm opacity-20 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-border/40 bg-card shadow-elegant">
                <img src={heroVisual} alt="Performance design creatives, thumbnails, product pages, and analytics" className="h-full w-full object-cover" width={1280} height={1280} />
              </div>

              {/* Floating stat card */}
              <Card className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border-border/40 bg-card/95 p-4 shadow-card backdrop-blur">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-bold leading-none">+287% CTR</div>
                  <div className="mt-1 text-xs text-muted-foreground">Thumbnail redesign</div>
                </div>
              </Card>

              <Card className="absolute -right-4 top-8 flex items-center gap-3 rounded-2xl border-border/40 bg-card/95 p-4 shadow-card backdrop-blur">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-bold leading-none">+3.2x</div>
                  <div className="mt-1 text-xs text-muted-foreground">Patient bookings</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / PLATFORMS */}
      <section className="border-y border-border/60 bg-secondary/40 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-sm font-medium text-muted-foreground">
          <span className="text-xs font-bold uppercase tracking-widest text-foreground/50">We work across</span>
          {platforms.map((p) => (
            <span key={p} className="opacity-80">{p}</span>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">The Problem</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Great design that <span className="text-gradient-primary">doesn't convert</span> is expensive decoration.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Most design agencies hand you something that looks good. We hand you something that works —
              backed by conversion logic on every color, hierarchy, and CTA.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
            {problems.map((p) => (
              <div key={p} className="flex gap-3 rounded-2xl border border-border/60 bg-card p-5">
                <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive">
                  <X className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-brand-ink text-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow">What We Believe</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-background sm:text-5xl">
              Design strategy, not design service.
            </h2>
          </div>
          <div className="grid gap-6 lg:col-span-2 sm:grid-cols-2">
            {[
              { icon: Zap, title: "Conversion Logic", desc: "Every color, hierarchy, and CTA placement is chosen because it moves the number, not because it looks nice." },
              { icon: Target, title: "Two Ruthless Markets", desc: "Creators live on CTR. Healthcare lives on trust. Both demand precision. We deliver both." },
              { icon: TrendingUp, title: "Outcome-Priced", desc: "You're not buying deliverables. You're buying a result — measured in clicks, leads, and bookings." },
              { icon: Sparkles, title: "Fast + Clear", desc: "24–48 hour turnarounds. Clear communication. Zero guesswork. Zero fluff." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-background">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">What We Do</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Two markets. One conversion-obsessed studio.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Purpose-built creative for the two industries that live and die by results.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mx-auto mt-10 flex w-fit rounded-full border border-border bg-card p-1.5 shadow-card">
          {["Creators & Sellers", "Healthcare Brands"].map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveService(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all sm:px-7 ${
                activeService === i ? "bg-primary text-primary-foreground shadow-elegant" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {(activeService === 0 ? creatorServices : healthcareServices).map((s, i) => (
            <Card
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className={`grid h-12 w-12 place-items-center rounded-xl transition-colors ${
                i % 4 === 0 ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                : i % 4 === 1 ? "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                : i % 4 === 2 ? "bg-brand-orange/15 text-brand-orange group-hover:bg-brand-orange group-hover:text-primary-foreground"
                : "bg-brand-yellow/30 text-brand-ink"
              }`}>
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ChevronRight className="absolute right-4 top-6 h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </Card>
          ))}
        </div>
      </section>

      {/* BUNDLES */}
      <section id="bundles" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Bundle Packages</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Launch faster. <span className="text-gradient-primary">Save more.</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our most-requested services combined at a discount — designed to get you shipping in a week, not a quarter.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {bundles.map((b) => (
              <Card key={b.name} className="group relative overflow-hidden rounded-3xl border-border/60 bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${b.accent}`}>{b.audience}</p>
                    <h3 className="mt-4 font-display text-2xl font-extrabold">{b.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground line-through">{b.was}</div>
                    <div className="font-display text-3xl font-extrabold text-primary">{b.now}</div>
                    <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                      Save {b.save}
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {b.includes.map((line) => (
                    <div key={line} className="flex items-center gap-3">
                      <div className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <p className="text-sm text-foreground/80">{line}</p>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
                  Get this bundle <ArrowRight className="h-4 w-4" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">Our Process</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Brief. Design. Ship. <span className="text-gradient-primary">Repeat.</span>
          </h2>
        </div>
        <div className="relative mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {process.map((p) => (
            <div key={p.n} className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-card">
              <div className="font-display text-4xl font-extrabold text-primary/20">{p.n}</div>
              <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-brand-ink py-24 text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow">Transparent Pricing</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-background sm:text-5xl">
              Pick a tier. Ship this week.
            </h2>
            <p className="mt-4 text-lg text-background/70">
              A slice of our most-requested services. Full menu shared on discovery call.
            </p>
          </div>

          <div className="mt-14 space-y-14">
            {pricing.map((group) => (
              <div key={group.name}>
                <h3 className="mb-6 font-display text-xl font-bold text-background/90">{group.name}</h3>
                <div className="grid gap-5 md:grid-cols-3">
                  {group.tiers.map((t) => (
                    <div
                      key={t.name}
                      className={`relative rounded-2xl border p-7 ${
                        t.recommended
                          ? "border-primary bg-primary/10 shadow-elegant"
                          : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      {t.recommended && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                          Most Popular
                        </div>
                      )}
                      <div className="text-sm font-semibold text-background/70">{t.name}</div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-display text-4xl font-extrabold text-background">{t.price}</span>
                        <span className="text-xs text-background/50">{t.unit}</span>
                      </div>
                      <div className="mt-6 space-y-3">
                        {t.features.map((f) => (
                          <div key={f} className="flex gap-2 text-sm text-background/80">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" strokeWidth={2.5} />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 shadow-elegant sm:p-16">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-yellow/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-foreground/80">
                <Star className="h-3 w-3 fill-current" /> The SpotMock Standard
              </div>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
                When your design works harder, your business grows faster.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
                Fast turnarounds. Clear communication. Zero guesswork. You brief us, we deliver work that performs —
                on time, on brand, and built to grow with you.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a href="#contact">
                <Button size="lg" className="rounded-full bg-background px-8 py-6 text-base font-bold text-foreground shadow-elegant hover:bg-background/90">
                  Book Your Free Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Contact</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Tell us what you need. We'll ship it.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every project starts with a free 20-minute call. No pressure, no pitch —
              just an honest conversation about what your visuals need to do.
            </p>
            <div className="mt-10 space-y-5">
              <a href="mailto:hello@spotmock.com" className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-primary hover:shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="mt-0.5 font-semibold">hello@spotmock.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Website</div>
                  <div className="mt-0.5 font-semibold">spotmock.com</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="rounded-3xl border-border/60 bg-card p-8 shadow-card">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:hello@spotmock.com";
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                  <input required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                  <input required type="email" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" placeholder="you@brand.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">I need help with</label>
                <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary">
                  <option>YouTube Thumbnails</option>
                  <option>Ad Creatives</option>
                  <option>Landing Pages</option>
                  <option>Brand Identity</option>
                  <option>Healthcare Design</option>
                  <option>A bundle package</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Project brief</label>
                <textarea rows={4} className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" placeholder="Tell us about your goals, audience, and timeline…" />
              </div>
              <Button type="submit" className="w-full rounded-full bg-primary py-6 text-base font-bold shadow-elegant hover:bg-primary-glow">
                Send Brief <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">We reply within one business day.</p>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="SpotMock" className="h-8 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SpotMock Design Studio. Design That Performs.
          </p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-primary">Services</a>
            <a href="#bundles" className="text-muted-foreground hover:text-primary">Bundles</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
