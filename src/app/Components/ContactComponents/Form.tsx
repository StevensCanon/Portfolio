'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  const socialLinks = [
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-400' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-500' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-400' },
    { icon: FaGithub, href: '#', color: 'hover:text-gray-400' },
  ];

  const contactInfo = [
    { icon: FaPhone, text: '+57 318 288 3093' },
    { icon: FaEnvelope, text: 'canonsuarezstevens11@gmail.com' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-900/50 via-white to-white dark:from-fuchsia-600/20 dark:via-black dark:to-black dark:bg-gradient-to-b py-12 px-4">
      <div className="relative max-w-7xl mx-auto z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-20"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-900 to-fuchsia-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-purple-700 dark:to-fuchsia-400">
            Conectemos
          </span>{' '}
          y creemos algo increíble
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-t from-purple-900 to-fuchsia-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-purple-700 dark:to-fuchsia-400">
              Contáctame
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              Siempre estoy abierto a nuevas oportunidades, colaboraciones o
              simplemente una charla. ¡No dudes en escribirme!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="text-purple-700 dark:text-purple-300 text-xl" />
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-t from-purple-900 to-fuchsia-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-purple-700 dark:to-fuchsia-400 font-semibold mb-4">
              Mis redes
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl ${link.color} transition-colors`}
                  aria-label="Red social"
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-t from-purple-900 to-fuchsia-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-purple-700 dark:to-fuchsia-400">
                Disponibilidad
              </h3>
              <div className=" border border-purple-900 p-4 rounded-lg">
                <p className="text-zinc-600 dark:text-zinc-400 font-semibold">
                  Lunes a Viernes
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 ">
                  9:00 AM - 6:00 PM (hora Colombia)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4 dark:bg-neutral-900 bg-white/50 p-8 rounded-xl shadow-lg mx-8"
          >
            <h2 className="text-3xl font-bold mb-6">Envíame un mensaje</h2>

            {(
              ['name', 'email', 'subject', 'message'] as Array<keyof FormData>
            ).map(field => (
              <motion.div
                key={field}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col"
              >
                <label
                  htmlFor={field}
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1 capitalize  "
                >
                  {field === 'name'
                    ? 'Nombre'
                    : field === 'email'
                      ? 'Correo electrónico'
                      : field === 'subject'
                        ? 'Asunto'
                        : 'Mensaje'}
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    name={field}
                    rows={4}
                    value={formData[field]}
                    onChange={handleChange}
                    className=" text-neutral-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500  border border-zinc-300 dark:border dark:border-zinc-500"
                    required
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className=" text-neutral-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500  border border-zinc-300 dark:border dark:border-zinc-500 "
                    required
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-md font-bold text-lg hover:from-purple-700 hover:to-purple-900 transition-colors"
            >
              Enviar mensaje
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center pb-20 mx-8"
        >
          <h2 className="text-3xl font-bold mb-6">
            ¿Por qué trabajar conmigo?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Soluciones innovadoras',
                description:
                  'Aporto ideas creativas y actuales a cada proyecto.',
              },
              {
                title: 'Atención al detalle',
                description:
                  'Me apasionan los diseños precisos y código limpio.',
              },
              {
                title: 'Entregas puntuales',
                description:
                  'Cumplo los plazos y aseguro que los proyectos lleguen a tiempo.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-purple-900 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
