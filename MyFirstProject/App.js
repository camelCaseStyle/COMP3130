import React from "react";
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
        <Text style={{ color: 'white' }}>Find your Buddy!</Text>
      </TouchableOpacity>
      <View style={styles.top}>
      </View>
      <View style={styles.bottom}>
        <View style={styles.left}></View>
        <View style={styles.right}></View>
      </View>
      
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    flexDirection: 'column', 
    justifyContent: 'center'
  },
  top:{
    flex: 0.5, 
  },
  bottom:{
    flex: 0.5,
    flexDirection: 'row',
  },
  left :{
    flex: 0.5, 
    backgroundColor: '#684756',
    borderTopLeftRadius: 20,
  },
  right :{
    flex: 0.5, 
    backgroundColor: '#3D314A',
    borderTopRightRadius: 20, 
    
  },
  button:{
    backgroundColor: '#1A1423', 
    alignSelf:'center',
    padding: 20,
  }

});
