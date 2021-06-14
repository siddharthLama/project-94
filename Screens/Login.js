import React from 'react'
import {View, StyleSheet, Text ,TouchableOpacity,Image , TextInput,Alert, KeyboardAvoidingView,Modal ,ScrollView,ImageBackground} from 'react-native'
import db from '../config'
import * as firebase from 'firebase';
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";


export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            emailId: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            contact: "",
            confirmPassword: "",
            isModalVisible: "false",
    }
};

    userLogin = (emailId, password) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(emailId, password)
          
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
          });
      };

    render(){
        return(
          <ImageBackground source={require("../assets/bg2.png")} 
          style={styles.image}>
         <Text>
             WELCOME
         </Text>
         <View style={styles.TextInput}>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            placeholderTextColor="gray"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <TextInput
            style={[styles.loginBox,{marginTop:RFValue(15)}]}
            secureTextEntry={true}
            placeholder="Enter Password"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          </View>
            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({

    image: {
      paddingLeft : 10,
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },

    loginBox: {
        width: "80%",
        height: RFValue(50),
        borderWidth: 1.5,
        borderColor: "#ffffff",
        fontSize: RFValue(20),
        paddingLeft: RFValue(10),
      },

      TextInput:{
        flex:0.5,
        alignItems:"center",
        justifyContent:"center"
      },
})