import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TentangScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Tentang InvestCow</Text>
        
        <Text style={styles.subtitle}>Inovasi dalam Peternakan dan Investasi</Text>
        
        <Text style={styles.paragraph}>
          InvestCow adalah platform revolusioner yang menggabungkan manajemen peternakan sapi modern dengan konsep investasi saham. Kami menjembatani dunia peternakan tradisional dengan teknologi finansial terkini, menciptakan peluang bagi investor dan peternak untuk bertumbuh bersama.
        </Text>
        
        <Text style={styles.sectionTitle}>Fitur Utama:</Text>
        <Text style={styles.bulletPoint}>• Manajemen Peternakan Digital</Text>
        <Text style={styles.bulletPoint}>• Sistem Saham Sapi Transparan</Text>
        <Text style={styles.bulletPoint}>• Analisis Real-time Performa Investasi</Text>
        <Text style={styles.bulletPoint}>• Pelacakan Kesehatan Sapi</Text>
        <Text style={styles.bulletPoint}>• Marketplace Produk Peternakan</Text>
        
        <Text style={styles.sectionTitle}>Keunggulan Kami:</Text>
        <Text style={styles.paragraph}>
          1. Transparansi: Lacak investasi Anda secara real-time dengan data yang akurat dan terpercaya.
        </Text>
        <Text style={styles.paragraph}>
          2. Aksesibilitas: Investasi dalam industri peternakan tanpa perlu memiliki lahan atau keahlian khusus.
        </Text>
        <Text style={styles.paragraph}>
          3. Keberlanjutan: Mendukung praktik peternakan yang ramah lingkungan dan berkelanjutan.
        </Text>
        <Text style={styles.paragraph}>
          4. Dukungan Komunitas: Bergabunglah dengan komunitas investor dan peternak untuk berbagi pengetahuan dan pengalaman.
        </Text>
        
        <Text style={styles.footer}>
          InvestCow - Memadukan Tradisi Peternakan dengan Inovasi Finansial
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    marginBottom: 5,
  },
  footer: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginTop: 30,
    textAlign: 'center',
  },
});

export default TentangScreen;