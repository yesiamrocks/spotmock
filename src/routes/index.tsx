import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/site/Home";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "SpotMock — Design That Performs" },
      { name: "description", content: "Performance-driven design for creators, sellers, and healthcare brands. Thumbnails, ad creatives, landing pages, and brand identity engineered to convert." },
    ],
  }),
});
