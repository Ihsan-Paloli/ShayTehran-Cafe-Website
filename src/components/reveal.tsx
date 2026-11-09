import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, as: Tag = "div", image = false, delay = 0 }: {
  children: ReactNode; className?: string; as?: ElementType; image?: boolean; delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { setVisible(true); observer.disconnect(); }
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <Tag ref={ref} data-visible={visible ? "true" : "false"} style={delay ? { transitionDelay: `${delay}ms` } : undefined} className={cn(image ? "reveal reveal-image" : "reveal", className)}>{children}</Tag>;
}