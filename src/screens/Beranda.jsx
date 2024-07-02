// screens/Beranda.js
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  { id: 1, title: 'Kas', icon: 'money', screen: 'Kas' },
  { id: 2, title: 'Pasar', icon: 'shopping-cart', screen: 'Pasar' },
  { id: 3, title: 'Kesehatan', icon: 'medkit', screen: 'Kesehatan' },
  { id: 4, title: 'Penjualan', icon: 'line-chart', screen: 'Penjualan' },
  { id: 5, title: 'Kandang', icon: 'paw', screen: 'Kandang' },
  { id: 6, title: 'Pembayaran', icon: 'credit-card', screen: 'Pembayaran' },
];

const { width } = Dimensions.get('window');
const itemWidth = (width - 48) / 3;

const Beranda = () => {
  const navigation = useNavigation();

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.menuItem, { width: itemWidth }]}
      onPress={() => navigation.navigate(item.screen)}
    >
      <FontAwesome 
        name={item.icon} 
        size={24} 
        color="#007AFF" 
        style={styles.menuItemIcon} 
      />
      <Text style={styles.menuItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.investorButton}
        onPress={() => navigation.navigate('Investor')}
      >
        <FontAwesome 
          name="briefcase" 
          size={18} 
          color="#FFFFFF" 
          style={styles.investorIcon} 
        />
        <Text style={styles.investorButtonText}>Investor</Text>
      </TouchableOpacity>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMenuItem}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  menuItem: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    margin: 5,
    alignItems: 'center',
    borderRadius: 8,
  },
  menuItemText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  menuItemIcon: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 8,
  },
  investorButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  investorButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  investorIcon: {
    marginRight: 8,
  },
});

export default Beranda;