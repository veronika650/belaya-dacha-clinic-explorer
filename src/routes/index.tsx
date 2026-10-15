import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import clinicFacade from "@/assets/clinic-yandex-facade.jpg.asset.json";
import clinicTreatment from "@/assets/clinic-yandex-treatment.jpg.asset.json";
import clinicEntrance from "@/assets/clinic-yandex-entrance.jpg.asset.json";
import { services } from "@/lib/services";

const phone = "+7 (925) 557-29-31";
const mapUrl = "https://yandex.ru/maps/-/CXEhFCMJ";

const benefits: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: ShieldCheck, title: "Бережный подход", text: "Обсуждаем каждый шаг лечения" },
  { icon: Stethoscope, title: "Всё в одном месте", text: "От диагностики до восстановления" },
  { icon: CalendarDays, title: "Удобная запись", text: "Работаем ежедневно до 20:00" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Клиника на Белой Даче — стоматология в Котельниках" },
      { name: "description", content: "Лечение, гигиена, имплантация, протезирование и ортодонтия в Котельниках. Кузьминская улица, 15." },
      { property: "og:title", content: "Клиника на Белой Даче" },
      { property: "og:description", content: "Современная стоматология рядом с домом. Ежедневно с 09:00 до 20:00." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const openBooking = () => {
    setSent(false);
    setConsentGiven(false);
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background pb-20 font-body text-foreground md:pb-0">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-hero-foreground/15 bg-hero/55 text-hero-foreground backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="font-display text-[15px] font-semibold leading-tight">
            Клиника на Белой Даче
            <span className="mt-0.5 block font-body text-[10px] font-semibold uppercase text-hero-foreground/65">Стоматология · Котельники</span>
          </a>
          <nav className="hidden items-center gap-3 text-sm font-medium md:flex" aria-label="Основная навигация">
            <a href="#services" className="transition-opacity hover:opacity-65">Услуги</a>
            <a href="#approach" className="transition-opacity hover:opacity-65">О клинике</a>
            <Link to="/doctors" className="transition-opacity hover:opacity-65">Врачи</Link>
            <a href="#reviews" className="transition-opacity hover:opacity-65">Отзывы</a>
            <a href="#contacts" className="transition-opacity hover:opacity-65">Контакты</a>
            <Link to="/documents" className="transition-opacity hover:opacity-65">Документы</Link>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+79255572931" className="hidden text-sm font-semibold lg:block">{phone}</a>
            <Button onClick={openBooking} className="h-10 bg-accent px-5 text-accent-foreground shadow-none hover:bg-accent/90">Записаться</Button>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen((value) => !value)} className="text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground md:hidden" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-hero-foreground/15 bg-hero px-5 py-5 md:hidden" aria-label="Мобильная навигация">
            <div className="grid gap-4 text-base font-medium">
              {[['Услуги', '#services'], ['О клинике', '#approach'], ['Отзывы', '#reviews'], ['Контакты', '#contacts']].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
              <Link to="/documents" onClick={() => setMenuOpen(false)}>Документы</Link>
              <Link to="/doctors" onClick={() => setMenuOpen(false)}>Врачи</Link>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden text-hero-foreground">
        <img src={clinicFacade.url} alt="Фасад Клиники на Белой Даче на Кузьминской улице, 15 — фото из Яндекс Карт" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-28 lg:px-8 lg:pb-16">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase text-hero-foreground/75">
              <span className="h-px w-8 bg-accent" />
              Стоматология рядом с домом
            </div>
            <h1 className="max-w-[14ch] font-display text-4xl font-semibold leading-[1.06] sm:text-6xl lg:text-7xl">
              Клиника на Белой Даче
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-hero-foreground/80 sm:text-lg">
              Внимательно слушаем, понятно объясняем и составляем план лечения без лишнего. Чтобы вы чувствовали себя спокойно с первого визита.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button onClick={openBooking} size="lg" className="h-13 bg-accent px-6 text-base text-accent-foreground shadow-none hover:bg-accent/90">
                Записаться на приём <ArrowUpRight />
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 border-hero-foreground/35 bg-hero-foreground/5 px-6 text-base text-hero-foreground shadow-none backdrop-blur-md hover:bg-hero-foreground/15 hover:text-hero-foreground">
                <a href="tel:+79255572931"><Phone /> {phone}</a>
              </Button>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-hero-foreground/20 pt-5 text-sm text-hero-foreground/75">
            <span className="flex items-center gap-2"><Clock3 className="size-4 text-accent" /> Ежедневно 09:00–20:00</span>
            <span className="flex items-center gap-2"><MapPin className="size-4 text-accent" /> Кузьминская улица, 15</span>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4 py-6 sm:px-6 first:pl-0 last:pr-0">
              <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
              <div><p className="font-display text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-muted-foreground">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="scroll-mt-20 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-label">Направления</p>
              <h2 className="section-title mt-3">Здоровая улыбка — комплексная работа</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground lg:justify-self-end lg:text-base">Собрали основные направления стоматологии, чтобы диагностику и лечение можно было пройти последовательно, в знакомом месте.</p>
          </div>
          <div className="mt-12 border-t border-border">
            {services.map((service) => (
              <Link key={service.number} to="/services/$slug" params={{ slug: service.slug }} className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-border py-5 text-left transition-colors hover:bg-secondary sm:grid-cols-[4rem_0.8fr_1.2fr_auto] sm:gap-6 sm:px-4 sm:py-7">
                <span className="font-display text-xs font-semibold text-accent-strong">{service.number}</span>
                <span className="font-display text-base font-semibold sm:text-lg">{service.title}</span>
                <span className="hidden text-sm leading-relaxed text-muted-foreground sm:block">{service.text}</span>
                <span className="grid size-9 place-items-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ChevronRight className="size-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-20 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[680px]">
            <img src={clinicTreatment.url} alt="Процедурный кабинет Клиники на Белой Даче — фото из Яндекс Карт" loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-contain" />
          </div>
          <div className="flex flex-col justify-between px-5 py-14 lg:px-16 lg:py-20">
            <div>
              <p className="text-xs font-semibold uppercase text-primary-foreground/60">Наш подход</p>
              <h2 className="mt-4 max-w-[12ch] font-display text-3xl font-semibold leading-tight sm:text-5xl">Спокойствие начинается с ясности</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/75">Сначала разбираемся в ситуации, показываем варианты и отвечаем на вопросы. Вы заранее понимаете, что будет происходить и почему.</p>
            </div>
            <blockquote className="mt-14 border-l-2 border-accent pl-5">
              <p className="font-display text-lg leading-relaxed sm:text-xl">«Внимательное отношение и врачи, которым можно доверять»</p>
              <footer className="mt-3 text-xs uppercase text-primary-foreground/55">Пациенты отмечают в отзывах</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-20 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">Отзывы</p>
            <h2 className="section-title mt-3">Здесь ценят внимание</h2>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Открыть карточку клиники <ArrowUpRight className="size-4" /></a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="border-t-2 border-accent bg-secondary p-6 sm:p-8">
              <Sparkles className="size-5 text-accent-strong" />
              <p className="mt-8 font-display text-xl leading-relaxed">Пациенты выделяют внимательное отношение, профессиональную помощь и возможность спокойно объяснить свою проблему.</p>
              <p className="mt-6 text-xs font-semibold uppercase text-muted-foreground">По отзывам посетителей</p>
            </article>
            <article className="border-t-2 border-primary bg-secondary p-6 sm:p-8 sm:mt-12">
              <ShieldCheck className="size-5 text-primary" />
              <p className="mt-8 font-display text-xl leading-relaxed">Особенно часто отмечают врачей, которым можно доверять, и помощь в решении проблемы со здоровьем.</p>
              <p className="mt-6 text-xs font-semibold uppercase text-muted-foreground">По отзывам посетителей</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2px] lg:mx-0">
            <img src={clinicEntrance.url} alt="Вход в Клинику на Белой Даче — фото из Яндекс Карт" loading="lazy" width={1024} height={1536} className="aspect-[2/3] w-full object-cover" />
            <span className="absolute bottom-3 left-3 bg-background/85 px-3 py-2 text-[10px] font-semibold uppercase text-muted-foreground backdrop-blur">Забота в каждой детали</span>
          </div>
          <div className="lg:pl-10">
            <p className="section-label">Первый визит</p>
            <h2 className="section-title mt-3 max-w-[15ch]">Начните с консультации</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Расскажите, что вас беспокоит. Администратор уточнит детали и подберёт подходящее время приёма.</p>
            <Button onClick={openBooking} size="lg" className="mt-7 h-13 px-6 text-base shadow-none">Выбрать время <ArrowUpRight /></Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="scroll-mt-20 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-border pb-14 lg:grid-cols-2">
            <div><p className="section-label">Контакты</p><h2 className="section-title mt-3">Мы рядом</h2></div>
            <div className="grid gap-7 sm:grid-cols-2">
              <div><p className="text-xs font-semibold uppercase text-muted-foreground">Адрес</p><p className="mt-2 font-display text-lg font-semibold">Котельники,<br />Кузьминская улица, 15</p></div>
              <div><p className="text-xs font-semibold uppercase text-muted-foreground">Время работы</p><p className="mt-2 font-display text-lg font-semibold">Ежедневно<br />09:00–20:00</p></div>
              <div><p className="text-xs font-semibold uppercase text-muted-foreground">Телефон</p><a href="tel:+79255572931" className="mt-2 block font-display text-lg font-semibold text-primary">{phone}</a></div>
              <div><p className="text-xs font-semibold uppercase text-muted-foreground">На карте</p><a href={mapUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-display text-lg font-semibold text-primary">Построить маршрут <ArrowUpRight className="size-4" /></a></div>
            </div>
          </div>
          <footer className="flex flex-col gap-3 pt-8 text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <span className="font-display font-semibold text-foreground">Клиника на Белой Даче</span>
            <span>Информация на сайте не заменяет консультацию специалиста.</span>
            <Link to="/doctors" className="underline underline-offset-4 hover:text-primary">Врачи</Link>
            <Link to="/documents" className="underline underline-offset-4 hover:text-primary">Документы</Link>
            <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">Политика конфиденциальности</Link>
          </footer>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background/92 p-3 backdrop-blur-xl md:hidden">
        <Button asChild variant="outline" size="icon" className="h-12 w-12 shrink-0"><a href="tel:+79255572931" aria-label="Позвонить"><Phone /></a></Button>
        <Button onClick={openBooking} className="h-12 flex-1 text-base shadow-none">Записаться на приём</Button>
      </div>

      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-overlay/60 p-0 backdrop-blur-sm sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-labelledby="booking-title">
          <div className="max-h-[90svh] w-full max-w-lg overflow-y-auto bg-background p-6 shadow-2xl sm:rounded-lg sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div><p className="section-label">Запись</p><h2 id="booking-title" className="mt-2 font-display text-2xl font-semibold">Записаться на приём</h2></div>
              <Button variant="ghost" size="icon" onClick={() => setBookingOpen(false)} aria-label="Закрыть"><X /></Button>
            </div>
            {sent ? (
              <div className="py-10 text-center">
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-secondary text-primary"><Check /></span>
                <p className="mt-4 font-display text-xl font-semibold">Заявка подготовлена</p>
                <p className="mt-2 text-sm text-muted-foreground">Для подтверждения записи позвоните в клинику.</p>
                <Button asChild className="mt-6 h-12 px-6"><a href="tel:+79255572931"><Phone /> {phone}</a></Button>
              </div>
            ) : (
              <form className="mt-7 space-y-4" onSubmit={(event) => { event.preventDefault(); if (!consentGiven) return; setSent(true); }}>
                <label className="block text-sm font-semibold">Ваше имя<input required name="name" className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/20" placeholder="Как к вам обращаться" /></label>
                <label className="block text-sm font-semibold">Телефон<input required name="phone" type="tel" className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/20" placeholder="+7 (___) ___-__-__" /></label>
                <label className="block text-sm font-semibold">Что вас интересует<select name="service" className="mt-2 h-12 w-full rounded-md border border-input bg-background px-4 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-ring/20"><option>Консультация</option>{services.map((service) => <option key={service.number}>{service.title}</option>)}</select></label>
                <div className="flex items-start gap-3">
                  <Checkbox id="booking-consent" name="personalDataConsent" required checked={consentGiven} onCheckedChange={(checked) => setConsentGiven(checked === true)} className="mt-0.5 size-5" aria-labelledby="booking-consent-label" />
                  <div className="text-xs leading-relaxed text-muted-foreground">
                    <label id="booking-consent-label" htmlFor="booking-consent" className="cursor-pointer">Я согласен(на) с обработкой персональных данных.</label>{" "}
                    <Link to="/personal-data-consent" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Текст согласия</Link>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">Информация об обработке данных — в <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">политике конфиденциальности</Link>.</p>
                <Button type="submit" disabled={!consentGiven} className="h-12 w-full text-base shadow-none">Отправить заявку</Button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}