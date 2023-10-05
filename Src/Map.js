import React, { useState } from 'react';
import { StyleSheet, View,TouchableOpacity,Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const Map = () => {
    // const MapScreen = () => {
        const [showMap, setShowMap] = useState(false);
      
        const handleImagePress = () => {
          setShowMap(true);
        };
      
        const handleMapPress = () => {
          setShowMap(false);
        };
      
 
  
    return (
      <View style={styles.container}>
      {!showMap ? (
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={require('../assets/Dp.png')} />
        </TouchableOpacity>
      ) : (
        <MapView
          style={styles.map}
          onPress={handleMapPress}
        />
      )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent:"center"
    },
    map: {
      width:300,
      height:300
    },
  });
  

export default Map;
