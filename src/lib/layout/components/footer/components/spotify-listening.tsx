import { Flex, Icon } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';

export const SpotifyListening = () => {
  return (
    <Flex
      borderRadius={12}
      maxWidth={300}
      alignItems="center"
      gridGap={2}
      height={20}
      fontFamily="heading"
    >
      {/* Just render the Spotify Icon */}
      <Icon as={FaSpotify} color="green.400" fontSize="2xl" />
    </Flex>
  );
};
