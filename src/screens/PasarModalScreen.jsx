import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import CowImage from '../asset/cow.png'; // Pastikan gambar cow.png ada di direktori assets

const PasarModalScreen = () => {
  const [jumlahSapi, setJumlahSapi] = useState(0);
  const [hargaSapi, setHargaSapi] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);

  const handleJumlahSapiChange = (value) => {
    setJumlahSapi(value);
    setTotalHarga(value * hargaSapi);
  };

  const handleHargaSapiChange = (value) => {
    setHargaSapi(value);
    setTotalHarga(value * jumlahSapi);
  };

  const handleBeli = () => {
    // Logika untuk membeli sapi
    console.log(`Membeli ${jumlahSapi} sapi dengan total harga ${totalHarga}`);
  };

  const handleJual = () => {
    // Logika untuk menjual sapi
    console.log(`Menjual ${jumlahSapi} sapi dengan total harga ${totalHarga}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={CowImage} style={styles.cowImage} />
        <Text style={styles.headerText}>Pasar Sapi</Text>
      </View>

      <View style={styles.tradingContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Jumlah Sapi</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={handleJumlahSapiChange}
            value={jumlahSapi.toString()}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Harga Sapi (per ekor)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={handleHargaSapiChange}
            value={hargaSapi.toString()}
          />
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.label}>Total Harga</Text>
          <Text style={styles.total}>{totalHarga}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBeli}>
            <Text style={styles.buttonText}>Beli</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleJual}>
            <Text style={styles.buttonText}>Jual</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#2196F3',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cowImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tradingContainer: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PasarModalScreen;