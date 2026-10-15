import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find(item => item.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Клиника на Белой Даче` : "Услуга недоступна — Клиника на Белой Даче";
    const description = loaderData ? `${loaderData.text} Консультация в Котельниках: показания, этапы и запись в Клинику на Белой Даче.` : "Запрашиваемая услуга не найдена.";
    return { meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(!loaderData ? [{ name: "robots", content: "noindex" }] : []),
    ] };
  },
  component: Service,
});

function Service() {
  const service = Route.useLoaderData();
  return <ServicePage service={service} />;
}