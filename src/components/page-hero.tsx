import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

export function PageHero({ image, eyebrow, title, accent, children, imagePosition = "object-center" }: { image: string; eyebrow: string; title: string; accent?: string; children?: ReactNode; imagePosition?: string }) {
  return <section className="relative min-h-[88svh] overflow-hidden bg-surface-deep text-hero-foreground"><SiteHeader /><img src={image} alt="" className={cn("hero-image warm-image absolute inset-0 size-full object-cover", imagePosition)} /><div className="bg-hero-scrim absolute inset-0" /><div className="hero-grain absolute inset-0" /><div className="relative mx-auto flex min-h-[88svh] max-w-[1500px] flex-col justify-end px-5 pt-36 pb-14 sm:px-8 sm:pb-20 lg:px-12"><p className="eyebrow text-brass">{eyebrow}</p><h1 className="type-hero mt-6 max-w-[16ch]">{title}{accent && <> <span className="type-accent text-brass">{accent}</span></>}</h1>{children && <div className="mt-8 max-w-sm text-sm leading-relaxed text-hero-foreground/65">{children}</div>}</div></section>;
}