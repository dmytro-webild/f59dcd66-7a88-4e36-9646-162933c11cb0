"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
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

      <div id="contact-page-cta" data-section="contact-page-cta">
        <ContactCTA
          tag="Let's Talk"
          title="Ready to Transform Your Business?"
          description="Reach out to us today to discuss your next big project and discover how AERRATRIC TECHNOLOGY INC can accelerate your digital future. We're located at: 3404 North Cascade Avenue, Colorado Springs, CO 80907. Call us at: (866) 319-3883 or email: hello@aerrartictechnology.com"
          buttons={[
            { text: "Start Your Project" }
          ]}
          background={{"variant":"animated-grid"}}
          useInvertedBackground={false}
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