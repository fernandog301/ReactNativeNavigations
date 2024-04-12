import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'
import { createAccount, login } from '../DataServices/DataServices'
import { IToken } from '../inerfaces/inerface'
import { LoginProps, Props } from '../type'

const LoginFormComponent = () => {
    const [username , setUsername] = useState<string>('')
    const [password , setPassword] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(true)


    const navigate = useNavigation <LoginProps>()
    
    const handleSubmite = async () => {
        const userData = {
            username: username,
            password: password
        }
        
        if(edit){
            let token: IToken = await login(userData);
            console.log(token)
            if(token){
                navigate.navigate("ProfileScreen")

            }
        } else {
            createAccount(userData);
        }
    }

    const handleChange = () => {
        setEdit(!edit);
    }



  return (
    <View style={styles.Container}>
      <Text style={{paddingBottom : 25, fontSize: 36}}>{edit ? 'Login Page' : 'Registration Page'}</Text>
      <TextInput style={styles.Input} placeholder='Username' value={username} onChangeText={setUsername}/>
      <TextInput style={styles.Input} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry/>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }} >            
      <Text style={{color: 'blue', textDecorationLine: 'underline'}} onPress={handleChange}>{edit ? 'Register' : 'Login'}</Text>
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
        paddingHorizontal: 10,
        // padding: 5,
    },
})

