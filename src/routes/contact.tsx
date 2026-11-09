import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/pages/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Shay Tehran" },
      { name: "description", content: "Visit Shay Tehran for a warm table, a fresh pot and Persian-inspired hospitality." },
      { property: "og:title", content: "Visit Us — Shay Tehran" },
      { property: "og:description", content: "Visit Shay Tehran for a warm table, a fresh pot and Persian-inspired hospitality." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});