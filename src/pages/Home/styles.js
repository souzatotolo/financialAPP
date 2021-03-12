import styled from 'styled-components/native';

Background, Nome, Saldo, Container, Title

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: #2e2f39;

`;

export const Container = styled.View`
  margin-left: 25px;
  margin-bottom: 25px;
  border-radius: 10px;
`;

export const Nome = styled.Text`
  font-size: 20px;
  color: #999;
  font-style: italic;
`;

export const Saldo = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;

export const Title = styled.Text`
  margin-left: 25px;
  color: #999;
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
  align-self: center;
`;

export const List = styled.FlatList.attrs({
  marginHorizontal: 15
})`
  padding-top: 15px;
  background-color: #343746;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  margin-left: 8px;
  margin-right: 8px;
`;