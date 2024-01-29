import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Main Header
    container: {
        flex: 1,
        backgroundColor: 'rgb(6, 45, 62)',
    },
    headerText:{
        marginTop: 10,
        paddingLeft: 30,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    // Agenda
    todayAgendaHeaderText:{
        marginTop: 20,
        paddingLeft: 30,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'left',
    },

    // Agenda > Agenda Today Cards
    todayAgendaCardContainerView:{
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        width: '90%',
        height: 90,
        backgroundColor: '#0c5e82',
        borderRadius: 12,
    },
    todayAgendaCardHeader:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    todayAgendaCardText:{
        color: 'white',
        fontSize: 17,
        fontWeight: '500',
    }
});