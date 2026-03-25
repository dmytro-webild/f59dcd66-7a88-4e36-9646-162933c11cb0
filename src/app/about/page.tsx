"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FooterCard from "@/components/sections/footer/FooterCard";
import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home", href: "/" },
    { name: "Services", id: "services", href: "/" },
    { name: "Case Studies", id: "case-studies", href: "/" },
    { name: "About", id: "about", href: "/about" },
    { name: "Contact", id: "contact", href: "/contact" },
  ];

  const footerNavItems = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" }
  ];

  const footerSolutionsItems = [
    { label: "Services", href: "/" },
    { label: "Case Studies", href: "#" },
    { label: "AI Integration", href: "#" }
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="compact"
      sizing="largeSmallSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={navItems} brandName="AERRATRIC TECHNOLOGY INC" />
      </div>

      <div id="about-page-about" data-section="about-page-about">
        <MetricSplitMediaAbout
          title="Driving Innovation and Growth"
          description="AERRATRIC TECHNOLOGY INC is at the forefront of digital transformation, empowering enterprises to leverage AI and scalable platforms for a competitive edge. We focus on innovation, strategic partnership, and long-term value creation, ensuring every solution built is precise, premium, and intentional."
          metrics={[
            { value: "50+", title: "Global Clients" },
            { value: "10+", title: "Years Experience" },
            { value: "95%", title: "Project Success" }
          ]}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-abstract-visualization-representing-d-1774466846797-579b5b7f.png"
        />
      </div>

      <div id="about-page-capabilities" data-section="about-page-capabilities">
        <FeatureCardTwentySix
          title="Integrated Capabilities & Industry Expertise"
          description="Our robust platforms and specialized industry knowledge drive unparalleled business outcomes. We deliver custom solutions across diverse sectors including Technology, Healthcare, Logistics, Finance, Construction, Education, and Retail."
          features={[
            { title: "Custom Platforms & Automation", description: "Tailored software solutions designed to meet unique business requirements and scale with your growth, streamlining operations and enhancing efficiency.", buttonIcon: ArrowRight, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-conceptual-illustration-for-custom-pla-1774466847156-365a5d89.png" },
            { title: "AI & Data Integration", description: "Seamlessly embed artificial intelligence into your workflows for predictive capabilities and advanced analytics, building powerful data infrastructures for actionable insights.", buttonIcon: ArrowRight, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-conceptual-illustration-for-ai-data-in-1774466846978-50e86b53.png" },
            { title: "Enterprise-Grade Engineering", description: "Develop scalable, secure, and resilient software platforms with our expert engineering team, ensuring high performance and future-proof solutions.", buttonIcon: ArrowRight, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-conceptual-illustration-for-enterprise-1774466846201-38353835.png" }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="AERRATRIC TECHNOLOGY INC"
          copyrightText="© 2024 AERRATRIC TECHNOLOGY INC. All rights reserved."
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/aerrartic", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/company/aerrartic-technology-inc", ariaLabel: "LinkedIn" },
            { icon: Github, href: "https://github.com/aerrartic", ariaLabel: "GitHub" }
          ]}
          columns={[
            { title: "Company", items: footerNavItems },
            { title: "Solutions", items: footerSolutionsItems },
            { title: "Resources", items: [
                { label: "Blog", href: "#" },
                { label: "Support", href: "#" },
                { label: "Docs", href: "#" }
              ]
            },
            { title: "Contact", items: [
                { label: "hello@aerrartictechnology.com", href: "mailto:hello@aerrartictechnology.com" },
                { label: "(866) 319-3883", href: "tel:+18663193883" },
                { label: "3404 North Cascade Avenue, Colorado Springs, CO 80907", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}