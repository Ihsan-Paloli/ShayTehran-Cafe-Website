import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EditorialCta } from "@/components/editorial-cta";
import { Reveal } from "@/components/reveal";
import { assets } from "@/lib/shay-assets";

const milestones = [
  {
    year: "2017",
    label: "The first sip",
    copy: "In a small Hyderabad tea shop, Irani Tea and an Osmania Biscuit became an unforgettable memory. It was love at the very first sip.",
  },
  {
    year: "2025",
    label: "The shared dream",
    copy: "Eleven childhood friends came together to build something of their own. Every idea eventually led them back to that first cup.",
  },
  {
    year: "2026",
    label: "The doors open",
    copy: "After months of research, planning and experimentation, Shay Tehran opened near Cochin International Airport.",
  },
] as const;

export default function StoryPage() {
  return (
    <main>
      <section className="story-hero relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-surface-deep text-hero-foreground sm:min-h-screen">
        <SiteHeader logoSrc={assets.logoHero} />
        <picture>
          <source media="(max-width: 639px)" srcSet={assets.storyBackgroundMobile} />
          <img src={assets.storyBackgroundDesktop} alt="A lantern-lit Persian terrace overlooking Tehran at sunset" className="story-hero-image warm-image absolute inset-0 size-full object-cover" />
        </picture>
        <div className="story-hero-scrim absolute inset-0" />
        <div className="hero-grain absolute inset-0" />
        <div className="relative mx-auto flex w-full max-w-[1500px] justify-start px-5 pb-10 pt-36 sm:px-8 sm:pb-16 lg:justify-end lg:px-12 lg:pb-24">
          <Reveal className="max-w-[36rem] lg:w-[43%]">
            <p className="eyebrow text-brass">Our story · 2017—2026</p>
            <h1 className="type-hero mt-5 max-w-[9ch]">From one sip to a shared <span className="type-accent text-brass">dream.</span></h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-hero-foreground/70 sm:mt-8 sm:text-base">A memory from Hyderabad, a table near the airport, and eleven friends who decided to make room for something of their own.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
             <div className="lg:col-span-7"><p className="eyebrow text-primary">The journey</p><h2 className="type-section mt-6 max-w-[16ch]">A memory became a mission.</h2></div>
            <p className="type-body max-w-sm lg:col-span-4 lg:col-start-9">Some ideas arrive loudly. Ours returned quietly, year after year, in the memory of a cup of tea shared far from home.</p>
          </Reveal>
          <div className="story-timeline relative mt-14 sm:mt-20">
            {milestones.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 100} className="story-milestone grid gap-4 border-t border-border py-8 sm:grid-cols-12 sm:gap-8 sm:py-12">
                <span className="font-display text-6xl font-normal leading-none text-primary sm:col-span-3 sm:text-7xl">{milestone.year}</span>
                <p className="eyebrow pt-2 text-brass sm:col-span-3">{milestone.label}</p>
                <p className="type-body max-w-lg sm:col-span-5 sm:col-start-8">{milestone.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grid overflow-hidden bg-secondary lg:grid-cols-2 lg:items-stretch">
        <Reveal className="story-scene relative min-h-[62svh] overflow-hidden lg:min-h-[44rem]" image>
          <picture>
            <source media="(max-width: 639px)" srcSet={assets.storyOneMobile} />
            <img src={assets.storyOneDesktop} alt="The Shay Tehran host enjoying tea beside Hyderabad's Charminar" loading="lazy" className="story-scene-image warm-image absolute inset-0 size-full object-cover" />
          </picture>
          <div className="story-scene-scrim absolute inset-0" />
          <p className="absolute bottom-6 left-5 max-w-[13ch] font-display text-3xl leading-tight text-hero-foreground sm:bottom-10 sm:left-8 sm:text-4xl">Tea is the beginning.<br /><span className="text-brass">The table is the story.</span></p>
        </Reveal>
        <div className="flex items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-24">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-primary">Why “Shay Tehran”?</p>
            <h2 className="type-section mt-5 max-w-[13ch]">A name that carries the <span className="type-accent text-brass">journey.</span></h2>
            <p className="type-body mt-7 max-w-lg">“Shay” is an Arabic word meaning Tea, while Tehran is the capital of Iran — the land that inspired the Irani Tea culture we fell in love with. Together, Shay Tehran represents our love for tea and our inspiration from the rich Iranian tea tradition.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-deep px-5 py-20 text-hero-foreground sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8"><p className="eyebrow text-brass">Our vision</p><h2 className="type-section mt-6 max-w-[18ch]">More than a tea shop. A symbol of a <span className="type-accent text-brass">dream.</span></h2></div>
            <p className="max-w-sm text-sm leading-relaxed text-hero-foreground/60 lg:col-span-3 lg:col-start-10">Today, Shay Tehran is the symbol of eleven friends, one shared passion, and a dream brought to life.</p>
          </Reveal>
          <Reveal className="mt-14 grid gap-6 border-y border-hero-foreground/15 py-10 sm:mt-16 lg:grid-cols-12 lg:py-14">
            <h3 className="type-sub lg:col-span-3">This is only the beginning.</h3>
            <p className="max-w-3xl text-sm leading-relaxed text-hero-foreground/60 lg:col-span-7 lg:col-start-5 sm:text-base">Our vision is to take Shay Tehran from Kerala to the world and build it into an international brand within the next ten years — bringing the warmth, flavour, and timeless charm of Irani Tea to people across cultures and continents.</p>
          </Reveal>
          <Reveal className="mt-10 sm:mt-12"><p className="max-w-5xl font-display text-3xl leading-tight text-brass sm:text-5xl">From one unforgettable sip in 2017, to a shared dream in 2025, to Shay Tehran in 2026 — our story has only just begun.</p></Reveal>
        </div>
      </section>
      <EditorialCta />
      <SiteFooter />
    </main>
  );
}