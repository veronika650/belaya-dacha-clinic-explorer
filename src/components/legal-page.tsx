import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background px-5 py-8 font-body text-foreground sm:py-14">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="ghost" className="mb-8 -ml-3">
          <Link to="/"><ArrowLeft /> На сайт клиники</Link>
        </Button>
        <p className="section-label">Клиника на Белой Даче</p>
        <h1 className="mt-4 break-words font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h1>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </div>
      </div>
    </main>
  );
}