"use client";

import React, { useState } from "react";
import { FaLocationDot, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "../../../app/globals.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gradient-to-b from-purple-900/50 via-white to-white 
  dark:from-fuchsia-600/20 dark:via-black dark:to-black dark:bg-gradient-to-b min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl mx-auto flex flex-col items-center text-center"
      >
        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-900 to-fuchsia-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-purple-700 dark:to-fuchsia-400">
          Hablemos!
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 mb-10 max-w-2xl">
          Tienes alguna pregunta o propuesta? Me encantaría escuchar de ti!
        </p>

        {/* Imagen */}
        <motion.div
          className="relative inline-block mb-10"
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Image
            className="rounded-full object-cover"
            src="/images/contacts12.png"
            alt="Contact"
            width={260}
            height={260}
          />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 backdrop-blur-sm  rounded-full flex items-center justify-center"
              >
                <a
                  href="mailto:elian.canon@uniminuto.edu.co"
                  className="text-zinc-700 dark:text-white text-lg font-medium"
                >
                  Enviar un correo
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 mb-10 w-full max-w-xl">
          <ContactInfo
            icon={<FaLocationDot className="text-2xl" />}
            text="Colombia, Villavicencio"
          />
          <ContactInfo
            icon={<MdEmail className="text-2xl" />}
            text="canonsuarezstevens11@gmail.com"
          />
        </div>

        {/* Redes sociales */}
        <div className="flex flex-wrap justify-center gap-10">
          <SocialLink href="#" icon={<FaGithub />} />
          <SocialLink href="#" icon={<FaLinkedin />} />
        </div>
      </motion.div>
    </section>
  );
}

type ContactInfoProps = {
  icon: React.ReactNode;
  text: string;
};

function ContactInfo({ icon, text }: ContactInfoProps) {
  return (
    <motion.div
      className="text-zinc-700 dark:text-white flex items-center justify-center text-base sm:text-lg"
      whileHover={{ scale: 1.05 }}
    >
      {icon}
      <p className="ml-2">{text}</p>
    </motion.div>
  );
}

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
};

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      className="text-3xl text-zinc-700 dark:text-white hover:text-purple-700 dark:hover:text-purple-700 transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}

export default Contact;
