interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({
  children,
  isLoading,
  className,
  ...props
}: ButtonProps) => (
  <button
    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
    disabled={isLoading || props.disabled}
    {...props}
  >
    {isLoading && (
      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
    )}
    {children}
  </button>
);
