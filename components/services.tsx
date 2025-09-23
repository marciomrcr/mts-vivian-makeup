"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/types/content";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

interface ServicesProps {
  services: Service[];
}
const whatsappUrl =
  "https://wa.me/5591982459071?text=Olá! Gostaria de agendar um horário no Viviane Studio.";

export default function Services({ services }: ServicesProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Nossos{" "}
            <span className="bg-gradient-to-r from-rose-gold to-champagne bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformamos sua beleza com técnicas avançadas e produtos de alta
            qualidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 h-full overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-rose-gold text-black">
                    Premium
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-display font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-rose-gold flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

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
                      Agende Agora mesmo!
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-black transition-all duration-300"
          >
            Ver Todos os Serviços
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
