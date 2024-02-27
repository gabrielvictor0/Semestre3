import { Modal } from "react-native"
import { BoxModalSchedule, InputSelect, LabelInputSchedule, TitleSchedule} from "./Style"

export const ScheduleAppointment = ({setModalSchudule, transparent, visible}) => {
    return(
        <Modal transparent={transparent} visible={visible} animationType="fade">
            <BoxModalSchedule>
                <TitleSchedule>Agendar consulta</TitleSchedule>
                <LabelInputSchedule>Selecione o tipo de consulta</LabelInputSchedule>
                <InputSelect/>
            </BoxModalSchedule>
        </Modal>
    )
}