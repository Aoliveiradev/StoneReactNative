import TopBar from '../components/TopBar';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Cards from '../components/Cards';
import React, {useState} from 'react';

const Home = () => {
  const [cart, setCart] = useState([]);

  const onAddItem = (item: any) => {
    setCart(prevState => {
      const newCart = [...prevState];
      newCart.push(item);

      return newCart;
    });
  };

  const onRemoveItem = item => {
    setCart(prevState => {
      const newCart = [...prevState];
      newCart.splice(newCart.indexOf(item), 1);

      return newCart;
    });
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <TopBar cart={cart} />
      <Text style={styles.textTittle}>
        Escolha sua <Fontisto name="shopping-pos-machine" size={40} />
      </Text>
      <ScrollView style={styles.cards} showsVerticalScrollIndicator={false}>
        <Cards onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cards: {
    flex: 1,
  },
  textTittle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    color: '#00A868',
    marginTop: 10,
  },
});
