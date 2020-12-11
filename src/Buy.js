import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useRoute, useNavigation } from "@react-navigation/native"
import { AsyncStorage } from "@react-native-async-storage/async-storage"
import Portfolio  from './Portfolio'

function Buy() {

    const route = useRoute();
    const navigation = useNavigation();
    const [edit, reedit] = useState(false)
    const [Quantity, changeQuantity] = useState(" ")
    const [Price, chagePrice] = useState(route.params.Prices)
    const [total, settotal] = useState(0)
    const [store, setstore] = useState()
    const Name =route.params
    // const {Prices} = route.params
    const disable = () => {
        reedit(false)
        chagePrice(route.params.Prices)
    }
    const enable = () => {
        reedit(true)

    }
    const calculateproduct = () => {

        settotal(Number(Quantity) * Number(Price))
    }
    const tt = route.params.Name
    

    const save = async () => {
        try {
            await AsyncStorage.setsItem(total, store)
        }
        catch (err) {
            alert(err);
        }
    }
    const load = async () => {
        try {
            let name = await AsyncStorage.getItem(total)
            if (store !== null) {
                setstore(store);
            }
        }
        catch (err) {
            alert(err);
        }
    }
    useEffect(()=>{
        load();
    },[]);


    return (
        <View>
            <Text style={{ alignSelf: "center", fontSize: 25 }}>{tt}</Text>
            <View style={styles.container}>
                <View style={styles.direction}>
                    <Text style={styles.txt}>Quantity</Text>
                    <TextInput style={{
                        height: 40,
                        width: 100,
                        borderWidth: 1
                    }}
                        placeholder="Quanitity"
                        keyboardType="numeric"
                        underlineColorAndroid="transparent"
                        onChangeText={(val) => changeQuantity(val)}

                    />
                </View>


                <View style={styles.direction}>
                    <Text style={styles.txt}>Price</Text>
                    <TextInput style={{
                        height: 40,
                        width: 100,
                        borderWidth: 1,
                        marginTop: 5,
                    }}
                        editable={edit}
                        placeholder="Price"
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                        onChangeText={(val) => chagePrice(val)}

                    />
                </View>
            </View>

            <View style={{ justifyContent: "center", alignSelf: "center" }}>
                <TouchableOpacity style={styles.market} onPress={disable}>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>Market</Text>
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: "center", alignSelf: "center" }}>
                <TouchableOpacity style={styles.market} onPress={enable} >
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>Limit</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.total} >
                <TouchableOpacity style={styles.totalbutton} onPress={calculateproduct} >
                    <Text style={styles.totaltxt}>Total</Text>
                </TouchableOpacity>

                <Text style={styles.txxt}>
                    {` ${total}`}
                </Text>
            </View>


            <View style={styles.buies}>
                <TouchableOpacity style={styles.circle}
                    onPress={() => save()}
                   
                >
                    <Text style={{ fontSize: 25, fontWeight: "bold" }} >Buy</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}







// export default class Buy extends React.Component {
//     constructor() {
//         super();
//         this.state = {

//             edit: true,
//             Quantity: " ",
//             Price: " ",
//             product: 0
//         }
//     }
//     disable = () => {
//         this.setState({ edit: false })
//     }

//     enable = () => {
//         this.setState({ edit: true })
//     }
//     calculateproduct = () => {
//         const { Quantity, Price } = this.state;

//         this.setState({
//             product: Number(Quantity) * Number(Price)
//         });
//     }


//     render() {
//         // const text =  this.props.navigation.getParam('INDIGO',42)
//         return (
//             <View>

//                 <View style={styles.container}>
//                     <View style={styles.direction}>
//                         <Text style={styles.txt}>Quantity</Text>
//                         <TextInput style={{
//                             height: 40,
//                             width: 100,
//                             borderWidth: 1
//                         }}
//                             placeholder="Quanitity"
//                             keyboardType="numeric"
//                             underlineColorAndroid="transparent"
//                             onChangeText={(Quantity) => this.setState({ Quantity })}
//                         />
//                     </View>

//                     <View style={styles.direction}>
//                         <Text style={styles.txt}>Price</Text>
//                         <TextInput style={{
//                             height: 40,
//                             width: 100,
//                             borderWidth: 1,
//                             marginTop: 5,
//                         }}
//                             editable={this.state.edit}
//                             placeholder="Price"
//                             underlineColorAndroid="transparent"
//                             keyboardType="numeric"
//                             onChangeText={(Price) => this.setState({ Price })}
//                         />
//                     </View>
//                 </View>

//                 <View style={{ justifyContent: "center", alignSelf: "center" }}>
//                     <TouchableOpacity style={styles.market} onPress={this.disable}>
//                         <Text style={{ fontSize: 25, fontWeight: "bold" }}>Market</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={{ justifyContent: "center", alignSelf: "center" }}>
//                     <TouchableOpacity style={styles.market} onPress={this.enable} >
//                         <Text style={{ fontSize: 25, fontWeight: "bold" }}>Limit</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.total} >
//                <TouchableOpacity style={styles.totalbutton} onPress={this.calculateproduct}>
//                     <Text style={styles.totaltxt}>Total</Text>
//                 </TouchableOpacity>

//                 <Text style={styles.txxt}>
//                     {` ${this.state.product}`}
//                     </Text>
//                </View>


//                 <View style={styles.buies}>
//                     <TouchableOpacity style={styles.circle}>
//                         <Text style={{ fontSize: 25, fontWeight: "bold" }} >Buy</Text>
//                     </TouchableOpacity>
//                 </View>


//             </View>
//         );
//     }

// }
const styles = StyleSheet.create({
    container: {
        //flex:1,
        marginLeft: 25,
        marginRight: 25
    },
    direction: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txt: {
        color: "black",
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 15,
    },
    market: {
        // marginLeft:25,
        marginTop: 15,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: 200,
        borderRadius: 50
    },
    buies: {
        alignSelf: "center",
        marginTop: 150,
    },
    total: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10
    },
    totalbutton: {
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: 100,
        borderRadius: 50
    },
    totaltxt: {
        fontWeight: "bold",
        fontSize: 15
    },
    txxt: {
        color: "black",
        marginRight: 25,
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 15,
        alignSelf: "center",
        textDecorationLine: 'underline'
    },
    circle: {
        height: 75,
        width: 75,
        borderRadius: 50,
        backgroundColor: "blue",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",

    }
})
export default Buy
