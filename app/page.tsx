"use client";

import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Car,
  Check,
  ChevronDown,
  CircleGauge,
  Droplets,
  Flame,
  Gauge,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

const navItems = ["Services", "Results", "Packages", "Process", "FAQ"];

const services = [
  {
    icon: Droplets,
    title: "Premium Detailing",
    copy: "Deep exterior and interior cleaning built for cars that need a sharper street presence.",
  },
  {
    icon: ShieldCheck,
    title: "Ceramic Coating",
    copy: "Long-lasting hydrophobic protection with deep gloss and stronger paint defense.",
  },
  {
    icon: Sparkles,
    title: "Paint Correction",
    copy: "Swirl removal, gloss restoration, and machine polishing for a showroom-level finish.",
  },
  {
    icon: Wrench,
    title: "Engine Bay Detail",
    copy: "Controlled cleaning for engine compartments, trims, plastics, and performance presentation.",
  },
  {
    icon: Car,
    title: "Interior Deep Clean",
    copy: "Steam cleaning, stain treatment, surface conditioning, and cabin refresh for daily drivers.",
  },
  {
    icon: Flame,
    title: "Showroom Styling",
    copy: "Finishing touches that make every angle look sharper, cleaner, and ready to turn heads.",
  },
];

const packages = [
  {
    name: "Street Detail",
    price: "$120",
    detail: "A sharp reset for daily drivers and weekend cars.",
    features: ["Exterior foam wash", "Wheel and tire detail", "Interior vacuum", "Quick gloss finish"],
  },
  {
    name: "Ceramic Armor",
    price: "$450",
    detail: "Paint protection for drivers who want gloss that lasts.",
    featured: true,
    features: ["Paint decontamination", "Gloss enhancement polish", "Ceramic coating", "Hydrophobic finish", "Care guide"],
  },
  {
    name: "Full Edge Detail",
    price: "$750",
    detail: "The complete NitroEdge treatment from paint to cabin.",
    features: ["Paint correction", "Ceramic protection", "Interior deep clean", "Engine bay detail", "Final inspection"],
  },
];

const testimonials = [
  {
    quote: "The paint looked deeper than the day I bought the car. NitroEdge made my coupe look aggressive again.",
    name: "Marcus Hale",
    car: "BMW M4 Owner",
  },
  {
    quote: "Ceramic Armor was worth it. Water slides off, the gloss is insane, and the finish still looks freshly detailed.",
    name: "Eli Navarro",
    car: "Subaru WRX Owner",
  },
  {
    quote: "Fast, clean, professional, and serious about the details. The garage has a premium performance feel.",
    name: "Jordan Cruz",
    car: "Mustang GT Owner",
  },
];

const faqs = [
  {
    q: "How long does a full detail take?",
    a: "Most full details take 4 to 8 hours depending on vehicle size, paint condition, and selected add-ons.",
  },
  {
    q: "Is ceramic coating worth it?",
    a: "Yes, especially for owners who want stronger gloss, easier maintenance, and longer-lasting paint protection.",
  },
  {
    q: "Do you work on daily drivers and modified cars?",
    a: "Yes. NitroEdge Garage is designed for daily drivers, weekend builds, performance cars, and enthusiast vehicles.",
  },
  {
    q: "Can I customize a package?",
    a: "Absolutely. Services can be adjusted based on paint condition, interior needs, coating duration, and budget.",
  },
];

const process = ["Inspect", "Foam wash", "Correct", "Protect", "Deliver"];

const stripItems = ["Ceramic coating", "Paint correction", "Performance detailing", "Showroom finish"];

