import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Forms = () => {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [display, setDisplay] = useState(false)

    const handleUserDetails = (name, value) => {
        setUserDetails({ ...userDetails, [name]: value })
    }
    return (
        <View>
            <TextInput
                placeholder="Enter Name"
                style={style.inputStylings}
                onChangeText={(text) => handleUserDetails("name", text)}
                value={userDetails.name}
            />

            <TextInput placeholder='Enter Password' style={style.inputStylings}
                onChangeText={(text) => handleUserDetails("password", text)}
                secureTextEntry={true}
                value={userDetails.password}
            />

            <TextInput placeholder='Enter Email' style={style.inputStylings}
                onChangeText={(text) => handleUserDetails("email", text)}
                value={userDetails.email}
            />

            <View style={{ marginBottom: 10 }}>
                <Button title='SHOW DETAILS' onPress={() => setDisplay(true)} />
            </View>
            <Button title='CLEAR DETAILS' onPress={() => {
                setDisplay(false),
                    setUserDetails({
                        name: "",
                        email: "",
                        password: ""
                    })
            }} />



            {display &&
                <View>
                    <Text style={style.displayDetails}>{userDetails.name}</Text>
                    <Text style={style.displayDetails}>{userDetails.email}</Text>
                    <Text style={style.displayDetails}>{userDetails.password}</Text>
                </View>
            }
        </View>


    )
}



const style = StyleSheet.create({
    inputStylings: {
        margin: 10,
        fontSize: 20,
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 10,
        paddingLeft: 13,
    },
    displayDetails: {
        fontSize: 25,
        color: "red",
        padding: 10
    }
})
export default Forms

