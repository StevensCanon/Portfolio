// app/layout.tsx
import React from 'react';
import { Paytone_One } from 'next/font/google'; // Importa la fuente desde next/font
import './globals.css'; // Importa el archivo CSS global

// Configura la fuente con next/font
const paytoneOne = Paytone_One({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={paytoneOne.className}>{children}</body>
    </html>
  );
}
