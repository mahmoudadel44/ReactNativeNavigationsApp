import React from 'react';
import {  useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, Button } from 'react-native';
const HomeScreen = () => {
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
     <Animatable.Text style={styles.TextStyle} animation="lightSpeedIn" iterationCount={3}>Home Screen</Animatable.Text>
 
      </View>
    );
  }


  export default HomeScreen


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextStyle:{
      fontSize:18,
      fontWeight:'bold',
      color:'#009837'
    }
  });