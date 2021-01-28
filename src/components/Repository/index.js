import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconDesign from 'react-native-vector-icons/AntDesign';

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  Actions,
  Action,
  ActionText
} from './styles';

export default function Repository({ data, onEdit, onDelete }) {
  return (
    <Container>
      <Name>{ data.name }</Name>
      <Description>{ data.description }</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>

        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>

      <Actions>
        <Action onPress={ onEdit }>
          <Icon name="edit" size={18} color="#7159c1" />
          <ActionText>Editar</ActionText>
        </Action>

        <Action onPress={ onDelete }>
          <IconDesign name="delete" size={18} color="#7159c1" />
          <ActionText>Excluir</ActionText>
        </Action>
      </Actions>
    </Container>
  );
}
