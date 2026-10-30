import type { Metadata } from "next";
import { Engagements } from "@/components/Engagements";
import { FeatureRow } from "@/components/FeatureRow";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { SelectedWork } from "@/components/SelectedWork";
import { WhoWeAre } from "@/components/WhoWeAre";

export const metadata: Metadata = {
  title: { absolute: "Pixel Craft · Software engineer in Accra" },
  description:
    "Pixel Craft designs and builds web products, mobile tools, and APIs from East Legon, Accra. View selected work, ways to work together, and a downloadable CV.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureRow />
      <WhoWeAre />
      <SelectedWork />
      <Engagements />
      <Process />
    </>
  );
}
