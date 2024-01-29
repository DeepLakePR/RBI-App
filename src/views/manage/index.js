// Imports
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// External Style
import Style from './style.js';

// Export
export default function Manage(){
    
    // Return
    return(
        <View style={Style.container}>
            <Text style={Style.textHeader}>Seus Estabelecimentos</Text>

            <TouchableOpacity style={Style.cardEstablishment}>
                <View style={Style.cardEstablishment_container}>
                    <View style={Style.cardEstablishment_headerContainer}>
                        <Image source={require('../../assets/logo.png')} style={Style.cardEstablishment_image}></Image>
                        <Text style={{...Style.cardEstablishment_text, marginLeft: 5}}>Unidade Iguaçu</Text>
                    </View>
                    
                    <Text style={{...Style.cardEstablishment_text, color: 'green'}}>+R$9.000 P/ Mês</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={Style.cardEstablishment}>
                <View style={Style.cardEstablishment_container}>
                    <View style={Style.cardEstablishment_headerContainer}>
                        <Image source={require('../../assets/logo.png')} style={Style.cardEstablishment_image}></Image>
                        <Text style={{...Style.cardEstablishment_text, marginLeft: 5}}>Unidade Centro</Text>
                    </View>
                    
                    <Text style={{...Style.cardEstablishment_text, color: 'green'}}>+R$3.000 P/ Mês</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}