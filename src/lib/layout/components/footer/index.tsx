import { Divider, Grid, Link, Stack, Text } from '@chakra-ui/react';

import { EVENT_TYPE_LINK } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/track-event';

import { FooterLink } from './components/footer-link';
import { SpotifyListening } from './components/spotify-listening';
import { links } from './constants';

export const Footer = () => {
  const handleClickFooterLink = (label: string) => () => {
    trackEvent({
      eventName: `Footer Link: ${label}`,
      eventData: { type: EVENT_TYPE_LINK },
    });
  };

  return (
    <Stack as="footer" layerStyle="layoutBlock" spacing={8}>
      <Divider />

      <SpotifyListening />

      <Grid
        display={{ base: 'grid', md: 'flex' }}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: `repeat(${links.length <= 4 ? links.length : 4}, 1fr)`,
        }}
        gap={{ base: 4, md: 6 }}
      >
        {links.map((link) => (
          <FooterLink
            {...link}
            onClick={handleClickFooterLink(link.label)}
            key={link.label}
          />
        ))}
      </Grid>
      <Text fontSize={['xs', 'sm']}>
        &copy; {new Date().getFullYear()}{' '}
        <Link
          href="https://github.com/rish-it"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Rishit's Github site: https://github.com/rish-it"
        >
          Rishit Sharma
        </Link>
      </Text>
    </Stack>
  );
};
