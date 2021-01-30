import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import User from '~/components/User';
import getRealm from '~/services/realm';
import shuffle, { randomInteger, separator } from '~/services/utils';

import {
  Container,
  Title,
  SubTitle,
  Form,
  Input,
  Submit,
  List
} from './styles';

export default function Pay() {
  const REPOSITORY = 'User';
  const [totalPayment, setTotalPayment] = useState('');
  const [unityPayment, setUnityPayment] = useState(0);
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const realm = await getRealm();

    const data = realm.objects(REPOSITORY).sorted('id');

    const array = data.map((value) => {
      return {
        id: value.id,
        name: value.name
      }
    });

    setUsers(array);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function calculateUnity() {
    setUnityPayment((+totalPayment/users.length).toFixed(2));
  }

  return (
    <Container>
      <Title>Gerenciar Pagamentos</Title>
      <Form>
        <Input
          keyboardType='numeric'
          value={totalPayment}
          onChangeText={ setTotalPayment }
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Total a Pagar(R$)..."
        />
        <Submit onPress={calculateUnity}>
          <Icon name="calculator-variant" size={28} color="#FFF" />
        </Submit>
      </Form>

      <SubTitle>Cada um deve pagar: R$ {unityPayment}</SubTitle>

      <List
        keyboardShouldPersistTaps="handled"
        data={users}
        keyExtractor={item => String(item.id)}
        renderItem={ ({ item }) => (
          <User
            data={item}
            wasCheckbox={true}
          />
        )}/>
    </Container>
  );
}
