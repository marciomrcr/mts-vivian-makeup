"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Contact as ContactType, Social } from "@/types/content";
import { motion } from "framer-motion";
import { Clock, ExternalLink, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

interface ContactProps {
  socials: Social[];
  contacts: ContactType;
}

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
      return <ExternalLink className="h-5 w-5" />;
  }
};

export default function Contact({ socials, contacts }: ContactProps) {
  const whatsappUrl = `https://wa.me/${contacts.whatsapp.number.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(contacts.whatsapp.message)}`;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-rose-gold to-champagne bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Agende sua consulta e transforme sua beleza conosco
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-rose-gold rounded-full flex items-center justify-center">
                    <FaWhatsapp className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      WhatsApp
                    </h3>
                    <p className="text-gray-300">Atendimento rápido</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{contacts.phone.display}</p>
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="h-4 w-4 mr-2" />
                    Conversar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-rose-gold rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-gray-300">Estamos aqui para você</p>
                  </div>
                </div>
                <div className="text-gray-300 space-y-2">
                  <div className="flex justify-between">
                    <span>Segunda à Sexta:</span>
                    <span>{contacts.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>{contacts.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>{contacts.hours.sunday}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                Siga-nos nas{" "}
                <span className="text-rose-gold">Redes Sociais</span>
              </h3>
              <p className="text-gray-300 mb-8">
                Acompanhe nossos trabalhos e fique por dentro das novidades
              </p>
            </div>

            <div className="space-y-4">
              {socials.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-rose-gold rounded-full flex items-center justify-center">
                            <SocialIcon name={social.name} />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-white">
                              {social.name}
                            </h4>
                            <p className="text-gray-300">
                              {social.followers} seguidores
                            </p>
                          </div>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-black"
                        >
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Seguir
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rose-gold to-champagne p-8 rounded-lg text-center"
            >
              <h4 className="text-2xl font-display font-bold text-black mb-4">
                Pronta para uma Transformação?
              </h4>
              <p className="text-black/80 mb-6">
                Agende sua consulta agora e descubra o que podemos fazer por
                você
              </p>
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-gray-800"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="h-4 w-4 mr-2" />
                  Agendar Agora
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
