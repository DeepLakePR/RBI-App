import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgb(6, 45, 62)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginImage:{
        width: '45%',
        height: '20%',
        marginTop: -150,
        marginBottom: 10,
    },
    text:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    textInput:{
        marginTop: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        width: '45%',
        borderRadius: 8,
        backgroundColor: '#0971AB',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17
    },
    loginButton:{
        marginTop: 20,
        marginBottom: -40,
        paddingTop: 9,
        paddingBottom: 9,
        paddingLeft: 25,
        paddingRight: 25,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#0971AB',
        borderRadius: 8,
    },

    // Loading Icon View
    loadingIconView:{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingIcon:{
        zIndex: 999,
    }
});