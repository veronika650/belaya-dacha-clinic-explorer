import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, FileText, GraduationCap, ListChecks } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

const documents = [
  { icon: BadgeCheck, title: "Действующая лицензия", text: "Скан лицензии на медицинскую деятельность и приложений к ней.", status: "Скан пока не опубликован" },
  { icon: FileText, title: "Полные реквизиты клиники", text: "Юридическое наименование, ИНН, КПП, ОГРН, юридический адрес и банковские реквизиты.", status: "Реквизиты пока не опубликованы" },
  { icon: ListChecks, title: "Полный прайс-лист", text: "Перечень медицинских услуг с актуальными ценами и датой утверждения.", status: "Прайс-лист пока не опубликован" },
  { icon: GraduationCap, title: "Квалификация врачей", text: "Сведения об образовании, специальности и действующей аккредитации или сертификатах специалистов.", status: "Сведения пока не опубликованы" },
];

export const Route = createFileRoute("/documents")({
  head: () => ({ meta: [
    { title: "Документы — Клиника на Белой Даче" },
    { name: "description", content: "Раздел документов Клиники на Белой Даче: лицензия, реквизиты, полный прайс-лист и квалификация врачей. Статус публикации материалов." },
    { property: "og:title", content: "Документы — Клиника на Белой Даче" },
    { property: "og:description", content: "Лицензия, реквизиты клиники, цены на услуги и сведения о квалификации врачей." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Documents,
});

function Documents() {
  return (
    <LegalPage title="Документы">
      <p>Официальные документы и сведения о клинике. Материалы ещё не опубликованы. Уточнить информацию можно по телефону <a href="tel:+79255572931">+7 (925) 557-29-31</a>.</p>
      <div className="divide-y divide-border border-y border-border">
        {documents.map(({ icon: Icon, title, text, status }) => (
          <section key={title} className="flex gap-4 py-7 sm:gap-5">
            <Icon aria-hidden="true" className="mt-1 size-6 shrink-0 text-primary" />
            <div className="min-w-0">
              <h2>{title}</h2>
              <p>{text}</p>
              <p className="mt-3 text-xs font-semibold text-muted-foreground">{status}</p>
            </div>
          </section>
        ))}
      </div>
      <nav aria-label="Правовые документы" className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
        <Link to="/privacy">Политика конфиденциальности</Link>
        <Link to="/personal-data-consent">Согласие на обработку персональных данных</Link>
      </nav>
    </LegalPage>
  );
}