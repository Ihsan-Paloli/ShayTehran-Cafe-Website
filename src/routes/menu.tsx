import { createFileRoute } from "@tanstack/react-router";
import MenuPage from "@/pages/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu — Shay Tehran" },
      { name: "description", content: "Explore Irani tea, burgers, bites and loaded fries made to order and meant to share." },
      { property: "og:title", content: "The Menu — Shay Tehran" },
      { property: "og:description", content: "Explore Irani tea, burgers, bites and loaded fries made to order and meant to share." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});