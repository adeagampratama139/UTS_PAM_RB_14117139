import React from "react";
import { StyleSheet, Text, View } from "react-native";


function Navbar({navigation}) {
  return (
      <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1}}>
        <Text style={{color:'white'}} onPress={() =>  navigation.push("Home")}>Home</Text>
      </View>
      <View style={{ flex: 1,marginLeft: 50}}>
        <Text style={{color:'white'}} onPress={() =>  navigation.push("Monitor")}>Monitor</Text>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'grey'
    },
  });

export default Navbar;
