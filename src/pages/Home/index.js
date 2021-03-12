import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native'
import { StatusBar, Alert } from 'react-native';
import Header from '../../components/Header';
import { Background, Nome, Saldo, Container, Title, List } from './styles';
import { AuthContext } from '../../contetexts/auth';
import HistoricoList from '../../components/HistoricoList';
import firebase from '../../services/firebaseConnection';

export default function Home() {

  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historico').child(uid).orderByChild('date')
        .limitToLast(10).on('value', (snapshot) => {
          setHistorico([]);
          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
            };
            setHistorico(oldArray => [...oldArray, list].reverse())
          });
        });

    }
    loadList();
  }, [])

  function handleDeleteItem(data) {
    Alert.alert(
      'Cuidado!',
      `Voce deseja excluir a ${data.tipo} com o valor de R$${data.valor}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSucess(data)
        }
      ]

    );

  }

  async function handleDeleteSucess(data) {
    await firebase.database().ref('historico').child(uid).child(data.key).remove()
      .then(async () => {
        let saldoAtual = saldo;
        data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor)

        await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <Background>
      <StatusBar barStyle='light-content' />
      <Header />
      <Container>
        <Nome>Saldo de {user && user.nome}</Nome>
        <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
      </Container>

      <Title>Ultimas movimentações</Title>

      <List
        showVerticalScrollIndicator={false}
        data={historico}
        keyExtract={(item) => item.key}
        renderItem={({ item }) => (
          <HistoricoList data={item} deleteItem={handleDeleteItem} />
        )}
      />
    </Background>
  );

}