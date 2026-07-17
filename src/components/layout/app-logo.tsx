import Image from "next/image";
import { cn } from "@/lib/utils";

interface AppLogoProps {
  className?: string;
  priority?: boolean;
}

export function AppLogo({ className, priority = false }: AppLogoProps) {
  return (
    <span className={cn("inline-flex items-center justify-center", className)}>
      <Image
        src="/crm-logo-black.png"
        alt="CRM"
        width={704}
        height={148}
        priority={priority}
        className="app-logo-black h-auto w-full object-contain"
      />
      <Image
        src="/crm-logo-white.png"
        alt="CRM"
        width={704}
        height={148}
        priority={priority}
        className="app-logo-white h-auto w-full object-contain"
      />
    </span>
  );
}
