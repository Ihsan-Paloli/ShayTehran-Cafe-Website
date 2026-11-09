import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";
import { contact } from "@/lib/shay-assets";

export function SiteFooter() {
  return <footer className="bg-surface-deep px-5 pt-16 pb-9 text-hero-foreground sm:px-8 sm:pt-20 lg:px-12">
    <div className="mx-auto max-w-[1500px]">
      <div className="grid gap-12 md:grid-cols-[1.4fr_auto_auto] md:items-start">
        <div><BrandMark /><p className="mt-7 max-w-[15rem] text-sm leading-relaxed text-hero-foreground/50">More than a cup, it’s a culture.</p></div>
        <nav className="grid gap-2.5 text-sm text-hero-foreground/70"><Link to="/">Home</Link><Link to="/story">Our story</Link><Link to="/menu">The menu</Link><Link to="/contact">Contact</Link></nav>
        <div className="grid gap-2.5 text-sm text-hero-foreground/70"><span className="max-w-[16rem] leading-relaxed">{contact.address}</span><span>{contact.hours}</span><a href={contact.instagramHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">Instagram <ArrowUpRight className="size-3.5" /></a></div>
      </div>
      <div className="mt-16 flex justify-between border-t border-hero-foreground/12 pt-5 text-[0.62rem] uppercase tracking-[0.18em] text-hero-foreground/40"><span>© 2026 Shay Tehran</span><span>Kochi</span></div>
    </div>
  </footer>;
}