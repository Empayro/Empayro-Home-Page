import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterNewsletter from "./FooterNewsletter";

/* ---------------- DATA ---------------- */

const footerSections = [
  {
    title: "Quick Links",
    links: [
      "Home",
      "Why Empayro",
      "HR Toolkit",
      "Blogs",
      "Privacy Policy",
      "Security",
      "Terms & Condition",
    ],
  },
  {
    title: "Our Products",
    links: ["HRMS", "Payroll", "PMS", "ATS", "Chat", "Survey", "Assets"],
  },
  {
    title: "Compare with",
    links: [
      "Keka",
      "Workable",
      "Kredily",
      "GreytHR",
      "Global HR",
      "Smartoffice",
      "Superworks",
    ],
  },
  {
    title: "Book Demo",
    links: [
      "All In One",
      "HRMS",
      "Project",
      "Payroll",
      "ATS",
      "EMS",
      "Performance",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Contact Us",
      "Blogs",
      "Pricing",
      "Testimonial",
      "Career",
    ],
  },
];

const socialLinks = [
  {
    icon: <FaInstagram color="#E4405F" size={24} />,
    url: "https://www.instagram.com",
  },
  {
    icon: <FaFacebook color="#1877F2" size={24} />,
    url: "https://www.facebook.com",
  },
  {
    icon: <FaYoutube color="#FF0000" size={24} />,
    url: "https://www.youtube.com",
  },
  {
    icon: <FaTwitter color="#1DA1F2" size={24} />,
    url: "https://www.twitter.com",
  },
  {
    icon: <FaLinkedin color="#0077B5" size={24} />,
    url: "https://www.linkedin.com",
  },
];

/* ---------------- COMPONENT ---------------- */

function Footer() {
  return (
    <footer className="text-black max-w-full">
      <div className="w-full">
        <div className="rounded-b-[80px] border-none z-10 backface-hidden bg-[#f2f1f3] overflow-hidden relative">
          
          {/* LINKS SECTION */}
          <div className="py-20 max-w-350 mx-auto flex flex-wrap justify-between items-start border-b gap-x-7">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4">{section.title}</h3>

                <div className="flex flex-col gap-y-2 text-[14px]">
                  {section.links.map((link) => (
                    <Link
                      key={link}
                      to="/pricing"
                      className="hover:text-primary"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* COPYRIGHT SECTION */}
          <div className="py-20 max-w-350 flex items-center justify-between mx-auto">
            
            <div>© 2026 Empayro . All rights reserved.</div>

            <div className="flex items-center gap-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <FooterNewsletter />
      </div>
    </footer>
  );
}

export default Footer;