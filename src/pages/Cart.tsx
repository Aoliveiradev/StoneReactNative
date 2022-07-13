import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TopBar from '../components/TopBar';
import HorizontalCard from '../components/HorizontalCard';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <Text style={styles.itemsCountText}>0 produtos adicionados:</Text>
      <View style={styles.card}>
        <HorizontalCard />
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemsCountText: {
    color: '#00A868',
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  card: {
    margin: 10,
  },
});
