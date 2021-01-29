import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 4px;
  background: transparent;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
