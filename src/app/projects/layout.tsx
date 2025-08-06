import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos - Portfolio Steven',
  description: 'Explora mi portafolio de proyectos desarrollados con tecnologías modernas como React, Next.js, TypeScript y más.',
  keywords: ['proyectos', 'portfolio', 'react', 'next.js', 'typescript', 'desarrollo web'],
  openGraph: {
    title: 'Proyectos - Portfolio Steven',
    description: 'Explora mi portafolio de proyectos desarrollados con tecnologías modernas como React, Next.js, TypeScript y más.',
    url: '/projects',
    siteName: 'Portfolio Steven',
    images: [
      {
        url: '/images/frontend.png',
        width: 1200,
        height: 630,
        alt: 'Proyectos de Desarrollo Web',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyectos - Portfolio Steven',
    description: 'Explora mi portafolio de proyectos desarrollados con tecnologías modernas como React, Next.js, TypeScript y más.',
    images: ['/images/frontend.png'],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 