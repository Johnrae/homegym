import { DataStore } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { TouchableWithoutFeedback, View, Text, TextInput } from 'react-native'
import { Lift } from '../data/workouts'
import { ExercisePlan, Set } from '../models'

export default function SetButton({ exercise }: { exercise: ExercisePlan }) {
  const [completed, setCompleted] = useState(false)
  const [reps, setReps] = useState(exercise.reps)
  const [createdSet, setCreatedSet] = useState<Set | null>(null)

  // Create the new set on mount
  // useEffect(() => {
  //   const createSet = async () => {
  //     const created = await DataStore.save(
  //       new Set({
  //         reps: exercise.reps,
  //       })
  //     )
  //     setCreatedSet(created)
  //   }
  //   createSet()
  // }, [])

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
            {exercise.reps}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}
