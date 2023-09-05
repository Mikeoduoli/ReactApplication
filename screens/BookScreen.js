import React from 'react';
import { useState } from 'react'
import { TouchableOpacity, Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const BookScreen = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState();
    return (
      <SafeAreaView style={styles.container}>

        <View> 
          <Text style={styles.eventTxt}>
            Book Event
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputNum} placeholder="First Name"/>
          <TextInput style={styles.inputNum} placeholder="Last Name"/>
          <TextInput style={styles.inputNum} placeholder="Department"/>
          <TextInput style={styles.inputNum} placeholder="Nationality"/>
        </View>

        <View>
          <Picker
            style={styles.pickerContainer}
            selectedValue={selectedGender}
            placeholder="Gender"
            onValueChange={(itemValue, itemIndex) =>
              setSelectedGender(itemValue)
            }>
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>


       <View style={styles.viewContainer}>
        <TouchableOpacity style={styles.homeBtn} onPress={() => navigation.navigate('ConfirmScreen')}>
          <Text>Book Event</Text>
        </TouchableOpacity>
      </View>

        </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      
      alignItems: 'center',
    },
    eventTxt: {
      paddingTop: 120,
      fontSize: 30,
    },
    homeBtn: {
      backgroundColor: '#47d1d1',
      padding: 10,
      borderRadius: 8,
      paddingHorizontal: 140,
    },
    iContainer: {
      
    },
    inputNum: {
      marginTop: 20,
      height: 40,
      width: 350,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    pickerContainer: {
      height: 40,
      width: 350,
      borderWidth: 1,
      padding: 10,
      margin: 12,
      borderRadius: 5,
      margin: 12,
    },
    viewContainer : {
      top: 250,
    }
  });
  

export default BookScreen;