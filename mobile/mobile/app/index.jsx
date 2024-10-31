import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Registro
function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDobChange = (text) => {
    if (text.length === 2 || text.length === 5) {
      text += '/';
    }
    setDob(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#bbb"
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={lastName}
          onChangeText={setLastName}
          placeholderTextColor="#bbb"
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento (DD/MM/YYYY)"
          value={dob}
          onChangeText={handleDobChange}
          placeholderTextColor="#bbb"
          maxLength={10}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#bbb"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#bbb"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

// Login
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#bbb"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#bbb"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registro' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 16,
  },
  formContainer: {
    width: '85%',
    backgroundColor: '#404040',
    padding: 16,
    borderRadius: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#505050',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#606060',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#ccc',
    marginTop: 16,
    textAlign: 'center',
  },
});
