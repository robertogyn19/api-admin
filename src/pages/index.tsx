import React from 'react';
import Head from 'next/head';

import { Box, Heading } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <div>
      <Head>Home page</Head>

      <main>
        <Box>
          <Heading>Hello, World 123!</Heading>
        </Box>
      </main>
    </div>
  );
}

export default Home;
