import React from 'react'
import ThemedView from '../components/ThemedView'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { Image } from 'react-native'

type Props = NativeStackScreenProps<RootStackParamList, 'Picture'>

const Picture = ({route}:Props) => {
  return (
    <ThemedView classStyle="w-full h-full flex-1 items-center justify-center">
      <Image source={{uri: route.params.uri}} style={{width: '100%', height: '100%'}}/>
    </ThemedView>
  )
}

export default Picture