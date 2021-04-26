// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EquipmentItem, User, EquipmentCategory, WorkoutRecord, ExerciseRecord, Set, UserWorkoutPlan, WorkoutPlan, ExercisePlan } = initSchema(schema);

export {
  EquipmentItem,
  User,
  EquipmentCategory,
  WorkoutRecord,
  ExerciseRecord,
  Set,
  UserWorkoutPlan,
  WorkoutPlan,
  ExercisePlan
};