import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/slice'
import { useRouter } from 'expo-router'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Item = ({item}) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{uri: item.imageURL}} style={{width: 150, height: 150}} />
            <Text
                style={{fontSize: 16, fontWeight: 'bold'}}
            >{item.name}</Text>
            <Text
                style={{fontSize: 16}}
            >${item.price}</Text>

            <Ionicons name='heart-outline' size={24} color='red' style={{
                position: 'absolute',
                top: 10,
                left: 10
            }} />
        </View>
    )
}

const Main = () => {
    const dispatch = useDispatch()
    const bike = useSelector((state) => state.bike.data)
    const router = useRouter()
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    // console.log(bike)
    const addHandler = () => {
        router.push('add')
    }


  return (
    <View style={styles.container}>
      <Text
        style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: 25
        }}
      >The world's Best Bike</Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
      }}>
            <Text style={styles.category}>All</Text>
            <Text style={styles.category}>Roadbike</Text>
            <Text style={styles.category}>Mountain</Text>

      </View>
        <FlatList
            data={bike}
            key={2}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: 'red',
                    borderRadius: 10,
                    padding: 10,
                    marginHorizontal: 20,
                    marginTop: 20
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 16
                    }}
                    onPress={addHandler}
                >Add</Text>
            </TouchableOpacity>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        marginHorizontal:20,
        marginTop: 20
    },
    category:{
        borderWidth:1,
        borderRadius: 10,
        textAlign: 'center',
        width: 100,
        padding: 5,
        fontSize: 16,
        marginRight: 20
    },
    itemContainer:{
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#F7BA8326',
        borderRadius: 10,
        width: 150,
        padding: 10,
        marginHorizontal: 10
    }
})