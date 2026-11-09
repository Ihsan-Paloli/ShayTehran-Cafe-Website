import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shay Tehran — Tea, Food & People" },
      { name: "description", content: "Persian hospitality on a Hyderabad table. Warm tea, comforting food and a room that keeps the world at a distance." },
      { property: "og:title", content: "Shay Tehran — Tea, Food & People" },
      { property: "og:description", content: "Persian hospitality on a Hyderabad table. Warm tea, comforting food and a room that keeps the world at a distance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});