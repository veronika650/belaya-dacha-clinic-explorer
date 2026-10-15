import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import clinicTreatment from "@/assets/clinic-yandex-treatment.jpg.asset.json";

export function ServicePage({ service }: { service: (typeof services)[number] }) {
  return (
    <main className="min-h-screen bg-background font-body text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <Button asChild variant="ghost" className="-ml-3"><Link to="/" hash="services"><ArrowLeft /> Все услуги</Link></Button>
      </div>
      <section className="border-b border-border px-5 pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">Клиника на Белой Даче · {service.number}</p>
          <h1 className="mt-4 max-w-3xl break-words font-display text-3xl font-semibold leading-tight sm:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{service.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 px-5 shadow-none"><a href="tel:+79255572931"><Phone /> Записаться по телефону</a></Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-5 shadow-none"><Link to="/documents">Документы и прайс-лист <ArrowUpRight /></Link></Button>
          </div>
        </div>
      </section>
      <section className="px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">Когда обратиться</h2>
            <ul className="mt-6 space-y-4">{service.reasons.map(reason => <li key={reason} className="flex gap-3 text-sm leading-relaxed"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />{reason}</li>)}</ul>
            <h2 className="mt-10 font-display text-2xl font-semibold">Что можно обсудить с врачом</h2>
            <ul className="mt-5 divide-y divide-border border-y border-border">{service.options.map(option => <li key={option} className="py-4 text-sm leading-relaxed text-muted-foreground">{option}</li>)}</ul>
          </div>
          <figure className="self-start">
            <img src={clinicTreatment.url} alt="Процедурный кабинет Клиники на Белой Даче — фото из Яндекс Карт" width={1536} height={1024} className="aspect-[3/2] w-full bg-secondary object-contain" />
            <figcaption className="mt-3 text-xs text-muted-foreground">Кабинет клиники · фотография из Яндекс Карт</figcaption>
          </figure>
        </div>
      </section>
      <section className="bg-secondary px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-semibold">Как проходит лечение</h2>
          <ol className="mt-8 grid gap-7 sm:grid-cols-3">{service.steps.map((step, index) => <li key={step} className="border-t border-border pt-5"><span className="font-display text-sm font-semibold text-accent-strong">0{index + 1}</span><p className="mt-4 text-sm leading-relaxed">{step}</p></li>)}</ol>
        </div>
      </section>
      <section className="px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div><h2 className="font-display text-2xl font-semibold">{service.question}</h2><p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{service.answer}</p></div>
            <div><h2 className="font-display text-2xl font-semibold">Стоимость и план лечения</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Объём, сроки и стоимость определяются после осмотра. Полный прайс-лист пока не опубликован; актуальные цены можно уточнить по телефону клиники.</p><Button asChild variant="link" className="mt-4 h-auto justify-start p-0"><a href="tel:+79255572931"><Phone /> +7 (925) 557-29-31</a></Button></div>
          </div>
          <nav aria-label="Другие услуги" className="mt-12 border-t border-border pt-8">
            <h2 className="font-display text-lg font-semibold">Другие направления</h2>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4">{services.filter(item => item.slug !== service.slug).map(item => <Link key={item.slug} to="/services/$slug" params={{ slug: item.slug }} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">{item.title}<ArrowUpRight aria-hidden="true" className="size-4 shrink-0" /></Link>)}</div>
          </nav>
          <footer className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
            <Link to="/">Клиника на Белой Даче</Link><Link to="/doctors">Врачи</Link><Link to="/privacy">Политика конфиденциальности</Link>
            <p className="w-full">Информация носит ознакомительный характер и не заменяет консультацию специалиста. Имеются противопоказания.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}