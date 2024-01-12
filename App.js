import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text , Image} from 'react-native'
import Background from './components/Background'
import Logo from './components/Logo'
import Header from './components/Header'
import Button from './components/Button'
import TextInput from './components/TextInput'
import BackButton from './components/BackButton'
import { theme } from './core/theme'
import { emailValidator } from './helpers/emailValidator'
import { passwordValidator } from './helpers/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
     <Image source={require('./assets/logoAnzee.png')} style={styles.image} />
      <Logo />
      <View >
      <Text style={styles.header} >Welcome to</Text>
      <Text style={styles.header} >Anzee Work Driver</Text>
      </View>
      <TextInput
        label="UserID or Email "
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={{marginBottom: 30}}></View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
     
    </Background>
  )
}

const styles = StyleSheet.create({
  image: {

    marginBottom: 8,
    width: 104,
height: 21,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop:6,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  header: {
    alignItems:'flex-start',
    fontSize: 25,
    color: '#8F5849',
    fontWeight: 'bold',
    paddingVertical: 10,
    justifyContent: 'flex-start',

  },
})