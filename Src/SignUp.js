import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const checkTextInput = () => {
        setIsButtonDisabled(username === '' || password === '');
    };

    const handleLogin = () => {
        if (username !== '' && password !== '') {
            Alert.alert('Alert', `If You Want To Book Mechanic Instantly Please Give Acess Of Your Location`, [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => navigation.navigate('Mechnics') },
            ]);

        }
    };

  
    return (

        // <SafeAreaView style={{ flex: 1, }}>


            <View style={{ flex: 1, backgroundColor: "white" }}>
          
  
                <Text style={{
                    fontSize: 23,
                    color: "black",
                    fontWeight: "800",
                    position: "relative",
                    top: "7%",
                    alignSelf: "center"
                }}>Online Mechanic</Text>

                <Text style={{
                    fontSize: 25,
                    color: "black",
                    fontWeight: "800",
                    position: "relative",
                    top: "15%",
                    alignSelf: "center"
                }}>SIGN UP</Text>


                <TextInput
                    style={{
                        position: "relative",
                        top: "25%",
                        marginHorizontal: "8%",
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: `#20295A`,
                        // backgroundColor: `#ECECEC`,
                        alignItems: "center",
                        paddingVertical: 13,
                        paddingLeft: 20
                    }}
                    placeholder='Enter Your Name Here'
                    onChangeText={(text) => {
                        setUsername(text);
                        checkTextInput();
                    }}
                />

                <TextInput
                    style={{
                        position: "relative",
                        top: "30%",
                        marginHorizontal: "8%",
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: `#20295A`,
                        // backgroundColor: `#ECECEC`,
                        alignItems: "center",
                        paddingVertical:13,
                        paddingLeft: 20
                    }}
                     keyboardType="numeric"
                    placeholder='Enter Your Phone Number Here'
                    onChangeText={(text) => {
                        setPassword(text);
                        checkTextInput();
                    }}
                />


                <TouchableOpacity
                    disabled={isButtonDisabled}
                    onPress={handleLogin}
                    style={isButtonDisabled ? styles.disabledButton : styles.button}

                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color:"white"
                        }}
                    > Sign Up </Text>
                </TouchableOpacity>
              
           
            </View>

        // </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    button: {
        position: "relative",
        top: "38%",
        marginHorizontal: "25%",
        borderRadius: 27,
        backgroundColor: `#20295A`,
        paddingVertical: "4%",
        alignItems: "center"
    },
    disabledButton: {
        position: "relative",
        top: "38%",
        marginHorizontal: "25%",
        borderRadius: 27,
        backgroundColor: "grey",
        paddingVertical: "4%",
        alignItems: "center"
    }
})
export default SignUp;