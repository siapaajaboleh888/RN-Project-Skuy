// components/AkunScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const AkunScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../asset/ilus 1.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@email.com</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profil')}>
          <Icon name="user" size={20} style={styles.menuIcon} />
          <Text style={styles.menuText}>Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Pengaturan')}>
          <Icon name="cog" size={20} style={styles.menuIcon} />
          <Text style={styles.menuText}>Pengaturan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FAQ')}>
          <Icon name="question-circle" size={20} style={styles.menuIcon} />
          <Text style={styles.menuText}>FAQ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('TentangAplikasi')}>
          <Icon name="info-circle" size={20} style={styles.menuIcon} />
          <Text style={styles.menuText}>Tentang Aplikasi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Keluar')}>
          <Icon name="sign-out" size={20} style={styles.menuIcon} />
          <Text style={styles.menuText}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  editProfileButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  menuContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuIcon: {
    color: '#333',
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
  },
});

export default AkunScreen;