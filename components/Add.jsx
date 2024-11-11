import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'expo-router'
import { addData } from '../redux/slice'

const Add = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [name, setName]= useState('')
    const [price, setPrice]= useState('')
    

    const addHandler = ({name, price}) => {
        dispatch(addData({name, price}))
        router.push('screen2')
    }   
  return (
    <View style={{

        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }}>
        <Text
            style={{
                fontSize: 20,
                color:'red', fontWeight: 'bold'
            }}
        >Add bike</Text>
      <TextInput
        placeholder='Enter your bike name'
        style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            margin: 10,
            width: 300
        }}
        value={name}
        onChangeText={(text)=>setName(text)}
      ></TextInput>
      <TextInput
        placeholder='Enter your price'
        style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            margin: 10,
            width: 300
        }}

        value={price}
        onChangeText={(text)=>setPrice(text)}
      ></TextInput>
      <TouchableOpacity
        style={{
            backgroundColor: 'red',
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 20,
            justifyContent:'center',
            alignItems:'center',
            width: 300
        }}
        onPress={()=> addHandler({name, price})}
      >
        <Text
            style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 16
            }}
        >Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({})