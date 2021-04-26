export interface Workout {
  name: string
  lifts: Lift[]
}

export interface Lift {
  name: string
  sets: number
  reps: number
  type: 'barbell' | 'band'
}

const workouts: Workout[] = [
  {
    name: 'Heavy Push',
    lifts: [
      { name: 'Bench Press', sets: 5, type: 'barbell', reps: 5 },
      { name: 'Squat', sets: 5, type: 'barbell', reps: 5 },
      { name: 'Overhead Press', sets: 5, type: 'barbell', reps: 5 },
    ],
  },
  {
    name: 'Heavy Pull',
    lifts: [
      { name: 'Pull Ups', sets: 5, type: 'band', reps: 5 },
      { name: 'Deadlift', sets: 5, type: 'barbell', reps: 5 },
      { name: 'Barbell Row', sets: 5, type: 'barbell', reps: 5 },
    ],
  },
  {
    name: 'Light Push',
    lifts: [
      { name: 'Bench', sets: 3, type: 'barbell', reps: 8 },
      { name: 'Box Squat', sets: 3, type: 'barbell', reps: 8 },
      { name: 'Overhead Press', sets: 3, type: 'barbell', reps: 8 },
      { name: 'Transverse fly', sets: 2, type: 'band', reps: 12 },
      { name: 'Skull Crushers', sets: 4, type: 'barbell', reps: 6 },
    ],
  },
  {
    name: 'Light Pull',
    lifts: [
      { name: 'Close Grip Pull Ups', sets: 4, type: 'band', reps: 6 },
      { name: 'Good Mornings', sets: 2, type: 'barbell', reps: 12 },
      { name: 'Face Pull', sets: 2, type: 'band', reps: 12 },
      { name: 'Curl', sets: 3, type: 'barbell', reps: 8 },
      { name: 'Lat pull', sets: 4, type: 'band', reps: 6 },
    ],
  },
]

export default workouts
