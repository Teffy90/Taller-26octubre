import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Formulario input con nombre, apellido, edad, cantidad de acompañantes */}
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
      />
      <Text style={styles.label}>Apellido</Text>
      <TextInput
        style={styles.input}
        placeholder="Apellido"
      />
      <Text style={styles.label}>Edad</Text>
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        placeholder="Edad"
      />
      <Text style={styles.label}>Cantidad de acompañantes</Text>
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        placeholder="Cantidad de acompañantes"
      />
      {/* Botón para enviar el formulario */}
      <Button title="Enviar" />
      
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
