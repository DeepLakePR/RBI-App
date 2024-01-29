// Imports
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// External Style
import Style from './style.js';

// Set Locale Config
LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],

    monthNamesShort: ['Jan', 'Fev', 'Març', 'Abril', 'Maio', 'Jun', 'Jul', 'Agost', 'Setem', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Domingo'
};
LocaleConfig.defaultLocale = 'pt-br';

var CDate = new Date()
let getYear = CDate.toLocaleDateString('pt-BR', { year: 'numeric', timeZone: "America/Sao_Paulo" });
let getMonth = CDate.toLocaleDateString('pt-BR', { month: '2-digit', timeZone: "America/Sao_Paulo" });
let getDay = CDate.toLocaleDateString('pt-BR', { day: '2-digit', timeZone: "America/Sao_Paulo" });
CDate = getYear + '-' + getMonth + '-' + getDay;

// Export
export default function Agenda(){
    
    // Return
    return(
        <View style={Style.container}>
            <Calendar
                current={CDate}
                minDate={'2023-01-01'}
                maxDate={'2026-12-31'}
                
                theme={{
                    calendarBackground: 'transparent',
                    textSectionTitleColor: 'white',
                    textSectionTitleDisabledColor: 'white',
                    selectedDayBackgroundColor: '#20373b',
                    selectedDayTextColor: '#d7d9d9',
                    todayTextColor: 'white',
                    todayBackgroundColor: '#067394',
                    dayTextColor: 'white',
                    textDisabledColor: '#5c5c5c',
                    arrowColor: 'white',
                    disabledArrowColor: 'white',
                    monthTextColor: 'white',
                    indicatorColor: 'blue',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '300',
                    textDayHeaderFontWeight: '500',
                    textDayFontSize: 15,
                    textMonthFontSize: 17,
                    textDayHeaderFontSize: 15,
                    'stylesheet.calendar.header': {
                        week: {
                            marginTop: 10,
                            padding: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        },
                    }
                }}>
            </Calendar>
        </View>
    )
}