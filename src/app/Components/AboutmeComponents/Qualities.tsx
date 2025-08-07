'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Code,
  Zap,
  Users,
  Lightbulb,
  Target,
  MessageCircle,
  Briefcase,
} from 'lucide-react';
import { TimelineDemo } from './Timeline';

type Quality = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
};

const qualities: Quality[] = [
  { icon: Code, text: 'Desarrollo Innovador' },
  { icon: Zap, text: 'Soluciones Rápidas' },
  { icon: Users, text: 'Trabajo en Equipo' },
  { icon: Lightbulb, text: 'Pensamiento Creativo' },
  { icon: Target, text: 'Autonomía' },
  { icon: MessageCircle, text: 'Comunicación Efectiva' },
  { icon: Award, text: 'Autodidacta' },
  { icon: Briefcase, text: 'Responsable' },
];

export const QualitiesMarquee: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900/50 via-white to-white dark:from-fuchsia-600/20 dark:via-black dark:to-black dark:bg-gradient-to-b">
      <section className="">
        <TimelineDemo />
      </section>
      <h1 className="text-4xl font-bold text-center text-black dark:text-white py-10">
        Mis cualidades
      </h1>

      <div className="relative overflow-hidden py-10">
        <motion.div
          className="flex space-x-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...qualities, ...qualities].map((quality, index) => {
            const Icon = quality.icon;
            return (
              <div
                key={`${quality.text}-${index}`}
                className="flex items-center space-x-2 text-zinc-600 dark:text-purple-300"
              >
                <Icon className="w-4 h-4 text-zinc-600 dark:text-purple-300" />
                <span className="text-sm font-medium">{quality.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
