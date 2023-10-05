import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';


const ViewDetails = () => {
  return (
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
          fontSize: 29,
          color: "black",
          fontWeight: "800",
          position: "absolute",
          // top: "7%",
          alignSelf: "center",
          left: 150,
          top: 35
        }}>Nadeem Ali</Text>

        <Text style={{
          marginHorizontal: "6%",
          fontSize: 18,
          position: "absolute",
          top: 76,
          left: 130
        }}>Deffective Bike Rider</Text>
      </View>


      <MapView style={{
        marginTop: "10%",
        width: '90%',
        height: '40%',
        alignSelf: "center"
      }} />

      <TouchableOpacity
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

    </View>
  )
}


const styles = StyleSheet.create({})
export default ViewDetails;