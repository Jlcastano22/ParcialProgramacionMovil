import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Stack() {
  const route = useRoute();
  const { nombre } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.textHola}>! Hola {nombre} !</Text>
      <Image source={'https://i.blogs.es/cfa26e/rickandmortycabecera/1366_2000.jpg'} style={styles.imageBienvenida} />
      <Text style={styles.instruction}>En la parte inferior derecha encontraras los personaes y su descripcion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e24', // Fondo oscuro espacial
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHola: {
    fontSize: 28,
    color: '#00FF00', // Verde neón
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageBienvenida: {
    width: '90%',
    height: '65%',
    resizeMode: 'cover',
    borderRadius: 15,
    borderColor: '#D100FF', // Púrpura brillante
    borderWidth: 3,
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: 10,
  },
});
