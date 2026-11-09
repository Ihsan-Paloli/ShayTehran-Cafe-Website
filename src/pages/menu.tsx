import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BrandMark } from "@/components/brand-mark";
import { EditorialCta } from "@/components/editorial-cta";
import { Reveal } from "@/components/reveal";
import { assets, menuSections } from "@/lib/shay-assets";

const menuGallery = [
  { image: assets.menuTeaHero, alt: "Irani tea and Osmania biscuit at Shay Tehran" },
  { image: assets.chicken, alt: "Chicken strips at Shay Tehran" },
  { image: assets.burger, alt: "Classic burger at Shay Tehran" },
  { image: assets.lemonTea, alt: "Tehran lemon tea at Shay Tehran" },
  { image: assets.fries, alt: "Loaded fries at Shay Tehran" },
  { image: assets.frenchFries, alt: "French fries at Shay Tehran" },
  { image: assets.chickenPop, alt: "Chicken pop at Shay Tehran" },
  { image: assets.momos, alt: "Momos at Shay Tehran" },
  { image: assets.wrap, alt: "Wrap at Shay Tehran" },
  { image: assets.sandwich, alt: "Sandwich at Shay Tehran" },
  { image: assets.bunMaska, alt: "Hot buns at Shay Tehran" },
  { image: assets.nuggets, alt: "Nuggets at Shay Tehran" },
] as const;

export default function MenuPage() {
  return (
    <main>
      <SiteHeader tone="dark" position="static" />
      <section className="menu-intro relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7"><p className="eyebrow text-primary">The menu</p><h1 className="type-hero mt-7 max-w-[12ch]">Tea, food &amp; <span className="type-accent text-primary">people.</span></h1></div>
          </Reveal>
          <Reveal image className="menu-gallery mt-14 flex snap-x gap-3 overflow-x-auto pb-6 sm:mt-20 sm:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuGallery.map((item, index) => <figure key={item.alt} className={`menu-gallery-frame group min-w-[68%] snap-start overflow-hidden border border-primary/15 bg-muted shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-w-[30%] lg:min-w-[22%] ${index % 2 === 0 ? "rounded-br-[4.5rem] rounded-tl-[4.5rem] rounded-bl-xl rounded-tr-xl" : "rounded-bl-[4.5rem] rounded-tr-[4.5rem] rounded-br-xl rounded-tl-xl"}`}><img src={item.image} alt={item.alt} loading={index > 1 ? "lazy" : "eager"} className="warm-image aspect-[4/5] size-full object-cover transition duration-700 group-hover:scale-[1.05]" /></figure>)}
          </Reveal>
        </div>
      </section>
      <section className="menu-listing bg-secondary px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-x-16 gap-y-16 lg:grid-cols-2 lg:gap-y-24">
            {menuSections.map((section) => (
              <Reveal key={section.title} className="menu-section border-t border-primary/25 pt-7">
                <div className="mb-8 flex min-h-24 items-start justify-between gap-5">
                  <div><span className="font-mono text-[0.65rem] text-primary/65">{section.number}</span><h2 className="mt-3 max-w-[16ch] font-display text-3xl leading-tight text-primary sm:text-4xl">{section.title}</h2></div>
                   {"image" in section && section.image ? <div className="menu-section-image relative h-24 w-28 shrink-0 overflow-hidden rounded-bl-[2rem] rounded-tr-[2rem] rounded-br-md rounded-tl-md bg-muted p-1 sm:h-28 sm:w-36"><img src={section.image} alt={`${section.title} at Shay Tehran`} loading="lazy" className="h-full w-full rounded-bl-[1.7rem] rounded-tr-[1.7rem] rounded-br-sm rounded-tl-sm object-cover" /></div> : <BrandMark className="h-20 shrink-0 sm:h-24" />}
                </div>
                 <div className="border-t border-primary/10">{section.items.map((item) => <article key={item.name} className="menu-item grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border/80 py-4 sm:gap-6"><h3 className="min-w-0 font-display text-xl leading-snug sm:text-2xl">{item.name}</h3><span className="menu-item-price shrink-0 border border-primary/15 bg-background/55 px-3 py-2 font-mono text-xs font-medium text-primary sm:text-sm">{item.price}</span></article>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <EditorialCta />
      <SiteFooter />
    </main>
  );
}