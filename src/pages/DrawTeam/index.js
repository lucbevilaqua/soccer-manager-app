import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Team from '~/components/Team';
import getRealm from '~/services/realm';

import {
  Container,
  Title,
  Form,
  Submit,
  List
} from './styles';

export default function DrawTeam() {
  const REPOSITORY = 'User';
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);

  Array.prototype.shuffle = function() {
    let m = this.length, i;
    while (m) {
      i = (Math.random() * m--) >>> 0;
      [this[m], this[i]] = [this[i], this[m]]
    }
    return this;
  }

  useEffect(() => {
    async function loadRepository() {
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

    loadRepository();
  }, []);

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function draw() {
    setUsers(users.shuffle());
    createTeams();
  }

  function separator(base, max) {
    const res = [];
    const parts = (base.length + 1)/max;
    const baseCopy = base.map((item) => item);

    console.log(baseCopy)
    for (let part = 0; part < parts; part++) {
      res.push(baseCopy.splice(0, max));
    }

    return res;
  }

  function createTeams() {
    var result = separator(users, 5);
    const newTeams = [];
    result.forEach((res) => {
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
