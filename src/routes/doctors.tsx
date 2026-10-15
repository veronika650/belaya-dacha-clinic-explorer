import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BookOpen, GraduationCap, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicTreatment from "@/assets/clinic-yandex-treatment.jpg.asset.json";

export const Route = createFileRoute("/doctors")({
  head: () => ({ meta: [
    { title: "Врачи — Клиника на Белой Даче" },
    { name: "description", content: "Врачи Клиники на Белой Даче: личные истории, квалификация и повышение квалификации. Сведения готовятся к публикации." },
    { property: "og:title", content: "Врачи — Клиника на Белой Даче" },
    { property: "og:description", content: "Знакомство с врачами клиники: выбор профессии, образование и профессиональное развитие. Статус публикации сведений." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Doctors,
});

function Doctors() {
  return (
    <main className="min-h-screen bg-background font-body text-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:pt-12 lg:px-8">
        <Button asChild variant="ghost" className="-ml-3 mb-8">
          <Link to="/"><ArrowLeft /> На сайт клиники</Link>
        </Button>
        <p className="section-label">Клиника на Белой Даче</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Врачи</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Сведения о команде готовятся к публикации. Фотографии, личные истории и профессиональные данные появятся после подтверждения клиникой.</p>

        <figure className="mt-10">
          <img src={clinicTreatment.url} alt="Процедурный кабинет Клиники на Белой Даче — фотография из Яндекс Карт" width={1536} height={1024} className="max-h-[420px] w-full bg-secondary object-contain" />
          <figcaption className="mt-3 text-xs text-muted-foreground">Процедурный кабинет клиники · фото из Яндекс Карт</figcaption>
        </figure>

        <div className="mt-10 grid gap-8 border-y border-border py-8 sm:grid-cols-3">
          <section>
            <Heart aria-hidden="true" className="size-5 text-primary" />
            <h2 className="mt-4 font-display text-lg font-semibold">Почему стоматология</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Личные истории врачей о выборе профессии пока не опубликованы.</p>
          </section>
          <section>
            <GraduationCap aria-hidden="true" className="size-5 text-primary" />
            <h2 className="mt-4 font-display text-lg font-semibold">Квалификация</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Образование, специальности и сведения об аккредитации пока не опубликованы.</p>
          </section>
          <section>
            <BookOpen aria-hidden="true" className="size-5 text-primary" />
            <h2 className="mt-4 font-display text-lg font-semibold">Повышение квалификации</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Подтверждённые курсы, даты обучения и сертификаты пока не опубликованы.</p>
          </section>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-xl font-semibold">Уточнить, кто ведёт приём</h2>
            <p className="mt-2 text-sm text-muted-foreground">Информацию о специалистах можно узнать по телефону клиники.</p>
          </div>
          <Button asChild size="lg" className="h-12 shrink-0 px-5 shadow-none">
            <a href="tel:+79255572931"><Phone /> +7 (925) 557-29-31</a>
          </Button>
        </div>
        <footer className="mt-12 border-t border-border pt-6">
          <Link to="/documents" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Документы клиники <ArrowUpRight className="size-4" /></Link>
        </footer>
      </div>
    </main>
  );
}