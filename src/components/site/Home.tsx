import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, Check, X, Play, Zap, Target, TrendingUp, Users, Heart,
  MousePointerClick, Palette, LayoutTemplate, Video, ShoppingBag,
  Youtube, Instagram, Facebook, Sparkles, MessageCircle, Search,
  Stethoscope, Building2, ChevronRight, Star, Mail, Globe,
  Clock, ShieldCheck, BadgeCheck, Rocket, Plus, Minus, Flame, CalendarCheck,
  Quote, Phone, MapPin,
} from "lucide-react";
import {
  SiTiktok, SiMeta, SiGoogleads, SiGoogle, SiShopify, SiWebflow, SiFramer, SiWhatsapp,
} from "react-icons/si";
import heroVisual from "@/assets/hero-visual.jpg";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

const AmazonIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.582l.315-.118c.138-.053.209-.053.276.053.069.118.124.244.177.38.069.167.019.235-.123.303-2.582 1.129-5.344 1.697-8.287 1.697-4.083 0-7.969-1.082-11.655-3.246-.127-.074-.167-.15-.167-.247zm6.152-4.05c-1.521.897-2.732 1.34-3.65 1.34-.894 0-1.408-.373-1.552-1.109-.193-1.003.2-2.52 1.169-4.54.98-2.04 2.025-3.06 3.13-3.06.93 0 1.449.522 1.564 1.575.115 1.052-.264 2.55-1.156 4.28-.416.785-.852 1.41-1.305 1.87l-.2-.416zm7.574-3.593c-.185-.034-.3-.085-.343-.153-.046-.067-.066-.194-.066-.378V5.1c0-.277.043-.462.127-.55.084-.09.244-.135.482-.135l3.48.017c.19.005.31.05.363.138.052.086.08.239.08.459v1.3c0 .27-.055.45-.165.54-.11.09-.303.135-.578.135h-.872l.085 3.187c.89-.48 1.812-.72 2.767-.72.835 0 1.5.226 1.994.678.495.453.777 1.06.848 1.824l.348 3.45c.032.324.07.524.112.6.043.078.16.148.352.21l.52.165c.238.076.357.228.357.455 0 .276-.1.462-.298.557-.2.095-.537.142-1.012.142-.764 0-1.334-.06-1.71-.18-.375-.12-.63-.307-.764-.56-.135-.254-.228-.652-.28-1.195l-.28-2.91c-.058-.598-.25-1.064-.575-1.4-.325-.336-.74-.504-1.245-.504-.52 0-1.035.168-1.544.503l.127 4.423c.02.638-.19.956-.628.956-.398 0-.606-.206-.625-.617l-.255-7.296z" />
  </svg>
);

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
    photo: "https://i.pravatar.cc/128?img=12",
    brand: "Peak Creators",
  },
  {
    quote: "The new landing page pays for itself every single week. Patient inquiries tripled and the cost per booking is a third of what it was.",
    name: "Dr. Meera S.", role: "Founder, Aesthetics Clinic",
    photo: "https://i.pravatar.cc/128?img=47",
    brand: "BrightSmile Dental",
  },
  {
    quote: "We tested their ad creatives against our in-house designer. Theirs won on ROAS three campaigns in a row. Now they run our entire creative pipeline.",
    name: "Jordan K.", role: "Growth Lead, DTC brand",
    photo: "https://i.pravatar.cc/128?img=68",
    brand: "Vera Skincare",
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
  { name: "YouTube", icon: Youtube, cat: "Video" },
  { name: "TikTok", icon: SiTiktok, cat: "Video" },
  { name: "Instagram", icon: Instagram, cat: "Social" },
  { name: "Facebook", icon: Facebook, cat: "Social" },
  { name: "Meta Ads", icon: SiMeta, cat: "Ads" },
  { name: "Google Ads", icon: SiGoogleads, cat: "Ads" },
  { name: "TikTok Ads", icon: SiTiktok, cat: "Ads" },
  { name: "Amazon", icon: AmazonIcon, cat: "Commerce" },
  { name: "Shopify", icon: SiShopify, cat: "Commerce" },
  { name: "Webflow", icon: SiWebflow, cat: "Web" },
  { name: "Framer", icon: SiFramer, cat: "Web" },
  { name: "WhatsApp", icon: SiWhatsapp, cat: "Chat" },
];

