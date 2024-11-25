import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, Image, Pressable} from "react-native";
import { Link } from "expo-router";

export default Pagamento = () => {
        const [nome, setNome] = useState('');
        const [numero, setNumero] = useState('');
        const [dataValidade, setDataValidade] = useState('');
        const [cvv, setCvv] = useState('');
        const MudarNome = (nome) => setNome(nome);
        const MudarNumero = (numero) => setNumero(numero);
        const MudarDataValidade = (dataValidade) => setDataValidade(dataValidade);
        const MudarCvv = (cvv) => setCvv(cvv);

    return <View style={style.container}>
    <View style={style.body}>
      <Pressable >
        <Link href="/perfil" ></Link>
      </Pressable>
    <View style={style.logo} >
        <Image 
        style={style.image}
        source={require('../img/back.png')}/>
        <Text style={style.titulo}>VIBRA</Text>
    </View>
        <Text style={style.texto}>Área Pagamento</Text>
        <Text style={style.texto1}>Adicionar Cartão</Text>
        <TextInput 
                style={style.input}
                onChangeText={MudarNome}
                value={nome}
                placeholder="Nome no Cartão"
        />
                <TextInput 
                style={style.input}
                onChangeText={MudarNumero}
                value={numero}
                placeholder="Número do Cartão"
        />
                <TextInput 
                style={style.input}
                onChangeText={MudarDataValidade}
                value={dataValidade}
                placeholder="Data de Validade"
        />
                <TextInput 
                style={style.input}
                onChangeText={MudarCvv}
                value={cvv}
                placeholder="CVV"
        />
      
    </View>
    </View>
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#197278', 
      alignItems: 'center', 
      justifyContent: 'center', 
    },
    body: {
      width: '90%',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4,
    },
    logo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
     
    },
    image: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#444444',
      marginBottom: 10,
    },
    texto1: {
      fontSize: 16,
      color: '#666666',
      marginBottom: 20,
    },
    input: {
      height: 50,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 15,
      marginBottom: 15,
      fontSize: 16,
      color: "#565656",
    },
  });
  