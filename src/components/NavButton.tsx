import { LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type ButtonProps = ComponentProps<typeof Button>;
type NavButtonProps = Omit<ButtonProps, "children" | "asChild"> & {
  icon: LucideIcon;
  label: string;
  href?: string;
  iconSize?: number;
};

export default function NavButton({
  icon: Icon,
  label,
  href,
  iconSize,
  className,
  ...rest
}: NavButtonProps) {
  const content = <Icon size={iconSize} />;

  if (href) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label={label}
        title={label}
        className={`rounded-full ${className ?? ""}`}
        asChild
        {...rest}
      >
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className={`rounded-full ${className ?? ""}`}
      {...rest}
    >
      {content}
    </Button>
  );
}
