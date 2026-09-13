import type { Metadata, Viewport } from 'next';
import { Instrument_Sans, DM_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.acquiring.in'),
  title: {
    default: 'Acquiring | Elite Software Engineering, Enterprise AI & Tech Solutions',
    template: '%s | Acquiring Technology',
  },
  description:
    'Acquiring Technology engineers state-of-the-art software systems, enterprise AI solutions, full-stack digital platforms, and specialized career-focused technical training designed for scale and institutional performance.',
  keywords: [
    'online full stack developer course',
    'React JS',
    'Angular',
    'Angular Js',
    'full stack web developer',
    'chennai software training institute',
    'mern stack developer course',
    'full stack web developer training',
    'mern stack training full stack web with placements',
    'web development training',
    'Javascript',
    'Software Engineering',
    'AI Solutions',
    'Machine Learning',
    'Enterprise Architecture',
    'Technology Acquisitions',
    'Full Stack Systems',
    'Cloud Architecture',
    'Generative AI Development',
    'Custom Software Development',
    'Digital Transformation',
  ],
  authors: [{ name: 'Acquiring Technology', url: 'https://www.acquiring.in' }],
  creator: 'Acquiring Technology',
  publisher: 'Acquiring Technology',
  applicationName: 'Acquiring',
  category: 'technology',
  classification: 'Software Development & Artificial Intelligence',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://www.acquiring.in/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Acquiring | Elite Software Engineering, Enterprise AI & Tech Solutions',
    description:
      'State-of-the-art software engineering, scalable cloud systems, enterprise AI intelligence, and technology transformation.',
    url: 'https://www.acquiring.in/',
    siteName: 'Acquiring Technology',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Acquiring Technology - Elite Software Engineering & AI Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acquiring | Elite Software Engineering, Enterprise AI & Tech Solutions',
    description:
      'State-of-the-art software systems, enterprise AI solutions, and specialized technical acquisitions.',
    site: '@AcquiringTech',
    creator: '@AcquiringTech',
    images: [
      {
        url: '/logo.png',
        alt: 'Acquiring Technology',
      },
    ],
  },
  verification: {
    google: '7LkEeErCiBKHC-1ZYXvd3lIDYiPGe7q0PvvRxL6BOoc',
    other: {
      'facebook-domain-verification': 'os1n81d80rjonzb3sadun1d75oz24t',
      'revisit-after': '1 days',
      'rating': 'general',
      'geo.region': 'IN-TN',
      'geo.placename': 'Chennai',
      'geo.position': '13.0827;80.2707',
      'ICBM': '13.0827, 80.2707',
    },
  },
  other: {
    'msapplication-TileColor': '#0B0B0D',
    'msapplication-TileImage': '/icon.png',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Acquiring',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.acquiring.in/#organization',
      name: 'Acquiring Technology',
      alternateName: ['Acquiring', 'Acquiring Tech', 'Acquiring Technologies'],
      url: 'https://www.acquiring.in',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.acquiring.in/#logo',
        url: 'https://www.acquiring.in/logo.png',
        contentUrl: 'https://www.acquiring.in/logo.png',
        caption: 'Acquiring Technology Logo',
      },
      image: 'https://www.acquiring.in/logo.png',
      description:
        'Acquiring Technology engineers elite software platforms, enterprise AI solutions, digital transformation, and career-advancing tech education.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.0827,
        longitude: 80.2707,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9042771660',
          contactType: 'customer service',
          email: 'contact@acquiring.in',
          availableLanguage: ['English', 'Tamil'],
          areaServed: ['IN', 'US', 'GB', 'AE', 'Worldwide'],
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/acquiringtechnology',
        'https://github.com/acquiringtechnology',
        'https://wa.me/919042771660',
      ],
      knowsAbout: [
        'Custom Software Engineering',
        'Artificial Intelligence & Machine Learning',
        'Cloud Infrastructure & DevOps',
        'Full Stack Development (MERN, React, Node.js)',
        'Enterprise System Architecture',
        'Native Language Tech Education',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.acquiring.in/#website',
      url: 'https://www.acquiring.in',
      name: 'Acquiring Technology',
      description:
        'Elite Software Engineering, Enterprise AI Solutions, and Technology Innovations.',
      publisher: {
        '@id': 'https://www.acquiring.in/#organization',
      },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.acquiring.in/?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.acquiring.in/#service',
      name: 'Acquiring Software Engineering & AI Solutions',
      url: 'https://www.acquiring.in',
      parentOrganization: {
        '@id': 'https://www.acquiring.in/#organization',
      },
      priceRange: '$$$$',
      telephone: '+91-9042771660',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Core Capabilities',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Enterprise Software Engineering',
              description: 'Custom resilient systems, microservices, high-throughput cloud backends.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Enterprise AI & Machine Learning',
              description: 'Predictive intelligence, custom LLMs, automated vision & NLP pipelines.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full Stack Developer Training & Career Acceleration',
              description: 'Comprehensive software training with native language mentoring and placement assistance.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.acquiring.in/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Acquiring Technology provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Acquiring Technology specializes in end-to-end custom software engineering, enterprise AI & machine learning deployment, scalable cloud infrastructure, and career-accelerating developer training programs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I initiate a software or AI consultation with Acquiring?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book a technical consultation directly through our contact form or reach our engineering leadership team instantly via WhatsApp at +91-9042771660.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Acquiring provide technical education and placement support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Acquiring offers rigorous full-stack development, MERN stack, and modern software training with native language guidance and dedicated job assistance.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect & DNS-Prefetch for high LCP & performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Browser Icons & PWA Manifest */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Fallback Title meta tag for legacy crawlers */}
        <meta name="title" content="Acquiring | Elite Software Engineering, Enterprise AI & Tech Solutions" />

        {/* Schema.org Multi-Graph Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E5KEXCT07F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E5KEXCT07F', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {children}

        {/* WhatsApp Floating Contact Action (from acquiring_web) */}
        <a
          href="https://wa.me/919042771660"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float hide-mob"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'fixed',
            width: 52,
            height: 52,
            bottom: 24,
            right: 24,
            backgroundColor: '#25D366',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)',
            zIndex: 90,
            textDecoration: 'none',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
