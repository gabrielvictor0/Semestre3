
import { useState } from "react"
import { ButtonDefault } from "../../Button/Style"
import CalendarSelectDate from "../../CalendarSelectDate/CalendarSelectDate"
import { TtxCancel } from "../../Links/Style"
import { ButtonTitle } from "../../Title/Style"
import { BoxHour, ButtonSelectCalendar, ContainerSelecDate,LabelInputCalendar, TextHour, TitleCalendar } from "./Style"
import { FlatList, TouchableOpacity } from "react-native"

export const SelectDate = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    const DatasDisponiveis = {
        horarios: "13:00"
    }

    return (
        <ContainerSelecDate>
            <TitleCalendar>Selecionar data</TitleCalendar>
            <CalendarSelectDate
                selectedDate={selectedDate}
                handleSelectedDateFn={setSelectedDate} />
            <LabelInputCalendar>Selecione um horário disponível </LabelInputCalendar>

            

            <ButtonDefault>
                <ButtonTitle>CONFIRMAR</ButtonTitle>
            </ButtonDefault>
            <TtxCancel>Cancelar</TtxCancel>
        </ContainerSelecDate>
    )
}