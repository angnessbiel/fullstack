import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Pressable} from 'react-native';
import { Link } from 'expo-router';

const artistas = [
  { id: '1', imagem: require('../img/branco.png') },
  { id: '2', imagem: require('../img/branco.png') },
  { id: '3', imagem: require('../img/branco.png') },
];

const playlist = [
  { id: '1', imagem: require('../img/branco.png') },
  { id: '2', imagem: require('../img/branco.png') },
  { id: '3', imagem: require('../img/branco.png') },
];

const g = [
  { id: '1', imagem: require('../img/branco.png') },
  { id: '2', imagem: require('../img/branco.png') },
  { id: '3', imagem: require('../img/branco.png') },
];
const PODCAST = [
  { id: '1', imagem: require('../img/branco.png') },
  { id: '2', imagem: require('../img/branco.png') },
  { id: '3', imagem: require('../img/branco.png') },
];
const maisTocadas = [
  { id: '1', imagem: require('../img/branco.png') },
  { id: '2', imagem: require('../img/branco.png') },
  { id: '3', imagem: require('../img/branco.png') },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.botao}>
        <Link href="/perfil" style={styles.botaotexto}></Link>
      </Pressable>
      <View style={styles.banner}>
        <Image source={require('../img/branco.png')} style={styles.imagemBanner} />
      </View>
      <Link href="/perfil" >
                <Image style={styles.logo} source={require('../img/desfazer.png')} />
            </Link>
      <Text style={styles.tituloSecao}>ARTISTAS</Text>
      <FlatList
        data={artistas}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.imagem} style={styles.circulo} />
        )}
        
      />

      <Text style={styles.tituloSecao}>PLAYLIST</Text>
      <FlatList
        data={playlist}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.imagem} style={styles.retangulo} />
        )}

      />

      <Text style={styles.tituloSecao}>ESPERAMOS QUE GOSTE</Text>
      <FlatList
        data={g}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.imagem} style={styles.circulo} />
        )}
        
      />
        <Text style={styles.tituloSecao}>PODCAST</Text>
      <FlatList
        data={PODCAST}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.imagem} style={styles.circulo} />
        )}
        
      />
         <Text style={styles.tituloSecao}>MAIS TOCADAS NO BRASIL</Text>
      <FlatList
        data={maisTocadas}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.imagem} style={styles.retangulo} />
        )}

      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283D3B',
    padding: 20,
  },
  banner: {
    height: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imagemBanner: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  tituloSecao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  circulo: {
    width: 120,
    height: 120,
    borderRadius: 80,
    backgroundColor: '#B0B0B0',
    margin:5
  },
  retangulo: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#B0B0B0',
    margin:5
  },
  logo: {
    height: 20,
    width: 20
}

});