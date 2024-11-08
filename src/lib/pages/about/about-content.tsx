'use client';

import { Heading, Text, VStack } from '@chakra-ui/react';
import { MotionBox } from '~/lib/components/motion/motion-box';

export const AboutContent = () => {
  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: 'spring' } },
        after: { opacity: 1, y: 0, transition: { type: 'spring' } },
      }}
      initial="before"
      animate="after"
    >
      <Heading size="lg">👋 Hi there!</Heading>

      <VStack spacing={4} marginTop={4}>
        <Text>
          I&apos;m Rishit Sharma, a passionate Digital Crafter with a knack for
          creating innovative and intuitive products that drive business
          success.
        </Text>

        <Text>
          My expertise lies in React (TypeScript, Next.js), Flutter (Dart), and
          design. I&apos;m also an enthusiastic team leader and believe that
          great design is just as crucial as strong functionality.
        </Text>

        <Text>
          When I&apos;m not engrossed in my main projects, I love exploring new
          technologies and experimenting with ideas on GitHub.
        </Text>
      </VStack>
    </MotionBox>
  );
};
