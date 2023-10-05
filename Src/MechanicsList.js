import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React,{useEffect} from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  } from '@expo-google-fonts/ubuntu';



const data = [
    {
        id: '1',
        profile: require('../assets/Dp.png'),
        name: 'Qaiser Ali',
        distance: '1 KM from here',
        stars: require('../assets/Stars.png'),
    },
    {
        id: '2',
        profile: require('../assets/Dp.png'),
        name: 'Nadeem Sadiq',
        distance: '2 KM from here',
        stars: require('../assets/Stars.png'),
    },
    {
        id: '3',
        profile: require('../assets/Dp.png'),
        name: 'Akhtar Khan',
        distance: '4 KM from here',
        stars: require('../assets/Stars.png'),
    },
    {
        id: '4',
        profile: require('../assets/Dp.png'),
        name: 'Arshad Ali',
        distance: '4 KM from here',
        stars: require('../assets/Stars.png'),
    },
    {
        id: '5',
        profile: require('../assets/Dp.png'),
        name: 'Akbar Ali',
        distance: '4 KM from here',
        stars: require('../assets/Stars.png'),
    },


];


const MechanicsList = () => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
      });
    
      useEffect(() => {
        if (!fontsLoaded) {
          return;
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }

    return (
        // <SafeAreaView style={{ flex: 1, }}>

            <View style={{ flex: 1 }}>

                <View style={{
                    backgroundColor: "#20295A",
                    height: "11%",
                    position: "relative",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    marginBottom:15





                }}>

                    <Image
                        source={require("../assets/Profilebg.png")}
                        style={{
                            position: "relative",
                            width: "8%",
                            height: "38%",
                            resizeMode: "contain",
                            margin: "5%"
                        }}
                    />

                    <TextInput
                        style={{
                            position: "relative",
                            height: "40%",
                            width: "75%",
                            // paddingHorizontal: 10,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 100,
                            paddingHorizontal: 34,
                            paddingVertical: 5,
                            fontSize: 12,
                            fontWeight: "400",

                        }}
                        placeholder='Search Your Neartest Mechanic Here'
                    />


                </View>




                <View style={{}}>

                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <View style={{
                                //   width:350,
                                width: "98%",
                                height: 75,
                                //   height:"50%",
                                // marginBottom: 5,
                                position: "relative",
                                // marginTop: "1%",
                                alignSelf: "center",
                                borderRadius: 10,
                                backgroundColor: "white",
                                borderWidth: 2,
                                borderColor: "rgba(0, 0, 0, 0.04)",
                                flexDirection: "row",
                            }}>

                                <Image source={item.profile}
                                    style={{

                                        alignSelf: "center",
                                        marginLeft: "1.2%",
                                        width: "25%",
                                        height: "65%",
                                        resizeMode: "contain",


                                    }} />

                                <Text
                                    style={{
                                        fontSize: 19,
                                        position: "relative",
                                        left: "-10%",
                                        marginTop: "4.5%",
                                        color: "rgba(0, 0, 0, 1)",
                                        letterSpacing: 0.02,
                                        fontFamily:"Ubuntu_500Medium"


                                    }}
                                >{item.name}</Text>

                                <Text
                                    style={{
                                        fontWeight: "400",
                                        fontSize: 12,
                                        // fontWeight: "500",
                                        fontFamily:"Ubuntu_500Medium",
                                        position: "absolute",
                                        left: "24%",
                                        // marginLeft:"3%",
                                        marginTop: "12%",
                                        color: "rgba(0, 0, 0, 1)"

                                    }}>{item.distance}</Text>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Details")}

                                    style={{
                                        backgroundColor: '#20295A',
                                        width: "20%",
                                        height: "27%",
                                        borderRadius: 15,
                                        position: "absolute",
                                        right: "3%",
                                        padding: 1,
                                        alignSelf: "center"

                                    }}>

                                    <Text style={{
                                        color: "white",
                                        alignSelf: "center",
                                        fontSize: 12,
                                        fontWeight: "700"
                                    }}>DETAILS</Text>
                                </TouchableOpacity>
                                <Image source={item.stars}
                                    style={{
                                        width: "40%",
                                        height: "40%",
                                        alignSelf: "center",
                                        position: "absolute",
                                        bottom: "5%",
                                        right:"-7%",
                                        resizeMode: "contain"
                                    }}
                                />
                            </View>
                        }
                    />

                </View>

                <View style={{
                    flex: 1,
                    // backgroundColor:"red",
                    justifyContent: "flex-end"

                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("MechanicSignUp")}

                        style={{
                            backgroundColor: '#20295A',
                            borderRadius: 15,
                            position: "relative",
                            padding: 5,
                            alignSelf: "center",
                            bottom: "15%",
                            padding: 7,
                            width: "50%",
                            // height:"22%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                        <Text style={{
                            color: "white",
                            alignSelf: "center",
                            fontSize: 12,
                            fontWeight: "700",

                        }}>Login as a Service Provider</Text>
                    </TouchableOpacity>
                </View>

            </View>
        // </SafeAreaView>
    )
}


const styles = StyleSheet.create({

})
export default MechanicsList;