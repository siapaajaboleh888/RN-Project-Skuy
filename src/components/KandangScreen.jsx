import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SapiItem = ({ item, onPressCCTV }) => (
  <View style={styles.sapiItem}>
    <View style={styles.sapiInfo}>
      <Text style={styles.sapiName}>{item.nama}</Text>
      <Text style={styles.sapiBreed}>Jenis: {item.jenis}</Text>
      <Text style={styles.sapiAge}>Umur: {item.umur} tahun</Text>
      <Text style={styles.sapiWeight}>Berat: {item.berat} kg</Text>
    </View>
    <TouchableOpacity style={styles.cctvButton} onPress={() => onPressCCTV(item.id)}>
      <Icon name="video-camera" size={24} color="#fff" />
      <Text style={styles.cctvButtonText}>CCTV</Text>
    </TouchableOpacity>
  </View>
);

const KandangScreen = () => {
  const sapiData = [
    { id: '1', nama: 'Sapi A', jenis: 'Limosin', umur: 2, berat: 500 },
    { id: '2', nama: 'Sapi B', jenis: 'Brahman', umur: 3, berat: 550 },
    { id: '3', nama: 'Sapi C', jenis: 'Angus', umur: 2.5, berat: 525 },
    { id: '4', nama: 'Sapi D', jenis: 'Simmental', umur: 3.5, berat: 575 },
  ];

  const handlePressCCTV = (sapiId) => {
    // Implementasi untuk membuka video CCTV
    console.log(`Membuka CCTV untuk sapi dengan ID: ${sapiId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Informasi Kandang</Text>
        <Text style={styles.headerSubtitle}>Sapi-sapi Tersedia</Text>
      </View>
      
      <FlatList
        data={sapiData}
        renderItem={({ item }) => <SapiItem item={item} onPressCCTV={handlePressCCTV} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total Sapi di Kandang: {sapiData.length} ekor
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  listContainer: {
    padding: 15,
  },
  sapiItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  sapiInfo: {
    flex: 1,
  },
  sapiName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  sapiBreed: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  sapiAge: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  sapiWeight: {
    fontSize: 14,
    color: '#666',
  },
  cctvButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cctvButtonText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
  summary: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default KandangScreen;