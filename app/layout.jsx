import '../src/styles/global.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: {
    default: 'Cromis Digital — Local Digital Marketing, Old Town FL',
    template: '%s | Cromis Digital',
  },
  description:
    'Cromis Digital helps local businesses in Old Town, FL get found online, generate leads, and grow. No contracts. Direct owner access. AI-powered results.',
  keywords: [
    'digital marketing',
    'local SEO',
    'Old Town FL',
    'small business website',
    'Google Business Profile',
    'web design Florida',
  ],
  authors: [{ name: 'Trey Holland', url: 'https://cromisdigital.com' }],
  creator: 'Cromis Digital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Cromis Digital',
    title: 'Cromis Digital — Local Digital Marketing, Old Town FL',
    description:
      'No contracts. No big agency runaround. You work directly with the owner. Based in Old Town, FL.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cromis Digital — Local Digital Marketing, Old Town FL',
    description:
      'No contracts. No big agency runaround. You work directly with the owner. Based in Old Town, FL.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
