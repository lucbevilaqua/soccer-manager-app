import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#9B49c1', '#7159c1'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${ 30 + getStatusBarHeight(true) }px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 26px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
  text-align: center;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 20px;
`;


export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 16px;
  font-size: 16px;
  color: #333;
  background: #FFF;
  border: 2px solid ${ props => props.error ? '#FF7272' : '#FFF'};
`;

export const Submit = styled.TouchableOpacity`
  background: #4889D9;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
