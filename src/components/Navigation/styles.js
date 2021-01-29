import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #7159c1;
  max-height: 60px;
  padding-top: 5px;
  border: 1px solid black;
`;

export const Tab = styled.View`
  align-items: center;
`;

export const TabText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;
