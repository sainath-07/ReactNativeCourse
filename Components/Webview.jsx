import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const Webview = () => {
  return (
    <WebView
      source={{uri: 'https://www.npmjs.com/package/react-native-webview'}}
    />
  );
};

export default Webview;

const styles = StyleSheet.create({});
