import React, { useState, useEffect } from 'react';
import { Keyboard, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Repository from '~/components/Repository'

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
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepository() {
      const realm = await getRealm();

      const data = realm.objects('Repository').sorted('id', true);
      setRepositories(data);
    }

    loadRepository();
  }, []);

  async function saveRepository() {
    try {
      const realm = await getRealm();
      let id = realm.objects('Repository').max('id');
      const data = {
        id: id === undefined ? 1 : ++id,
        name: input,
        description: 'deu bom',
        fullName: 'deu bom caramba',
        stars: 2222,
        forks: 5454,
      }

      realm.write(() => {
        realm.create('Repository', data, 'modified');
      });

      setInput('');
      setError(false);
      Keyboard.dismiss();

      return data;
    } catch (error) {
      setError(true);
    }
  }

  async function handleRefreshRepository(repository) {
    try {
      const data = await saveRepository(repository);

      setRepositories(repositories.map(repo => repo.id === data.id ? data : repo));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeletehRepository(repository) {
    try {
      const realm = await getRealm();
      const id = repository.id;

      setRepositories(repositories.filter(repo => repo.id !== id));

      realm.write(() => {
        realm.delete(
          realm.objects('Repository').filtered('id =' + id)
        );
      });

    } catch (error) {
      console.log(error);
    }
  }

  function promptDelete(item) {
    Alert.alert(
      'Delete Character',
      'Deleting is irreversible, are you sure?',
      [
        { text: 'Cancel', onPress: () => false },
        { text: 'OK', onPress: () => handleDeletehRepository(item) }
      ],
      { cancelable: false }
    );
  }


  return (
    <Container>
      <Title>Jogadores</Title>

      <Form>
        <Input
          value={input}
          error={error}
          onChangeText={ setInput }
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Cadastrar jogador ..."
        />
        <Submit onPress={saveRepository}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={ ({ item }) => (
          <Repository
            data={item}
            onEdit={() => handleRefreshRepository(item)}
            onDelete={() => promptDelete(item)}
          />
        )}/>
    </Container>
  );
}
