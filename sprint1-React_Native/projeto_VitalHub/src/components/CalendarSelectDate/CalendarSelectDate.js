import { Calendar, LocaleConfig } from "react-native-calendars";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { DayContainer, DayText } from "./Style";

LocaleConfig.locales['br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Mai0',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
    dayNamesShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    today: "Atualmente"
};

LocaleConfig.defaultLocale = 'br';

export default function CalendarSelectDate({ selectedDate = '', handleSelectedDateFn = null }) {
    
    const currentDate = new Date().toUTCString();

    const renderHeader = (date) => {
        return (
            <TouchableOpacity>
                <Text style={styles.headerText}>{LocaleConfig.locales[LocaleConfig.defaultLocale].monthNames[date.getMonth()]} {date.getFullYear()}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <Calendar
            minDate={currentDate}
            monthFormat='MMMM yyyy'
            enableSwipeMonths={true}
            hideArrows={true}
            style={styles.calendar}
            theme={{
                calendarBackground: "transparent",
                selectedDayBackgroundColor: "#60BFC5"
            }}
            renderHeader={renderHeader} 
            dayComponent={({ date, state }) =>
                <TouchableOpacity style={styles.button} onPress={() => {
                    if (state == 'disabled')
                        return;
                    ''
                    handleSelectedDateFn(date.dateString)

                }}>

                    <DayContainer isSelected={date.dateString == selectedDate}>
                        <DayText isSelected={date.dateString == selectedDate} isDisabled={state == 'disabled'}>{date.day}</DayText>
                    </DayContainer>
                        
                </TouchableOpacity>
            }
        />
    );
}

const styles = StyleSheet.create({
    calendar: {
        width: 350,
        marginTop: 20,
        marginBottom: 15,
        backgroundColor: 'transparent'
    },
    headerText: {
        fontSize: 22,
        fontFamily: 'MontserratAlternates_600SemiBold',
        color: '#5F5C6B',
        marginTop: 10,
        marginBottom: 10
    }
});

