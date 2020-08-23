import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <Animatable.Text style={styles.TextStyle}   animation="fadeIn" iterationCount={4}>Profile Screen</Animatable.Text>
    </View>
  );
}

export default ProfileScreen


const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle:{
    fontSize:18,
    fontWeight:'bold',
    color:'#4d88ff'
  }
});