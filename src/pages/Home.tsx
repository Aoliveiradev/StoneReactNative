import TopBar from '../components/TopBar';
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Cards from '../components/Cards';
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <TopBar />
      <Text style={styles.textTittle}>Escolha sua <Fontisto name='shopping-pos-machine' size={40}/></Text>
      <ScrollView style={styles.cards}>
        <Cards />
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
  },
});
