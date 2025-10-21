"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { Clock, Facebook, Heart, Instagram, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const SocialIcon = ({ name }: { name: string }) => {
  switch (name.toLowerCase()) {
    case "instagram":
      return <Instagram className="h-5 w-5" />;
    case "facebook":
      return <Facebook className="h-5 w-5" />;
    case "tiktok":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl =
    "https://wa.me/5591982459071?text=Olá! Gostaria de agendar um horário no Viviane Studio.";

  const socials = [
    {
      name: "Instagram",
      url: "https://instagram.com/mtsvivianmakeup",
      followers: "15.2K",
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display font-bold">
              <span className="bg-gradient-to-r from-rose-gold to-champagne bg-clip-text text-transparent">
                Viviane Studio
              </span>
            </h3>
            <p className="text-gray-300 text-sm">
              Transformando beleza em arte através de técnicas avançadas e
              produtos de alta qualidade.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <Button
                  key={social.name}
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-gray-700 text-gray-300 hover:border-rose-gold hover:text-rose-gold"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#services"
                  className="hover:text-rose-gold transition-colors"
                >
                  Hair Style
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-rose-gold transition-colors"
                >
                  Make Up
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-rose-gold transition-colors"
                >
                  Tratamentos de Beleza
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-rose-gold transition-colors"
                >
                  Produtos Premium
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-rose-gold" />
                <span>(91) 98245-9071</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-rose-gold" />
                <span>Atendimento agendado</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Agende Agora</h4>
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-black"
              >
                <a href="tel:+5591982459071">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Viviane Studio. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-rose-gold" />
              <span>para sua beleza</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
