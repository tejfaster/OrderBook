import React, { useState ,useEffect} from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native'
import { useRoute } from "@react-navigation/native"
import { useNavigation } from '@react-navigation/native'
const Portfolio = () => {
    const route = useRoute();
    const navigation = useNavigation();

    
    return (
        <ScrollView>
            <View>
                <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate('Sell')}>
                    <View style={styles.detail}
                    >
                        <Text style={styles.rightleft}>Indigo</Text>
                        <Text style={styles.rightright}>42</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

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
    rightleft: {
        // width: 310,
        color: '#000',
        fontSize: 18,
        marginLeft: 25,
        marginTop: 5,
        fontWeight: "bold",

    },
    rightright: {
        color: '#868686',
        fontSize: 16,
        marginTop: 5,
        marginRight: 25,
        fontWeight: "bold",
    },
    detail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 2,
        paddingVertical: 2
    },
})
export default Portfolio

