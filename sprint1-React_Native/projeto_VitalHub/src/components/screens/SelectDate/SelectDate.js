
import { useState } from "react"
import { ButtonDefault } from "../../Button/Style"
import CalendarSelectDate from "../../CalendarSelectDate/CalendarSelectDate"
import { TtxCancel } from "../../Links/Style"
import { ButtonTitle } from "../../Title/Style"
import { BoxHour, ButtonSelectCalendar, ContainerSelecDate, ContentBtn, LabelInputCalendar, TextHour, TitleCalendar, TxtBtn } from "./Style"
import { FlatList, ScrollView, Text, TouchableOpacity, VirtualizedList } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { ButtonSelectHour } from "../../ButtonSelectHour/ButtonSelectHour"
import { ContentHour } from "../../ButtonSelectHour/Style"
import { ModalCheckAppointment } from "../../ModalCheckAppointment/ModalCheckAppointment"


export const SelectDate = ({navigation}) => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [statusSelect, setStatusSelect] = useState(false);
    const [statusButton, setStatusButton] = useState("")
    const [modalCheckAppointment, setModalCheckAppointment] = useState(false)

    const DatasDisponiveis = [
        {
            id: "1",
            horario: "13:00"
        },
        {
            id: "2",
            horario: "14:00"
        },
        {
            id: "3",
            horario: "17:00"
        },
        {
            id: "4",
            horario: "20:00"
        }

    ]

    return (
        <ContainerSelecDate>
            <TitleCalendar>Selecionar data</TitleCalendar>
            <CalendarSelectDate
                selectedDate={selectedDate}
                handleSelectedDateFn={setSelectedDate} />
            <LabelInputCalendar>Selecione um horário disponível </LabelInputCalendar>

            <ButtonSelectCalendar onPress={() => statusSelect == false ? setStatusSelect(true) : setStatusSelect(false)}>
                <ContentBtn>
                    {
                        statusButton == "" ?
                            <TxtBtn> Selecione um horário</TxtBtn>
                            :
                            <TxtBtn>{statusButton}</TxtBtn>
                    }
                    <AntDesign name="down" size={24} color="#34898F" style={{ alignSelf: "center" }} />
                </ContentBtn>
            </ButtonSelectCalendar>

            {
                statusSelect == true ?
                    <ContentHour>

                        <FlatList
                            data={DatasDisponiveis}
                            style={{ width: "100%" }}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                statusSelect == true && (
                                    <TouchableOpacity onPress={() => setStatusButton(item.horario) & setStatusSelect(false)}  >
                                        <ButtonSelectHour
                                            TxtHour={item.horario}
                                        />
                                    </TouchableOpacity>
                                )}
                        />
                    </ContentHour>
                    :
                    null
            }




            <ButtonDefault onPress={() => setModalCheckAppointment(true)}>
                <ButtonTitle>CONFIRMAR</ButtonTitle>
            </ButtonDefault>

            <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                <TtxCancel>Cancelar</TtxCancel>
            </TouchableOpacity>

            <ModalCheckAppointment
                visible={modalCheckAppointment}
                setModalCheckAppointment={setModalCheckAppointment} />

        </ContainerSelecDate>
    )
}