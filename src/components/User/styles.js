import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  margin-bottom: 15px;
`;

export const Body = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  font-weight: bold;
  color: #333;
  flex: 1;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-left: 10px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 10px;
`;

export const ActionText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
  margin-left: 5px;
`;
