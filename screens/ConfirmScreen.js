import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
//import Svg, { G, Path } from 'react-native-svg';


//import SvgIcon from './assets/icons/check-solid.svg'

const ConfirmScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>

        <View>
          
        </View>


        <View style={styles.card}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardText}>Welcome </Text>
            <Text style={styles.cardText}>John Doe</Text>
            <Text style={styles.cardText}>Your visitor's card number is:</Text>
            <Text style={styles.cardText}>0000</Text>
            <Text style={styles.cardText}>Remember to hand over your card.</Text>
          </View>
        </View>

        <View style={styles.viewContainer}>
          <TouchableOpacity style={styles.homeBtn} onPress={() => navigation.navigate('Home')}>
            <Text>Done</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: '#5D5D5D',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: 320,
      height: 320,
      borderRadius: 15,
      backgroundColor: '#8c8c8c',
      justifyContent: 'center',
      position: 'absolute',
      color: 'white',
    },
    cardContainer:{
      alignSelf: 'center',
      alignItems: 'center',
      fontSize: 20,
      color: 'white',
    },
    cardText: {
      fontSize: 30,
      alignItems: 'center',
      color: 'white',
    },
    homeBtn: {
      backgroundColor: '#47D1D1',
      padding: 10,
      borderRadius: 8,
      paddingHorizontal: 140,
      color: 'white',
    },
    headerContainer: {
      padding: 30,
    },
    viewContainer : {
      top: 250,
    },
  });
  
export default ConfirmScreen;