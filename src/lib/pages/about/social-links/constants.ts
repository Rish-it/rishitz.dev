import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import type { MotionLinkProps } from './types';

export const socialLinks: Array<MotionLinkProps> = [
  {
    platformName: 'GitHub',
    url: 'https://github.com/rish-it',
    icon: FaGithub,
  },
  {
    platformName: 'LinkedIn',
    url: 'https://linkedin.com/in/rishittsharma',
    icon: FaLinkedin,
  },
  {
    platformName: 'X-Twitter',
    url: 'https://x.com/iRishit_sharma',
    icon: FaXTwitter,
  },
  // {
  //   platformName: 'Instagram',
  //   url: 'https://instagram.com/sozonome',
  //   icon: FaInstagram,
  // },
  // {
  //   platformName: 'YouTube',
  //   url: 'https://youtube.com/channel/UCJnYMGIHtQ8yInuq4Pc2Ttg',
  //   icon: FaYoutube,
  // },
  // {
  //   platformName: 'dev.to',
  //   url: 'https://dev.to/sozonome',
  //   icon: FaDev,
  // },
  // {
  //   platformName: 'Medium',
  //   url: 'https://medium.com/@agustinusnathaniel',
  //   icon: FaMedium,
  // },
  // {
  //   platformName: 'ProductHunt',
  //   url: 'https://www.producthunt.com/@sozonome',
  //   icon: FaProductHunt,
  // },
  {
    platformName: 'e-mail',
    url: 'mailto:hello@sznm.dev?cc=rishitsharmar89@gmail.com',
    icon: FaEnvelope,
  },
];
