import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HealthItem = ({ icon, title, description }) => (
  <View style={styles.healthItem}>
    <Icon name={icon} size={24} color="#007bff" style={styles.icon} />
    <View style={styles.healthItemContent}>
      <Text style={styles.healthItemTitle}>{title}</Text>
      <Text style={styles.healthItemDescription}>{description}</Text>
    </View>
  </View>
);

const KesehatanScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Kesehatan Sapi</Text>
          <Text style={styles.headerSubtitle}>Laporan Kesehatan dan Perawatan</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Seluruh sapi di pasar kami telah menjalani pemeriksaan kesehatan menyeluruh
            dan mendapatkan perawatan sesuai standar kesehatan hewan ternak.
          </Text>
        </View>

        <View style={styles.healthItemsContainer}>
          <HealthItem 
            icon="syringe" 
            title="Vaksinasi" 
            description="Semua sapi telah menerima vaksinasi lengkap sesuai jadwal, termasuk vaksin untuk penyakit mulut dan kuku, antraks, dan BVD."
          />
          <HealthItem 
            icon="medkit" 
            title="Suplemen Vitamin" 
            description="Sapi-sapi kami diberikan suplemen vitamin dan mineral secara rutin untuk menjaga kesehatan optimal dan produktivitas."
          />
          <HealthItem 
            icon="stethoscope" 
            title="Pemeriksaan Rutin" 
            description="Tim dokter hewan kami melakukan pemeriksaan kesehatan rutin setiap bulan untuk memastikan kondisi prima setiap sapi."
          />
          <HealthItem 
            icon="leaf" 
            title="Nutrisi Seimbang" 
            description="Pakan berkualitas tinggi dan nutrisi seimbang diberikan untuk mendukung pertumbuhan dan kesehatan sapi."
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Untuk informasi lebih lanjut mengenai kesehatan dan perawatan sapi kami,
            silakan hubungi tim medis veteriner kami.
          </Text>
        </View>
      </ScrollView>
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
  infoContainer: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    elevation: 2,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  healthItemsContainer: {
    padding: 10,
  },
  healthItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
  },
  icon: {
    marginRight: 15,
    width: 24,
    textAlign: 'center',
  },
  healthItemContent: {
    flex: 1,
  },
  healthItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  healthItemDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default KesehatanScreen;