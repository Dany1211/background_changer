import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
function App(): React.JSX.Element {
   const [randomBackground,setRandomBackground ] = useState ("#ffffff")

   const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let colorCode= "#" ;

    for (let i = 0; i < 6; i++) {
      colorCode += hexRange[Math.floor(Math.random()*16 )]
    }
    

   setRandomBackground(colorCode);

   }





  return (
    <>
    <StatusBar  backgroundColor={randomBackground} />
    <View style={[styles.container,{backgroundColor:randomBackground}]}>
      <TouchableOpacity 
      onPress={(generateColor)}
      >
        <View  style={[styles.containerBtn]}>
          <Text style={[styles.btnText]} >
            Press Me
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
   
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    alignItems : "center",
    justifyContent : "center" ,
  },
  containerBtn :{
    padding : 20,
    width:"30%",
    backgroundColor : "#FADBD8" ,
    elevation : 1 ,
    borderRadius : 10 ,
  },
  btnText : {
    fontWeight : "bold" ,
    textAlign : "center",
    fontSize : 18 ,
  }
});

export default App;
