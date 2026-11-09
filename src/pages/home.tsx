import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandMark } from "@/components/brand-mark";
import { Reveal } from "@/components/reveal";
import { TextLink, TextLinkExternal } from "@/components/text-link";
import { assets, contact } from "@/lib/shay-assets";

const featuredItems = [
  { name: "Irani Tea & Osmania Biscuit", note: "Creamy, slow-brewed and made for lingering.", price: "₹35", image: assets.iraniChai },
  { name: "Chicken Strips", note: "Golden, crisp and served with our house dip.", price: "₹120", image: assets.chicken },
  { name: "Classic Burger", note: "A juicy patty, fresh crunch and a soft toasted bun.", price: "₹160", image: assets.burger },
  { name: "Tehran Lemon Tea", note: "Fragrant tea with a bright, refreshing finish.", price: "₹45", image: assets.lemonTea },
  { name: "Loaded Fries", note: "Golden fries layered with house flavours.", price: "₹220", image: assets.fries },
] as const;

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const shift = (direction: number) => carouselRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  return (
    <main>
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-surface-deep text-hero-foreground">
        <SiteHeader logoSrc={assets.logoHero} />
        <picture><source media="(max-width: 639px)" srcSet={assets.mobileHero} /><img src={assets.hero} alt="Shay Tehran host welcoming guests to tea" className="hero-image warm-image absolute inset-0 size-full object-cover object-[58%_center] sm:object-center" /></picture>
        <div className="bg-hero-scrim absolute inset-0" /><div className="hero-grain absolute inset-0" />
        <div className="relative mx-auto w-full max-w-[1360px] px-5 pt-28 pb-9 sm:px-8 sm:pt-36 sm:pb-20 lg:pb-24 text-left">
          <div className="type-accent text-5xl text-brass sm:text-6xl">Shay Tehran</div>
          <h1 className="type-hero mt-3 max-w-[13ch] sm:mt-5">Authentic Irani tea and more...</h1>
          <div className="mt-5 sm:mt-10"><TextLink to="/menu">Explore the menu</TextLink></div>
        </div>
      </section>
      <section className="border-y border-border bg-secondary px-5 py-5 sm:px-8"><div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 overflow-hidden"><p className="eyebrow text-primary">AUTHENTIC IRANI TEA AND MORE...</p><p className="hidden text-sm text-muted-foreground sm:block">{"\n"}</p><BrandMark className="h-16 shrink-0 sm:h-20" /></div></section>
      <section className="bg-background px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1360px]"><Reveal className="mb-10 flex flex-col justify-between gap-7 sm:mb-14 sm:flex-row sm:items-end"><div><p className="eyebrow text-primary">From the Shay table</p><h2 className="type-section mt-4 max-w-[15ch] text-primary">Come hungry. Stay for the feeling.</h2></div><TextLink to="/menu" className="shrink-0">View full menu</TextLink></Reveal>
          <div className="relative"><div className="mb-6 flex justify-end gap-3 sm:mb-8"><button type="button" onClick={() => shift(-1)} aria-label="Show previous menu item" className="inline-flex size-11 items-center justify-center rounded-full border border-primary/30 bg-secondary text-primary" data-testid="button-featured-previous"><ArrowLeft className="size-4" /></button><button type="button" onClick={() => shift(1)} aria-label="Show next menu item" className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground" data-testid="button-featured-next"><ArrowRight className="size-4" /></button></div>
             <div ref={carouselRef} className="flex snap-x gap-4 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Featured menu items">{featuredItems.map((item, index) => <article key={item.name} className="menu-card group min-w-[88%] snap-start overflow-hidden border border-border/70 bg-card shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-w-[54%] lg:min-w-[35%] xl:min-w-[29%]"><div className={`relative m-2 aspect-[1.22/1] overflow-hidden bg-muted ${index % 2 === 0 ? "rounded-br-[3.5rem] rounded-tl-[3.5rem] rounded-bl-xl rounded-tr-xl" : "rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-br-xl rounded-tl-xl"}`}><img src={item.image} alt={item.name} loading="lazy" className="warm-image size-full object-cover object-center transition duration-700 group-hover:scale-[1.05]" /><span className="absolute right-3 top-3 rounded-full border border-primary-foreground/20 bg-primary/90 px-3 py-1.5 font-mono text-[0.68rem] text-primary-foreground backdrop-blur-sm">{item.price}</span></div><div className="px-5 pb-5 pt-3"><h3 className="font-display text-[1.75rem] leading-none text-foreground transition-colors group-hover:text-primary">{item.name}</h3><p className="mt-3 max-w-[18rem] text-xs leading-relaxed text-muted-foreground">{item.note}</p></div></article>)}</div>
          </div>
        </div>
      </section>
    <section className="bg-surface-deep px-5 py-20 text-hero-foreground sm:px-8 sm:py-28"><div className="mx-auto grid max-w-[1360px] gap-14 md:grid-cols-2 md:gap-20"><Reveal><p className="eyebrow text-brass">Our story</p><h2 className="type-section mt-5 max-w-[15ch]">A room that borrows from the <span className="type-accent text-brass">Persian evening.</span></h2><p className="mt-7 max-w-md text-sm leading-relaxed text-hero-foreground/55">Shay began with brewed tea, comforting food, and tables that invite another story. Everything since has followed from that.</p><div className="mt-8"><TextLink to="/story" className="action-link-dark">Read our full story</TextLink></div></Reveal><Reveal delay={100} className="border-t border-hero-foreground/15 pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-16"><p className="eyebrow text-brass">Contact</p><h2 className="type-section mt-5 max-w-[14ch]">Come by. The kettle is <span className="type-accent text-brass">always warm.</span></h2><p className="mt-7 max-w-md text-sm leading-relaxed text-hero-foreground/55">Find us in Cochin International Airport, Nedumbassery, Kochi. Drop in for tea, bring friends for food, or send us a note before you arrive.</p><div className="mt-8 flex flex-wrap gap-x-8 gap-y-5"><TextLink to="/contact" className="action-link-dark">Contact &amp; hours</TextLink><TextLinkExternal href={contact.whatsapp} className="action-link-dark">WhatsApp us</TextLinkExternal></div></Reveal></div></section>
      <section className="border-b border-border bg-background px-5 py-12 sm:px-8 lg:py-14"><div className="mx-auto max-w-[1360px]"><Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><p className="font-display text-3xl text-primary sm:text-4xl">Tea. Food. <span className="type-accent text-brass">People.</span></p><TextLink to="/contact">Plan your visit</TextLink></Reveal></div></section>
      <SiteFooter />
    </main>
  );
}