import {View, Text, Image, ScrollView, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import actionaddtocart from '../Redux/action';

const Products = ({item}) => {
  const dispatch = useDispatch();
  const addtocart = value => {
    dispatch(actionaddtocart(value));
  };
  return (
    <ScrollView
      style={{padding: 20, borderColor: 'black', borderWidth: 1, margin: 10}}>
      <View>
        <Text style={{fontSize: 20}}>{item.name}</Text>
        <Text style={{fontSize: 20}}>{item.price}</Text>
      </View>
      <View style={{margin: 10}}>
        {' '}
        <Image width={100} height={100} source={{uri: item.image}} />{' '}
      </View>
      <Button title="add to cart" onPress={() => addtocart(item)} />
    </ScrollView>
  );
};

export default Products;
