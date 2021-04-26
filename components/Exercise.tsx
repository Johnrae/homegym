import React from 'react'
import { View, Text } from 'react-native'
import { Lift } from '../data/workouts'
import BandSelector from './BandSelector'
import BarbellSelector from './BarbellSelector'
import SetButton from './SetButton'

export default function Exercise({ lift }: { lift: Lift }) {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>{lift.name}</Text>
      <View>
        <Text>Weight</Text>
        {lift.type === 'barbell' ? (
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
        {Array(lift.sets)
          .fill(null)
          .map(() => {
            return <SetButton lift={lift} />
          })}
      </View>
    </View>
  )
}
