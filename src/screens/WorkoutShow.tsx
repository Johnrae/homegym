import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import { DataStore } from 'aws-amplify'
import Exercise from '../components/Exercise'
import { Lift, Workout } from '../data/workouts'
import { ExercisePlan, WorkoutPlan } from '../models'

export default function WorkoutShow({ workout }: { workout: WorkoutPlan }) {
  const [exercises, setExercises] = useState<ExercisePlan[] | null>(null)

  useEffect(() => {
    const getExercises = async () => {
      const exercises = (await DataStore.query(ExercisePlan)).filter(
        (e) => e.workoutplanID === workout.id
      )
      setExercises(exercises)
    }

    getExercises()
  }, [])

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
        {/* <Text onPress={() => setWorkout(null)}>Back</Text> */}
        <Text style={{ fontSize: 36, marginBottom: 50 }}>{workout.name}</Text>
        {exercises &&
          exercises.map((exercise: ExercisePlan, i: number) => {
            return <Exercise exercise={exercise} key={i} />
          })}
        <TouchableOpacity
          style={{
            marginHorizontal: 50,
            padding: 10,
            backgroundColor: 'red',
            borderRadius: 5,
          }}
        >
          <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 24 }}>
            Complete Workout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
