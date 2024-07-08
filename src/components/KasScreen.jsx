import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PaymentMethod = ({ icon, name, onPress, isSelected }) => (
  <TouchableOpacity style={[styles.paymentMethod, isSelected && styles.selectedPayment]} onPress={onPress}>
    <Icon name={icon} size={24} color={isSelected ? "#2196F3" : "#333"} />
    <Text style={[styles.paymentText, isSelected && styles.selectedPaymentText]}>{name}</Text>
  </TouchableOpacity>
);

const KasScreen = () => {
  const [balance, setBalance] = useState('0');
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { icon: 'bank', name: 'Transfer Bank' },
    { icon: 'credit-card', name: 'Kartu Kredit' },
    { icon: 'mobile', name: 'GoPay' },
    { icon: 'money', name: 'DANA' },
    { icon: 'building', name: 'Bank Digital' },
  ];

  const handleTopUp = () => {
    if (amount && selectedMethod) {
      // Implementasi logika top-up di sini
      setBalance((parseFloat(balance) + parseFloat(amount)).toString());
      setAmount('');
      setSelectedMethod(null);
      alert('Top-up berhasil!');
    } else {
      alert('Silakan masukkan jumlah dan pilih metode pembayaran.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Saldo Kas Anda</Text>
        <Text style={styles.balanceAmount}>Rp {parseFloat(balance).toLocaleString('id-ID')}</Text>
      </View>

      <View style={styles.topUpContainer}>
        <Text style={styles.sectionTitle}>Isi Saldo</Text>
        <TextInput
          style={styles.amountInput}
          placeholder="Masukkan jumlah"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Text style={styles.sectionTitle}>Pilih Metode Pembayaran</Text>
        <View style={styles.paymentMethodsContainer}>
          {paymentMethods.map((method, index) => (
            <PaymentMethod
              key={index}
              icon={method.icon}
              name={method.name}
              onPress={() => setSelectedMethod(method.name)}
              isSelected={selectedMethod === method.name}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.topUpButton} onPress={handleTopUp}>
          <Text style={styles.topUpButtonText}>Isi Saldo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informasi Kas Saham Sapi</Text>
        <Text style={styles.infoText}>
          Saldo kas Anda dapat digunakan untuk membeli saham sapi atau reinvestasi dividen. 
          Pastikan saldo Anda mencukupi sebelum melakukan transaksi pembelian saham.
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
  balanceContainer: {
    backgroundColor: '#2196F3',
    padding: 20,
    alignItems: 'center',
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  topUpContainer: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  amountInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  paymentMethodsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentMethod: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedPayment: {
    backgroundColor: '#e3f2fd',
  },
  paymentText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  selectedPaymentText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  topUpButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  topUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default KasScreen;