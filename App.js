import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import { useEffect } from 'react';

export default function App() {

  const API_KEY = 'SUA_API_KEY';

  useEffect(() => {

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

  }, []);

  return (

    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Tela</Text>
          <Text style={styles.logo1}>Viva</Text>
        </View>

        {/* HEADER */}
        <View style={styles.header}>

          <Text style={styles.h1}>
            Populares
          </Text>

          <TouchableOpacity>
            <Text style={styles.vertodos}>
              Ver todos
            </Text>
          </TouchableOpacity>

        </View>

        {/* FILMES POPULARES */}
        <Text style={styles.filmespopulares}>
          Filmes Populares
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.listaHorizontal}
        >

          {/* FILME 1 */}
          <TouchableOpacity style={styles.card}>

            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
              }}
              style={styles.poster}
            />

            <Text style={styles.nomeFilme}>
              Batman: O Cavaleiro das Trevas
            </Text>

          </TouchableOpacity>

          {/* FILME 2 */}
          <TouchableOpacity style={styles.card}>

            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg'
              }}
              style={styles.poster}
            />

            <Text style={styles.nomeFilme}>
              Seven
            </Text>

          </TouchableOpacity>

          {/* FILME 3 */}
          <TouchableOpacity style={styles.card}>

            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/w500/knEIz1eNGl5MQDbrEAVWA7iRqF9.jpg'
              }}
              style={styles.poster}
            />

            <Text style={styles.nomeFilme}>
              Olhos Bem Fechados
            </Text>

          </TouchableOpacity>

        </ScrollView>

        {/* EM ALTA */}
        <Text style={styles.tituloEmAlta}>
          Em Alta
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.listaHorizontal}
        >

          {/* FILME 1 */}
          <TouchableOpacity style={styles.card}>

            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
              }}
              style={styles.poster}
            />

            <Text style={styles.nomeFilme}>
              Vingadores
            </Text>

          </TouchableOpacity>

          {/* FILME 2 */}
          <TouchableOpacity style={styles.card}>

            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg'
              }}
              style={styles.poster}
            />

            <Text style={styles.nomeFilme}>
              Velozes e Furiosos 2
            </Text>

          </TouchableOpacity>

          {/* FILME 3 */}
          <TouchableOpacity style={styles.card}>

            <Image
              source={{
                uri: 'https://image.tmdb.org/t/p/w500/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg'
              }}
              style={styles.poster}
            />

            <Text style={styles.nomeFilme}>
              Matrix
            </Text>

          </TouchableOpacity>

        </ScrollView>

        {/* MENU */}
        <View style={styles.menu}>

          <TouchableOpacity>
            <Text style={styles.menuTexto}>
              Início
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.menuTexto}>
              Buscar
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

      <StatusBar style="light" />

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1a1818',
    paddingTop: 50,
  },

  logoContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },

  logo1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7d0d94',
    marginLeft: 5,
  },

  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  vertodos: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7d0d94',
  },

  filmespopulares: {
    marginTop: 40,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7d0d94',
  },

  tituloEmAlta: {
    marginTop: 40,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7d0d94',
  },

  listaHorizontal: {
    marginTop: 20,
    paddingLeft: 10,
  },

  card: {
    marginRight: 15,
  },

  poster: {
    width: 120,
    height: 180,
    borderRadius: 12,
  },

  nomeFilme: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
    width: 120,
  },

  menu: {
    marginTop: 50,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  menuTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

});