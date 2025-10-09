import * as React from "react";
import { HomeIcon, File, UsersRound } from "lucide-react";
import Link from "next/link";
import NavButton from "./NavButton";
import { ModeToggle } from "./ModeToggle";

export type HeaderProps = React.ComponentPropsWithoutRef<"header"> & {};

export default function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={`sticky top-0 z-20 h-12 animate-slide border-b bg-background p-2 ${className ?? ""}`}
      {...props}
    >
      <div className="flex h-8 w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href="/home"
            className="ml-0 flex items-center justify-center gap-2"
            title="Home"
          >
            <h2 className="m-0 mt-1 hidden text-xl font-bold sm:block">
              Computer Repair Shop
            </h2>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UsersRound} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
