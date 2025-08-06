// app/layout.tsx
import React from 'react';
import { Paytone_One } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/themeprovider';

// Configura la fuente con next/font
const paytoneOne = Paytone_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: {
    default: 'Portfolio - Desarrollador Full Stack',
    template: '%s | Portfolio'
  },
  description: 'Portfolio profesional de desarrollo web full stack con React, Next.js, TypeScript y más tecnologías modernas.',
  keywords: ['desarrollador', 'full stack', 'react', 'next.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Steven' }],
  creator: 'Steven',
  publisher: 'Steven',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tu-dominio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Portfolio - Desarrollador Full Stack',
    description: 'Portfolio profesional de desarrollo web full stack con React, Next.js, TypeScript y más tecnologías modernas.',
    url: 'https://tu-dominio.com',
    siteName: 'Portfolio Steven',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Steven',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Desarrollador Full Stack',
    description: 'Portfolio profesional de desarrollo web full stack con React, Next.js, TypeScript y más tecnologías modernas.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={paytoneOne.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
