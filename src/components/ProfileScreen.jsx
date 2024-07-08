import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileItem = ({ icon, title, value }) => (
  <View style={styles.profileItem}>
    <FontAwesome name={icon} size={20} color="#34495e" style={styles.icon} />
    <View style={styles.profileItemText}>
      <Text style={styles.profileItemTitle}>{title}</Text>
      <Text style={styles.profileItemValue}>{value}</Text>
    </View>
  </View>
);

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/placeholder-profile-image.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.role}>Investor Saham Sapi</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Saham Sapi</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>Rp 50.000.000</Text>
          <Text style={styles.statLabel}>Nilai Investasi</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>12%</Text>
          <Text style={styles.statLabel}>ROI Tahunan</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informasi Pribadi</Text>
        <ProfileItem icon="user" title="Nama Lengkap" value="John Doe" />
        <ProfileItem icon="envelope" title="Email" value="john.doe@example.com" />
        <ProfileItem icon="phone" title="Nomor Telepon" value="+62 123 4567 890" />
        <ProfileItem icon="map-marker" title="Alamat" value="Jl. Sapi Sejahtera No. 123, Jakarta" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informasi Investasi</Text>
        <ProfileItem icon="calendar" title="Bergabung Sejak" value="1 Januari 2023" />
        <ProfileItem icon="bar-chart" title="Tingkat Risiko" value="Moderat" />
        <ProfileItem icon="money" title="Total Dividen" value="Rp 5.000.000" />
        <ProfileItem icon="line-chart" title="Performa Portofolio" value="+15% (YTD)" />
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2c3e50',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 16,
    color: '#ecf0f1',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  statLabel: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  section: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
    width: 20,
    textAlign: 'center',
  },
  profileItemText: {
    flex: 1,
  },
  profileItemTitle: {
    fontSize: 16,
    color: '#34495e',
  },
  profileItemValue: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  editButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;