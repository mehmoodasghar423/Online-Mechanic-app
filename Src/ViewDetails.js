import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'
import { Linking } from 'react-native';
import { useState } from 'react';


const ViewDetails = () => {

  const [isButton2Enabled, setIsButton2Enabled] = useState(false);

  const CallNow = () => {
    const phoneNumber = '03041121773';
    Linking.openURL(`tel:${phoneNumber}`);
    setIsButton2Enabled(true);
  };

  const BookNow = () => {
    // Perform any actions related to "Book Now" button here
  };


  const navigation = useNavigation();

  return (
    // <SafeAreaView style={{ flex: 1, }}>
    <View style={{ flex: 1, }}>
      <View style={{ flexDirection: "row", width: "100%", height: "20%", }}>
        <Image source={require("../assets/Dp.png")}
          style={{
            // alignSelf:"flex-start",

            marginLeft: -20,
            resizeMode: "contain",
            width: "61%",
            height: "61%",
            position: "relative",
            marginTop: "6%"

          }}
        />
        <Text style={{
          fontSize: 33,
          color: "black",
          fontWeight: "800",
          position: "absolute",
          // top: "7%",
          alignSelf: "center",
          left: 150,
          top: 35
        }}>Qaiser Ali</Text>

        <Image source={require("../assets/Stars.png")}
          style={{
            // alignSelf:"flex-start",

            marginLeft: -40,
            resizeMode: "contain",
            width: "40%",
            height: "40%",
            position: "relative",
            marginTop: "15%"

          }}
        />
      </View>
      <Text style={{
        marginHorizontal: "6%",
        fontSize: 18
      }}>I am a Bike Mechanic. I can Work for you at reasonable price.
        I have 4 years Experience in Bikes Repairing.</Text>

      <MapView style={{
        marginTop: "10%",
        width: '90%',
        height: '40%',
        alignSelf: "center"
      }} />

      <TouchableOpacity onPress={CallNow}
        style={{
          position: "relative",
          top: "6%",
          marginHorizontal: "35%",
          borderRadius: 20,
          backgroundColor: `#483d8b`,
          paddingVertical: "2%",
          alignItems: "center"
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "600",
            color: "white"
          }}>Call Now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => navigation.navigate("DeffectiveRider")}
        onPress={BookNow}
        disabled={!isButton2Enabled}

        style={{
          opacity: isButton2Enabled ? 1 : 0.5,
          position: "relative",
          top: "10%",
          marginHorizontal: "35%",
          borderRadius: 20,
          backgroundColor: `#483d8b`,
          paddingVertical: "2%",
          alignItems: "center"
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "600",
            color: "white"
          }}>Book Now</Text>
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  )
}


const styles = StyleSheet.create({})
export default ViewDetails;