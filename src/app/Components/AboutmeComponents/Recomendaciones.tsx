import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const recommendations = [
  {
    title: "Online Courses",
    content: (
      <div>
        <p>Expand your skills with platforms like:</p>
        <ul className="list-disc pl-5">
          <li><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Coursera</a> - Offers courses from top universities and companies.</li>
          <li><a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Udemy</a> - Wide range of courses on various topics at affordable prices.</li>
          <li><a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Khan Academy</a> - Free courses on a wide range of subjects.</li>
          <li><a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">edX</a> - Courses from top institutions like Harvard and MIT.</li>
          <li><a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">LinkedIn Learning</a> - Professional development courses and tutorials.</li>
        </ul>
      </div>
    ),
    icon: "🎓"
  },
  {
    title: "YouTube Tutorials",
    content: (
      <div>
        <p>Discover free tutorials on channels like:</p>
        <ul className="list-disc pl-5">
          <li><a href="https://www.youtube.com/c/freeCodeCamp" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">freeCodeCamp</a> - Comprehensive tutorials on web development and programming.</li>
          <li><a href="https://www.youtube.com/c/TraversyMedia" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Traversy Media</a> - Clear and concise tutorials on various web development technologies.</li>
          <li><a href="https://www.youtube.com/c/TheNetNinja" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">The Net Ninja</a> - High-quality tutorials on modern web technologies.</li>
          <li><a href="https://www.youtube.com/c/FaztCode" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Fazt Code</a> - Tutorials on web development and programming with clear explanations.</li>
          <li><a href="https://www.youtube.com/c/Academind" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Academind</a> - Tutorials on various web development and JavaScript frameworks.</li>
        </ul>
      </div>
    ),
    icon: "🎥"
  },
  {
    title: "Coding Bootcamps",
    content: (
      <div>
        <p>Intensive programs to jumpstart your tech career, such as:</p>
        <ul className="list-disc pl-5">
          <li><a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">General Assembly</a> - Offers bootcamps in web development, UX/UI, and data science.</li>
          <li><a href="https://www.ironhack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Ironhack</a> - Coding bootcamps in web development, UX/UI, and data analytics.</li>
          <li><a href="https://www.lewagon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Le Wagon</a> - Known for its intensive web development programs.</li>
          <li><a href="https://www.springboard.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Springboard</a> - Offers bootcamps in web development, data science, and UX/UI design.</li>
          <li><a href="https://careerfoundry.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">CareerFoundry</a> - Programs in UX/UI, web development, and data analytics.</li>
        </ul>
      </div>
    ),
    icon: "💻"
  },
  {
    title: "Tech Podcasts",
    content: (
      <div>
        <p>Stay updated with the latest in tech through these informative podcasts:</p>
        <ul className="list-disc pl-5">
          <li><a href="https://softwareengineeringdaily.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Software Engineering Daily</a> - Interviews with industry experts on software engineering topics.</li>
          <li><a href="https://changelog.com/podcast" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">The Changelog</a> - Conversations with open source software developers and other tech experts.</li>
          <li><a href="https://www.codingblocks.net/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Coding Blocks</a> - Discussions on programming concepts and techniques.</li>
          <li><a href="https://developertea.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Developer Tea</a> - Short and focused discussions on software development and career advice.</li>
          <li><a href="https://devchat.tv/javascript-jabber/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">JavaScript Jabber</a> - Conversations about JavaScript and web development.</li>
        </ul>
      </div>
    ),
    icon: "🎧"
  }
];

function Recomendaciones() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center h-screen bg-gradient-to-b from-slate-950 to-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className='mx-4 sm:mx-8 lg:mx-20 w-full'>
        <motion.h1 
          className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 font-bold text-4xl sm:text-5xl lg:text-6xl text-center mb-12'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Skills
        </motion.h1>

        <div className='grid md:grid-cols-2 gap-12'>
          <div className="space-y-8">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                className={`bg-purple-700 bg-opacity-20 rounded-lg p-6 cursor-pointer transition-all ${index === activeIndex ? 'border-2 border-purple-500' : ''}`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{rec.icon}</span>
                  <h3 className="text-purple-300 text-xl font-semibold">{rec.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="bg-purple-900 bg-opacity-30 rounded-lg p-8 backdrop-blur-lg mr-10 ">
                  <h2 className="text-purple-300 text-3xl font-bold mb-4 ">{recommendations[activeIndex].title}</h2>
                  <div className="text-gray-300 text-lg leading-relaxed">
                    {recommendations[activeIndex].content}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recomendaciones;
