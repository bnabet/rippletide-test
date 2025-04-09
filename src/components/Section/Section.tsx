import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className }: SectionProps) {
  return <section className={className}>{children}</section>;
}

export function SectionHeader({ children, className }: SectionProps) {
  return (
    <div className={`mb-2 flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({ children, className }: SectionProps) {
  return (
    <h2 className={`text-foreground text-xl leading-9 font-bold ${className}`}>
      {children}
    </h2>
  );
}

export function SectionActions({ children, className }: SectionProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>{children}</div>
  );
}

export function SectionContent({ children, className }: SectionProps) {
  return <div className={className}>{children}</div>;
}
