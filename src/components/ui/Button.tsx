import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "brand" | "outline-light";

const variantClass: Record<Variant, string> = {
  primary: "",
  secondary: "btn-secondary",
  brand: "btn-brand",
  "outline-light": "btn-outline-light",
};

interface Props extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  size?: "md" | "sm";
  arrow?: boolean;
  children: ReactNode;
}

export function Button({ variant = "primary", size = "md", arrow, children, href, ...rest }: Props) {
  const cls = ["btn", variantClass[variant], size === "sm" ? "btn-sm" : ""].filter(Boolean).join(" ");
  const external = typeof href === "string" && /^(https?:|mailto:|tel:)/.test(href);
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" size={16} className="arrow" />}
    </>
  );
  if (external) {
    const isWeb = (href as string).startsWith("http");
    return (
      <a className={cls} href={href as string} {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link className={cls} href={href} {...rest}>
      {content}
    </Link>
  );
}
