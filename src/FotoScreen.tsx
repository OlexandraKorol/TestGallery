import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from './constants'
import FotoScreenImage from './FotoScreenImage'

export const FotoScreenOption = {
  headerShown: true,
  headerTitle: 'Photo preview',
  headerStyle: {
    backgroundColor: colors.white,
    shadowColor: colors.white,
  },
  headerBackButtonMenuEnabled: true
}


export const FotoScreen = () => {
  return (
    <FotoScreenImage />
  )
}
