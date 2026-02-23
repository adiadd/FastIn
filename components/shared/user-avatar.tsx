import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

const pxMap = {
  sm: 32,
  md: 40,
  lg: 64,
  xl: 96,
};

export function UserAvatar({
  src,
  alt,
  size = "md",
  className,
}: UserAvatarProps) {
  const initials = alt
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <Avatar className={cn(sizeMap[size], className)}>
      <Image
        src={src}
        alt={alt}
        width={pxMap[size]}
        height={pxMap[size]}
        className="aspect-square h-full w-full object-cover"
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
