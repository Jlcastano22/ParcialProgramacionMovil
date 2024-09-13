import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const navigation = useNavigation();
  const [nombre, setnombre] = useState('');

  const guardarNombre = (text) => {
    setnombre(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>
        En esta pagina podras encontrar la descripcion de los diferentes personajes de la serie rick y morty
      </Text>
      <Image source={'https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg'} style={styles.imageHome} />

      <TextInput style={styles.input} placeholder='Ingresa tu nombre' onChangeText={guardarNombre} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bienvenida', { nombre: nombre })}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e24',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#00FF00',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#A0A0A0',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageHome: {
    width: '70%',
    height: '50%',
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#00FF00',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#00FF00',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: '#2a2f36',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00FF00',
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00FF00',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
