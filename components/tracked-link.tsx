"use client";

import { track } from "@vercel/analytics";
import type { ComponentProps } from "react";

type Props = ComponentProps<"a"> & { event: "Directions" | "Menu" | "Messenger" | "Instagram" | "Facebook" };

/** An <a> that reports a click to Vercel Analytics. External links open in a new tab. */
export function TrackedLink({ event, onClick, href = "", ...rest }: Props) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      onClick={(e) => {
        track(event, { href });
        onClick?.(e);
      }}
      {...rest}
    />
  );
}
