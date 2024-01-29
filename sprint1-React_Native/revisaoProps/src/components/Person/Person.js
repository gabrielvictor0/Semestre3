
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_900Black, Inter_500Medium } from '@expo-google-fonts/inter';
import {Poppins_900Black_Italic} from "@expo-google-fonts/poppins"

//componente person
//props: name, age
const Person = ({ name, age }) => {

    let [] = useFonts({
        Inter_900Black, Inter_500Medium, Poppins_900Black_Italic
    });



    return (
        <View style={styles.container}>
            <Text style={styles.txt_font1}>Nome: {name}</Text>
            <Text style={styles.txt_font2}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FF8E1E",
        marginTop: 15,
        borderRadius: 4,
        height: 60,
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "20%",
        borderWidth: 1
    },
    txt_font1: {
        color:"white",
        fontFamily: "Inter_900Black"

    },
    txt_font2: {
        color:"black",
        fontFamily: "Poppins_900Black_Italic"
    }
})

export default Person;