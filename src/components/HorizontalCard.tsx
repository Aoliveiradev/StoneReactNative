import * as React from 'react';
import {Avatar, Card, IconButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HorizontalCard = () => (
  <Card.Title
    style={styles.card}
    title="Card Title"
    left={props => <Avatar.Icon {...props} icon="folder" />}
    right={props => (
      <Ionicons {...props} color='red' name="remove-circle" size={30} onPress={() => {}} />
    )}
  />
);

export default HorizontalCard;

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 24,
  },
});
