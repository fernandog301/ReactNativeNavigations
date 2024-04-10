import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <ImageBackground source={require('../assets/IMG_2584.jpg')}
    style={styles.background}
    >

    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        }
})