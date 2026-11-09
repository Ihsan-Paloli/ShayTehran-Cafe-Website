import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

const links = [{ href: "/", label: "Home" }, { href: "/story", label: "Story" }, { href: "/menu", label: "Menu" }, { href: "/contact", label: "Contact" }];

export function SiteHeader({ tone = "light", position = "overlay", logoSrc }: { tone?: "light" | "dark"; position?: "overlay" | "static"; logoSrc?: string | undefined }) {
  const [open, setOpen] = useState(false);
  const location = useRouterState({ select: (state) => state.location.pathname });
  return (
    <header className={cn("z-40 px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12", position === "overlay" ? "absolute inset-x-0 top-0" : "relative border-b border-primary/15 bg-secondary/55 pb-6 sm:pb-8", tone === "light" ? "text-hero-foreground" : "text-foreground")}>
      <div className={cn("mx-auto flex max-w-[1500px] items-center justify-between gap-6", position === "static" && "lg:grid lg:grid-cols-[1fr_auto_1fr]")}>
        <Link to="/" aria-label="Shay Tehran home" className="w-fit" data-testid="link-brand"><BrandMark src={logoSrc} /></Link>
        <nav className={cn("hidden items-center gap-9 lg:flex", position === "static" && "rounded-full border border-primary/15 bg-background/65 px-7 py-3 shadow-sm")} aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} to={link.href} className={cn("nav-link", location === link.href || (link.href !== "/" && location.startsWith(link.href)) ? "nav-link-active" : "")} data-testid={`link-nav-${link.label.toLowerCase()}`}>{link.label}</Link>)}
        </nav>
        <div className={cn("flex items-center gap-3", position === "static" && "lg:justify-self-end")}>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} className="inline-flex size-11 items-center justify-center rounded-full border border-current/30 bg-surface-deep/15 backdrop-blur-sm lg:hidden" data-testid="button-toggle-navigation">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
      </div>
      {open && <div className="fixed inset-0 z-50 bg-surface-deep p-7 text-hero-foreground lg:hidden">
        <div className="flex items-center justify-between"><BrandMark /><button type="button" onClick={() => setOpen(false)} aria-label="Close navigation" className="button-icon size-11" data-testid="button-close-navigation"><X className="size-5" /></button></div>
        <nav className="my-20 flex flex-col" aria-label="Mobile navigation">
          {links.map((link, index) => <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className="grid grid-cols-[2.25rem_1fr] items-baseline border-b border-hero-foreground/12 py-5 font-display text-4xl" data-testid={`link-mobile-${link.label.toLowerCase()}`}><span className="font-sans text-[0.6rem] tracking-[0.2em] text-hero-foreground/45">0{index + 1}</span>{link.label}</Link>)}
        </nav>
      </div>}
    </header>
  );
}