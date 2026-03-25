"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FooterCard from "@/components/sections/footer/FooterCard";
import { ArrowRight, CheckCircle, Code, Cloud, Handshake, Twitter, Linkedin, Github } from "lucide-react";

export default function HomePage() {
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
    { label: "Case Studies", href: "/" },
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

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Enterprise SaaS Platforms Built for Scale, Speed, and Intelligence"
          description="AERRATRIC TECHNOLOGY INC designs and develops modern software systems that help businesses operate smarter, move faster, and scale without limits."
          background={{"variant":"canvas-reveal"}}
          buttons={[
            { text: "Start Your Project", href: "/contact" },
            { text: "Explore Platform", href: "#services" }
          ]}
          mediaAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-futuristic-3d-abstract-tech-environmen-1774466846870-f80a5a46.png"
          marqueeItems={[
            { type: "text", text: "Intelligent Systems" },
            { type: "text", text: "Scalable Architecture" },
            { type: "text", text: "AI-Powered Solutions" },
            { type: "text", text: "Enterprise Performance" }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Our innovative solutions empower businesses across diverse sectors to achieve digital excellence."
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-grayscale-microsoft-logo-el-1774466846821-05a465fb.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-grayscale-google-logo-elega-1774466847171-a0105ce4.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-grayscale-amazon-logo-elega-1774466846093-4e3000e7.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-grayscale-apple-logo-elegan-1774466845125-fcfb08ce.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-grayscale-ibm-logo-elegant--1774466845787-bc571ea7.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-grayscale-salesforce-logo-e-1774466846750-bea234fa.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-minimalist-grayscale-oracle-logo-elega-1774466847332-5bc8a065.png"
          ]}
          names={[
            "Microsoft", "Google", "Amazon", "Apple", "IBM", "Salesforce", "Oracle"
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentySix
          title="Our Core Services"
          description="We provide end-to-end digital transformation, leveraging cutting-edge technology to build robust and intelligent platforms."
          features={[
            { title: "Strategy & Consulting", description: "Define your digital roadmap with expert insights and strategic planning for optimal impact.", buttonIcon: ArrowRight, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-conceptual-illustration-representing-s-1774466846510-2c3d653f.png" },
            { title: "Product Design & UX", description: "Craft intuitive, engaging, and performant user experiences that captivate your audience.", buttonIcon: ArrowRight, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-illustration-of-product-design-and-us-1774466846958-3e90806b.png" },
            { title: "Enterprise Engineering", description: "Build scalable, secure, and resilient software platforms tailored to your business needs.", buttonIcon: ArrowRight, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-illustration-of-enterprise-software-e-1774466846966-b866553b.png" },
            { title: "Cloud & DevOps", description: "Optimize your infrastructure for performance, reliability, and cost-efficiency in the cloud.", buttonIcon: ArrowRight, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-illustration-of-cloud-computing-and-d-1774466847229-e8377556.png" },
            { title: "AI & Automation", description: "Integrate artificial intelligence to automate operations and unlock new levels of intelligence.", buttonIcon: ArrowRight, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/an-illustration-of-ai-and-automation-fea-1774466846996-525b1eca.png" }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="case-studies" data-section="case-studies">
        <ProductCardTwo
          title="Pioneering Case Studies"
          description="Discover how AERRATRIC TECHNOLOGY INC has transformed businesses with bespoke, high-impact software solutions."
          products={[
            { id: "case-study-1", brand: "FinTech Innovator", name: "AI Analytics Platform", price: "Achieved 30% Efficiency", rating: 5, reviewCount: "Success Story", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-large-visual-panel-for-a-case-study-on-1774466847499-196ddc45.png" },
            { id: "case-study-2", brand: "Logistics Leader", name: "Enterprise Automation System", price: "Reduced Operational Costs by 25%", rating: 5, reviewCount: "Success Story", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-large-visual-panel-for-a-case-study-on-1774466847719-fc6db1a7.png" },
            { id: "case-study-3", brand: "SaaS Startup", name: "Scalable SaaS Dashboard", price: "Increased User Engagement by 40%", rating: 5, reviewCount: "Success Story", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-large-visual-panel-for-a-case-study-on-1774466848085-1e6cfea9.png" }
          ]}
          gridVariant="bento-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="stats" data-section="stats">
        <MetricCardThree
          title="Impactful Results, Proven Success"
          description="Our commitment to excellence is reflected in every project we deliver and every partnership we forge."
          metrics={[
            { id: "m1", icon: CheckCircle, title: "Solutions Delivered", value: "100+" },
            { id: "m2", icon: Code, title: "End-to-End SaaS", value: "Development" },
            { id: "m3", icon: Cloud, title: "Scalable Cloud", value: "Infrastructure" },
            { id: "m4", icon: Handshake, title: "Long-Term", value: "Partner" }
          ]}
          textboxLayout="default"
          animationType="depth-3d"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="What Our Partners Say"
          description="Hear directly from the leaders who have entrusted AERRATRIC TECHNOLOGY INC with their most critical digital initiatives."
          testimonials={[
            { id: "1", title: "Transformative Partnership", quote: "AERRATRIC TECHNOLOGY INC delivered an AI platform that revolutionized our data processing. Their expertise and dedication are truly world-class.", name: "Dr. Evelyn Reed", role: "CTO, Quantum Innovations", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-professional-headshot-of-a-female-cto--1774466846888-41f836fa.png" },
            { id: "2", title: "Unmatched Scalability", quote: "The SaaS solution built by AERRATRIC TECHNOLOGY INC handles our exponential growth seamlessly. Their architecture is incredibly robust.", name: "Mark Jensen", role: "CEO, NexGen Systems", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-professional-headshot-of-a-male-ceo-ma-1774466846763-f5789f4e.png" },
            { id: "3", title: "Beyond Expectations", quote: "From strategy to deployment, AERRATRIC TECHNOLOGY INC exceeded every expectation. Their team is a true partner in our digital journey.", name: "Sophia Chang", role: "VP of Digital Transformation, GlobalCorp", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-professional-headshot-of-a-female-vp-o-1774466847193-8e1dabec.png" },
            { id: "4", title: "Innovation at Its Best", quote: "Their ability to integrate complex AI models into our legacy systems was remarkable. AERRATRIC TECHNOLOGY INC is a leader in digital innovation.", name: "James Rodriguez", role: "Director of IT, Enterprise Solutions", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-professional-headshot-of-a-male-direct-1774466846254-b8e4f723.png" }
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