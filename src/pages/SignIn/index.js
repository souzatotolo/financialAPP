import React, { useState, useContext } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contetexts/auth';
import Icon from 'react-native-vector-icons/Feather'



export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);
  const [viewPassword, setViewPassword] = useState(true);
  const [changeIcon, setChangeIcon] = useState('eye')

  function handleLogin() {
    signIn(email, password);
  }

  function handleViewPassword() {

    setViewPassword(false);
    setChangeIcon('eye-off');
    setTimeout(handleShowPassword, 2000);

  }

  function handleShowPassword() {

    setViewPassword(true);
    setChangeIcon('eye');
  }


  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
            placeholder='E-mail'
            autocorrect={false}
            autocapitalize='none'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Senha'
            autocorrect={false}
            autocapitalize='none'
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={viewPassword}
          />

        </AreaInput>
        <TouchableOpacity onPress={handleViewPassword} >
          <Icon style={{ marginLeft: 300, bottom: 50 }} name={changeIcon} color='#eee' size={22} />
        </TouchableOpacity>

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>


        <Link title="Criar uma conta" color="#eee" onPress={() => navigation.navigate('SignUp')} />


      </Container>
    </Background>
  );
}