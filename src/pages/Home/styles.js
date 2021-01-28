import styled from 'styled-components/native';

Background, Nome, Saldo, Container, Title

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: #181818;

`;

export const Container = styled.View`
  margin-left: 25px;
    margin-bottom: 25px;
`;

export const Nome = styled.Text`
  font-size: 20px;
  color: #fff;
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
  color: #00b94a;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const List = styled.FlatList.attrs({
  marginHorizontal: 15
})`
  padding-top: 15px;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: 8px;
  margin-right: 8px;
`;