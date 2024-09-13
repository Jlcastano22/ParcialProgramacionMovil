import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Description() {
  const route = useRoute();
  const { id } = route.params;

  const [data, setData] = useState([]);
  const urlBase = 'https://rickandmortyapi.com/api/character/';
  fetch(urlBase + id)
    .then((response) => response.json())
    .then((dataApi) => setData(dataApi))
    .catch((error) => console.log(error));

  const originName = data.origin ? data.origin.name : 'Unknown';
  const locationName = data.origin ? data.location.name : 'Unknown';

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.name}>{data.name}</Text>
        <Image source={data.image} style={styles.image} />
        <Text style={styles.textCharacter}>Estado: {data.status}</Text>
        <Text style={styles.textCharacter}>Especie: {data.species}</Text>
        <Text style={styles.textCharacter}>Origen: {originName}</Text>
        <Text style={styles.textCharacter}>Locacion: {locationName}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e24',
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    color: '#00FF00',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#D100FF',
    marginBottom: 20,
  },
  textCharacter: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
});
{
  /* <Text style={styles.species}>Origen: {data.origin.name}</Text> ----------------------------pregunta */
}
