import React from 'react'
import { View, Text } from 'react-native'

import { bands } from '../data/equipment'

function BandView({ weight }: { weight: number }) {
  let remainingWeight = weight
  const bandsToUse = bands.filter(({ weight }) => {
    if (weight <= remainingWeight) {
      remainingWeight = remainingWeight - weight
      return true
    }

    return false
  })

  const totalWeight = bandsToUse.reduce((acc, { weight }) => weight + acc, 0)

  return (
    <View>
      <Text>Ideal Weight: {weight} </Text>
      <Text>Workout Weight: {totalWeight}</Text>
      <View
        style={{
          width: '100%',
          maxWidth: 250,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {bandsToUse.length > 0 &&
          bandsToUse.map((band) => {
            return (
              <View
                style={{
                  backgroundColor: band.color,
                  borderRadius: 5,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{ color: band.color === 'yellow' ? '#000' : '#FFF' }}
                >
                  {band.weight}
                </Text>
              </View>
            )
          })}
      </View>
    </View>
  )
}

export default function BandSelector({ weight }: { weight: number }) {
  return (
    <View>
      <BandView weight={weight} />
      <Text></Text>
    </View>
  )
}
