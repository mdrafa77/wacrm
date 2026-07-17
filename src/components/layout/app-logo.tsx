import Image from "next/image";
import { cn } from "@/lib/utils";

interface AppLogoProps {
  className?: string;
  priority?: boolean;
}

export function AppLogo({ className, priority = false }: AppLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-slate-950 px-2.5 py-1.5",
        className,
      )}
    >
      <Image
        src="/crm-logo.png"
        alt="CRM"
        width={704}
        height={148}
        priority={priority}
        className="h-auto w-full object-contain"
      />
    </span>
  );
}
