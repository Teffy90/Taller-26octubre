import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [acompanantes, setAcompanantes] = useState('');

  const enviarDatosAlBackend = () => {
    // Recolecta los datos de los TextInput
    const data = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      acompanantes: acompanantes,
    };

    // Envía los datos al servidor
    axios.post('url del backend', data)
      .then((response) => {
        // Datos enviados con éxito	
        console.log('Datos enviados con éxito');
      })
      .catch((error) => {
        // Maneja errores si es necesario
        console.error('Error al enviar datos', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Text style={styles.label}>Apellido</Text>
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={(text) => setApellido(text)}
      />
      <Text style={styles.label}>Edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType='number-pad'
        value={edad}
        onChangeText={(text) => setEdad(text)}
      />
      <Text style={styles.label}>Cantidad de acompañantes</Text>
      <TextInput
        style={styles.input}
        placeholder="Cantidad de acompañantes"
        keyboardType='number-pad'
        value={acompanantes}
        onChangeText={(text) => setAcompanantes(text)}
      />
      <Button title="Enviar" onPress={enviarDatosAlBackend} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 5,
  },
});
