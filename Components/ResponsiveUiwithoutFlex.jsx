import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ResponsiveUiwithoutFlex = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <View
          style={{
            width: responsiveWidth(20),
            height: responsiveWidth(20),
            backgroundColor: 'green',
            borderRadius: responsiveWidth(10),
            marginRight: responsiveWidth(10),
          }}></View>
        <View
          style={{
            width: responsiveWidth(20),
            height: responsiveWidth(20),
            backgroundColor: 'green',
            borderRadius: responsiveWidth(10),
          }}></View>
      </TouchableOpacity>
      <Image
        source={require('../assets/image.jpg')}
        style={{
          width: responsiveWidth(30),
          height: responsiveHeight(20),
          resizeMode: 'contain',
        }}
      />
      <Text style={{fontSize: responsiveFontSize(3)}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        commodi delectus mollitia omnis porro autem quisquam tenetur ex eaque
        impedit inventore at magni itaque, quaerat repellendus sapiente quod
        pariatur necessitatibus
      </Text>
    </View>
  );
};

export default ResponsiveUiwithoutFlex;

const styles = StyleSheet.create({});
