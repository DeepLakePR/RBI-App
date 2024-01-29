import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d2630',
        alignItems: 'center',
    },
    textHeader:{
        marginTop: 15,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

    // Configuration Buttons
    configViewContainer:{
        marginTop: 15,
        width: '100%',
        alignItems: 'center',
    },

    // Configuration Buttons > Buttons
    configButton:{
        paddingStart: 20,
        paddingEnd: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    configButton_headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    configButton_headerText:{
        color: 'white',
        fontSize: 17,
        marginLeft: 8,
    }
});