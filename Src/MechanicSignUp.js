import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, Image } from 'react-native'
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MchanicAccountCreated from "./MchanicAccountCreated"


const MechanicSignUp = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [DeatilsAbout, setDeatilsAbout] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const checkTextInput = () => {
        setIsButtonDisabled(username === '' || password === '' || DeatilsAbout === '');
    };



    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setModalVisible(false);
    };


    // const handleLogin = () => {
    //     if (username !== '' && password !== '') {
    //         Alert.alert('Alert', `If You Want To Book Mechanic Instantly Please Give Acess Of Your Location`, [
    //             {
    //                 text: 'Cancel',
    //                 onPress: () => console.log('Cancel Pressed'),
    //                 style: 'cancel',
    //             },
    //             { text: 'OK', onPress: () => navigation.navigate('Mechnics') },
    //         ]);

    //     }
    // };




    return (

       


            <View style={{ flex: 1, backgroundColor: "#20295A" }}>
                <Text style={{
                    fontSize: 23,
                    color: "white",
                    fontWeight: "800",
                    position: "relative",
                    top: "7%",
                    alignSelf: "center"
                }}>Online Mechanic</Text>

                <Text style={{
                    fontSize: 15,
                    color: "white",
                    fontWeight: "800",
                    position: "relative",
                    top: "12%",
                    alignSelf: "center"
                }}>MAKE YOUR MECHANIC ACCOUNT </Text>

                <Text style={{
                    fontSize: 23,
                    color: "white",
                    fontWeight: "800",
                    position: "relative",
                    top: "13%",
                    alignSelf: "center"
                }}>AND SELL YOUR SERVICES </Text>


                <TextInput
                    style={{
                        position: "relative",
                        top: "18%",
                        marginHorizontal: "8%",
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: `#E8E8E8`,
                        backgroundColor: `#ECECEC`,
                        alignItems: "center",
                        paddingVertical: 5,
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
                        top: "22%",
                        marginHorizontal: "8%",
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: `#E8E8E8`,
                        backgroundColor: `#ECECEC`,
                        alignItems: "center",
                        paddingVertical: 5,
                        paddingLeft: 20
                    }}
                    keyboardType="numeric"
                    placeholder='Enter Your Phone Number Here'
                    onChangeText={(text) => {
                        setPassword(text);
                        checkTextInput();
                    }}
                />






                <View style={styles.container}>
                    <TouchableOpacity style={styles.ModalHeading}
                        onPress={() => setModalVisible(true)}>
                        <Image style={styles.ModalHeadingImage}
                            source={require("../assets/Location.png")} />
                        <Text style={styles.ModalHeadingText}>Select Your Nearest Location</Text>
                    </TouchableOpacity>

                    <Modal visible={modalVisible} transparent>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>

                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => handleOptionSelect('Kmal Chishti Mor, Kasur')}
                                >
                                    <Text>Kmal Chishti Mor, Kasur</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => handleOptionSelect('Kchehry Chowk, Kasur')}
                                >
                                    <Text>Kchehry Chowk, Kasur</Text>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => handleOptionSelect('Shahbaz Khan Road, Kasur')}
                                >
                                    <Text>Shahbaz Khan Road, Kasur</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => handleOptionSelect('Steel Bhag Mor, Kasur')}
                                >
                                    <Text>Steel Bhag Mor, Kasur</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => handleOptionSelect('New Bus Stand, Kasur')}
                                >
                                    <Text>New Bus Stand, Kasur</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </Modal>

                    {selectedOption !== '' && (
                        <Text> {selectedOption}</Text>
                    )}
                </View>









                <TextInput
                    multiline
                    numberOfLines={4}
                    style={{
                        position: "relative",
                        top: "30%",
                        marginHorizontal: "8%",
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: `#E8E8E8`,
                        backgroundColor: `#ECECEC`,
                        alignItems: "center",
                        paddingVertical: 5,
                        paddingLeft: 20,
                        height: "13%"
                    }}
                    placeholder='Write Details About Yourself'
                    onChangeText={(text) => {
                        setDeatilsAbout(text);
                        checkTextInput();
                    }}
                />


                <TouchableOpacity
                    disabled={isButtonDisabled}
                    onPress={() => navigation.navigate("MchanicAccountCreated")}
                    style={isButtonDisabled ? styles.disabledButton : styles.button}

                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600"
                        }}
                    > Sign Up </Text>
                </TouchableOpacity>

            </View>

       
    )
}


const styles = StyleSheet.create({
    button: {
        position: "relative",
        top: "38%",
        marginHorizontal: "38%",
        borderRadius: 20,
        backgroundColor: `white`,
        paddingVertical: "2%",
        alignItems: "center"
    },
    disabledButton: {
        position: "relative",
        top: "38%",
        marginHorizontal: "38%",
        borderRadius: 20,
        backgroundColor: "grey",
        paddingVertical: "2%",
        alignItems: "center"
    },
    container: {
        position: "relative",
        top: "26%",
        marginHorizontal: "8%",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: `#E8E8E8`,
        backgroundColor: `#ECECEC`,
        // alignItems: "center",
        paddingVertical: 5,
        // paddingLeft: 20,
        // flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    ModalHeading: {
        flexDirection: "row"
    },
    ModalHeadingImage: {
        width: 30,
        height: 50,
        // alignSelf:"flex-start"
    },
    ModalHeadingText: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 15,
        color: "#D62A2A",
        marginLeft: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    option: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },

})


export default MechanicSignUp;