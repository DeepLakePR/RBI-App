// Imports
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Icons
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// External Style
import Style from './style.js';

// Export
export default function Profile(){
    
    // Return
    return(
        <View style={Style.container}>
            <FontAwesome name="user-circle-o" size={70} color="white" style={{marginTop: 100}} />
            <Text style={Style.textHeader}>Gil "Sobrenome"</Text>

            <View style={Style.configViewContainer}>

                <TouchableOpacity style={Style.configButton}>
                    <View style={Style.configButton_headerContainer}>
                        <Ionicons name="md-notifications-outline" size={30} color="white" />
                        <Text style={Style.configButton_headerText}>Notificações</Text>
                    </View>

                    <AntDesign name="right" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={Style.configButton}>
                    <View style={Style.configButton_headerContainer}>
                        <Ionicons name="color-palette-outline" size={30} color="white" />
                        <Text style={Style.configButton_headerText}>Aparência do Aplicativo</Text>
                    </View>

                    <AntDesign name="right" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={Style.configButton}>
                    <View style={{...Style.configButton_headerContainer, marginLeft: 5}}>
                        <Octicons name="gear" size={26} color="white" />
                        <Text style={Style.configButton_headerText}>Configurações</Text>
                    </View>

                    <AntDesign name="right" size={30} color="white" />
                </TouchableOpacity>


                <TouchableOpacity style={Style.configButton}>
                    <View style={Style.configButton_headerContainer}>
                        <AntDesign name="question" size={30} color="white" />
                        <Text style={Style.configButton_headerText}>Ajuda</Text>
                    </View>

                    <AntDesign name="right" size={30} color="white" />
                </TouchableOpacity>

            </View>
        </View>
    )
}