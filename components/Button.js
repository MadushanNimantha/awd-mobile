import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25.0,
    backgroundColor: '#42A5F5',
    width: '100%',
    marginVertical: 10,
    paddingVertical: 6,
  },
  text: {
    
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color:'#fff'
  },
})
