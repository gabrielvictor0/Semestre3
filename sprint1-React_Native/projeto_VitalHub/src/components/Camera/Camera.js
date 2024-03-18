import { Modal } from "react-native"
import { Camera, CameraType } from "expo-camera"
import * as MediaLibrary from ""
import { useRef, useState } from "react";

export const CameraModal = ({ visible, transparent }) => {
    const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front);
    const [photo, setPhoto] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const cameraRef = useRef(null);

    async function CapturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();

            setPhoto(photo.uri)
        }
    }

    function ClearPhoto() {
        setPhoto(null)
        setOpenModal(false)
    }

    async function SavePhoto() {
        if (photo) {
            await MediaLibrary.createAssetAsync(photo)
                .then(response => {
                    alert(`Sucesso`)
                }).catch(error => {
                    console.log("Error");
                })
        }
    }

    return (
        <Camera
            ref={cameraRef}
            type={tipoCamera}
            ratio="16:9">

        </Camera>
    )
}