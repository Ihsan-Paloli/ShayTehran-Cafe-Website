import { Reveal } from "@/components/reveal";
import { TextLink } from "@/components/text-link";
import { assets } from "@/lib/shay-assets";

export function EditorialCta() {
  return <section className="relative min-h-[76svh] overflow-hidden bg-surface-deep text-hero-foreground">
    <picture>
      <source media="(max-width: 639px)" srcSet={assets.ctaHostMobile} />
      <img src={assets.ctaTerraceDesktop} alt="The Shay Tehran host welcoming guests" className="warm-image absolute inset-0 size-full object-cover object-center" />
    </picture>
    <div className="cta-scrim absolute inset-0" /><div className="hero-grain absolute inset-0" />
    <div className="relative mx-auto flex min-h-[76svh] max-w-[1500px] flex-col justify-end px-5 pt-32 pb-14 sm:px-8 sm:pb-20 lg:px-12"><Reveal><p className="eyebrow text-brass">Come as you are</p><h2 className="type-hero mt-6 max-w-[14ch]">A little Tehran, <span className="type-accent text-brass">waiting</span> for you.</h2><div className="mt-10"><TextLink to="/contact">Plan your visit</TextLink></div></Reveal></div>
  </section>;
}