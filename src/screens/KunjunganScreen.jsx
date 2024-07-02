import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';

const KunjunganScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [jadwalKunjungan, setJadwalKunjungan] = useState([]);
  const [waktuKunjungan, setWaktuKunjungan] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(new Date(date.dateString));
  };

  const handleAddKunjungan = () => {
    const newKunjungan = {
      id: jadwalKunjungan.length + 1,
      tanggal: selectedDate,
      waktu: format(waktuKunjungan, 'HH:mm'), // Format waktu sesuai kebutuhan
    };
    setJadwalKunjungan([...jadwalKunjungan, newKunjungan]);
    setShowDateTimePicker(false);
  };

  const handleHapusKunjungan = (id) => {
    Alert.alert(
      'Hapus Kunjungan',
      'Apakah Anda yakin ingin menghapus kunjungan ini?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          onPress: () => {
            const updatedJadwalKunjungan = jadwalKunjungan.filter(
              (kunjungan) => kunjungan.id !== id
            );
            setJadwalKunjungan(updatedJadwalKunjungan);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleWaktuChange = (event, selectedTime) => {
    setShowDateTimePicker(false);
    if (selectedTime) {
      setWaktuKunjungan(selectedTime);
    }
  };

  const renderKunjungan = ({ item }) => (
    <View style={styles.kunjunganItem}>
      <Text style={styles.tanggalText}>{format(item.tanggal, 'dd MMM yyyy')}</Text>
      <Text style={styles.waktuText}>{item.waktu}</Text>
      <TouchableOpacity onPress={() => handleHapusKunjungan(item.id)}>
        <Text style={styles.hapusText}>Hapus</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDateSelect}
        markedDates={{
          [format(selectedDate, 'yyyy-MM-dd')]: { selected: true },
        }}
      />

      <TouchableOpacity style={styles.waktuButton} onPress={() => setShowDateTimePicker(true)}>
        <Text style={styles.waktuButtonText}>Pilih Waktu Kunjungan</Text>
      </TouchableOpacity>

      {showDateTimePicker && (
        <DateTimePicker
          mode="time"
          value={waktuKunjungan}
          is24Hour={true}
          display="default"
          onChange={handleWaktuChange}
        />
      )}

      <TouchableOpacity style={styles.addButton} onPress={handleAddKunjungan}>
        <Text style={styles.addButtonText}>Tambahkan Kunjungan</Text>
      </TouchableOpacity>

      <FlatList
        data={jadwalKunjungan}
        renderItem={renderKunjungan}
        keyExtractor={(item) => item.id.toString()}
        style={styles.jadwalList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  addButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 16,
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  jadwalList: {
    marginTop: 16,
  },
  kunjunganItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  tanggalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  waktuText: {
    fontSize: 16,
  },
  hapusText: {
    color: 'red',
    fontWeight: 'bold',
  },
  waktuButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 8,
    alignSelf: 'center',
  },
  waktuButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default KunjunganScreen;