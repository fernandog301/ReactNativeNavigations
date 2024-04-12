import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginFormComponent from '../Components/LoginFormComponent'

const LoginScreen = () => {
  return (
    <ImageBackground source={require('../assets/IMG_2584.jpg')}
    style={styles.background}
    >
      <View style={styles.container}>
        <LoginFormComponent/>
      </View>

    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
        container: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 10,

        }
})