import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, Check, X, Play, Zap, Target, TrendingUp, Users, Heart,
  MousePointerClick, Palette, LayoutTemplate, Video, ShoppingBag,
  Youtube, Instagram, Facebook, Sparkles, MessageCircle, Search,
  Stethoscope, Building2, ChevronRight, Star, Mail, Globe,
  Clock, ShieldCheck, BadgeCheck, Rocket, Plus, Minus, Flame, CalendarCheck,
} from "lucide-react";
import logoAsset from "@/assets/spotmock-logo.png.asset.json";
import heroVisual from "@/assets/hero-visual.jpg";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "3.4×", label: "Avg. CTR Lift" },
  { value: "1,200+", label: "Creatives Shipped" },
  { value: "48h", label: "First Draft" },
  { value: "4.9/5", label: "Client Rating" },
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

const results = [
  { metric: "+287%", label: "CTR lift on YouTube thumbnails", detail: "Finance creator, 240K subs — 30 days after redesign." },
  { metric: "3.2×", label: "Patient bookings for dental clinic", detail: "New landing page + Meta ad creatives, first 60 days." },
  { metric: "-41%", label: "Cost-per-lead on Meta Ads", detail: "DTC skincare seller — same budget, new creative system." },
  { metric: "+68%", label: "Add-to-cart on Shopify PDP", detail: "Rebuilt product page hierarchy and above-the-fold visuals." },
];

const caseStudies = [
  {
    tag: "YouTube Creator",
    industry: "Finance / Education",
    title: "From 4% CTR to 11.2% in 21 days",
    problem: "Channel had 240K subs but videos plateaued. Thumbnails looked polished — but blended into every finance channel on the platform.",
    solution: "New thumbnail system with face-forward emotion, curiosity gap headlines, and a signature color grade. A/B tested for 3 rounds.",
    metrics: [
      { k: "+187%", v: "CTR" },
      { k: "2.4×", v: "Views / video" },
      { k: "+62K", v: "New subs in 30 days" },
    ],
    accent: "primary" as const,
    cta: "Get my thumbnail audit",
  },
  {
    tag: "Healthcare Brand",
    industry: "Aesthetics Clinic",
    title: "3.2× patient bookings in 60 days",
    problem: "Beautiful clinic, broken funnel. Meta ads drove traffic to a homepage — booking form was buried three clicks deep.",
    solution: "Dedicated conversion landing page, credibility-first hero, transparent pricing, and ad creatives matched to the offer angle.",
    metrics: [
      { k: "3.2×", v: "Bookings" },
      { k: "-58%", v: "Cost per lead" },
      { k: "9.4%", v: "Landing CVR" },
    ],
    accent: "accent" as const,
    cta: "Audit my patient funnel",
  },
  {
    tag: "DTC Seller",
    industry: "Skincare · Shopify",
    title: "-41% CPL, same budget, new creative system",
    problem: "Creator-style UGC ads had fatigued. ROAS dropped from 3.1 to 1.4 over a quarter and blended in with every other skincare brand.",
    solution: "10-variant static + video ad system built around one proprietary claim. Rebuilt PDP above-the-fold to match ad promise.",
    metrics: [
      { k: "-41%", v: "CPL" },
      { k: "+68%", v: "Add-to-cart" },
      { k: "4.7×", v: "ROAS" },
    ],
    accent: "brand-orange" as const,
    cta: "Rebuild my ad system",
  },
  {
    tag: "Agency / Ad Ops",
    industry: "Creative Production at Scale",
    title: "600+ ad variants / month, zero missed deadlines",
    problem: "A performance agency needed SEBPO-style creative throughput — hundreds of localized ad variants weekly — without losing quality or blowing budget on an in-house team.",
    solution: "Dedicated pod with a locked template system, 24-hour turnarounds, weekly performance reviews, and creative refresh cycles tied to ad fatigue data.",
    metrics: [
      { k: "600+", v: "Variants / month" },
      { k: "24h", v: "Avg. turnaround" },
      { k: "-52%", v: "Cost vs in-house" },
    ],
    accent: "primary" as const,
    cta: "Scope a creative pod",
  },
];

const testimonials = [
  {
    quote: "Our CTR jumped from 4% to 11% in three weeks. SpotMock doesn't design thumbnails — they design channel growth.",
    name: "Ankit R.", role: "YouTube creator · 340K subs",
  },
  {
    quote: "The new landing page pays for itself every single week. Patient inquiries tripled and the cost per booking is a third of what it was.",
    name: "Dr. Meera S.", role: "Founder, Aesthetics Clinic",
  },
  {
    quote: "We tested their ad creatives against our in-house designer. Theirs won on ROAS three campaigns in a row. Now they run our entire creative pipeline.",
    name: "Jordan K.", role: "Growth Lead, DTC brand",
  },
];

