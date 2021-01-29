import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Main from '~/pages/Main';
import DrawTeam from '~/pages/DrawTeam';

import {
  Container,
  Tab,
  TabText
} from './styles';


export default function Navigation() {
  return (
    <Container>
      <Tab>
        <Icon name="home" size={32} color="#FFF" />
        <TabText>HOME</TabText>
      </Tab>

      <Tab>
        <Icon name="team" size={32} color="#FFF" />
        <TabText>Draw Team</TabText>
      </Tab>

      <Tab>
        <Icon name="shoppingcart" size={32} color="#FFF" />
        <TabText>Pay</TabText>
      </Tab>
    </Container>
  );
}
