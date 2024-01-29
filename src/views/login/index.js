// Imports
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

// External Style
import Style from './style.js';

// Export App
export default function Login({ navigation }) {

    // States
    const [showLoadingIcon, setShowLoadingIcon] = useState('none');

    // Variables

    // Functions
    function USER_login() {
        setShowLoadingIcon('flex');

        setTimeout(()=>{
            navigation.push('Home');
        }, 1500);

    }

    // Return the App
    return (
        <View style={Style.container}>
            <LinearGradient
                colors={['rgb(6, 45, 62)', 'rgba(7, 98, 138, 0.4)', 'rgb(6, 45, 62)']}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                }}
            />

            <Image source={require('./loginIcon.png')} resizeMode={'contain'} style={Style.loginImage}></Image>

            <Text style={Style.text}>Usuário</Text>
            <TextInput style={Style.textInput} inputMode={'email'}></TextInput>

            <Text style={{...Style.text, marginTop: 15}}>Senha</Text>
            <TextInput style={Style.textInput} secureTextEntry={true}></TextInput>
            
            <TouchableOpacity onPress={() => USER_login()}>
                <Text style={Style.loginButton}>Entrar</Text>
            </TouchableOpacity>

            <View style={{...Style.loadingIconView, display: showLoadingIcon }}>
                <ActivityIndicator size="large" animating={true} color="white" style={Style.loadingIcon}/>
            </View>
        </View>
    )
}
