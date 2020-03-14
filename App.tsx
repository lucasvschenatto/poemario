import React from 'react';
import { StyleSheet, View } from 'react-native'
import PoemViewer from './src/assets/PoemViewer'

export default function App() {
  return (
    <View
      style={styles.container}>
        <PoemViewer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
