import React, {useState, useContext} from 'react';
import { Platform } from 'react-native';
import {Background,
        Container, 
        Logo, 
        AreaInput, 
        Input, 
        SubmitButton, 
        SubmitText, 
        Link,} from './styles';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contetexts/auth';


export default function SignIn() {
  const navigation = useNavigation();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {signIn} = useContext(AuthContext);
 

  function handleLogin(){
    signIn(email,password); 
  }

 return (
   <Background>
     <Container
     behavior ={Platform.OS === 'ios' ? 'padding' : ''}
     enabled
     >
      <Logo source={require('../../assets/Logo.png')}/>

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

      <SubmitButton onPress={handleLogin}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>

      
      <Link title="Criar uma conta" color="#FFF" onPress={() => navigation.navigate('SignUp')}/>
      

     </Container>
   </Background>
  );
}