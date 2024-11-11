import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from '../components/Main'
import { Provider } from 'react-redux'
import store from '../redux/store'

const screen2 = () => {
  return (
    <Provider
        store={store}
    >
        <Main />
    </Provider>
  )
}

export default screen2

const styles = StyleSheet.create({
   
})