import React from 'react'
import { View, Platform, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"


export default class Sell extends React.Component {
    constructor() {
        super();
        this.state = {
            edit: true,
            Quantity: " ",
            Price: " ",
            product: 0,
            trigger: " ",
            disedit: false,
            triggered: 0,
        }
    }
    // calculatetotal()
    disable = () => {
        this.setState({ edit: false, disedit: false,Price:" ",trigger:" "})
    }

    enable = () => {
        this.setState({ edit: true, disedit: false })
    }
    able = () => {
        this.setState({ disedit: true , edit: false,Price: " "})
    }
    onpressz = () => {
        const { Quantity, Price ,trigger } = this.state;
        this.setState({
            product: Number(Quantity) * Number(Price)
        })
        this.setState({
            triggered: Number(Quantity) * Number(trigger)
        })
    }
    calculatetotal(){
        if(this.state.triggered == 0)
        {
        return <Text>{this.state.product}</Text>
        }
        else 
        {
        return <Text>{this.state.triggered}</Text>
        }
    }
    render() {
         const triggered = this.state
        console.log(triggered)
        return (
            <View>
                <Text></Text>
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
                            onChangeText={(Quantity) => this.setState({ Quantity })}
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
                            editable={this.state.edit}
                            placeholder="Price"
                            underlineColorAndroid="transparent"
                            keyboardType="numeric"
                            onChangeText={(Price) => this.setState({ Price })}
                        />
                    </View>
                </View>

                <View style={{ justifyContent: "center", alignSelf: "center" }}>
                    <TouchableOpacity style={styles.market} onPress={this.disable}>
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Market</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ justifyContent: "center", alignSelf: "center" }}>
                    <TouchableOpacity style={styles.market} onPress={this.enable} >
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Limit</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginLeft: 25,
                    marginRight: 25
                }}>
                    <TouchableOpacity style={styles.sellorder} onPress={this.able} >
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sell order</Text>
                    </TouchableOpacity>
                    <TextInput style={{
                        height: 40,
                        width: 100,
                        borderWidth: 1,
                        marginTop: 25,
                    }}
                        placeholder="trigger"
                        editable={this.state.disedit}
                        keyboardType="numeric"
                        underlineColorAndroid="transparent"
                        onChangeText={(trigger) => this.setState({ trigger })}

                    />
                </View>
                <View style={styles.total}>
                    <TouchableOpacity style={styles.totalbutton} onPress={this.onpressz}>
                        <Text style={styles.totaltxt}>Total</Text>
                    </TouchableOpacity>
                    <View style={styles.txxt}>
                        {this.calculatetotal()}
                    </View>
                </View>

                <View style={styles.buies}>
                    <TouchableOpacity style={styles.circle}>
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Sell</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }

}
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
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: 200,
        borderRadius: 50
    },
    sellorder: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        height: 60,
        width: 150,
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
        backgroundColor: "red",
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
        height: 40,
        width: 150,
        borderWidth: 1,
        marginTop: 10,
        fontSize: 20,
        padding: 7,
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
    },
    circle: {
        height: 75,
        width: 75,
        borderRadius: 50,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",

    }
})


//₹