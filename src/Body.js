import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableHighlight, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native'
import Indigo from './Companies/Indigo'
import { useNavigation } from '@react-navigation/native'

const Name = "INDIGO"
const Prices = 42

const Body = () => {
    
    const navigation = useNavigation();
    
    return (       

        <ScrollView>
            
            <View>
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => navigation.navigate('Buy',{Name:"INDIGO",Prices:42})}>
                    <Indigo Name={Name} Prices={Prices} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

// const Body = () =>{
//     return (
//         < NavigationContainer>
//             <Stack.Navigator initialRouteName="Watchlist">
//             <Stack.Screen name="Watchlist" component={WatchList}/>
//             <Stack.Screen name="Buy" component={Buy}/> 
//             </Stack.Navigator>
//         </ NavigationContainer>
//     )
// }

const styles = StyleSheet.create({
    container: {
        height: 75,
    },
    modalview: {
        flex: 1,
        justifyContent: "flex-end",
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 100,
        padding: 30,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})
export default Body


// < Modal
// animationType = "fade"
// transparent = { true}
// visible = { Visibles }
// onRequestClose = {() => { Alert.alert("Modal has been closed"); }}
//               >
//   <View style={styles.modalview}>

//       <View style={{
//           flexDirection: "row",
//           justifyContent: "space-evenly"
//       }}>
//           <TouchableHighlight
//               style={{
//                   ...styles.openButton,
//                   backgroundColor: "#2196F3"
//               }}
//               onPress={() => navigation.navigate('Buy',{Name,Value})}
//           >
//               <Text style={styles.textStyle}>Buy</Text>
//           </TouchableHighlight>
//           <TouchableHighlight
//               style={{
//                   ...styles.openButton,
//                   backgroundColor: "#2196F3"
//               }}
//               onPress={() => { setVisible("Sell"); }}
//           >
//               <Text style={styles.textStyle}>Sell</Text>
//           </TouchableHighlight>
//       </View>
//   </View>
//               </Modal > 
