import React from "react";
import { Button, View, Text } from 'react-native';

export const HomeScreen = ( {navigation} ) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      title="GO TO Details"
      onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}