import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TopBar from '../components/TopBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button, Checkbox} from 'react-native-paper';

const Cart = props => {
  const cart = props.route.params.cart || [];
  const [checked, setChecked] = React.useState(false);
  let total = 0;

  cart.forEach((item: any, index: number) => {
    total = item.valor + total;
  });

  return (
    <SafeAreaView style={styles.container}>
      <TopBar cart={cart} />
      <Text style={styles.itemsCountText}>{cart.length} produtos adicionados:</Text>
      <View style={styles.cardContainer}>
        {cart.map((item: any, index: number) => {
          return (
            <View key={index} style={styles.card}>
              <View style={styles.cardImage}>
                <Image style={styles.image} source={{uri: item.photo}} />
              </View>
              <Text style={styles.cardTittle}>{item.name}</Text>
              <Text style={styles.cardSubTittle}>{item.subName}</Text>
              <View style={styles.cardValor}>
                <Text>R$: {item.valor}</Text>
              </View>
              <TouchableOpacity style={styles.cardIcon}>
                <MaterialIcons name="delete-outline" size={25} color="red" />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.finalizePurchaseTextSection}>
        <Text style={styles.finalizePurchaseText}>
          <Text style={styles.amount}>Valor Total: 12x de R$ {total/12}</Text>
          {'\n'}à vista por R$ {total}{'\n'}
          {'\n'}
          <Text style={styles.shipping}>Frete Grátis</Text>
          {'\n'}Prazos de entrega: 3 a 10 dias úteis{'\n'}
        </Text>
      </View>

      <View style={styles.termsAndConditions}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text>Concordo com a <Text style={styles.terms}>Política de Privacidade</Text> e <Text style={styles.conditions}>Termos e Condições</Text></Text>
      </View>
      <View style={styles.finalizePurchaseButton}>
        <TouchableOpacity onPress={() => console.log('Pressed')}>
          <Text style={styles.finalizePurchaseButtonText}>Fechar Pedido</Text>
        </TouchableOpacity>
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
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  card: {
    margin: 20,
    padding: 5,
    height: '12%',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '90%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 4,
  },
  cardImage: {
    marginRight: 5,
  },
  image: {
    marginTop: -30,
    marginLeft: 10,
    width: 40,
    height: 80,
    backgroundColor: 'transparent',
  },
  cardTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center',
    margin: 5,
  },
  cardSubTittle: {
    fontSize: 15,
    color: 'black',
    margin: 5,
    alignSelf: 'center',
  },
  cardValor: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  cardIcon: {
    alignSelf: 'center',
  },
  finalizePurchaseTextSection: {
    width: '50%',
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  finalizePurchaseText: {
    textAlign: 'right',
    fontSize: 12,
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  shipping: {
    fontSize: 15,
    color: '#48f924',
  },
  termsAndConditions: {
    flexDirection: 'row',
  },
  terms: {
    color: '#48f924',
  },
  conditions: {
    color: '#48f924',
  },
  finalizePurchaseButton: {
    margin: 5,
    alignSelf: 'flex-end',
    backgroundColor: '#48f924',
    width: '50%',
    height: 40,
    color: 'black',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalizePurchaseButtonText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});
