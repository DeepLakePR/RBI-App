// Imports
import { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { LinearGradient } from 'expo-linear-gradient';

// Navigation
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

import { useTheme } from 'react-native-paper';

// Views
import Agenda from '../agenda';
import Manage from '../manage';
import Profile from '../profile';

// External Style
import Style from './style.js';

// Variables

// Home
function HomeView() {

    // States

    // Variables

    // Functions

    // Return
    return (
        <View style={Style.container}>
            <LinearGradient // Background Gradient
                colors={['#0d2630', '#0c3f54']}
                style={{
                    width: '100%',
                    height: '20%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                }}
            />

            <LinearGradient // Container Gradient
                colors={['#19485c', 'rgb(6, 45, 62)']}
                style={{
                    marginTop: 70,
                    padding: 15,
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 70,
                    borderTopRightRadius: 70,
                }}
            >
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={Style.headerText}>Bom dia, Gil</Text>
                    <Text style={{...Style.headerText, padding: 0, paddingRight: 30, color: '#ccc'}}>12:00</Text>
                </View>

                <ScrollView style={{ marginTop: 10, marginBottom: 60 }}>
                    <Text style={Style.todayAgendaHeaderText}>Agendamentos Para Hoje</Text>

                    <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
                        <View style={Style.todayAgendaCardContainerView}>
                            <View style={Style.todayAgendaCardHeader}>
                                <Text style={Style.todayAgendaCardText}>10:00</Text>
                                <Text style={Style.todayAgendaCardText}>Luan</Text>
                            </View>

                            <Text style={Style.todayAgendaCardText}>Americano</Text>
                        </View>

                        <View style={Style.todayAgendaCardContainerView}>
                            <View style={Style.todayAgendaCardHeader}>
                                <Text style={Style.todayAgendaCardText}>10:45</Text>
                                <Text style={Style.todayAgendaCardText}>Guilherme</Text>
                            </View>

                            <Text style={Style.todayAgendaCardText}>Word Fade</Text>
                        </View>

                        <View style={Style.todayAgendaCardContainerView}>
                            <View style={Style.todayAgendaCardHeader}>
                                <Text style={Style.todayAgendaCardText}>13:00</Text>
                                <Text style={Style.todayAgendaCardText}>Miguel</Text>
                            </View>

                            <Text style={Style.todayAgendaCardText}>Sobrancelhas</Text>
                        </View>

                        <View style={Style.todayAgendaCardContainerView}>
                            <View style={Style.todayAgendaCardHeader}>
                                <Text style={Style.todayAgendaCardText}>14:00</Text>
                                <Text style={Style.todayAgendaCardText}>João</Text>
                            </View>

                            <Text style={Style.todayAgendaCardText}>Terapia de Barba</Text>
                        </View>

                        <View style={Style.todayAgendaCardContainerView}>
                            <View style={Style.todayAgendaCardHeader}>
                                <Text style={Style.todayAgendaCardText}>14:30</Text>
                                <Text style={Style.todayAgendaCardText}>Carlos</Text>
                            </View>

                            <Text style={Style.todayAgendaCardText}>Social</Text>
                        </View>

                        <View style={Style.todayAgendaCardContainerView}>
                            <View style={Style.todayAgendaCardHeader}>
                                <Text style={Style.todayAgendaCardText}>15:00</Text>
                                <Text style={Style.todayAgendaCardText}>Matheus</Text>
                            </View>

                            <Text style={Style.todayAgendaCardText}>Química</Text>
                        </View>

                        <View style={Style.todayAgendaCardContainerView}>
                            <View style={Style.todayAgendaCardHeader}>
                                <Text style={Style.todayAgendaCardText}>15:30</Text>
                                <Text style={Style.todayAgendaCardText}>Jonathan</Text>
                            </View>

                            <Text style={Style.todayAgendaCardText}>Degradê</Text>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

// Export App
export default function Home() {

    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent"

    // Return the App
    return (
        <Tab.Navigator initialRouteName="Inicio" activeColor="white" inactiveColor="#8f8f8f" shifting={true} barStyle={{ backgroundColor: '#023247' }}>

            <Tab.Screen name="Inicio" component={HomeView} options={{


                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                )

            }} />

            <Tab.Screen name="Agenda" component={Agenda} options={{

                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="calendar" color={color} size={26} />
                )

            }} />

            <Tab.Screen name="Gerenciamento" component={Manage} options={{

                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clipboard-list" color={color} size={26} />
                )

            }} />

            <Tab.Screen name="Perfil" component={Profile} options={{

                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                )

            }} />

        </Tab.Navigator>
    )
}
