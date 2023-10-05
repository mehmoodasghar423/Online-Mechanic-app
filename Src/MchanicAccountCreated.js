import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import React, { useEffect, useState } from 'react';

const MchanicAccountCreated = () => {
  const [displayText, setDisplayText] = useState(false);

  useEffect(() => {
    const duration = 1500;

    const timeout = setTimeout(() => {
      setDisplayText(true);
    }, duration);

    return () => clearTimeout(timeout);
  }, []);

  return (

      <View  style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <Animatable.Image
      animation="rotate"
      duration={1400}
         style={styles.Tick}
          source={require('../assets/Tick.png')} />
          {displayText && (
        <Text style={{ fontWeight: "700", fontSize: 17, color: "#20295A", marginTop: 20 }}>Mechanic Account Created Successfully</Text>)}
        {displayText && (
        <TouchableOpacity
          style={{
            position: "relative",
            top: "30%",
            marginHorizontal: "25%",
            borderRadius: 20,
            backgroundColor: `#20295A`,
            paddingVertical: "2%",
            alignItems: "center"
          }}>
          <Text
          style={{
              fontSize: 20,
              fontWeight: "600",
              color:"white"
          }}
      > Continue </Text>
        </TouchableOpacity>
        )}
      </View>
  )
}


const styles = StyleSheet.create({
  Tick: {
    width: 200,
    height: 200,
    alignSelf: "center",
    resizeMode: "contain",

  }
})
export default MchanicAccountCreated;