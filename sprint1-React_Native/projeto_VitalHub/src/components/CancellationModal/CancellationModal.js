import { Modal } from "react-native"
import { ButtonDefault } from "../Button/Style"
import { LinkModal } from "../Links/Style"
import { ButtonTitle } from "../Title/Style"
import { ButtonModalCancel, ContentModal, TextModal, TitleModal, ViewModal } from "./Style"

export const CancellationModal = ({ navigation, statusBarTranslucent, visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} statusBarTranslucent={true} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    <TitleModal>
                        Cancelar consulta
                    </TitleModal>
                    <TextModal>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </TextModal>

                    <ButtonDefault onPress={() => {setShowModalCancel(false) } }>
                        <ButtonTitle>
                            CONFIRMAR
                        </ButtonTitle>
                    </ButtonDefault>

                    <ButtonModalCancel onPress={() => setShowModalCancel(false)}>
                        <LinkModal >Cancelar</LinkModal>
                    </ButtonModalCancel>
                </ContentModal>
            </ViewModal>

        </Modal>
    )
}