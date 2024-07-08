import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SettingItem = ({ icon, title, description, hasSwitch, hasChevron }) => (
  <View style={styles.settingItem}>
    <FontAwesome name={icon} size={24} color="#34495e" style={styles.icon} />
    <View style={styles.settingText}>
      <Text style={styles.settingTitle}>{title}</Text>
      {description && <Text style={styles.settingDescription}>{description}</Text>}
    </View>
    {hasSwitch && <Switch />}
    {hasChevron && <FontAwesome name="chevron-right" size={24} color="#bdc3c7" />}
  </View>
);

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Akun dan Keamanan</Text>
      <SettingItem 
        icon="user" 
        title="Profil Pengguna" 
        description="Edit informasi profil Anda"
        hasChevron={true}
      />
      <SettingItem 
        icon="lock" 
        title="Keamanan Akun" 
        description="Atur kata sandi dan autentikasi dua faktor"
        hasChevron={true}
      />
      <SettingItem 
        icon="bell" 
        title="Notifikasi" 
        description="Kelola preferensi notifikasi"
        hasChevron={true}
      />

      <Text style={styles.sectionTitle}>Investasi dan Pelaporan</Text>
      <SettingItem 
        icon="money" 
        title="Preferensi Investasi" 
        description="Atur strategi dan batasan investasi Anda"
        hasChevron={true}
      />
      <SettingItem 
        icon="file-text" 
        title="Laporan Keuangan" 
        description="Atur frekuensi dan format laporan"
        hasChevron={true}
      />
      <SettingItem 
        icon="bar-chart" 
        title="Analitik Portofolio" 
        description="Kustomisasi tampilan dashboard Anda"
        hasChevron={true}
      />

      <Text style={styles.sectionTitle}>Privasi dan Data</Text>
      <SettingItem 
        icon="eye-slash" 
        title="Privasi" 
        description="Kelola pengaturan privasi Anda"
        hasChevron={true}
      />
      <SettingItem 
        icon="cloud-download" 
        title="Unduh Data" 
        description="Unduh salinan data pribadi Anda"
        hasChevron={true}
      />

      <Text style={styles.sectionTitle}>Preferensi Aplikasi</Text>
      <SettingItem 
        icon="moon-o" 
        title="Mode Gelap" 
        description="Aktifkan mode gelap untuk tampilan malam"
        hasSwitch={true}
      />
      <SettingItem 
        icon="language" 
        title="Bahasa" 
        description="Pilih bahasa aplikasi"
        hasChevron={true}
      />

      <Text style={styles.sectionTitle}>Bantuan dan Dukungan</Text>
      <SettingItem 
        icon="question-circle" 
        title="Pusat Bantuan" 
        description="Temukan jawaban atas pertanyaan umum"
        hasChevron={true}
      />
      <SettingItem 
        icon="envelope" 
        title="Hubungi Kami" 
        description="Kirim pesan ke tim dukungan kami"
        hasChevron={true}
      />

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Keluar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 15,
    width: 24,
    textAlign: 'center',
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
  },
  settingDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 2,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;