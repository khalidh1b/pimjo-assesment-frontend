import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  TemplatesSection,
  TestimonialsSection,
  NewsletterSection,
} from "@/components/landing"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TemplatesSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
};

export default LandingPage;