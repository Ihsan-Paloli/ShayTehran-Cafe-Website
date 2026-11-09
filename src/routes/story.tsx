import { createFileRoute } from "@tanstack/react-router";
import StoryPage from "@/pages/story";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Shay Tehran" },
      { name: "description", content: "From one unforgettable sip in 2017 to eleven friends and a shared dream brought to life." },
      { property: "og:title", content: "Our Story — Shay Tehran" },
      { property: "og:description", content: "From one unforgettable sip in 2017 to eleven friends and a shared dream brought to life." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoryPage,
});