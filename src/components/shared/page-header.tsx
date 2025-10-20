import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">{description}</p>
        {children}
      </div>
    </section>
  );
}
