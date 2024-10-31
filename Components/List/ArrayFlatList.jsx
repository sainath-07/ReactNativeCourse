import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ArrayFlatList = () => {
  const customArrayList = [
    {id: 1, name: 'sainath1'},
    {id: 2, name: 'veda'},
    {id: 3, name: 'mahi'},
    {id: 4, name: 'ravi'},
    {id: 5, name: 'Babu'},
    {id: 6, name: 'Rekha'},
    {id: 7, name: 'Babu7'},
    {id: 8, name: 'rami'},
    {id: 9, name: 'Babu9'},
    {id: 10, name: 'sainath10'},
  ];

  return (
    //  FlatList METHOD.

    // <View>
    //   {/* <Text
    //     style={{
    //       backgroundColor: 'blue',
    //       color: '#eee',
    //       padding: 20,
    //       fontSize: 20,
    //       fontWeight: 500,
    //     }}>
    //     FlatList in React Native
    //   </Text> */}
    //   <FlatList
    //     data={customArrayList}
    //     // initialNumToRender={10} // Initial items to render
    //     // maxToRenderPerBatch={5}
    //     renderItem={({item: ele}) => (
    //       <View>
    //         <Text
    //           style={{
    //             fontSize: 40,
    //             color: 'red',
    //             marginVertical: 10,
    //             // borderWidth: 1,
    //             // borderColor: 'red',
    //             borderRadius: 5,
    //             marginHorizontal: 10,
    //             textAlign: 'center',
    //             padding: 10,
    //             backgroundColor: 'black',
    //           }}>
    //           {ele.name}
    //         </Text>
    //       </View>
    //     )}
    //     keyExtractor={item => item.id.toString()}
    //   />
    // </View>

    //MAP METHOD.
    <View>
      {/* <Text
        style={{
          fontSize: 50,
          textAlign: 'center',
          backgroundColor: 'yellow',
          padding: 10,
          margin: 10,
        }}>
        Map FUNCTION
      </Text> */}

      <ScrollView>
        {customArrayList?.map(element => (
          <Text style={styles?.textStyling} key={element.id}>
            {element?.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    color: 'red',
    // marginBottom: 49,
    fontSize: 30,
    backgroundColor: 'black',
    marginVertical: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default ArrayFlatList;
