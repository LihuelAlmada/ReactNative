import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, Touchable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camara is required');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri});
  }

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())){
      alert("No esta disponible compartir en esta plataforma");
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        >
        <Image source={{uri: selectedImage !== null ? selectedImage.localUri : 'https://picsum.photos/200/300'}} style={styles.image}/>
      </TouchableOpacity>
      {
        selectedImage ? (
          <View>
            <Text style={styles.title}>Puede </Text>
            <TouchableOpacity
              onPress={openShareDialog}
              >
              <Text style={styles.button}>Compartir imagen</Text>
            </TouchableOpacity>
          </View>
        ) : (<View />)}
      <Text style={styles.title}>o puede ver</Text>
      <TouchableOpacity
        onPress={()=> alert("Si apreta la imagen puede cambiar la foto y luego puede preciona en compartir para enviarla a alguien!")}
        >
        <Text style={styles.button}>Informacion</Text>
      </TouchableOpacity>
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
    fontSize: 30, color: '#fff',
    marginTop: 5
  },
  image:{
    width:200,height:200, borderRadius: 100, /* resizeMode: 'contain'*/
  },
  button:{
    backgroundColor: "deepskyblue",
    padding: 7,
    margin: 10,
  }
});
