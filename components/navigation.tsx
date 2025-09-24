"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const whatsappUrl =
    "https://wa.me/5591982459071?text=Olá! Gostaria de agendar um horário no Viviane Studio.";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 py-2 md:py-3 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16 md:h-20 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl lg:text-3xl font-display font-bold text-white cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <span className="bg-gradient-to-r from-rose-gold to-champagne bg-clip-text text-transparent">
                Viviane Studio
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-rose-gold transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-white hover:text-rose-gold transition-colors"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection("videos")}
                className="text-white hover:text-rose-gold transition-colors"
              >
                Trabalhos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-rose-gold transition-colors"
              >
                Contato
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                asChild
                className="bg-gradient-to-r from-rose-gold to-champagne text-black hover:from-champagne hover:to-rose-gold"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-rose-gold transition-colors rounded-md hover:bg-white/10 z-50"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 relative z-50"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left text-white hover:text-rose-gold transition-colors py-2"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="block w-full text-left text-white hover:text-rose-gold transition-colors py-2"
                >
                  Produtos
                </button>
                <button
                  onClick={() => scrollToSection("videos")}
                  className="block w-full text-left text-white hover:text-rose-gold transition-colors py-2"
                >
                  Trabalhos
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left text-white hover:text-rose-gold transition-colors py-2"
                >
                  Contato
                </button>

                <div className="pt-4 space-y-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-rose-gold to-champagne text-black hover:from-champagne hover:to-rose-gold"
                  >
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      >
        <Button
          asChild
          size="default"
          className="rounded-full w-11 h-11 md:w-12 md:h-12 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="h-5 w-5" />
          </a>
        </Button>
      </motion.div>
    </>
  );
}
