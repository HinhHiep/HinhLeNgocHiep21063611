import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Add from '../components/Add'
import { Provider } from 'react-redux'
import store from '../redux/store'

const add = () => {
  return (
    <Provider
        store={store}
    >
      <Add/>
    </Provider>
  )
}

export default add

const styles = StyleSheet.create({})