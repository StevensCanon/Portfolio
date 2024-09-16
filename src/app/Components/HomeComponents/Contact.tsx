"use client";
import React, { useState } from "react";
import { FaLocationDot, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "../../../app/globals.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "./Particles";

function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gradient-to-b from-slate-950 to-black h-screen flex flex-col justify-center items-center p-4">
      <Particles/>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-5xl md:text-6xl mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
          Let&apos;s Connect
        </h1>
        <p className="text-xl text-zinc-300 mb-12">
          Have a question or a proposal? I&apos;d love to hear from you!
        </p>

        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Image
            className="rounded-full shadow-lg"
            src="/images/contacts12.png"
            alt="Contact"
            width={300}
            height={300}
          />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black bg-opacity-70 rounded-full flex items-center justify-center"
              >
                <a
                  href="mailto:elian.canon@uniminuto.edu.co"
                  className="text-white text-xl hover:text-purple-400 transition-colors"
                >
                  Send an Email
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <ContactInfo
            icon={<FaLocationDot />}
            text="Colombia, Villavicencio"
          />
          <ContactInfo icon={<MdEmail />} text="elian.canon@uniminuto.edu.co" />
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <SocialLink href="#" icon={<FaGithub />} />
          <SocialLink href="#" icon={<FaLinkedin />} />
        </div>
      </motion.div>
    </section>
  );
}

// Tipado de props para ContactInfo
type ContactInfoProps = {
  icon: React.ReactNode;
  text: string;
};

function ContactInfo({ icon, text }: ContactInfoProps) {
  return (
    <motion.div
      className="flex items-center justify-center text-xl text-zinc-300"
      whileHover={{ scale: 1.05, color: "#a855f7" }}
    >
      {icon}
      <p className="ml-2">{text}</p>
    </motion.div>
  );
}

// Tipado de props para SocialLink
type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
};

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      className="text-3xl text-zinc-300 hover:text-purple-500 transition-colors"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}

export default Contact;
