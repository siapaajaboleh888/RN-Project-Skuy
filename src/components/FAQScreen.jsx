import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FAQScreen = () => {
  const faqData = [
    {
      question: "Apa itu InvestCow?",
      answer: "InvestCow adalah platform inovatif yang menggabungkan manajemen peternakan sapi digital dengan sistem investasi saham. Kami memungkinkan investor untuk berpartisipasi dalam industri peternakan sapi tanpa perlu memiliki lahan atau keahlian khusus."
    },
    {
      question: "Bagaimana cara kerja investasi saham sapi?",
      answer: "Investor dapat membeli saham yang merepresentasikan kepemilikan parsial atas sapi atau kelompok sapi. Keuntungan diperoleh dari pertumbuhan nilai sapi dan penjualan produk peternakan. Semua transaksi dan perkembangan investasi dapat dipantau secara real-time melalui aplikasi."
    },
    {
      question: "Apakah investasi ini aman?",
      answer: "Kami menerapkan sistem manajemen risiko yang ketat dan bekerja sama dengan peternak berpengalaman. Namun, seperti investasi lainnya, ada risiko yang terkait. Kami menyarankan untuk membaca prospektus kami dan berkonsultasi dengan penasihat keuangan sebelum berinvestasi."
    },
    {
      question: "Bagaimana SapiVest memastikan kesejahteraan sapi?",
      answer: "Kami berkomitmen pada praktik peternakan etis dan berkelanjutan. Tim dokter hewan kami secara rutin memeriksa kesehatan sapi, dan kami menggunakan teknologi IoT untuk pemantauan kondisi sapi secara real-time."
    },
    {
      question: "Berapa minimum investasi di SapiVest?",
      answer: "Minimum investasi dimulai dari pembelian 1 unit saham sapi. Harga per unit bervariasi tergantung pada jenis sapi dan proyeksi pertumbuhannya. Detail lengkap dapat dilihat di bagian 'Investasi' aplikasi kami."
    },
    {
      question: "Bagaimana cara mencairkan investasi saya?",
      answer: "Anda dapat menjual saham Anda melalui platform kami sesuai dengan periode lock-up yang berlaku. Proses pencairan biasanya memakan waktu 3-5 hari kerja setelah permintaan disetujui."
    },
    {
      question: "Apakah ada biaya yang dikenakan untuk menggunakan SapiVest?",
      answer: "Kami mengenakan biaya manajemen tahunan sebesar 2% dari nilai investasi dan biaya kinerja 20% dari keuntungan. Semua biaya transparan dan dapat dilihat di dashboard investasi Anda."
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pertanyaan yang Sering Diajukan</Text>
      {faqData.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 10,
  },
  answer: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default FAQScreen;