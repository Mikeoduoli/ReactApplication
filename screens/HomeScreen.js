import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, SafeAreaView, ImageBackground, Image, TextInput } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <ImageBackground style={styles.container} source={require("../assets/icons/bgImg.png")}>
      <SafeAreaView >
        
        <View style={styles.headerContainer}>
          <View style={styles.logoText}>
            <Text style={styles.titleM}>m-Ticket Services</Text>
          </View>
          <Image source={require('../assets/icons/images.png')} style={styles.image}/>
        </View>
        
        <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        </View>

      <View style={styles.viewContainer}>
      <TouchableOpacity style={styles.homeBtn}  onPress={() => navigation.navigate('BookScreen')}>
        <Text>Validate</Text>
        </TouchableOpacity>
        

        <View>
          <Text style={styles.textContainer}>
            Verify Your Phone Number
          </Text>
        </View>

        <View style={styles.sentContainer}>
          <Text style={styles.sentWrapper}>Code sent to 0712123123</Text>
        </View>



      </View>
      </SafeAreaView>
      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
    },
    homeBtn: {
      backgroundColor: '#47d1d1',
      padding: 10,
      top: 500,
      borderRadius: 8,
      paddingHorizontal: 140,
      color: 'white',
    },
    headerContainer: {
      paddingTop: 10,
    },
    image : {
      borderRadius: 150,
      width: 150,
      height: 150,
      alignSelf: 'center',
    },
    input: {
      width: 60,
      height: 60,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'black',
      fontSize: 24,
      textAlign: 'center',
    },
    logoText: {
      top: 200,
    },
    inputContainer : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      top: 300,

    },
    viewContainer : {
      alignItem: 'center',
    },
    textContainer: {
      top: 100,
      color: 'white',
      fontSize: 24,
      alignSelf: 'center',
    },
    sentContainer: {
      top: 110,
      marginTop: 5,
      alignSelf: 'center',
    },
    sentWrapper: {
      color: '#f2f2f2',
      fontSize: 15,
    },
    titleM: {
      color: '#FFFFFF',
      fontSize: 36,
      alignSelf: 'center',
    },
  });
  
  export default HomeScreen;