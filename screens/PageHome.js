import React from "react";
import Navbar from "../component/Navbar";
import { StyleSheet, Text, View } from "react-native";

function PageHome({navigation}) {
  return (
    <>
      <Navbar navigation ={navigation} />
      <View style={styles.container}>
        <View style={{alignItems:'center',backgroundColor:'lime',height: 100,paddingBottom:150,borderBottomWidth:0, borderRadius:8}}>
          <Text style={{textAlign:'center',fontSize: 20,width:'80%',color:'white',marginTop: 30}}>
            Aplikasi Untuk Memonitor Batrai HP
          </Text>
        </View>
        <View style={{alignItems:'center',backgroundColor:'blue',height: 100,paddingBottom:150,borderBottomWidth:0, borderRadius:8,marginTop: 10}}>
          <Text style={{textAlign:'center',fontSize: 20,width:'80%',color:'white',marginTop: 30}}>
           Berfungsi memantau batrai HP
          </Text>
        </View>
        
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: "5%",
    height: 800
  },
});

export default PageHome;
