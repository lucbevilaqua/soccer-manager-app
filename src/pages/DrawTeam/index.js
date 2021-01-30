import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Team from '~/components/Team';
import getRealm from '~/services/realm';
import shuffle, { randomInteger, separator } from '~/services/utils';

import {
  Container,
  Title,
  Form,
  Submit,
  List
} from './styles';

export default function DrawTeam() {
  const REPOSITORY = 'User';
  const [usersPerTeam, setUsersPerTeam] = useState(5);
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);

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


  function draw() {
    loadUsers();
    setUsers(users.shuffle());
    createTeams();
  }

  function createTeams() {
    var result = separator(users, usersPerTeam);
    const newTeams = [];
    result.forEach((res) => {
      // Não compensa criar outro time pois não sabemos qual irá perder
      // if (res.length < usersPerTeam) {
      //   const newTeam = result[randomInteger(0, result.length)];
      //   newTeam.splice(0, res.length);
      //   res = res.concat(newTeam);
      // }
      newTeams.push(
        {
          id: randomInteger(1000, 100),
          users: res
        }
      );
    });

    setTeams(newTeams);
  }

  return (
    <Container>
      <Title>Times</Title>
      <Form>
        <Submit onPress={draw}>
          <AntDesign name="playcircleo" size={42} color="#FFF" />
        </Submit>
        {/* <Submit onPress={draw}>
          <EntypoIcon name="ccw" size={22} color="#FFF" />
        </Submit> */}
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={teams}
        keyExtractor={item => String(item.id)}
        renderItem={ ({ item, index }) => (
          <>
            <Team data={item} index={index} />
          </>
        )} />
    </Container>
  );
}
