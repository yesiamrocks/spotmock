import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, Check, X, Sparkles, Rocket, ShieldCheck, Users, Heart,
  Zap, Target, TrendingUp, Clock, BadgeCheck, Star, Palette, Brain,
  MessageCircle, Layers, Award, Globe,
} from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

const stats = [
  { value: "98%", label: "Client satisfaction" },
  { value: "7yrs", label: "In the trenches" },
  { value: "120+", label: "Brands served" },
  { value: "1,200+", label: "Creatives shipped" },
];

const reasons = [
  { icon: Rocket, title: "48-hour first drafts", desc: "Speed is a feature. You'll see real work within two business days — not a mood board." },
  { icon: Target, title: "Performance-first design", desc: "Every pixel is briefed against a metric: CTR, CVR, watch-time, or cost-per-lead." },
  { icon: Users, title: "Senior-only team", desc: "No juniors, no handoffs. You work directly with the people making the decisions." },
  { icon: Layers, title: "Native to every platform", desc: "YouTube, Meta, TikTok, Amazon, Shopify — specs and hooks tuned per surface." },
  { icon: ShieldCheck, title: "NDA on every project", desc: "Your funnel, offers, and creative stay 100% confidential. Standard, not extra." },
  { icon: MessageCircle, title: "No account managers", desc: "Talk directly to designers and strategists. Fewer telephone games, faster decisions." },
  { icon: BadgeCheck, title: "Revisions until it converts", desc: "We don't cap rounds on the things that matter. We iterate until the metric moves." },
  { icon: Brain, title: "AI-augmented, human-led", desc: "We use AI to move faster on variants and research — never to replace craft or taste." },
  { icon: Heart, title: "Long-term partnership DNA", desc: "98% of clients renew or refer. We optimize for your next quarter, not the invoice." },
];

const compareCols = [
  {
    name: "Freelancers",
    tone: "muted",
    steps: ["Post a job", "Screen 40 portfolios", "Interview 5", "Hire, hope, wait"],
    pains: ["Quality lottery", "Ghosting risk", "No strategy layer"],
  },
  {
    name: "Agencies",
    tone: "muted",
    steps: ["Discovery call", "Long proposal", "Sign retainer", "Wait for kickoff"],
    pains: ["Lengthy onboarding", "High upfront cost", "Talk to account managers, not makers"],
  },
  {
    name: "In-house hire",
    tone: "muted",
    steps: ["Write JD", "Conduct interviews", "Test candidates", "Onboard for months"],
    pains: ["Salary + benefits", "Slow to skill up", "Hard to fire, hard to scale"],
  },
  {
    name: "SpotMock",
    tone: "brand",
    steps: ["Book 20-min audit", "Send brief", "Draft in 48h", "Iterate until it converts"],
    pains: [],
    wins: ["No contracts", "Senior team from day one", "Priced per project, not per hour"],
  },
];

const values = [
  { icon: Zap, title: "Ship fast, iterate faster", desc: "Momentum beats perfection. Get it in market, then let data sharpen it." },
  { icon: Target, title: "Design against a number", desc: "If we can't tie it to a metric, we don't ship it. Ego doesn't scale revenue." },
  { icon: Heart, title: "Treat every brand like ours", desc: "Small enough to care. Senior enough to know what actually moves." },
  { icon: ShieldCheck, title: "Radical transparency", desc: "You see the pricing, the process, and the reasoning. No black boxes." },
];

