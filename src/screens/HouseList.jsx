import React from 'react';
import { View, FlatList } from 'react-native';

const HouseList = ({ navigation }) => {
  const houses = [
    { id: 1, name: 'House 1', location: 'Location 1', price: '$500/month', image: 'https://pinhome-blog-assets-public.s3.amazonaws.com/2021/12/img_61aa254b65bcc.jpg' },
    { id: 2, name: 'House 2', location: 'Location 2', price: '$600/month', image: 'https://q-xx.bstatic.com/xdata/images/hotel/max1200/66752090.jpg?k=6c50b9c5c9e558288c6de59504febd17b6ee2a25e1748eb039811b056cef64c7&o=' },
    { id: 3, name: 'House 3', location: 'Location 3', price: '$700/month', image: 'https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-large/2250/12274/emporio-architect-desain-rumah-villa-bali-tropis-436-jakarta1567672045-l.jpeg' },
    { id: 4, name: 'House 4', location: 'Location 4', price: '$800/month', image: 'https://i.pinimg.com/originals/41/30/5c/41305cb2f8391620d046a2a3518a7a35.jpg' },
    { id: 5, name: 'House 5', location: 'Location 5', price: '$900/month', image: 'http://ghflicks.com/wp-content/uploads/2019/06/Bali-villas.jpg' },
    { id: 6, name: 'House 6', location: 'Location 6', price: '$1000/month', image: 'http://geriabalivillas.com/imglive/22_1.%20Villa-The-Maya-Exterior.JPG' },
    { id: 7, name: 'House 7', location: 'Location 7', price: '$1100/month', image: 'https://casaliotravel.com/wp-content/uploads/2017/07/Villa-Saba-Bali-9-bedroom-1024x681.jpg' },
    { id: 8, name: 'House 8', location: 'Location 8', price: '$1200/month', image: 'https://static.thehoneycombers.com/wp-content/uploads/sites/4/2019/04/Villa-Photo-Canggu-Beachside-Villas-Villa-Vida-Bali-Indonesia.jpeg' },
    { id: 9, name: 'House 9', location: 'Location 9', price: '$1300/month', image: 'https://pickyourtrail.com/blog/wp-content/uploads/2016/10/D-Chandrasti-Home.jpg' },
    { id: 10, name: 'House 10', location: 'Location 10', price: '$1400/month', image: 'https://tse1.mm.bing.net/th?id=OIP.mVmQzONOma6NcaJkq99VjQHaE6&pid=Api&P=0&h=220' },
  ];

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={houses}
        renderItem={({ item }) => <HouseList houses={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <Tombol title="Kembali ke halaman utama" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default HouseList;