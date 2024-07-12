import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CowImage from '../asset/cow.png';

const PasarModalScreen = () => {
  const [jumlahSapi, setJumlahSapi] = useState(0);
  const [hargaSapi, setHargaSapi] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);
  
  const [sapiList, setSapiList] = useState([
    { id: 'SA001', name: 'Sapi A', cctvUrl: 'https://example.com/cctv/SA001' },
    { id: 'SA002', name: 'Sapi B', cctvUrl: 'https://example.com/cctv/SA002' },
    { id: 'SA003', name: 'Sapi C', cctvUrl: 'https://example.com/cctv/SA003' },
  ]);

  const handleJumlahSapiChange = (value) => {
    setJumlahSapi(value);
    setTotalHarga(value * hargaSapi);
  };

  const handleHargaSapiChange = (value) => {
    setHargaSapi(value);
    setTotalHarga(value * jumlahSapi);
  };

  const handleBeli = () => {
    console.log(`Membeli ${jumlahSapi} sapi dengan total harga ${totalHarga}`);
  };

  const handleJual = () => {
    console.log(`Menjual ${jumlahSapi} sapi dengan total harga ${totalHarga}`);
  };

  const handleWatchCCTV = (cctvUrl) => {
    console.log(`Watching CCTV: ${cctvUrl}`);
    // Implement CCTV viewing logic here
  };

  const renderSapiItem = ({ item }) => (
    <View style={styles.sapiItem}>
      <Text style={styles.sapiName}>{item.name}</Text>
      <TouchableOpacity
        style={styles.cctvButton}
        onPress={() => handleWatchCCTV(item.cctvUrl)}
      >
        <Icon name="videocam" size={24} color="#fff" />
        <Text style={styles.cctvButtonText}>Watch CCTV</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={CowImage} style={styles.cowImage} />
        <Text style={styles.headerText}>Pasar Sapi Pro</Text>
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
            <Icon name="shopping-cart" size={24} color="#fff" />
            <Text style={styles.buttonText}>Beli</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.sellButton]} onPress={handleJual}>
            <Icon name="attach-money" size={24} color="#fff" />
            <Text style={styles.buttonText}>Jual</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cctvContainer}>
        <Text style={styles.cctvHeader}>CCTV Monitoring</Text>
        <FlatList
          data={sapiList}
          renderItem={renderSapiItem}
          keyExtractor={(item) => item.id}
          style={styles.sapiList}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: '#1565C0',
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  tradingContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    elevation: 3,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#e3f2fd',
    padding: 10,
    borderRadius: 5,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1565C0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#1565C0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  cctvContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    elevation: 3,
  },
  cctvHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sapiList: {
    marginTop: 10,
  },
  sapiItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sapiName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cctvButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cctvButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default PasarModalScreen;