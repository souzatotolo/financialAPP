import React, {useContext} from 'react';
import { View, ActivityIndicator } from 'react-native';
import {AuthContext} from '../contetexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes(){
  const {signed, loading} = useContext(AuthContext);

  if(loading){
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#181818"/>
    </View>
  }

  return(
    signed ? <AppRoutes/> : <AuthRoutes/>  
  )
}