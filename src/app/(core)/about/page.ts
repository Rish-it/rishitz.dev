import type { Metadata } from 'next';

import About from '~/lib/pages/about';

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    title: 'About | Rishit',
    description: 'About rishitz.dev page',
  },
};

export const dynamic = 'force-static';

export default About;
