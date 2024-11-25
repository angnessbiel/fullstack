import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button, Pressable} from 'react-native';
import { Link } from "expo-router";
//import { AdvancedImage } from 'cloudinary-react-native';
import { Cloudinary } from "@cloudinary/url-gen";
import * as ImagePicker from 'expo-image-picker';


const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  },
  url: { secure: true }
});



const pickImage = async () => {

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

const handletSendImage = async () => {
  try {
    const data = {
      "file": image,
      "upload_preset": 'ml_default',
      "name": 'teste',
    }
    const res = await fetch('http://api.cloudinary.com/v1_1/dywd7cidx/upload', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log(result);
  }
  catch (e) {
    console.log(e)
  }
};

const TelaPerfil = () => {

  const generosFavoritos = ['Pop', 'Rock', 'Hip-Hop', 'Clássico'];
  const artistasFavoritos = [
    { id: '1', nome: 'System of a Down', imagem: '' },
    { id: '2', nome: 'Eminem', imagem: '' },
    { id: '3', nome: 'Turma do Pagode', imagem: '' },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Link href="pg_inicio" >
          <Image style={styles.logo} source={require('../img/desfazer.png')} />
        </Link>
        <Image
          source={{ uri: '' }}
          style={styles.imagemPerfil}
        />
        <Text style={styles.nomeUsuario}>User</Text>
        <Text style={styles.descricaoUsuario}>Descrição</Text>
      </View>


      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Gêneros Favoritos</Text>
        <View style={styles.listaGeneros}>

        </View>
      </View>


      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Artistas Favoritos</Text>
        <FlatList
          data={artistasFavoritos}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.artistaItem}>
              <Image source={{ uri: item.imagem }} style={styles.imagemArtista} />
              <Text style={styles.nomeArtista}>{item.nome}</Text>
            </View>
         )}
        />
     
      </View>
      <Pressable style={styles.cartao}>
        <Link href="pagamento" >Adicinar Cartão</Link>
        </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cabecalho: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#197278',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imagemPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nomeUsuario: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  descricaoUsuario: {
    fontSize: 16,
    color: '#fff',
  },
  secao: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  listaGeneros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  generoItem: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  artistaItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  imagemArtista: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  nomeArtista: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 405,

  },
  cartao:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    margin: 30,
  }
});

export default TelaPerfil;