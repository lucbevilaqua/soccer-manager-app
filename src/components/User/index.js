import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Body,
  Name,
  Actions,
  Action,
  ActionText
} from './styles';

export default function User({ data, onDelete }) {
  return (
    <Container>
      <Body>
        <IconAwesome name="user-circle-o" size={36} color="#7159c1"/>
        <Name>{ data.name }</Name>

        {
          onDelete &&
          <Actions >
            <Action onPress={ onDelete }>
              <Icon name="delete" size={18} color="#7159c1" />
              <ActionText>Excluir</ActionText>
            </Action>
          </Actions>
        }
      </Body>
    </Container>
  );
}