export function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(700px 400px at 15% 10%, oklch(0.65 0.16 165 / 0.18), transparent 60%), radial-gradient(600px 350px at 85% 30%, oklch(0.7 0.19 20 / 0.14), transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" /> About SpotMock
              </span>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                A boutique studio doing <span className="text-gradient-primary">big-agency work</span>, at start-up speed.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                SpotMock is a small, senior team of designers, strategists, and copywriters obsessed with one question: <em>did the creative actually move the number?</em> We work as an extension of your marketing team — auditing funnels, shipping conversion-first creative in 48 hours, and iterating until the metric moves.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/" hash="contact">
                  <Button size="lg" className="group rounded-full bg-primary px-6 py-6 text-base font-bold shadow-elegant transition-transform hover:-translate-y-0.5 hover:bg-primary-glow">
                    Start a project <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="/#case-studies">
                  <Button size="lg" variant="outline" className="rounded-full px-6 py-6 text-base font-bold">
                    See our work
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border/60 bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
                    <div className="font-display text-4xl font-extrabold text-foreground">{s.value}</div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE EXCEL AT */}
      <section className="border-y border-border/60 bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">What we excel at</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Performance design for creators, DTC & healthcare brands.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We're not a "we do everything" shop. We go deep on three worlds — content creators, DTC sellers, and healthcare — because that's where our team has shipped the most revenue.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { v: "98%", l: "Satisfied clients" },
                  { v: "120+", l: "Brands served" },
                  { v: "1,200+", l: "Creatives shipped" },
                  { v: "4.9/5", l: "Avg. rating" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border/60 bg-card p-5 text-center shadow-card">
                    <div className="font-display text-3xl font-extrabold text-foreground">{s.v}</div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {values.map((v) => (
                  <div key={v.title} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-card">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <v.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold">{v.title}</div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK WITH US COMPARISON */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Work with us</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            SpotMock vs. every other option.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Here's what happens when you hire a freelancer, an agency, or an in-house designer — and what happens when you work with us instead.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {compareCols.map((col) => {
            const isBrand = col.tone === "brand";
            return (
              <div
                key={col.name}
                className={
                  "flex flex-col rounded-3xl p-6 transition-all " +
                  (isBrand
                    ? "bg-gradient-primary text-primary-foreground shadow-elegant xl:-translate-y-2"
                    : "border border-border/60 bg-card text-foreground hover:-translate-y-0.5 hover:shadow-card")
                }
              >
                <div className="flex items-center justify-between">
                  <div className={"font-display text-lg font-extrabold " + (isBrand ? "text-primary-foreground" : "")}>
                    {col.name}
                  </div>
                  {isBrand && (
                    <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      Us
                    </span>
                  )}
                </div>

                <div className={"mt-5 text-[10px] font-bold uppercase tracking-widest " + (isBrand ? "text-primary-foreground/70" : "text-muted-foreground")}>
                  The process
                </div>
                <ol className="mt-3 space-y-2.5">
                  {col.steps.map((s, i) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm">
                      <span className={"mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-bold " + (isBrand ? "bg-white/25 text-primary-foreground" : "bg-secondary text-muted-foreground")}>
                        {i + 1}
                      </span>
                      <span className={isBrand ? "text-primary-foreground/95" : "text-foreground/90"}>{s}</span>
                    </li>
                  ))}
                </ol>

                <div className={"mt-6 text-[10px] font-bold uppercase tracking-widest " + (isBrand ? "text-primary-foreground/70" : "text-muted-foreground")}>
                  {isBrand ? "What you get" : "The pain"}
                </div>
                <ul className="mt-3 space-y-2">
                  {(isBrand ? col.wins! : col.pains).map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      {isBrand ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground" strokeWidth={3} />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" strokeWidth={2.5} />
                      )}
                      <span className={isBrand ? "text-primary-foreground/95" : "text-muted-foreground"}>{p}</span>
                    </li>
                  ))}
                </ul>

                {isBrand && (
                  <Link to="/" hash="contact" className="mt-auto pt-6">
                    <Button className="w-full rounded-full bg-white text-brand-ink hover:bg-white/90">
                      Book my free audit <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* TOP 9 REASONS */}
      <section className="relative overflow-hidden bg-brand-ink py-24 text-background">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(600px 350px at 10% 10%, oklch(0.65 0.16 165 / 0.35), transparent 60%), radial-gradient(500px 300px at 90% 90%, oklch(0.7 0.19 20 / 0.25), transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow">Why brands choose us</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-background sm:text-5xl">
              Top 9 reasons to work with SpotMock.
            </h2>
            <p className="mt-4 text-base text-background/70">
              The unfair advantages we bake into every engagement.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary-glow/50 hover:bg-white/[0.08]"
              >
                <div className="absolute right-4 top-4 font-display text-4xl font-black text-white/5 transition-colors group-hover:text-primary-glow/20">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/20 text-primary-glow">
                  <r.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-lg font-bold text-background">{r.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center sm:flex-row sm:text-left">
            <Award className="h-10 w-10 shrink-0 text-brand-yellow" />
            <div className="flex-1">
              <div className="font-display text-lg font-extrabold text-background">Not sure if we're a fit?</div>
              <div className="text-sm text-background/70">Book a 20-minute audit. You'll leave with 3 concrete fixes — even if we never work together.</div>
            </div>
            <Link to="/" hash="contact">
              <Button className="rounded-full bg-primary px-6 py-6 text-base font-bold shadow-elegant hover:bg-primary-glow">
                Get my free audit <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">Our story</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
          Built by operators who got tired of pretty-but-broken design.
        </h2>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>SpotMock started with a frustration. Our founder had spent years running growth for creator and healthcare brands — and every quarter, the same story repeated: expensive agencies delivered gorgeous decks, freelancers vanished mid-project, and in-house designers were stretched thin. Meanwhile, CTRs stayed flat and CACs kept creeping up.</p>
          <p>We started SpotMock to fix that gap. A small team of senior designers, copywriters, and strategists — briefed against the metric, not the mood board. No account managers between you and the work. No retainers you feel trapped in.</p>
          <p>Today, we work with 120+ brands across creators, DTC, and healthcare, shipping conversion-first creative at agency quality and freelance speed. If a pixel doesn't move a number, we don't ship it.</p>
        </div>
      </section>

      {/* CLIENT VOICES */}
      <section className="border-y border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Client voices</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              What working with us actually feels like.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "They plug in like an in-house team — but ship 3× faster. Every asset comes with a reason, not just a look.",
                name: "Priya N.", role: "Head of Growth · DTC beauty",
                photo: "https://i.pravatar.cc/128?img=32", brand: "Vera Skincare",
              },
              {
                quote: "Our patient bookings 3× in 60 days. The best part: they audit the funnel, not just the pixels.",
                name: "Dr. Meera S.", role: "Founder · Aesthetics Clinic",
                photo: "https://i.pravatar.cc/128?img=47", brand: "BrightSmile",
              },
              {
                quote: "SpotMock made our CTR jump from 4% to 11% in three weeks. Every thumbnail has a conversion thesis behind it.",
                name: "Ankit R.", role: "YouTube creator · 340K subs",
                photo: "https://i.pravatar.cc/128?img=12", brand: "Peak Creators",
              },
            ].map((t) => (
              <Card key={t.name} className="group relative overflow-hidden rounded-3xl border-border/60 bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant motion-reduce:hover:transform-none">
                <div className="flex gap-1 text-brand-orange">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-5 text-base leading-relaxed text-foreground/85">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                  <img src={t.photo} alt={t.name} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full border-2 border-background object-cover shadow-card" />
                  <div className="min-w-0">
                    <div className="truncate font-bold">{t.name}</div>
                    <div className="truncate text-sm text-muted-foreground">{t.role}</div>
                    <div className="mt-0.5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                      <BadgeCheck className="h-3 w-3" /> {t.brand}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-elegant sm:p-16">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Ready to see what performance-first design looks like?
              </h2>
              <p className="mt-4 max-w-2xl text-base opacity-90">
                Book your free 20-minute audit. Walk away with 3 concrete fixes — no pitch, no pressure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link to="/" hash="contact">
                <Button size="lg" className="rounded-full bg-white px-7 py-6 text-base font-bold text-brand-ink hover:bg-white/90">
                  Book my free audit <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}