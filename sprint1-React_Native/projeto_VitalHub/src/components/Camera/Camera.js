import { Camera, CameraType } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import { useEffect, useRef, useState } from "react";
import { ContainerCamera } from "./Style";
import { FontAwesome } from '@expo/vector-icons';
import { Image, Modal, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export const CameraPrescription = () => {
    const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front);
    const [photo, setPhoto] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [cameraModal, setCameraModal] = useState(false)
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

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
        })();
    }, [])

    return (
        <ContainerCamera>
            <Camera
                style={{ flex: 1, width: "100%", height: "80%", justifyContent: "flex-end" }}
                ref={cameraRef}
                type={tipoCamera}
                ratio="16:9"
            >
                <View style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "17%", width: "100%", flexDirection: "column", justifyContent: "flex-end" }}>

                    <TouchableOpacity onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}>
                        <AntDesign name="retweet" size={40} color="white" style={{ position: "absolute", bottom: 20, left: 20 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { CapturePhoto(); setCameraModal(true) }}>
                        <FontAwesome name="circle" size={68} color="white" style={{ position: "absolute", alignSelf: "center", bottom: 30 }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FontAwesome name="video-camera" size={37} color="white" style={{ alignSelf: "flex-end", position: "absolute", bottom: 20, right: 20 }} />
                    </TouchableOpacity>

                </View>

                <Modal statusBarTranslucent={true} visible={cameraModal} style={{ backgroundColor: "green" }}>
                    <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "space-between", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                        <Image style={{ width: "90%", height: "70%", alignSelf: "center", borderRadius: 5, marginTop: "25%" }} source={{ uri: photo }} />
                        <View style={{width: "50%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 25}}>
                            <MaterialIcons name="save-alt" size={44} color="white" style={{  }} />
                            <Fontisto name="trash" size={27} color="white" style={{ }} />
                        </View>
                    </View>
                </Modal>

            </Camera>
        </ContainerCamera>
    )
}