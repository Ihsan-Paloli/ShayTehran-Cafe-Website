import { cn } from "@/lib/utils";
import logo from "@/assets/logo_shaytehran.png";

export function BrandMark({ className, src }: { className?: string; src?: string | undefined }) {
  return (
    <img
      src={src ?? logo}
      alt="Shay Tehran"
      className={cn("h-[4.5rem] w-auto object-contain sm:h-20", className)}
    />
  );
}