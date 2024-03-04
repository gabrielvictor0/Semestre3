
import { useState } from "react"
import { ButtonDefault } from "../../Button/Style"
import CalendarSelectDate from "../../CalendarSelectDate/CalendarSelectDate"
import { TtxCancel } from "../../Links/Style"
import { ButtonTitle } from "../../Title/Style"
import { ContainerSelecDate, InputSelectCalendar, LabelInputCalendar, TitleCalendar } from "./Style"

export const SelectDate = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();
    return (
        <ContainerSelecDate>
            <TitleCalendar>Selecionar data</TitleCalendar>
            <CalendarSelectDate 
            selectedDate={selectedDate}
            handleSelectedDateFn={setSelectedDate} />
            <LabelInputCalendar>Selecione um horário disponível </LabelInputCalendar>
            <InputSelectCalendar 
            placeholder="Selecionar horário" />
            <ButtonDefault>
                <ButtonTitle>CONFIRMAR</ButtonTitle>
            </ButtonDefault>
            <TtxCancel>Cancelar</TtxCancel>
        </ContainerSelecDate>
    )
}