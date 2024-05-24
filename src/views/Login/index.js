import React, { useState } from "react";
import { Linking, TextInput, TouchableOpacity, View, StyleSheet, Text } from "react-native";


export default function Login ({ navigation, route}) {
    const [name, setName] = useState('Cliente');
    return (
        <View style={styles.container}>
            <View style={styles.cardLogin}>
                <Text style={styles.title}>Bem vindo(a) ao NooBank!</Text>
                <Text style={styles.title}>Seu nome:</Text>
                <TextInput style={styles.input} placeholder={"Digite seu nome aqui..."} onChangeText={setName}></TextInput>
                <TouchableOpacity>
                    <Text style={styles.buttonLogin} onPress={() => {navigation.navigate("Home", { name:name })}}>LOGAR</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => { Linking.openURL('https://github.com/SesiSenai1DE');}}>
                <Text style={styles.link}>
                Developed by 2DE
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8000ff',
        flexDirection: 'column',
        justifyContent: 'center',
        tintColor: 'red',
        paddingHorizontal: 10,
    },
    logo: {
        color: 'white',
        textAlign: 'center',
    },
    cardLogin: {
        paddingTop: 30,
        paddingStart: 30,
        paddingEnd: 30,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    title: {
        fontSize: 25,
        marginBottom: 30,
    },
    label: {
        color: '#616161',
        marginTop: 10,
        fontSize: 20,
    },
    input: {
        marginTop: 5,
        height: 40,
        borderWidth: 1,
        padding: 10,
        bordeColor: '#5e5e5e',
        marginBottom: 23,
        borderRadius: 4,
    },
    buttonLogin: {
        backgroundColor: '#8000ff',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'flex-end',
        paddingTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 30,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 25,
    },
    link: {
        backgroundColor: 'white',
        fontSize: 13,
        textAlign: 'center',
        alignSelf: 'flex-end',
        marginTop: 10,
        paddingTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    }
})