const guarantees = [
  { icon: Clock, title: "48-hour first draft", desc: "You see a concept within two business days of your brief. No black boxes, no chasing." },
  { icon: ShieldCheck, title: "Revisions until it converts", desc: "We iterate on the same project until the design hits the performance target — not just the aesthetic." },
  { icon: BadgeCheck, title: "Performance-reviewed", desc: "Every deliverable is checked against a conversion checklist: hierarchy, CTA, contrast, hook, promise." },
  { icon: Rocket, title: "Ready-to-ship files", desc: "Publish-ready assets in every format you need — plus source files, so you're never locked in." },
];

const faqs = [
  { q: "How fast can you start?", a: "Most projects kick off within 24 hours of your brief. First concepts land in 48 hours or less." },
  { q: "Can you handle SEBPO-style high-volume creative production?", a: "Yes. We run dedicated pods for agencies and in-house teams that need 200–1,000+ ad variants per month — with locked template systems, 24-hour turnarounds, and weekly performance reviews. Priced 40–60% below the cost of a comparable in-house team." },
  { q: "Do you guarantee results?", a: "We guarantee performance-obsessed work and revisions until the design hits the target. Actual results depend on your offer, product, and traffic — but we've never had a project ship without a measurable lift." },
  { q: "Can you work with our existing brand?", a: "Yes. We adapt to your existing brand system, or we can rebuild it. Either way, every asset is on-brand and conversion-tuned." },
  { q: "Do you sign NDAs?", a: "Always. Healthcare and creator projects are confidential by default. Case studies are only shared with explicit written permission." },
  { q: "What if I don't know what I need?", a: "That's what the free 20-minute call is for. We audit your funnel, spot the highest-ROI creative to fix first, and quote only what you actually need." },
  { q: "How do you price projects?", a: "Every engagement is quoted after the discovery call — scoped to your goal, timeline, and channel. No off-the-shelf packages, no hidden fees." },
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
              Book Free Audit
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
          <div className="lg:col-span-6 lg:pt-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full border-none bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary/10">
                <Flame className="mr-1 h-3 w-3" /> Booking July — 3 slots left
              </Badge>
              <Badge className="rounded-full border-none bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:bg-accent/10">
                48h First Draft
              </Badge>
              <Badge className="rounded-full border-none bg-brand-yellow/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-ink hover:bg-brand-yellow/30">
                <Star className="mr-1 h-3 w-3 fill-current" /> 4.9/5 · 120+ brands
              </Badge>
            </div>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Design that gets you <span className="text-gradient-primary">more clicks</span> &amp; <span className="text-gradient-primary">more sales.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We design thumbnails, ad creatives &amp; landing pages that <strong className="text-foreground">3× your CTR</strong> and
              turn scrollers into buyers — for creators, DTC sellers, and healthcare brands.
              <span className="mt-2 block font-semibold text-foreground">First concept in 48 hours. Revisions until it converts.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="group rounded-full bg-primary px-7 py-6 text-base font-bold shadow-elegant transition-transform hover:-translate-y-0.5 hover:bg-primary-glow">
                  <CalendarCheck className="mr-2 h-4 w-4" /> Get My Free Audit (worth $250)
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#case-studies">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-foreground/15 bg-background px-7 py-6 text-base font-semibold hover:border-primary hover:text-primary">
                  <Play className="mr-1 h-4 w-4" /> See Case Studies
                </Button>
              </a>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> No contracts, no retainers</span>
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> 20-min strategy call</span>
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Revisions until it converts</span>
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> NDA on every project</span>
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

      {/* RESULTS */}
      <section id="results" className="bg-secondary/40 py-24">
        {/* keep anchor */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">Case Studies</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Real projects. <span className="text-gradient-primary">Real numbers.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A look inside three recent engagements — the problem, what we shipped, and the lift we measured.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {caseStudies.map((c, i) => (
              <Card key={c.title} className="group grid gap-8 rounded-3xl border-border/60 bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant lg:grid-cols-12 lg:p-10">
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className={`rounded-full border-none px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                      c.accent === "primary" ? "bg-primary/10 text-primary hover:bg-primary/10"
                      : c.accent === "accent" ? "bg-accent/10 text-accent hover:bg-accent/10"
                      : "bg-brand-orange/15 text-brand-orange hover:bg-brand-orange/15"
                    }`}>{c.tag}</Badge>
                    <span className="text-xs font-medium text-muted-foreground">{c.industry}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight sm:text-3xl">{c.title}</h3>
                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-destructive">The Problem</div>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/80">{c.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-primary">What We Shipped</div>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/80">{c.solution}</p>
                    </div>
                  </div>
                  <a
                    href={`#contact?interest=${encodeURIComponent(c.tag)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("contact");
                      const sel = document.getElementById("interest-select") as HTMLSelectElement | null;
                      if (sel) {
                        const match = Array.from(sel.options).find((o) => o.value === c.tag);
                        if (match) sel.value = c.tag;
                        else {
                          const opt = document.createElement("option");
                          opt.value = c.tag; opt.text = c.tag; sel.add(opt); sel.value = c.tag;
                        }
                      }
                      const brief = document.getElementById("brief-textarea") as HTMLTextAreaElement | null;
                      if (brief && !brief.value) brief.value = `Interested in results like: ${c.title}`;
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-glow"
                  >
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-3 rounded-2xl bg-secondary/60 p-5 lg:col-span-5 lg:grid-cols-1 lg:content-center lg:gap-4">
                  {c.metrics.map((m, mi) => (
                    <div key={mi} className="text-center lg:text-left">
                      <div className="font-display text-3xl font-extrabold text-gradient-primary sm:text-4xl">{m.k}</div>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{m.v}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS METRICS */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Real Results</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              The only metric that matters: <span className="text-gradient-primary">did it move the number?</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Snapshots from recent projects. Real accounts, real dashboards, real lift.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <Card key={r.label} className="group rounded-3xl border-border/60 bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="font-display text-5xl font-extrabold text-gradient-primary">{r.metric}</div>
                <div className="mt-4 font-display text-base font-bold">{r.label}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.detail}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {guarantees.map((g) => (
              <div key={g.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">Client Wins</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Loved by creators, sellers, and clinics that <span className="text-gradient-primary">measure everything.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col rounded-3xl border-border/60 bg-card p-7 shadow-card">
              <div className="flex gap-1 text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/85">"{t.quote}"</p>
              <div className="mt-6 border-t border-border/60 pt-5">
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-brand-ink py-24 text-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow">Frequently Asked</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-background sm:text-5xl">
              Everything you want to know before we start.
            </h2>
            <p className="mt-5 text-lg text-background/70">
              Still curious? Grab a free 20-minute audit — we'll answer live, and show you exactly where your creative is leaking clicks.
            </p>
            <a href="#contact" className="mt-8 inline-block">
              <Button size="lg" className="rounded-full bg-primary px-7 py-6 text-base font-bold text-primary-foreground shadow-elegant hover:bg-primary-glow">
                Book Free Audit <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <button
                    key={f.q}
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-start gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/20 text-primary-glow">
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-base font-bold text-background sm:text-lg">{f.q}</div>
                      {open && <p className="mt-3 text-sm leading-relaxed text-background/70">{f.a}</p>}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inline conversion card */}
            <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-3xl border border-primary/30 bg-gradient-primary p-6 shadow-elegant sm:flex-row sm:items-center sm:p-7">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-foreground/85">
                  <Sparkles className="h-3.5 w-3.5" /> Still have questions?
                </div>
                <p className="mt-2 font-display text-xl font-extrabold text-primary-foreground sm:text-2xl">
                  Get 3 free creative fixes on a 20-min call.
                </p>
                <p className="mt-1 text-sm text-primary-foreground/85">No pitch. No pressure. Just clarity.</p>
              </div>
              <a href="#contact" className="shrink-0">
                <Button size="lg" className="group rounded-full bg-background px-6 py-6 text-base font-bold text-foreground shadow-elegant hover:-translate-y-0.5 hover:bg-background/90">
                  Book My Free Audit <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
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
                <Flame className="h-3 w-3 fill-current" /> Limited July Slots
              </div>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
                Stop paying for design that just sits there.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
                Book a free 20-minute audit. We'll show you exactly where your creative is leaking clicks —
                and give you 3 quick fixes on the call. Zero pitch. Zero pressure.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a href="#contact">
                <Button size="lg" className="group rounded-full bg-background px-8 py-6 text-base font-bold text-foreground shadow-elegant transition-transform hover:-translate-y-0.5 hover:bg-background/90">
                  Claim My Free Audit <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <p className="mt-3 text-xs text-primary-foreground/70 lg:text-right">Reply within 1 business day.</p>
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
                <select id="interest-select" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary">
                  <option>YouTube Thumbnails</option>
                  <option>Ad Creatives</option>
                  <option>Landing Pages</option>
                  <option>Brand Identity</option>
                  <option>Healthcare Design</option>
                  <option>High-volume ad production (SEBPO-style)</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Project brief</label>
                <textarea id="brief-textarea" rows={4} className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" placeholder="Tell us about your goals, audience, and timeline…" />
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
            <a href="#results" className="text-muted-foreground hover:text-primary">Results</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 px-4 py-3 shadow-elegant backdrop-blur md:hidden">
        <a href="#contact" className="block">
          <Button className="w-full rounded-full bg-primary py-6 text-base font-bold shadow-elegant hover:bg-primary-glow">
            Get My Free Audit <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}
