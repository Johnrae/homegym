// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EquipmentItem, EquipmentCategory, User, WorkoutRecord, ExerciseRecord, Set, UserWorkoutPlan, WorkoutPlan, ExercisePlan } = initSchema(schema);

export {
  EquipmentItem,
  EquipmentCategory,
  User,
  WorkoutRecord,
  ExerciseRecord,
  Set,
  UserWorkoutPlan,
  WorkoutPlan,
  ExercisePlan
};