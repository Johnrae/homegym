import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import { DataStore } from 'aws-amplify'
import Exercise from '../components/Exercise'
import { Lift, Workout } from '../data/workouts'
import { WorkoutPlan } from '../models'
import WorkoutShow from './WorkoutShow'

export default function WorkoutIndex() {
  const [workout, setWorkout] = useState<WorkoutPlan | null>(null)
  const [workouts, setWorkouts] = useState<WorkoutPlan[] | null>(null)

  useEffect(() => {
    const getWorkouts = async () => {
      const workouts = await DataStore.query(WorkoutPlan)
      setWorkouts(workouts)
    }

    getWorkouts()
  }, [])

  console.log(workout)
  if (workout !== null) {
    return <WorkoutShow workout={workout} />
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
        {workouts &&
          workouts.map((item) => {
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
