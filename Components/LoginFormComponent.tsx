import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'

const LoginFormComponent = () => {
    const [username , setUsername] = useState<string>('')
    const [password , setPassword] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(true)


    const navigate = useNavigation()
    
    const handleSubmite = () => {
        const userData = {
            username: username,
            password: password
        }
        
        navigate.navigate("ProfileScreen")

    }

  return (
    <View style={styles.Container}>
      <Text style={{paddingBottom : 25, fontSize: 36}}>{edit ? 'Login Page' : 'Registration Page'}</Text>
      <TextInput style={styles.Input} placeholder='Username' value={username} onChangeText={setUsername}/>
      <TextInput style={styles.Input} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry/>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>            
      <Text style={{color: 'blue', textDecorationLine: 'underline'}} >{edit ? 'Register' : 'Login'}</Text>
            <Button title='Submit' onPress={handleSubmite}/>
        </View>
    </View>
  )
}

export default LoginFormComponent

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'gray',
        borderRadius: 10
    },
    Input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 5,
    },
})