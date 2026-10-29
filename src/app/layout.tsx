import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../index.css';

const title = 'Gummadi Rakesh | Java Full Stack Developer';
const description =
  'Portfolio of Gummadi Rakesh, a Java Full Stack Developer specializing in Java, Spring Boot, REST APIs, Microservices, Kafka, and database-driven applications.';

export const metadata: Metadata = {
  metadataBase: new URL('https://rakeshgummadi.online'),
  title,
  description,
  authors: [{ name: 'Gummadi Rakesh' }],
  keywords:
    'Java Full Stack Developer, Spring Boot, REST APIs, Microservices, Kafka, Gummadi Rakesh, Hyderabad',
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
  openGraph: { type: 'website', title, description, images: ['/og-image.svg'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.svg'] },
};

export const viewport: Viewport = {
  themeColor: '#1554f0',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
