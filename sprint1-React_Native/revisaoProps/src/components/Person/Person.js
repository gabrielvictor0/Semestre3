
import { StyleSheet, Text, View } from "react-native";

//componente person
//props: name, age
const Person = ({ name, age }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.txt}>Nome: {name}</Text>
                <Text style={styles.txt}>Idade: {age}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FC2AE2",
        marginTop: 15,
        borderRadius: 4,
        height: 60,
        width: "60%",
        alignItems: "center"

    },
    txt: {
        alignSelf: "center"
    }
})

export default Person;