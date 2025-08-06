import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Mí - Portfolio Steven',
  description: 'Conoce más sobre mi experiencia, habilidades y trayectoria profesional como desarrollador full stack.',
  keywords: ['desarrollador', 'full stack', 'experiencia', 'habilidades', 'portfolio'],
  openGraph: {
    title: 'Sobre Mí - Portfolio Steven',
    description: 'Conoce más sobre mi experiencia, habilidades y trayectoria profesional como desarrollador full stack.',
    url: '/about',
    siteName: 'Portfolio Steven',
    images: [
      {
        url: '/images/yo.png',
        width: 1200,
        height: 630,
        alt: 'Steven - Desarrollador Full Stack',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Mí - Portfolio Steven',
    description: 'Conoce más sobre mi experiencia, habilidades y trayectoria profesional como desarrollador full stack.',
    images: ['/images/yo.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 