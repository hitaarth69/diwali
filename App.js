import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://static.vecteezy.com/system/resources/previews/001/397/505/non_2x/purple-gradient-deepavali-background-free-vector.jpg' };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.Fact}>Have A</Text>
                <Text style={styles.Fact}>Crackling Diwali</Text>
                  <Text style={styles.Fact}>May This Season Bring </Text>
                          <Text style={styles.Fact}>Good Luck </Text>
                                                    <Text style={styles.Fact}>Health And</Text>

                             <Text style={styles.Fact}>Happiness To You</Text>
 
 

           <Text style={styles.text}>Happy Diwali</Text>
      <Text style={styles.text}>and a</Text>
      <Text style={styles.text}>Prosperous New Year</Text>

        <Text style={styles.Facts}>From Viral Tanna,Prarthana Tanna</Text>
      <Text style={styles.Facts}>Rudra Tanna and</Text>
                  <Text style={styles.Facts}>Hitaarth Tanna</Text>

    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  Fact:{
   color: 'Yello',
    fontSize: 40,
    lineHeight: 84,
    fontWeight: 'bold',
    fontStyle: 'Italic',
    textAlign: 'center',
  },
   text: {
    color: 'Black',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    fontStyle: 'Italic',
    textAlign: 'center',
  },
Facts: {
    color: 'Black',
    fontSize: 22,
    fontStyle: 'Italic',
    textAlign: 'center',
  },

});

export default App;