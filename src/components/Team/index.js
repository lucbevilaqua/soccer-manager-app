import React from 'react';
import User from '~/components/User'

import {
  Container,
  Title,
  List
} from './styles';

export default function Team ({ data, index }) {

  return (
    <Container>
      <Title>Time { index + 1}</Title>
      <List
        keyboardShouldPersistTaps="handled"
        data={data.users}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <>
            <User
              data={item}
            />
          </>
        )} />
    </Container>
  );
}
