import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Products from './Products';

const Home = () => {
  const data = [
    {
      name: 'samsung',
      price: 150,
      image:
        'https://images.samsung.com/is/image/samsung/assets/in/explore/brand/latest-samsung-smartphones-launched-in-india/M55-5G-720x540_2.jpg?$720_N_JPG$',
    },
    {
      name: 'Apple',
      price: 200,
      image:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZhrJHSlC23z7giCWjoGRQkvt0Xh9HTzOVzVC1G4NLljd296szq_z-aTO9T933iKd8-sBG4wM1YD5zq0frCvjRzSAbxcVwQ2bH806fBjg2',
    },
    {
      name: 'Realme',
      price: 500,
      image:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHTicaPE6wdXC6MkeNaEicMqOoBTpTwx1Jbb0eKqxK7BNrn9MvJmtJR-iDoWX8mw2N2_W1hMnreiGOxWW_mQyxbCFZDyPMRE5tY49vyHmCvCAMdR1bkBpu9w',
    },
    {
      name: 'Vivo',
      price: 800,
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSerSpocUN-qlMXmXCF-2ronegBlArEOKAF9dH9ecEwOYiBjywV98S8LWU88VbOsBNwXhJtnwa_3Ck4ETHlgLTWw47S-JBrhs52iepsioDqoDDcRCMtMNAon8U',
    },
  ];
  return (
    <View>
      <Text>Home</Text>
      <ScrollView>
        {data.map(item => (
          <Products item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
