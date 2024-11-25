import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView, Image } from "react-native";
import { Link } from 'expo-router';

const style = StyleSheet.create({
    input: {
        height: 60,
        width: "95%",
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 20,
        color: "#565656",
    },

    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#772E25',
        color: 'white',
        width: 160,
        height: 50,
        margin: 100

    },
    container: {
        backgroundColor: '#197278'

    },

    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',

    },
    botaotexto: {
        color: 'white',

    },

    descricao: {
        fontSize: 19,
        color: '#666',
        height: 80,
        color: 'white',

    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 30,
        marginBottom: 270,
        height: '70%',
        width: '100%',
        marginVertical: 190,
        justifyContent: 'flex-end'
    },
    link: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        height: 20,
        width: 20
    }

})

export default SinUp = () => {
    //const email = ''

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')



    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log('os parametros nome, email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('http://localhost:8000/registro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ name: nome, email: email, senha: senha, sobrenome: sobrenome, dataNascimento: dataNascimento })
        })

        if (!resposta) {
            console.log('erro')
        } else if (resposta.status == 200) {
            console.log('user criado com sucesso')
        } else {
            console.log('ocorreu um erro')
        }
    }


    return (
        <SafeAreaView style={style.container}>
            <Link href="/login" >
                <Image style={style.logo} source={require('../img/desfazer.png')} />
            </Link>
            <View style={style.card}>
                <Text style={style.titulo}>crie sua conta</Text>
                <Text style={style.descricao}>sa</Text>
                <View />
                <View style={style.inputView}>
                    <TextInput
                        style={style.input}
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                        placeholder=" Digite seu nome"
                        placeholderTextColor="#878787"
                    /><TextInput
                        style={style.input}
                        onChangeText={(text) => setSenha(text)}
                        value={sobrenome}
                        placeholder=" Digite seu sobrenome"
                        placeholderTextColor="#878787"

                    />
                    <TextInput
                        style={style.input}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        placeholder=" Digite seu email"
                        placeholderTextColor="#878787"
                    />
                    <TextInput
                        style={style.input}
                        onChangeText={(text) => setSenha(text)}
                        value={dataNascimento}
                        placeholder=" Digite sua data de nascimento"
                        placeholderTextColor="#878787"
                    />
                    <TextInput
                        style={style.input}
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        placeholder=" Digite sua senha "
                        placeholderTextColor="#878787"
                    />


                    <View style={style.botao} >
                        <Pressable onPress={registrarUsuario}>
                    <Link href="/" style={style.botaotexto}>Entrar</Link>
                  
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )
}