import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { FotoScreen } from './FotoScreen'
import { GalleryScreen } from './GalleryScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Navigation = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Photo" component={FotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation