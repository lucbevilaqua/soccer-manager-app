import React, { useState, useEffect } from 'react';
import { Keyboard, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import User from '~/components/User'

import getRealm from '~/services/realm';

import {
  Container,
  Title,
  Form,
  Input,
  Submit,
  List
} from './styles';

export default function Main() {
  const REPOSITORY = 'User';
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const realm = await getRealm();

      const data = realm.objects(REPOSITORY).sorted('name');
      setUsers(data);
    }

    loadUsers();
  }, []);

  async function saveUser() {
    try {
      const realm = await getRealm();
      let id = realm.objects(REPOSITORY).max('id');
      const data = {
        id: id === undefined ? 1 : ++id,
        name: input
      }

      realm.write(() => {
        realm.create(REPOSITORY, data, 'modified');
      });

      setInput('');
      setError(false);
      Keyboard.dismiss();

      return data;
    } catch (error) {
      setError(true);
    }
  }

  async function handleDeleteUser(userSelected) {
    try {
      const realm = await getRealm();
      const id = userSelected.id;

      setUsers(users.filter(user => user.id !== id));

      realm.write(() => {
        realm.delete(
          realm.objects(REPOSITORY).filtered('id =' + id)
        );
      });

    } catch (error) {
      console.log(error);
    }
  }

  function promptDelete(item) {
    Alert.alert(
      'Deletar Usuario',
      'A deleção é permanente, tem certeza ?',
      [
        { text: 'Cancelar', onPress: () => false },
        { text: 'Sim', onPress: () => handleDeleteUser(item) }
      ],
      { cancelable: false }
    );
  }


  return (
    <Container>
      <Title>Jogadores ({users.length})</Title>

      <Form>
        <Input
          value={input}
          error={error}
          onChangeText={ setInput }
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Cadastrar jogador ..."
        />
        <Submit onPress={saveUser}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={users}
        keyExtractor={item => String(item.id)}
        renderItem={ ({ item }) => (
          <User
            data={item}
            onDelete={() => promptDelete(item)}
          />
        )}/>
    </Container>
  );
}
