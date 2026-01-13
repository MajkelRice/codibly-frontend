import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export const Card = ({ children, title, className }: CardProps) => (
  <div
    className={clsx(
      "bg-bg-surface border border-border-subtle rounded-xl shadow-lg overflow-hidden",
      className
    )}
  >
    {title && (
      <div className="px-6 py-4 border-b border-border-subtle bg-bg-app/30">
        <h3 className="font-semibold text-text-main">{title}</h3>
      </div>
    )}
    <div className="p-6">{children}</div>
  </div>
);
