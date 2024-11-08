import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import NextTopLoader from 'nextjs-toploader';

import { Providers } from '~/app/providers';
import { baseUrl } from '~/lib/constants/base-url';
import { Layout } from '~/lib/layout';
import '~/lib/styles/global.css';

const creator = 'Agustinus Nathaniel';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    types: {
      'application/rss+xml': `${baseUrl}/rss.xml`,
    },
  },
  applicationName: 'rishitz.dev',
  authors: { name: 'Rishit' },
  creator,
  publisher: creator,
  generator: 'Next.js',
  keywords: [
    'sozonome',
    'agustinusnathaniel',
    'Agustinus Nathaniel',
    'sznm',
    'sznm.dev',
  ],
  referrer: 'origin-when-cross-origin',
  appleWebApp: {
    title: 'rishitz.dev',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  title: {
    default: 'Agustinus Nathaniel - Digital Crafter | rishitz',
    template: '%s | rishitz',
  },
  description: "Rishit Sharma's Dev Site | rishitz",
  openGraph: {
    url: 'https://sznm.dev',
    title: 'rishitz | Digital Crafter',
    description: "Rishit Sharma's Dev Site | rishitz",
    images: [
      {
        url: 'https://og.sznm.dev/api/generate?heading=sozonome&text=https://sznm.dev',
        alt: 'sznm.dev og-image',
      },
    ],
    siteName: 'rishitz',
  },
  twitter: {
    creator: '@irishit_sharma',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#9F9287' },
    { media: '(prefers-color-scheme: dark)', color: '#343335' },
  ],
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <NextTopLoader color="#747978" showSpinner={false} />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>

        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
