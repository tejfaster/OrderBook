import React from 'react'
import {Text,View, StyleSheet} from 'react-native'

const Indigo =(props)=>{
  return (
      <View  >
          <Company Name = {props.Name} Prices={props.Prices}/>
          <P_l left={'Nse/Bse'} right={'-0.30(-70)'}/>
      </View>
  )
}

const Company = ({Name,Prices}) =>{
  return(
    <View style={styles.detail}>
      <Text style={styles.rightleft}>{Name}</Text>
      <Text style={styles.rightright}>{Prices}</Text>
    </View>)
}

const P_l =({left,right})=>{
  return(
    <View style={styles.detail}>
      <Text style={styles.txt}>{left}</Text>
      <Text style={styles.txtx}>{right}</Text>
    </View>
    )
}

const styles =StyleSheet.create({
  txt: {
    marginLeft:25,
    fontWeight:"bold",
    fontSize:18
  },
  txtx: {
    marginRight:25,
    color: '#868686',   
    fontSize:18
  },
  rightleft: {
    // width: 310,
    color: '#000',
    fontSize: 18,
    marginLeft:25,
    marginTop:5,
    fontWeight:"bold",

  },
  rightright: {
    color: '#868686',
    fontSize: 16,
    marginTop:5,
    marginRight:25,
    fontWeight:"bold",
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 2,
    paddingVertical: 2
  },
})
export default Indigo