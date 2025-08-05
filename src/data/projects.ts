import { IconType } from "react-icons";
import { FaHtml5, FaCss3, FaBootstrap, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";

export interface CardData {
  title: string;
  description: string;
  image: string;
  icons: IconType[];
  link: string;
}

export const cardData: CardData[] = [
  {
    title: "GrandSports",
    description:
      "This project is an e-commerce platform for the sale of sports clothing, developed with Laravel and styled with Bootstrap. It offers an intuitive shopping experience, with features such as user management, shopping cart, and secure payment system. Its adaptable interface ensures a consistent experience across different devices.",
    image: "/images/GrandSports.png",
    icons: [TbBrandLaravel, FaBootstrap],
    link: "https://example.com/grandsports",
  },
  {
    title: "Sneakers",
    description:
      "A sneaker online store project, developed with HTML5, CSS, and Bootstrap. It offers a modern and attractive shopping experience, with a responsive design that adapts to different devices. Users can explore a wide range of sneakers, view product details, and make secure purchases.",
    image: "/images/Sneakers.png",
    icons: [FaHtml5, FaCss3, FaBootstrap],
    link: "https://example.com/sneakers",
  },
  {
    title: "RAM Memory Simulator",
    description:
      "An interactive RAM memory simulator developed with React, Next.js, and Tailwind CSS. This project allows users to experience how RAM works by simulating read and write processes. It utilizes modern technologies to provide a smooth and responsive user experience.",
    image: "/images/RAM.png",
    icons: [FaReact, SiNextdotjs, SiTailwindcss],
    link: "https://ram-memory-simulator.vercel.app/",
  },
  {
    title: "MrParrilla",
    description:
      "Goalshirts is a platform for selling football-related shirts, created with HTML5 and Bootstrap. It offers a wide selection of shirts from popular teams and exclusive designs for football enthusiasts. The responsive design ensures a smooth browsing experience on all devices.",
    image: "/images/MrParrilla.png",
    icons: [FaHtml5, FaCss3, FaBootstrap],
    link: "https://example.com/goalshirts",
  },
  {
    title: "Library Manager",
    description:
      "A library manager developed with Next.js, React, and Tailwind CSS. This project allows users to manage their book collection, add new books, perform searches, and keep track of loans. The combination of modern technologies offers an intuitive interface and advanced functionality.",
    image: "/images/Library.png",
    icons: [FaReact, SiNextdotjs, SiTailwindcss],
    link: "https://example.com/library-manager",
  },
  {
    title: "Aprendex",
    description:
      "Aprendex is an online learning platform with login and registration features, developed with Next.js, React, Tailwind CSS, and Bootstrap. It offers a wide variety of programming and technology courses. Users can register, log in, and access exclusive content, all with a friendly and secure interface.",
    image: "/images/AprendeX.png",
    icons: [FaReact, SiNextdotjs, FaBootstrap, SiTailwindcss],
    link: "https://aprendex.vercel.app/",
  },
  {
    title: "Magis TV",
    description:
      "Magis TV is a platform for watching movies and series, developed with HTML5, CSS, and Bootstrap. It offers a wide variety of movies and series, with a responsive design that adapts to different devices. Users can watch movies and series online, all with a friendly and secure interface.",
    image: "/images/MagisTV.png",
    icons: [ SiNextdotjs, SiTailwindcss],
    link: "https://magis-tv.vercel.app/",
  },
];
