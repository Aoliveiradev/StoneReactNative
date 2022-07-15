import * as React from 'react';
import {useEffect, useState} from 'react';
import {Card, Paragraph, Title} from 'react-native-paper';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CollectionRepository} from '../repository/CollectionRepository';

const Cards = ({onAddItem, onRemoveItem}) => {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const collectionRepository = new CollectionRepository();
      try {
        const itemsTemp = await collectionRepository.list();
        // @ts-ignore
        setItems(itemsTemp);
        // @ts-ignore
        setData(itemsTemp.map(() => false));
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.containerCard}>
      {items.map((item: any, index: number) => {
        return (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <View style={styles.cardImageContainerMachine}>
                <Image
                  style={styles.cardImageMachine}
                  source={{uri: item.photo}}
                />
                <View style={styles.cardImageContainerOptions}>
                  <Image
                    style={styles.cardImageOptions}
                    source={{uri: item.photo3}}
                  />
                  <Image
                    style={styles.cardImageOptions}
                    source={{uri: item.photo2}}
                  />
                </View>
              </View>
              <View style={styles.tittleBoard}>
                <Title style={styles.tittleText}>
                  {item.name}
                  <Title style={styles.subtittleText}>{item.subName}</Title>
                </Title>
              </View>
              <View style={styles.cardContent}>
                <MaterialCommunityIcons
                  name="cellphone-check"
                  size={15}
                  color="#00AD0C"
                />
                <Paragraph style={styles.cardParagraph}>
                  {item.description1}
                </Paragraph>
              </View>
              <View style={styles.cardContent}>
                <MaterialCommunityIcons
                  name="contactless-payment"
                  size={15}
                  color="#00AD0C"
                />
                <Paragraph style={styles.cardParagraph}>
                  {item.description2}
                </Paragraph>
              </View>
              <View style={styles.cardContent}>
                <MaterialCommunityIcons
                  name="comment-arrow-right-outline"
                  size={15}
                  color="#00AD0C"
                />
                <Paragraph style={styles.cardParagraph}>
                  {item.description3}
                </Paragraph>
              </View>
            </Card.Content>
            <Card.Actions style={styles.cardButtons}>
              <TouchableOpacity
                onPress={() => {
                  if (data[index]) {
                    onRemoveItem(item);
                  } else {
                    onAddItem(item);
                  }

                  setData(prevState => {
                    const newData = [...prevState];
                    newData[index] = !newData[index];

                    return newData;
                  });
                }}>
                {!data[index] ? (
                  <Fontisto
                    name="shopping-basket-add"
                    size={25}
                    color="#00A868"
                  />
                ) : (
                  <Fontisto
                    name="shopping-basket-remove"
                    size={25}
                    color="#B30919"
                  />
                )}
              </TouchableOpacity>
            </Card.Actions>
          </Card>
        );
      })}
    </SafeAreaView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cardButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerCard: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#ffff',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 4,
    marginTop: 40,
    marginBottom: 20,
  },
  tittleText: {
    color: '#00AD0C',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtittleText: {
    color: '#00AD0C',
    textAlign: 'center',
    fontSize: 16,
  },
  tittleBoard: {
    borderBottomColor: '#48F924',
    borderRadius: 10,
    borderBottomWidth: 1,
  },
  cardContent: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2,
  },
  cardParagraph: {
    fontSize: 9,
    paddingLeft: 5,
  },
  cardImageContainerMachine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 130,
  },
  cardImageContainerOptions: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImageMachine: {
    width: 80,
    height: 160,
    marginTop: -80,
    marginLeft: -20,
  },
  cardImageOptions: {
    width: 53,
    height: 53,
  },
});
