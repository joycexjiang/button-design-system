"use client"

import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "hud" | "secondary"
}

/**
 * NavButton uses global CSS classes defined in globals.css:
 *
 *   .nav-button
 *   .nav-button--primary
 *   .nav-button--hud
 *   .nav-button--secondary
 *   .chrome-text
 *   .shadow-text
 *
 */
const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    // If you want the "chrome text" look on the PRIMARY variant, 
    // we can wrap children in .chrome-text + a behind .shadow-text:
    const isPrimary = variant === "primary"

    return (
      <button
        ref={ref}
        /* "nav-button" is the base, plus variant-specific classes. */
        className={cn(
          "nav-button",
          variant === "primary" && "nav-button--primary",
          variant === "hud" && "nav-button--hud",
          variant === "secondary" && "nav-button--secondary",
          className
        )}
        {...props}
      >
        {isPrimary ? (
          <>
            {/* The top metallic gradient text */}
            <span className="chrome-text">{children}</span>
            {/* The behind shadow copy */}
            <span className="shadow-text">{children}</span>
          </>
        ) : (
          <>
            {/* For HUD/secondary, just show the normal text */}
            {children}
          </>
        )}
      </button>
    )
  }
)

NavButton.displayName = "NavButton"
export { NavButton }