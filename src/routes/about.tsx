import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — SpotMock" },
      { name: "description", content: "SpotMock is a boutique performance-design studio. Meet the team, our story, and the 9 reasons brands choose us over freelancers, agencies, and in-house hires." },
    ],
  }),
});