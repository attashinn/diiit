import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Programs } from "@/components/site/Programs";
import { About } from "@/components/site/About";
import { Events } from "@/components/site/Events";
import { VideoBanner } from "@/components/site/VideoBanner";
import { Testimonials } from "@/components/site/Testimonials";
import { Partnerships } from "@/components/site/Partnerships";
import { FindWay } from "@/components/site/FindWay";
import { News } from "@/components/site/News";
import { Cta } from "@/components/site/Cta";
import { Divider } from "@/components/site/SectionHeading";
import { cld, images } from "@/data/site";

const ogImage = cld(images.hero, 1200);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daffodil Institute of IT (DIIT) — Technology & Business Education in Dhaka" },
      {
        name: "description",
        content:
          "BBA, CSE, Tourism & Hospitality, MBA, MSc and PG Diplomas under National University. Explore programs, news, events and admissions at DIIT.",
      },
      { property: "og:title", content: "Daffodil Institute of IT (DIIT)" },
      {
        property: "og:description",
        content: "Empowering students with superior education in technology and business.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Programs />
      <About />
      <Events />
      <VideoBanner />
      <Testimonials />
      <Partnerships />
      <FindWay />
      <Divider />
      <News />
      <Cta />
    </>
  );
}
