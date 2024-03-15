import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from "expo-media-library"
import { useEffect, useState, useRef } from 'react';

import { FontAwesome } from "@expo/vector-icons"

// Quando salvar a foto - poder apagar da galeria 
// Botao para ativar o flash
// forma de carregar o autofocus 
// Aplicando o video no projeto

export default function App() {
  
  // salvando o tipo da camera como frontal
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front);

  //local onde o caminho da photo sera salvo
  const [photo, setPhoto] = useState(null)

  //modal para mostrar a foto tirada
  const [openModal, setOpenModal] = useState(false)

  //referencia para a camera 
  const cameraRef = useRef(null);

  async function CapturePhoto() {
    //validação para verificar se cameraRef é null ou undefined
    if (cameraRef) {
      //criando uma constante para receber a foto
      const photo = await cameraRef.current.takePictureAsync();

      // salvando o caminho da foto (uri) no state da foto
      setPhoto(photo.uri)

      // abrindo a modal que ira mostrar a foto
      setOpenModal(true)
      console.log(photo)
    }
  }

  function ClearPhoto() {
    setPhoto(null)
    setOpenModal(false)
  }

  async function SavePhoto() {
    //verificando se photo contém a uri
    if (photo) {
      //acessando a galeria e salvando a foto 
      await MediaLibrary.createAssetAsync(photo)
        .then(response => {
          alert('Sucesso' + ' Foto salva na galeria')
        }).catch(error => {
          console.log("Erro ao processar foto")
        })
    }
  }

  useEffect(() => {
    (async () => {
      // pedindo permissão para acessar a camera
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
      // pedindo permissão para acessar a galeria
      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
    })();
  }, [])

  return (
    <View style={styles.container}>

      <Camera
        // cameraRef está obtendo referencia do componente camera
        ref={cameraRef}
        type={tipoCamera}
        style={styles.camera}
        ratio={'16:9'}
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity
            style={styles.btnFlip}
            onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.btnCaptura} onPress={() => CapturePhoto()}>
        <FontAwesome name='camera' size={23} color={"#FFF"} />
      </TouchableOpacity>

      <Modal animationType='slide' transparent={false} visible={openModal} statusBarTranslucent={true}>

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 30 }}>

          <Image style={{ width: "100%", height: 500, borderRadius: 10 }} source={{ uri: photo }} />

          <View style={{ margin: 15, flexDirection: "row" }}>

            <TouchableOpacity style={styles.btnCancel} onPress={() => ClearPhoto()}>
              <FontAwesome name='trash' size={35} color={"#ff0000"} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnUpload} onPress={() => SavePhoto()}>
              <FontAwesome name='save' size={35} color={"black"} />
            </TouchableOpacity>
          </View>

        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    height: "80%",
    width: "100%"
  },
  viewFlip: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: 'center'
  },
  btnFlip: {
    position: "absolute",
    bottom: 20,
    left: 20,
    padding: 15
  },
  txtFlip: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20
  },
  btnCaptura: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center"
  },
  btnCancel: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  btnUpload: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  }
});
