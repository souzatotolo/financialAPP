import React, {useState, useContext} from 'react';
import { Platform } from 'react-native';
import {Background,
        Container, 
        Logo, 
        AreaInput, 
        Input, 
        SubmitButton, 
        SubmitText, 
        Link,} from '../SignIn/styles';
import {AuthContext} from '../../contetexts/auth';


export default function SignUp() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [nome,setNome] = useState('');

  const {signUp} = useContext(AuthContext);

  function handleSignUp(){
    signUp(email,password,nome);
  }

 return (
   <Background>
     <Container
     behavior ={Platform.OS === 'ios' ? 'padding' : ''}
     enabled
     >

      <AreaInput>
        <Input
          placeholder='Nome'
          autocorrect={false}
          autocapitalize='none'
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
      </AreaInput>

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
        />
      </AreaInput>

      <SubmitButton onPress={handleSignUp}>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>

      
     </Container>
   </Background>
  );
}