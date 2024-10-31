// App.js
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Exstyle from './style.js'; // Make sure the path is correct
import Forms from './Components/Forms.js';
import ArrayFlatList from './Components/List/ArrayFlatList.jsx';
import DynamicGrid from './Components/List/DynamicGrid.jsx';
import ComponentLoopwithFlatList from './Components/List/ComponentLoopwithFlatList.jsx';

// const App = () => {
//   const buttonPress = () => {
//     console.log('console log pressed');
//   };

//   const [data, setData] = useState('');

//   const handleText = text => setData(text);

//   return (
//     <>
//       <Text style={[Exstyle.textStyles, style.textStyles, {marginTop: 100}]}>
//         Text
//       </Text>

//       <Text style={{fontSize: 20}}>Inline Styles...</Text>
//       <Text style={{fontSize: 40, backgroundColor: 'red', padding: 10}}>
//         Text
//       </Text>
//       <Button title="On press" onPress={buttonPress} color={'#000AAA'} />
//       <Text style={Exstyle.textStyles}>Exported Styles</Text>

//       <Text style={style.textStyles}>Name : {data}</Text>
//       <TextInput
//         value={data}
//         style={style.inputStylings}
//         placeholder="Enter the Text"
//         onChangeText={handleText}
//       />
//       <Button title="Press me" onPress={() => setData('')} />
//     </>
//   );
// };

// const style = StyleSheet.create({
//   textStyles: {
//     color: '#fff',
//     backgroundColor: 'green',
//     padding: 12,
//     fontSize: 20,
//     marginTop: 30,
//   },
//   fontStyles: {
//     fontSize: 80,
//     color: '#eee',
//   },

//   inputStylings: {
//     borderWidth: 2,
//     borderColor: 'red',
//     margin: 10,
//     fontSize: 30,
//   },
// });

const App = () => {
  return (
    <View>
      {/* <Forms /> */}
      <ComponentLoopwithFlatList />
    </View>
  );
};

export default App;
