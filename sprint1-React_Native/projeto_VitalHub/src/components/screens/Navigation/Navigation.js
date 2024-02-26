import { Button, View } from "react-native"

export const Navigation = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems: "center", justifyContent:"center"}}>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
            />

            <Button
                title="MedicalRecord"
                onPress={() => navigation.navigate('MedicalRecord')}/>

        </View>
    )
}