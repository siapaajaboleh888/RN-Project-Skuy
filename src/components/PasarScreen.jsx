import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Modal, SafeAreaView, Image } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

const PasarScreen = () => {
  const [sapiList, setSapiList] = useState([]);
  const [selectedSapi, setSelectedSapi] = useState(null);
  const [showCommunicationModal, setShowCommunicationModal] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [currentBid, setCurrentBid] = useState('');

  useEffect(() => {
    fetchSapiData();
    fetchChatMessages();
  }, []);

  const fetchSapiData = useCallback(() => {
    // Implementation of fetching cow data from API
    const dummyData = [
      { id: '1', nama: 'Sapi Limosin', harga: 25000000, streamUrl: 'https://example.com/stream1', penjual: 'Pak Budi', imageUrl: 'https://example.com/sapi1.jpg' },
      { id: '2', nama: 'Sapi Brahman', harga: 30000000, streamUrl: 'https://example.com/stream2', penjual: 'Bu Siti', imageUrl: 'https://example.com/sapi2.jpg' },
    ];
    setSapiList(dummyData);
  }, []);

  const fetchChatMessages = useCallback(() => {
    // Implementation of fetching chat messages from API
    const dummyChat = [
      { id: '1', sender: 'Pembeli', message: 'Apakah sapi ini masih tersedia?', type: 'chat' },
      { id: '2', sender: 'Penjual', message: 'Ya, masih tersedia. Ada yang bisa saya bantu?', type: 'chat' },
    ];
    setChatMessages(dummyChat);
  }, []);

  const renderSapiItem = useCallback(({ item }) => (
    <TouchableOpacity style={styles.sapiItem} onPress={() => setSelectedSapi(item)}>
      <Image 
        source={{ uri: item.imageUrl }} 
        style={styles.sapiImage} 
        resizeMode="cover"
      />
      <View style={styles.sapiInfo}>
        <Text style={styles.sapiNama}>{item.nama}</Text>
        <Text style={styles.sapiHarga}>Rp {item.harga.toLocaleString()}</Text>
        <Text style={styles.sapiPenjual}>Penjual: {item.penjual}</Text>
      </View>
    </TouchableOpacity>
  ), []);

  const handleSendMessage = useCallback(() => {
    if (newMessage.trim() !== '') {
      setChatMessages(prevMessages => [...prevMessages, { id: Date.now().toString(), sender: 'Pembeli', message: newMessage, type: 'chat' }]);
      setNewMessage('');
    }
  }, [newMessage]);

  const handleBid = useCallback(() => {
    if (currentBid.trim() !== '') {
      setChatMessages(prevMessages => [...prevMessages, { id: Date.now().toString(), sender: 'Pembeli', message: `Tawaran: Rp ${currentBid}`, type: 'bid' }]);
      setCurrentBid('');
    }
  }, [currentBid]);

  const renderCommunicationItem = useCallback(({ item }) => (
    <View style={[styles.communicationBubble, item.sender === 'Pembeli' ? styles.buyerBubble : styles.sellerBubble]}>
      <Text style={styles.communicationSender}>{item.sender}</Text>
      <Text style={styles.communicationMessage}>{item.message}</Text>
      {item.type === 'bid' && <Icon name="gavel" size={16} color="#007bff" style={styles.bidIcon} />}
    </View>
  ), []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pasar Sapi Online</Text>
      
      <FlatList
        data={sapiList}
        renderItem={renderSapiItem}
        keyExtractor={item => item.id}
        style={styles.sapiList}
      />

      {selectedSapi && (
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>{selectedSapi.nama}</Text>
          <Video
            source={{ uri: selectedSapi.streamUrl }}
            style={styles.video}
            resizeMode="cover"
            repeat
          />
          <TouchableOpacity style={styles.communicationButton} onPress={() => setShowCommunicationModal(true)}>
            <Text style={styles.buttonText}>Tawar & Chat</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal visible={showCommunicationModal} animationType="slide" transparent={true}>
        <View style={styles.communicationModalContainer}>
          <View style={styles.communicationModalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowCommunicationModal(false)}>
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.communicationTitle}>Komunikasi dengan {selectedSapi?.penjual}</Text>
            <FlatList
              data={chatMessages}
              renderItem={renderCommunicationItem}
              keyExtractor={item => item.id}
              style={styles.communicationList}
            />
            <View style={styles.communicationInputContainer}>
              <TextInput
                style={styles.chatInput}
                placeholder="Ketik pesan..."
                value={newMessage}
                onChangeText={setNewMessage}
              />
              <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                <Icon name="send" size={24} color="#007bff" />
              </TouchableOpacity>
            </View>
            <View style={styles.bidContainer}>
              <TextInput
                style={styles.bidInput}
                placeholder="Masukkan tawaran Anda"
                keyboardType="numeric"
                value={currentBid}
                onChangeText={setCurrentBid}
              />
              <TouchableOpacity style={styles.bidButton} onPress={handleBid}>
                <Text style={styles.bidButtonText}>Tawar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  sapiList: {
    width: '100%',
  },
  sapiItem: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  sapiImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  sapiInfo: {
    flex: 1,
  },
  sapiNama: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sapiHarga: {
    fontSize: 16,
    color: '#28a745',
    marginBottom: 5,
  },
  sapiPenjual: {
    fontSize: 14,
    color: '#666',
  },
  detailContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  video: {
    width: '100%',
    height: 200,
  },
  communicationButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  communicationModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  communicationModalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  communicationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  communicationList: {
    flex: 1,
  },
  communicationBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    maxWidth: '80%',
  },
  buyerBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
  },
  sellerBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
  },
  communicationSender: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  communicationMessage: {
    fontSize: 16,
  },
  communicationInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  chatInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
  },
  bidContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  bidInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  bidButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  bidButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bidIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default PasarScreen;