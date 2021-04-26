import React, { useState } from 'react'
import { TouchableWithoutFeedback, View, Text, TextInput } from 'react-native'
import { Lift } from '../data/workouts'

export default function SetButton({ lift }: { lift: Lift }) {
  const [completed, setCompleted] = useState(false)
  const [reps, setReps] = useState(lift.reps)

  return (
    <TouchableWithoutFeedback onPress={() => setCompleted(true)}>
      <View
        style={{
          backgroundColor: completed ? '#ff0000' : '#e6e6e6',
          borderRadius: 100,
          width: 50,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
        }}
      >
        {completed ? (
          <TextInput
            style={{ color: completed ? '#FFF' : '#000', fontSize: 24 }}
            value={reps.toString()}
            clearTextOnFocus
            onChangeText={(value) => setReps(Number(value))}
            keyboardType="number-pad"
          />
        ) : (
          <Text style={{ color: completed ? '#FFF' : '#000', fontSize: 24 }}>
            {lift.reps}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}
