import Image from "next/image";
import logo from "@/public/brand/logo.jpg";

export function Logo({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src={logo}
      alt="Café 10/23"
      width={size}
      height={size}
      className={`rounded-full ring-2 ring-espresso/10 ${className}`}
    />
  );
}