function updateCarouselIndex(element: HTMLDivElement | null, setIndex: (index: number) => void) {
  if (!element) return;
  const cards = Array.from(element.querySelectorAll<HTMLElement>("article"));
  if (!cards.length) return;

  const center = element.scrollLeft + element.clientWidth / 2;
  let activeIndex = 0;
  let smallestDistance = Number.POSITIVE_INFINITY;

  cards.forEach((card, index) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(cardCenter - center);
    if (distance < smallestDistance) {
      smallestDistance = distance;
      activeIndex = index;
    }
  });

  setIndex(activeIndex);
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [packageIndex, setPackageIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const packageRef = useRef<HTMLDivElement | null>(null);
  const testimonialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -70px 0px" }
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 220)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 4200);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function handleInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const vehicle = String(data.get("vehicle") || "").trim();

    if (!name || !vehicle) {
      setToast("Add your name and vehicle model first.");
      return;
    }

    form.reset();
    setToast("Request received. NitroEdge will contact you shortly.");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#060607] text-white">
      {toast && (
        <button
          onClick={() => setToast("")}
          className="fixed right-5 top-5 z-50 rounded-full border border-red-500/40 bg-[#111113] px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-red-600/20"
        >
          {toast}
        </button>
      )}

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#070708]/80 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-red-600 text-white shadow-xl shadow-red-600/25 transition group-hover:rotate-6 group-hover:scale-105">
              <Zap size={22} fill="currentColor" />
            </span>
            <span>
              <span className="font-display block text-2xl font-bold uppercase italic tracking-[0.08em]">NitroEdge</span>
              <span className="block text-[11px] font-black uppercase tracking-[0.42em] text-red-500">Garage</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative text-xs font-black uppercase tracking-[0.22em] text-zinc-400 hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <a href="#booking" className="red-button hidden rounded-full bg-red-600 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-red-600/20 lg:inline-flex">
            Book a Detail
          </a>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 lg:hidden"
            aria-label="Open navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="animate-[fade-up_360ms_cubic-bezier(0.22,1,0.36,1)_both] border-t border-white/10 bg-[#09090a] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  onClick={() => setMenuOpen(false)}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-black uppercase tracking-[0.22em] text-zinc-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="speed-line-layer absolute left-[-20%] top-40 h-px w-[140%] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
          <div className="speed-line-layer absolute bottom-32 left-[-10%] h-px w-[120%] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="animate-[fade-up_900ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-red-400">
              <Gauge size={15} /> Premium Auto Detailing & Ceramic Coating
            </div>
            <h1 className="font-display max-w-4xl text-6xl font-bold uppercase italic leading-[0.88] tracking-[-0.05em] text-white sm:text-7xl lg:text-[6.9rem]">
              Sharper Paint. Deeper Gloss. Built to Turn Heads.
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-zinc-300">
              NitroEdge Garage delivers premium car detailing, ceramic coating, and paint correction for drivers who want a cleaner finish, deeper shine, and stronger road presence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#booking" className="red-button inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-2xl shadow-red-600/25">
                Book a Detail <ArrowRight size={17} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-white/[0.08]">
                View Services
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {[["3.8K+", "Cars Detailed"], ["5 Yrs", "Coating Experience"], ["4.9/5", "Average Rating"]].map(([value, label]) => (
                <div key={label} className="metal-card rounded-3xl p-4">
                  <div className="font-display text-3xl font-bold italic text-white">{value}</div>
                  <div className="mt-1 text-[11px] font-black uppercase tracking-[0.18em] text-red-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-[fade-up_1100ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <div className="absolute -left-5 top-10 z-10 hidden rounded-full border border-white/10 bg-black/70 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-2xl shadow-red-600/20 backdrop-blur lg:flex">
              <Flame className="mr-2 text-red-500" size={17} /> Gloss tuned finish
            </div>
            <div className="image-boost hero-glow relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 p-3 shadow-2xl shadow-red-600/20">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1500&q=90"
                alt="Premium car detailing and ceramic coating for a glossy black performance car"
                className="h-[560px] w-full rounded-[1.55rem] object-cover"
              />
              <div className="absolute inset-3 rounded-[1.55rem] bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.26em] text-red-400"><CircleGauge size={14} /> Detailing with edge</div>
                <p className="font-display max-w-lg text-4xl font-bold uppercase italic leading-none">Dark metallic finish. Redline-level precision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-red-600 px-5 py-5 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 text-center text-xs font-black uppercase tracking-[0.28em] lg:justify-between">
          {stripItems.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="services" data-reveal className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-red-500">Services</p>
              <h2 className="font-display mt-4 max-w-4xl text-5xl font-bold uppercase italic leading-none tracking-[-0.04em] sm:text-6xl">Detailing Built for Gloss, Grit, and Road Presence.</h2>
            </div>
            <p className="max-w-md font-semibold leading-7 text-zinc-400">From deep cleaning to ceramic protection, NitroEdge is designed for drivers who want every angle to hit harder.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} data-reveal className="metal-card rounded-[1.75rem] p-7">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-white shadow-xl shadow-red-600/20"><Icon size={23} /></div>
                  <h3 className="font-display mt-8 text-3xl font-bold uppercase italic text-white">{service.title}</h3>
                  <p className="mt-4 text-[15px] font-semibold leading-7 text-zinc-400">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="results" data-reveal className="bg-[#0c0c0e] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-red-500">Results</p>
            <h2 className="font-display mt-4 text-5xl font-bold uppercase italic leading-none tracking-[-0.04em] sm:text-6xl">From Tired Paint to Weapon-Grade Shine.</h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-zinc-400">The NitroEdge process removes contamination, corrects imperfections, and locks in protection so every surface reflects sharper, cleaner, and harder.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Swirl reduction", "Hydrophobic protection", "Mirror-like gloss", "Aggressive finish"].map((item) => (
                <div key={item} className="metal-card flex items-center gap-3 rounded-full px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-zinc-200">
                  <Check size={16} className="text-red-500" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="image-boost overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-3">
              <img src="/result-before.png" alt="Same performance car before car detailing and paint correction" className="h-[430px] w-full rounded-[1.2rem] object-cover opacity-75 grayscale" />
              <div className="mt-4 text-xs font-black uppercase tracking-[0.25em] text-zinc-500">Before</div>
            </div>
            <div className="image-boost overflow-hidden rounded-[1.75rem] border border-red-500/30 bg-red-600/10 p-3 shadow-2xl shadow-red-600/10 sm:translate-y-10">
              <img src="/result-after.png" alt="Same performance car after ceramic coating and premium auto detailing" className="h-[430px] w-full rounded-[1.2rem] object-cover" />
              <div className="mt-4 text-xs font-black uppercase tracking-[0.25em] text-red-400">After NitroEdge</div>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" data-reveal className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-red-500">Packages</p>
              <h2 className="font-display mt-4 max-w-3xl text-5xl font-bold uppercase italic leading-none tracking-[-0.04em] sm:text-6xl">Choose Your Level of Edge.</h2>
            </div>
            <p className="max-w-md font-semibold leading-7 text-zinc-400">Mobile users can swipe through packages. Desktop users can compare every finish tier side by side.</p>
          </div>

          <div ref={packageRef} onScroll={() => updateCarouselIndex(packageRef.current, setPackageIndex)} className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {packages.map((item) => (
              <article key={item.name} data-reveal className={`metal-card relative min-w-[86vw] snap-center rounded-[1.85rem] p-8 md:min-w-0 ${item.featured ? "border-red-500/50 bg-red-600/10 shadow-2xl shadow-red-600/10" : ""}`}>
                {item.featured && <span className="absolute right-6 top-6 rounded-full bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">Most booked</span>}
                <h3 className="font-display text-4xl font-bold uppercase italic text-white">{item.name}</h3>
                <p className="mt-5 text-[15px] font-semibold leading-7 text-zinc-400">{item.detail}</p>
                <div className="mt-8 flex items-end gap-2"><span className="font-display text-5xl font-bold italic text-white">{item.price}</span><span className="pb-2 text-sm font-black uppercase tracking-[0.2em] text-red-400">starting</span></div>
                <div className="mt-8 space-y-4">
                  {item.features.map((feature) => <div key={feature} className="flex items-center gap-3 text-sm font-bold text-zinc-200"><Check size={16} className="text-red-500" /> {feature}</div>)}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2 md:hidden" aria-hidden="true">
            {packages.map((item, index) => <span key={item.name} className={`h-2 rounded-full transition-all ${packageIndex === index ? "w-7 bg-red-500" : "w-2 bg-white/25"}`} />)}
          </div>
        </div>
      </section>

      <section id="process" data-reveal className="bg-[#0c0c0e] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-red-500">Process</p>
            <h2 className="font-display mt-4 text-5xl font-bold uppercase italic leading-none tracking-[-0.04em] sm:text-6xl">Precision From First Wash to Final Wipe.</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {process.map((step, index) => (
              <div key={step} data-reveal className="metal-card rounded-[1.6rem] p-6">
                <div className="font-display text-5xl font-bold italic text-red-500">0{index + 1}</div>
                <h3 className="font-display mt-8 text-2xl font-bold uppercase italic text-white">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-red-500">Driver feedback</p>
          <h2 className="font-display mt-4 text-5xl font-bold uppercase italic tracking-[-0.04em] sm:text-6xl">Built for owners who notice everything.</h2>
          <div ref={testimonialRef} onScroll={() => updateCarouselIndex(testimonialRef.current, setTestimonialIndex)} className="scrollbar-none -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
            {testimonials.map((item) => (
              <article key={item.name} data-reveal className="metal-card min-w-[86vw] snap-center rounded-[1.8rem] p-8 lg:min-w-0">
                <div className="flex gap-1 text-red-500">{[...Array(5)].map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div>
                <p className="mt-8 text-2xl font-black leading-relaxed text-white">“{item.quote}”</p>
                <div className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-red-400">{item.name}</div>
                <div className="mt-1 text-sm font-bold text-zinc-500">{item.car}</div>
              </article>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2 lg:hidden" aria-hidden="true">
            {testimonials.map((item, index) => <span key={item.name} className={`h-2 rounded-full transition-all ${testimonialIndex === index ? "w-7 bg-red-500" : "w-2 bg-white/25"}`} />)}
          </div>
        </div>
      </section>

      <section id="faq" data-reveal className="bg-[#0c0c0e] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-red-500">FAQ</p>
            <h2 className="font-display mt-4 text-5xl font-bold uppercase italic leading-none tracking-[-0.04em] sm:text-6xl">Before you pull in.</h2>
            <p className="mt-6 max-w-md font-semibold leading-7 text-zinc-400">Clear answers for drivers comparing detailing, correction, coating, and custom package options.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} data-reveal className="metal-card group rounded-[1.4rem] p-6 open:border-red-500/40">
                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 text-2xl font-bold uppercase italic text-white">
                  {item.q}
                  <ChevronDown className="shrink-0 transition group-open:rotate-180" size={22} />
                </summary>
                <p className="mt-5 font-semibold leading-7 text-zinc-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" data-reveal className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#101013] shadow-2xl shadow-red-600/10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="image-boost relative min-h-[480px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1200&q=90" alt="Auto detailing garage bay for car detailing and ceramic coating service" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-red-400">Book your edge</p>
              <h2 className="font-display mt-3 text-5xl font-bold uppercase italic leading-none text-white">Tell Us What You Drive.</h2>
              <p className="mt-4 max-w-md text-sm font-bold leading-6 text-zinc-300">Send your vehicle details and preferred service. We’ll recommend the right finish package before you pull in.</p>
            </div>
          </div>

          <form onSubmit={handleInquiry} className="space-y-5 p-6 sm:p-10 lg:p-14">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-black uppercase tracking-[0.12em] text-zinc-400">Name<input name="name" className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none placeholder:text-zinc-600 focus:border-red-500" placeholder="Your name" /></label>
              <label className="space-y-2 text-sm font-black uppercase tracking-[0.12em] text-zinc-400">Vehicle<input name="vehicle" className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none placeholder:text-zinc-600 focus:border-red-500" placeholder="BMW M4, Civic Type R..." /></label>
            </div>
            <label className="block space-y-2 text-sm font-black uppercase tracking-[0.12em] text-zinc-400">Service<select name="service" className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none focus:border-red-500"><option>Premium Detailing</option><option>Ceramic Coating</option><option>Paint Correction</option><option>Interior Deep Clean</option><option>Full Edge Detail</option></select></label>
            <label className="block space-y-2 text-sm font-black uppercase tracking-[0.12em] text-zinc-400">Message<textarea name="message" rows={5} className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none placeholder:text-zinc-600 focus:border-red-500" placeholder="Tell us your paint condition, goals, and preferred schedule." /></label>
            <button className="red-button inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white sm:w-auto">Request My Detail <CalendarCheck size={17} /></button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm font-semibold text-zinc-500 md:flex-row md:items-center">
          <div><div className="font-display text-2xl font-bold uppercase italic tracking-[0.12em] text-white">NitroEdge Garage</div><p className="mt-2">Premium car detailing and performance auto care landing page concept.</p></div>
          <div className="flex flex-wrap gap-3"><a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white" href="#booking"><MessageCircle size={16} /> Start booking</a><a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white" href="#services"><BadgeCheck size={16} /> View services</a></div>
        </div>
      </footer>
    </main>
  );
}
