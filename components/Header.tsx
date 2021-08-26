import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  return (
    <View>
    <Button
  title="Loading button"
  color="orange"
  loading
/>
      <Text>React Native Elements is Awesome.</Text>
      <Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>
      <StatusBar style="auto" />
    </View>
  );
}
