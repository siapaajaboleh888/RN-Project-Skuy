import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const KeluarScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Implementasikan logika logout di sini
    // Setelah logout, arahkan ke halaman login atau home
    navigation.navigate('Login'); // Ganti 'Login' dengan nama screen login Anda
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keluar</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Konfirmasi Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default KeluarScreen;