import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Award,
  Code,
  Zap,
  Users,
  Lightbulb,
  Target,
  MessageCircle,
  Briefcase,
  ExternalLink,
  Download,
} from "lucide-react";
import { TimelineDemo } from "./Timeline";

const qualities = [
  { icon: Code, text: "Desarrollo Innovador" },
  { icon: Zap, text: "Soluciones Rápidas" },
  { icon: Users, text: "Trabajo en Equipo" },
  { icon: Lightbulb, text: "Pensamiento Creativo" },
  { icon: Target, text: "Autonomía" },
  { icon: MessageCircle, text: "Comunicación Efectiva" },
  { icon: Award, text: "Autodidacta" },
  { icon: Briefcase, text: "Responsable" },
];

export const QualitiesMarquee = () => {
  return (
    <div className="bg-gradient-to-b from-purple-950/20 via-black to-black">
      <h1 className=" text-4xl font-bold text-center text-white py-10">
        Mis cualidades
      </h1>
      <div className="relative overflow-hidden py-6 ">
        <motion.div
          className="flex space-x-12 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...qualities, ...qualities].map((quality, index) => {
            const Icon = quality.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-3 text-purple-200"
              >
                <Icon className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">{quality.text}</span>
              </div>
            );
          })}
        </motion.div>
        <section className="py-20">
          <TimelineDemo />
        </section>
      </div>
    </div>
  );
};
