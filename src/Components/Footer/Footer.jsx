import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiChevronRight, FiMapPin, FiPhone, FiMail, FiGlobe, 
  FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiFacebook,
  FiArrowUp, FiHeart
} from 'react-icons/fi';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  const width = typeof window !== "undefined" ? window.innerWidth : 1000;
  const height = typeof window !== "undefined" ? window.innerHeight : 1000;

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" }
    ],
    services: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "Cloud Solutions", href: "#" },
      { name: "AI & ML", href: "#" }
    ],
    resources: [
      { name: "Docs", href: "#" },
      { name: "Support", href: "#" },
      { name: "Webinars", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <FiTwitter />, href: "#" },
    { icon: <FiLinkedin />, href: "#" },
    { icon: <FiGithub />, href: "#" },
    { icon: <FiInstagram />, href: "#" },
    { icon: <FiFacebook />, href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black text-white pt-20 pb-8 overflow-hidden">

      {/* Background dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '10px 10px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * width, y: -100, opacity: 0 }}
            animate={{
              y: height + 100,
              opacity: [0, 0.4, 0],
              x: Math.random() * width
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4  mb-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400"> Hartron</h2>
            <p className="text-gray-400 mt-4 text-sm">
              Modern tech solutions for web, cloud & AI. We build scalable digital products.
            </p>

            <div className="mt-5 space-y-2 text-sm text-gray-400">
              <div className="flex gap-2 items-center"><FiMapPin /> Haryana, India</div>
              <div className="flex gap-2 items-center"><FiPhone /> +91 9*******6</div>
              <div className="flex gap-2 items-center"><FiMail /> info@email.com</div>
            </div>
          </div>

          Links
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h3 className="font-bold mb-4 capitalize">{key}</h3>
              <ul className="space-y-2">
                {links.map((l, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }}>
                    <a href={l.href} className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                      <FiChevronRight className="text-xs" />
                      {l.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex justify-between items-center border-t border-gray-800 pt-6 flex-wrap gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 All rights reserved
          </p>

          <div className="flex gap-3">
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-9 h-9 bg-gray-800 flex items-center justify-center rounded-full"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 p-3 rounded-full shadow-lg"
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}