import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()
  const getStartedHandler = () => {
    router.push({
      pathname: './screen2',
    })
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >A premium online store for sporter and their stylish choice</Text>
      <View style={{
        backgroundColor:'#E941411A',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
      }}>
      <Image source={require('../assets/images/bike.png')} />

      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >POWER BIKE {'\n'} SHOP</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={getStartedHandler}
      >
        <Text
          style={{
            color: 'white',
            fontSize:20
          }}
        >Get started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  button:{
    backgroundColor: '#E94141',
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    width:200,
    justifyContent: 'center',
    alignItems: 'center',
  }
})