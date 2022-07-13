import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons
          name="md-chevron-back-circle-outline"
          size={30}
          color="#00AD0C"
        />
      </TouchableOpacity>

      <Image resizeMethod='scale'
        style={styles.imgLogo}
        source={require('../../assets/LogoTon.png')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <AntDesign name="shoppingcart" size={30} color="#00AD0C" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margintop: 12,
    borderRadius: 0,
    borderBottomWidth: 2,
    borderColor: '#00A868',
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  imgLogo: {
    width: 60,
    height: 45,
  },
});

export default TopBar;
