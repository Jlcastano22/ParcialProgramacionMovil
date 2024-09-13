import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const urlBase = 'https://rickandmortyapi.com/api/character';

  const getApi = () => {
    fetch(urlBase)
      .then((response) => response.json())
      .then((dataApi) => setData(dataApi.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemId}>{item.id}</Text>
            <Text style={styles.itemName}>{item.name}</Text>
            <Image style={styles.image} source={item.image} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Descripcion', { id: item.id })}>
              <Text style={styles.buttonText}>Mas informacion</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e24',
    padding: 15,
  },
  itemContainer: {
    backgroundColor: '#2a2f36',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 25,
    color: '#00FF00',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemId: {
    fontSize: 18,
    color: '#A0A0A0',
  },
  itemName: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#D100FF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#00FF00',
    marginBottom: 10,
  },
});
