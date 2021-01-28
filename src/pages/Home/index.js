import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, Button, View, StatusBar } from 'react-native';
import Header from '../../components/Header'
import { Background, Nome, Saldo, Container, Title, List } from './styles'
import { AuthContext } from '../../contetexts/auth';
import HistoricoList from '../../components/HistoricoList';

export default function Home() {

  const [historico, setHistorico] = useState([
    { key: '1', tipo: 'receita', valor: 1200 },
    { key: '2', tipo: 'despesa', valor: 200 },
    { key: '3', tipo: 'receita', valor: 40 },
    { key: '4', tipo: 'receita', valor: 89.62 },
    { key: '5', tipo: 'despesa', valor: 500 },

  ])

  const { user } = useContext(AuthContext);
  return (
    <Background>
      <StatusBar barStyle='light-content' />
      <Header />
      <Container>
        <Nome>Richard</Nome>
        <Saldo>123.223,00</Saldo>
      </Container>

      <Title>Ultimas movimentações</Title>

      <List
        showVerticalScrollIndicator={false}
        data={historico}
        keyExtract={(item) => item.key}
        renderItem={({ item }) => (
          <HistoricoList data={item} />
        )}
      />
    </Background>
  );
}