export function Home() {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

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

            {/* Trusted-by mini strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex -space-x-2">
                {["#e85d3a", "#c9a84c", "#2dd4a8", "#4f46e5", "#ff6b6b"].map((c, i) => (
                  <div key={i} className="grid h-9 w-9 place-items-center rounded-full border-2 border-background text-xs font-bold text-white shadow-sm" style={{ backgroundColor: c }}>
                    {["A", "M", "J", "R", "K"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-brand-orange">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  <span className="ml-1.5 text-sm font-bold text-foreground">4.9/5</span>
                </div>
                <div className="text-xs text-muted-foreground">Trusted by 120+ creators, clinics & DTC brands</div>
              </div>
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

      {/* PLATFORMS */}
      <section className="relative overflow-hidden border-y border-border/60 bg-brand-ink py-20 text-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(600px 300px at 15% 20%, oklch(0.65 0.16 165 / 0.6), transparent 60%), radial-gradient(500px 260px at 85% 80%, oklch(0.7 0.19 20 / 0.5), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-yellow backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Where we perform
            </span>
            <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-background sm:text-4xl">
              Built to convert across every platform that <span className="text-gradient-primary">pays you back</span>.
            </h2>
            <p className="max-w-xl text-sm text-background/60">
              12+ platforms. One conversion playbook. Native creative for each — never recycled.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {platforms.map((p, i) => {
              const tint =
                i % 4 === 0
                  ? "text-primary-glow"
                  : i % 4 === 1
                  ? "text-accent"
                  : i % 4 === 2
                  ? "text-brand-orange"
                  : "text-brand-yellow";
              const Icon = p.icon;
              return (
                <li key={p.name}>
                  <a
                    href="#contact"
                    className="group relative flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-primary-glow/60 hover:bg-white/[0.08] hover:shadow-[0_10px_30px_-15px_rgba(45,212,168,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow/80 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
                  >
                    <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 ${tint} transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/10 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0`} aria-hidden="true">
                      <Icon className="h-5 w-5 transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-background transition-colors group-hover:text-brand-yellow">{p.name}</div>
                      <div className="truncate text-[10px] font-medium uppercase tracking-wider text-background/40">{p.cat}</div>
                    </div>
                    <ArrowRight className="absolute right-4 top-1/2 h-3.5 w-3.5 -translate-x-2 -translate-y-1/2 text-primary-glow opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:translate-x-[-0.5rem] motion-reduce:group-hover:opacity-0" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-background/60">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary-glow" /> Native-first creative</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary-glow" /> Platform-specific specs</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary-glow" /> A/B variants included</span>
          </div>
        </div>
      </section>

      {/* CLIENT PROOF STRIP */}
      <section aria-label="Trusted by" className="relative overflow-hidden border-b border-border/60 bg-secondary/40 py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40 motion-reduce:hidden"
          style={{
            backgroundImage:
              "radial-gradient(500px 200px at 50% 0%, oklch(0.65 0.16 165 / 0.12), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary shadow-card">
              <Sparkles className="h-3.5 w-3.5" /> Trusted by teams shipping across
            </span>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Creators, DTC brands, and healthcare teams that measure everything trust us with the pixels that move the number.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3 md:grid-cols-6">
            {[
              { name: "Northline Health", cat: "Healthcare", icon: Stethoscope },
              { name: "Peak Creators", cat: "Creator Ops", icon: Youtube },
              { name: "Vera Skincare", cat: "DTC Beauty", icon: Sparkles },
              { name: "Studio Kavi", cat: "Agency", icon: Palette },
              { name: "BrightSmile Dental", cat: "Clinic", icon: Building2 },
              { name: "Odyssey DTC", cat: "eCommerce", icon: ShoppingBag },
            ].map((brand) => (
              <div
                key={brand.name}
                className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant motion-reduce:hover:transform-none"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <brand.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="truncate font-display text-sm font-extrabold uppercase tracking-wide text-foreground/80 group-hover:text-foreground">
                    {brand.name}
                  </div>
                  <div className="truncate text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {brand.cat}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <div className="flex text-brand-orange">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
              </div>
              <span className="font-bold text-foreground">4.9/5</span> · 120+ brands
            </span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> NDA on every project</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> 48-hour first draft</span>
          </div>
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
        <div className="mx-auto mt-10 flex w-fit rounded-full border border-border bg-card p-1.5 shadow-card" role="tablist" aria-label="Service audiences">
          {["Creators & Sellers", "Healthcare Brands"].map((label, i) => (
            <button
              type="button"
              key={label}
              role="tab"
              aria-selected={activeService === i}
              onClick={() => setActiveService(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all sm:px-7 ${
                activeService === i ? "bg-primary text-primary-foreground shadow-elegant" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div key={activeService} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">How we help</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Design. Rank. Grow.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three pillars, one goal — turn every visitor into a customer.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Design.",
                body: (
                  <>
                    Our creative designers and expert web developers guide you from inception to reality, crafting <strong className="font-bold text-foreground">high-converting</strong> websites that generate new leads 24/7.
                  </>
                ),
                href: "#services",
              },
              {
                title: "Rank.",
                body: (
                  <>
                    Our SEO services stand out by exclusively using <strong className="font-bold text-foreground">100% white-hat Google best practices</strong> to ensure your website ranks at the top of search engine results.
                  </>
                ),
                href: "#case-studies",
              },
              {
                title: "Grow.",
                body: (
                  <>
                    Boost your leads and sales with our expertly crafted <strong className="font-bold text-foreground">pay-per-click (PPC) campaigns</strong>, designed by digital marketing professionals.
                  </>
                ),
                href: "#contact",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl border border-border/60 bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <h3 className="font-display text-3xl font-extrabold tracking-tight">{card.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
                <a href={card.href} className="mt-6 inline-flex w-fit">
                  <Button className="rounded-md bg-primary px-5 py-5 text-sm font-bold text-primary-foreground shadow-elegant hover:bg-primary-glow">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
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
            <Card
              key={t.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border-border/60 bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant motion-reduce:hover:transform-none"
            >
              <Quote className="absolute right-5 top-5 h-10 w-10 text-primary/10 transition-colors group-hover:text-primary/25" />
              <div className="flex gap-1 text-brand-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/85">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-background object-cover shadow-card"
                />
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
      </section>

      {/* SHORT ABOUT */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-card p-8 shadow-card lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">About SpotMock</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              A boutique studio doing <span className="text-gradient-primary">big-agency work</span>, at start-up speed.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              SpotMock is a small, senior team obsessed with one question: <em>did it move the number?</em> We work as an extension of your marketing team — auditing funnels, shipping conversion-first creative in 48 hours, and iterating until the metric moves. No account managers, no scope creep, no design-by-committee.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <div className="font-display text-3xl font-extrabold text-foreground">120+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Brands served</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-foreground">1,200+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Creatives shipped</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-foreground">98%</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Client retention</div>
              </div>
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-glow">
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative lg:col-span-5">
            <div className="grid h-full grid-cols-2 gap-3">
              <div className="rounded-2xl bg-gradient-primary p-5 text-primary-foreground">
                <Quote className="h-6 w-6 opacity-70" />
                <p className="mt-3 text-sm font-semibold leading-snug">"Feels like an extension of our marketing team."</p>
              </div>
              <div className="rounded-2xl bg-brand-ink p-5 text-background">
                <TrendingUp className="h-6 w-6 text-brand-yellow" />
                <p className="mt-3 text-sm font-semibold leading-snug">Performance-first on every pixel.</p>
              </div>
              <div className="rounded-2xl bg-brand-yellow/40 p-5">
                <Rocket className="h-6 w-6 text-brand-ink" />
                <p className="mt-3 text-sm font-semibold leading-snug text-brand-ink">48-hour first drafts, every time.</p>
              </div>
              <div className="rounded-2xl bg-accent p-5 text-accent-foreground">
                <ShieldCheck className="h-6 w-6 opacity-90" />
                <p className="mt-3 text-sm font-semibold leading-snug">NDA on every project.</p>
              </div>
            </div>
          </div>
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
              <Button
                size="lg"
                className="group relative rounded-full bg-primary px-7 py-6 text-base font-bold text-primary-foreground shadow-elegant transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-glow hover:shadow-[0_0_32px_rgba(45,212,165,0.35)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
              >
                Book Free Audit <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
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
      <section id="contact" className="relative overflow-hidden bg-brand-ink py-24 text-background">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(700px 400px at 15% 0%, oklch(0.65 0.16 165 / 0.35), transparent 60%), radial-gradient(600px 350px at 90% 100%, oklch(0.7 0.19 20 / 0.3), transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-yellow">
                <CalendarCheck className="h-3.5 w-3.5" /> Book Your Free Audit
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-background sm:text-5xl">
                Let's find where your creative is <span className="text-gradient-primary">leaking clicks.</span>
              </h2>
              <p className="mt-5 text-lg text-background/70">
                20 minutes. Zero pitch. You walk away with 3 concrete fixes we'd make first — even if we never work together.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "48-hour first draft on every project",
                  "Revisions until the metric moves",
                  "NDA-protected. Your data stays yours.",
                  "No retainers, no contracts, no lock-in",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-background/85">
                    <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary-glow">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </div>
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <a href="mailto:hello@spotmock.com" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-primary-glow/50 hover:bg-white/10">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/20 text-primary-glow">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-background/50">Email</div>
                    <div className="truncate text-sm font-semibold text-background">hello@spotmock.com</div>
                  </div>
                </a>
                <a href="https://wa.me/" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-primary-glow/50 hover:bg-white/10">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-brand-orange">
                    <MessageCircle className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-background/50">WhatsApp</div>
                    <div className="truncate text-sm font-semibold text-background">Chat with us</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex -space-x-2">
                  {["#e85d3a", "#c9a84c", "#2dd4a8", "#4f46e5"].map((c, i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-brand-ink" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <div className="text-xs text-background/70">
                  <span className="font-bold text-background">12 audits booked</span> this week
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="rounded-3xl border-white/10 bg-white/[0.04] p-8 shadow-elegant backdrop-blur">
                {sent ? (
                  <div className="flex flex-col items-center py-16 text-center">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-7 w-7" strokeWidth={3} />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-extrabold text-background">Brief received!</h3>
                    <p className="mt-2 max-w-sm text-sm text-background/70">We'll reply within one business day with your audit slot and a quick first take.</p>
                  </div>
                ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const fd = new FormData(form);
                    const name = String(fd.get("name") || "");
                    const email = String(fd.get("email") || "");
                    const company = String(fd.get("company") || "");
                    const budget = String(fd.get("budget") || "");
                    const interest = String(fd.get("interest") || "");
                    const brief = String(fd.get("brief") || "");
                    const subject = `New Audit Brief — ${name || "Website enquiry"}`;
                    const body = [
                      `Name: ${name}`,
                      `Email: ${email}`,
                      `Company / Channel: ${company}`,
                      `Monthly budget: ${budget}`,
                      `I need help with: ${interest}`,
                      "",
                      "Project brief:",
                      brief,
                    ].join("\n");
                    window.location.href = `mailto:hello@spotmock.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    setSent(true);
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-background/60">Your name</label>
                      <input name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-background outline-none transition-all placeholder:text-background/30 focus:border-primary-glow focus:bg-white/10" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-background/60">Work email</label>
                      <input name="email" required type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-background outline-none transition-all placeholder:text-background/30 focus:border-primary-glow focus:bg-white/10" placeholder="you@brand.com" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-background/60">Company / Channel</label>
                      <input name="company" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-background outline-none transition-all placeholder:text-background/30 focus:border-primary-glow focus:bg-white/10" placeholder="Brand or channel name" />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-background/60">Monthly budget</label>
                      <select name="budget" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-background outline-none transition-all focus:border-primary-glow focus:bg-white/10">
                        <option className="bg-brand-ink">Under $1k</option>
                        <option className="bg-brand-ink">$1k – $3k</option>
                        <option className="bg-brand-ink">$3k – $10k</option>
                        <option className="bg-brand-ink">$10k+</option>
                        <option className="bg-brand-ink">Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-background/60">I need help with</label>
                    <select id="interest-select" name="interest" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-background outline-none transition-all focus:border-primary-glow focus:bg-white/10">
                      <option className="bg-brand-ink">YouTube Thumbnails</option>
                      <option className="bg-brand-ink">Ad Creatives</option>
                      <option className="bg-brand-ink">Landing Pages</option>
                      <option className="bg-brand-ink">Brand Identity</option>
                      <option className="bg-brand-ink">Healthcare Design</option>
                      <option className="bg-brand-ink">High-volume ad production (SEBPO-style)</option>
                      <option className="bg-brand-ink">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-background/60">Project brief</label>
                    <textarea id="brief-textarea" name="brief" rows={4} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-background outline-none transition-all placeholder:text-background/30 focus:border-primary-glow focus:bg-white/10" placeholder="Tell us about your goals, audience, and what's not converting today…" />
                  </div>
                  <Button type="submit" className="group w-full rounded-full bg-primary py-6 text-base font-bold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5 hover:bg-primary-glow">
                    Send Brief & Book My Audit <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] text-background/50">
                    <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> NDA on request</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Reply within 1 business day</span>
                    <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> No spam, ever</span>
                  </div>
                </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

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
