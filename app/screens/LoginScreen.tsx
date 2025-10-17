import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setUser } from '../store/slices/userSlice';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Hello {name || 'Guest'} 👋</Text> */}
      {/* <Button title="Go to Details" onPress={() => navigation.navigate('Details', { id: '42' })} /> */}
      {/* <Button title="Set User" onPress={() => dispatch(setUser('Ebrahim'))} /> */}
    </View>
  );
}
