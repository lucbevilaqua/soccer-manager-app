import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Repository from '~/components/Repository'

import {
  Container,
  Title,
  Form,
  Input,
  Submit,
  List
} from './styles';

export default function Main() {
  const [input, setInput] = useState('');

  function handleAddRepository() {
    console.tron.log(input);
  }

  return (
    <Container>
      <Title>Repositorios</Title>

      <Form>
        <Input
          value={input}
          onChangeText={ setInput }
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositorio ..."
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'uniform',
            description: 'é aprenas uma description',
            stars: 1234,
            forks: 12312,
          }
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={ ({ item }) => (
          <Repository data={item} />
        )}/>
    </Container>
  );
}
