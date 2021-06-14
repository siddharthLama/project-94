import React, { Component } from 'react';
import { View,Text, StyleSheet, TouchableOpacity,ImageBackground,Image} from "react-native";
  import db from "../config";
  import firebase from "firebase";
  import { Icon } from "react-native-elements";
  import { RFValue } from "react-native-responsive-fontsize";

  
  export default class WelcomeScreen extends Component{
     
 

      render(){
          return(
            <ImageBackground source={require("../assets/bg.png")} 
            style={styles.image}>

              <View  
              style = {styles.container}
              >

                  


                  <Text style={styles.text}>
                       Calandar App
                   </Text>
                   <Image 
                   style = {  styles.calandar}
                   source = {require("../assets/clock.png")}
                   ></Image>
                   
                   <TouchableOpacity 
                   style = {styles.button}
                   onPress = {()=>{
                     this.props.navigation.navigate("Login")
                   }}
                   >
                     <Text 
                       style = {styles.buttonText}
                      >
                       LOGIN
                     </Text>
                   </TouchableOpacity>
                   
                   <TouchableOpacity 
                   onPress = {()=>{
                     this.props.navigation.navigate("SignUp")
                   }}
                   style = {styles.button}
                   >
                     <Text style = {styles.buttonText}>
                       SIGN UP
                     </Text>
                   </TouchableOpacity>
               
              </View>

              </ImageBackground>
          )
      }
  }

  const styles = StyleSheet.create({

    text:{
  fontWeight : 'bold',
   fontSize : 5,
   color : "black",
   paddingBottom : 10
    },
   
    image: {
      paddingLeft : 10,
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  
    container: {
       
        flex: 1,
        flexDirection: "column"},

        text: {
          paddingTop : 80,
            color: "white",
            fontSize: 42,
            fontWeight: "bold",
            textAlign: "center",
            
          },

          calandar : {
              paddingBottom :100,
              marginLeft:65,
          },
          button: {
            marginLeft : 45,
            width: "80%",
            marginTop:70,
            height: RFValue(50),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: RFValue(25),
            backgroundColor: "#ffff",
            shadowColor: "#000",
            marginBottom:RFValue(10),
            shadowOffset: {
              width: 0,
              height: 8,
            
            },
            shadowOpacity: 0.3,
            shadowRadius: 10.32,
            elevation: 16,
          },
          buttonText: {
            color: "black",
            fontWeight: "bold",
            fontSize: RFValue(20),
          },
          
  });
  
  