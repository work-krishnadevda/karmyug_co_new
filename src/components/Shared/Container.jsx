import { cn } from "@/lib/utils";

/**
 * Shared max-width + gutter wrapper used by every section across the site.
 * Keeps horizontal rhythm consistent from 320px up to 1920px.
 */
export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </Tag>
  );
}
