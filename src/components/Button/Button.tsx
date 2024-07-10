import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

const VARIANTS = {
  primary:
    "bg-blue200 rounded-full px-10 py-2 md:py-3 md:text-base font-medium text-sm",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: keyof typeof VARIANTS;
}

const Button = ({
  children,
  icon,
  variant = "primary",
  disabled,
  className,
  id,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={cn(
        "flex w-fit items-center justify-center gap-2 rounded-full text-white whitespace-nowrap",
        variant && VARIANTS[variant],
        disabled && "border-0 bg-darkGrey text-white",
        className
      )}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
      {!!icon && icon}
    </button>
  );
};

export default Button;
