import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

const Login = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{alignItems:"center", marginVertical:15}}>
                    <Text>Welcome To </Text>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>PLENA FINANCE</Text>
                </View>
                <Button mode="outlined" style={{ width: "80%" }} onPress={() => navigation.navigate("User")}>
                Let's Start
                </Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#C4C4E4",
    },
});


export default Login;