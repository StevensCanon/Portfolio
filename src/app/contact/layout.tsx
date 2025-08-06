import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Portfolio Steven',
  description: 'Ponte en contacto conmigo para colaboraciones, proyectos o cualquier consulta relacionada con desarrollo web.',
  keywords: ['contacto', 'desarrollador', 'colaboración', 'proyectos', 'consulta'],
  openGraph: {
    title: 'Contacto - Portfolio Steven',
    description: 'Ponte en contacto conmigo para colaboraciones, proyectos o cualquier consulta relacionada con desarrollo web.',
    url: '/contact',
    siteName: 'Portfolio Steven',
    images: [
      {
        url: '/images/contacts12.png',
        width: 1200,
        height: 630,
        alt: 'Contacto - Portfolio Steven',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto - Portfolio Steven',
    description: 'Ponte en contacto conmigo para colaboraciones, proyectos o cualquier consulta relacionada con desarrollo web.',
    images: ['/images/contacts12.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 