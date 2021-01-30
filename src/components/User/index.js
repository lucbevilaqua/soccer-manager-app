import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Body,
  Name,
  Actions,
  Action,
  ActionText
} from './styles';

export default function User({ data, onDelete, wasCheckbox }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <Container>
      <Body>
        <IconAwesome name="user-circle-o" size={36} color="#7159c1"/>
        <Name>{ data.name }</Name>

        {
          onDelete &&
          <Actions >
            <Action onPress={ onDelete }>
              <Icon name="delete" size={22} color="#7159c1" />
              <ActionText>Excluir</ActionText>
            </Action>
          </Actions>
        }

        {
          wasCheckbox &&
          <Actions >
            <Action onPress={ () => setChecked(!isChecked)  }>
              {
                isChecked &&
                <MaterialCommunityIcons name="checkbox-marked" size={22} color="#7159c1" />
              }
              {
                !isChecked &&
                <MaterialCommunityIcons name="checkbox-blank-outline" size={22} color="#7159c1" />
              }
              <ActionText>Pago</ActionText>
            </Action>
          </Actions>
        }


      </Body>
    </Container>
  );
}
