import clsx from "clsx";

export const Badge = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "success";
}) => {
  const styles =
    variant === "success"
      ? "bg-success/10 text-success border-success/20"
      : "bg-primary/10 text-primary border-primary/20";

  return (
    <span
      className={clsx(
        "px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider",
        styles
      )}
    >
      {children}
    </span>
  );
};
