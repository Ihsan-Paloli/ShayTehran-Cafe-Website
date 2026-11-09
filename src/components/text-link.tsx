import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function TextLink({ to, children, className }: { to: "/" | "/story" | "/menu" | "/contact"; children: ReactNode; className?: string }) {
  return <Link to={to} className={cn("text-link", className)} data-testid={`link-${to.slice(1) || "home"}`}>{children}<ArrowRight className="size-3.5" /></Link>;
}
export function TextLinkExternal({ href, children, className, icon }: { href: string; children: ReactNode; className?: string; icon?: ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className={cn("text-link", className)} data-testid="link-external">{children}{icon ?? <ArrowRight className="size-3.5" />}</a>;
}