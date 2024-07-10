import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SaleItem = ({ item }) => (
  <View style={styles.saleItem}>
    <Icon name="check-circle" size={24} color="#28a745" style={styles.icon} />
    <View style={styles.saleInfo}>
      <Text style={styles.sapiName}>{item.nama}</Text>
      <Text style={styles.saleDate}>Terjual pada: {item.tanggalJual}</Text>
      <Text style={styles.salePrice}>Harga: Rp {item.harga.toLocaleString()}</Text>
      <Text style={styles.buyerName}>Pembeli: {item.pembeli}</Text>
    </View>
  </View>
);

const PenjualanScreen = () => {
  const salesData = [
    { id: '1', nama: 'Sapi Limosin A', tanggalJual: '15 Juli 2024', harga: 25000000, pembeli: 'Pak Ahmad' },
    { id: '2', nama: 'Sapi Brahman B', tanggalJual: '20 Juli 2024', harga: 30000000, pembeli: 'Bu Siti' },
    { id: '3', nama: 'Sapi Angus C', tanggalJual: '25 Juli 2024', harga: 28000000, pembeli: 'Pak Budi' },
    { id: '4', nama: 'Sapi Simmental D', tanggalJual: '1 Agustus 2024', harga: 27000000, pembeli: 'Bu Ani' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Laporan Penjualan Sapi</Text>
        <Text style={styles.headerSubtitle}>Periode: Juli - Agustus 2024</Text>
      </View>
      
      <FlatList
        data={salesData}
        renderItem={({ item }) => <SaleItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total Penjualan: {salesData.length} ekor sapi
        </Text>
        <Text style={styles.summaryText}>
          Total Nilai: Rp {salesData.reduce((sum, item) => sum + item.harga, 0).toLocaleString()}
        </Text>
      </View>
    </SafeAreaView>
  );
}

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
  saleItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  icon: {
    marginRight: 15,
  },
  saleInfo: {
    flex: 1,
  },
  sapiName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  saleDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  salePrice: {
    fontSize: 16,
    color: '#28a745',
    marginBottom: 3,
  },
  buyerName: {
    fontSize: 14,
    color: '#666',
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
    marginBottom: 5,
  },
});

export default PenjualanScreen;