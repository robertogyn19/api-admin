import React from 'react';
import { Box, Heading, Container } from '@chakra-ui/react';

import { AccountsSize } from '../services/accounts';

import AccountsList from '../components/AccountsList';

const Home: React.FC = () => {
  const size = AccountsSize();

  return (
    <div>
      <main>
        <Container>
          <Heading>Lista de contas: {size}</Heading>
          <AccountsList />
        </Container>
      </main>
    </div>
  );
}

export default Home;
