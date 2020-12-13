import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { Box, Container, Heading, Text } from '@chakra-ui/react';

import { AccountById } from '../../services/accounts';

const AccountDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const account = AccountById(id);

  if (!account || account.id == 0) {
    return (
      <Text size="xl">Carregando detalhes da conta: {id}...</Text>
    );
  }

  return (
    <Container>
      <Heading>{account.id} - {account.name}</Heading>

      <Box>
        <span>{account.extended_name} - {account.email}</span>
      </Box>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  return {
    props: {
      id: 0
    }
  };
}

export default AccountDetails;
