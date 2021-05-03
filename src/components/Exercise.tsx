import React from 'react'
import { View, Text } from 'react-native'
import { Lift } from '../data/workouts'
import { ExercisePlan } from '../models'
import BandSelector from './BandSelector'
import BarbellSelector from './BarbellSelector'
import SetButton from './SetButton'

export default function Exercise({ exercise }: { exercise: ExercisePlan }) {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>{exercise.name}</Text>
      <View>
        <Text>Weight</Text>
        {exercise.EqupmentCategory?.type === 'barbell' ? (
          <BarbellSelector weight={100} />
        ) : (
          <BandSelector weight={100} />
        )}
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginVertical: 10,
        }}
      >
        {Array(exercise.sets)
          .fill(null)
          .map(() => {
            return <SetButton exercise={exercise} />
          })}
      </View>
    </View>
  )
}
