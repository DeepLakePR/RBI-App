import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0d2630',
    },
    textHeader:{
        marginTop: 15,
        color: 'white',
        fontSize: 20,
        fontWeight: '300',
        width: '100%',
        textAlign: 'center',
    },

    // Card Styles
    cardEstablishment:{
        margin: 10,
        padding: 10,
        width: '90%',
        height: 70,
        borderRadius: 12,
        backgroundColor: '#113240',
    },
    cardEstablishment_container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardEstablishment_headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardEstablishment_image:{
        width: 52,
        height: 48,
    },
    cardEstablishment_text:{
        color: 'white',
        fontSize: 17,
        fontWeight: 400,
    },
});