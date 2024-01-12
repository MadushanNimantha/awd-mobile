import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/loginpink.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 317,
    height: 324,
    marginBottom: 8,
  },
})
