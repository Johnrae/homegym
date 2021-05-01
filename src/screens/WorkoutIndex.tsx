import React, { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import Exercise from '../components/Exercise'
import workouts, { Lift, Workout } from '../data/workouts'

export default function WorkoutIndex() {
  const [workout, setWorkout] = useState<Workout | null>(null)

  if (workout !== null) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          width: '100%',
          padding: 20,
        }}
      >
        <ScrollView>
          <Text onPress={() => setWorkout(null)}>Back</Text>
          <Text style={{ fontSize: 36, marginBottom: 50 }}>{workout.name}</Text>
          {workout.lifts.map((lift: Lift, i: number) => {
            return <Exercise lift={lift} key={i} />
          })}
        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        width: '100%',
        padding: 20,
      }}
    >
      <ScrollView>
        {workouts.map((item) => {
          return (
            <Text
              style={{ fontSize: 36, marginBottom: 40 }}
              onPress={() => setWorkout(item)}
            >
              {item.name}
            </Text>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}
