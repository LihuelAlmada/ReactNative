import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Touchable } from 'react-native';
import alvaro from './assets/Captura.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Alvaro</Text>
      <Image source={{uri: 'https://picsum.photos/200/300'}} style={styles.image}/>
      <Image source={alvaro} style={styles.image}/>
      <Button
        color="blue"
        title="Go!"
        onPress={()=> console.log("Hola!")}
      />
      <Text style={styles.title}>Puede generar un   </Text>
      <TouchableOpacity
      onPress={()=> console.log("Hola!")}
      >
        <Text style={styles.title}>reclamo</Text>
      </TouchableOpacity>
      <Text style={styles.title}>o puede ir a</Text>
      <TouchableOpacity
      onPress={()=> console.log("Hola!")}
      >
        <Text style={styles.title}>gestion</Text>
      </TouchableOpacity>
      <Text style={styles.title}>con los botones</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkslateblue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30, color: '#fff'
  },
  image:{
    width:200,height:200, borderRadius: 100
  }
});
