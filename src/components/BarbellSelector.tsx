import React from 'react'
import { View, Text } from 'react-native'

import { plates } from '../data/equipment'

function BarbellView({ weight }: { weight: number }) {
  const barbell = 45
  let remainingWeight = weight - barbell
  const platesOnBar = plates.filter((plate) => {
    if (plate * 2 <= remainingWeight) {
      remainingWeight = remainingWeight - plate * 2
      return true
    }

    return false
  })

  const weightOnBar = platesOnBar.reduce((acc, cur) => cur * 2 + acc, 45)

  return (
    <View>
      <Text>Ideal Weight: {weight} </Text>
      <Text>Workout Weight: {weightOnBar}</Text>
      <View
        style={{
          height: 100,
          width: '100%',
          maxWidth: 250,
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {/* Barbell */}
        <View
          style={{
            backgroundColor: '#222',
            width: '100%',
            height: 15,
            position: 'absolute',
            top: '50%',
            borderRadius: 2,
            transform: [{ translateY: -7 }],
          }}
        />
        {/* Barbell stopper */}
        <View
          style={{
            backgroundColor: '#222',
            borderRadius: 2,
            width: 20,
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginLeft: 5,
          }}
        />
        {platesOnBar.length > 0 &&
          platesOnBar.map((plate) => {
            return (
              <View
                style={{
                  backgroundColor: '#444',
                  borderRadius: 5,
                  width: plate + 10,
                  minWidth: 20,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 5,
                }}
              >
                <Text style={{ color: '#FFF' }}>{plate}</Text>
              </View>
            )
          })}
      </View>
    </View>
  )
}

export default function BarbellSelector({ weight }: { weight: number }) {
  return (
    <View>
      <BarbellView weight={weight} />
      <Text></Text>
    </View>
  )
}
