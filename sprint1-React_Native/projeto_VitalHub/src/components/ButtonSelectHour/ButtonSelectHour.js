import { AntDesign } from '@expo/vector-icons';

export const ButtonSelectHour = () => {
    return(
        <>
            <ButtonSelectCalendar>
                <AntDesign name="down" size={24} color="#34898F" style={{ alignSelf: "flex-end" }} />
            </ButtonSelectCalendar>
        </>
    )
}