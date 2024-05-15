import FeaturesTab from "@/components/features";
import HeroBanner from "@/components/heroBanner";
import ScaleApps from "@/components/scaleApps";
import Ecosystem from "@/components/ecosystem";
import BlogSection from "@/components/blog";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturesTab />
      <ScaleApps />
      <Ecosystem />
      <BlogSection />
    </>
  );
}
