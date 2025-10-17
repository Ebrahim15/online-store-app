import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setUser } from '../store/slices/userSlice';

export default function HomeScreen() {
  const navigation = useNavigation();
//   const dispatch = useAppDispatch();
//   const name = useAppSelector((s) => s.user.name);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Hello {name || 'Guest'} 👋</Text> */}
      {/* <Button title="Go to Details" onPress={() => navigation.navigate('Details', { id: '42' })} /> */}
      {/* <Button title="Set User" onPress={() => dispatch(setUser('Ebrahim'))} /> */}
    </View>
  );
}
