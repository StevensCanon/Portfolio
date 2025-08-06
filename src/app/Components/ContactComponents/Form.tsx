import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Particles } from '@/components/magicui/particles';

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-600" },
    { icon: FaGithub, href: "#", color: "hover:text-gray-400" },
  ];

  const contactInfo = [
    { icon: FaPhone, text: "+57 3182883093" },
    { icon: FaEnvelope, text: "canonsuarezstevens11@gmail.com" },
  ];

  return (
    <div className="relative h-screen bg-gradient-to-b from-slate-950 to-black text-gray-200 py-12 px-4">
      <Particles />
      <div className="relative max-w-7xl mx-auto z-10"> {/* Añadir z-10 */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-20 text-white"
        >
          Let&apos;s Create Something <span className="text-purple-400">Amazing</span> Together
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Get in Touch</h2>
            <p className="text-gray-200 mb-8">
              I&apos;m always open to new opportunities, collaborations, or just a friendly chat. 
              Don&apos;t hesitate to reach out!
            </p>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="text-white text-xl" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl text-purple-400 font-semibold mb-4">Connect with Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl ${link.color} transition-colors`}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">My Availability</h3>
              <div className="bg-slate-900 p-4 rounded-lg">
                <p className="text-purple-400 font-semibold">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM (EST)</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4 bg-slate-900 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Send Me a Message</h2>
            {['name', 'email', 'subject', 'message'].map((field) => (
              <motion.div key={field} whileHover={{ scale: 1.02 }} className="flex flex-col">
                <label htmlFor={field} className="text-sm font-medium text-zinc-300 mb-1 capitalize">
                  {field}
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    name={field}
                    rows={4}  // Changed to number
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                    className="bg-slate-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                    className="bg-slate-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md font-bold text-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center pb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Why Work With Me?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-30">
            {[
              { title: "Innovative Solutions", description: "I bring creative and cutting-edge ideas to every project." },
              { title: "Attention to Detail", description: "Pixel-perfect designs and clean, efficient code are my passion." },
              { title: "Timely Delivery", description: "I respect deadlines and ensure projects are completed on time." },
            ].map((item, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
