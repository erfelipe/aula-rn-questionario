import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AnswersContext } from '../../context/AnswersContext'

export default function Final() {

  const { resp } = useContext(AnswersContext);

  return (
    <View>
      <Text>Final {resp} </Text>
    </View>
  )
}