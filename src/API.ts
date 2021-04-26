/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEquipmentItemInput = {
  id?: string | null,
  name?: string | null,
  weight?: string | null,
  equipmentcategoryID?: string | null,
  color?: string | null,
  _version?: number | null,
};

export type ModelEquipmentItemConditionInput = {
  name?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  equipmentcategoryID?: ModelIDInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelEquipmentItemConditionInput | null > | null,
  or?: Array< ModelEquipmentItemConditionInput | null > | null,
  not?: ModelEquipmentItemConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type EquipmentItem = {
  __typename: "EquipmentItem",
  id?: string,
  name?: string | null,
  weight?: string | null,
  equipmentcategoryID?: string | null,
  color?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateEquipmentItemInput = {
  id: string,
  name?: string | null,
  weight?: string | null,
  equipmentcategoryID?: string | null,
  color?: string | null,
  _version?: number | null,
};

export type DeleteEquipmentItemInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id?: string,
  first_name?: string | null,
  last_name?: string | null,
  EquipmentCategories?: ModelEquipmentCategoryConnection,
  WorkoutRecords?: ModelWorkoutRecordConnection,
  WorkoutPlans?: ModelUserWorkoutPlanConnection,
  email?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelEquipmentCategoryConnection = {
  __typename: "ModelEquipmentCategoryConnection",
  items?:  Array<EquipmentCategory | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type EquipmentCategory = {
  __typename: "EquipmentCategory",
  id?: string,
  name?: string | null,
  type?: string | null,
  userID?: string | null,
  EquipmentItems?: ModelEquipmentItemConnection,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelEquipmentItemConnection = {
  __typename: "ModelEquipmentItemConnection",
  items?:  Array<EquipmentItem | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWorkoutRecordConnection = {
  __typename: "ModelWorkoutRecordConnection",
  items?:  Array<WorkoutRecord | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type WorkoutRecord = {
  __typename: "WorkoutRecord",
  id?: string,
  ExerciseRecords?: ModelExerciseRecordConnection,
  workoutplanID?: string | null,
  userID?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelExerciseRecordConnection = {
  __typename: "ModelExerciseRecordConnection",
  items?:  Array<ExerciseRecord | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ExerciseRecord = {
  __typename: "ExerciseRecord",
  id?: string,
  Sets?: ModelSetConnection,
  weight?: number | null,
  exerciseplanID?: string | null,
  workoutrecordID?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelSetConnection = {
  __typename: "ModelSetConnection",
  items?:  Array<Set | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Set = {
  __typename: "Set",
  id?: string,
  reps?: number | null,
  weight?: number | null,
  exerciserecordID?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelUserWorkoutPlanConnection = {
  __typename: "ModelUserWorkoutPlanConnection",
  items?:  Array<UserWorkoutPlan | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserWorkoutPlan = {
  __typename: "UserWorkoutPlan",
  id?: string,
  userID?: string,
  workoutplanID?: string,
  user?: User,
  workoutplan?: WorkoutPlan,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type WorkoutPlan = {
  __typename: "WorkoutPlan",
  id?: string,
  ExercisePlans?: ModelExercisePlanConnection,
  WorkoutRecords?: ModelWorkoutRecordConnection,
  users?: ModelUserWorkoutPlanConnection,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelExercisePlanConnection = {
  __typename: "ModelExercisePlanConnection",
  items?:  Array<ExercisePlan | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ExercisePlan = {
  __typename: "ExercisePlan",
  id?: string,
  workoutplanID?: string | null,
  reps?: number | null,
  sets?: number | null,
  EqupmentCategory?: EquipmentCategory,
  ExerciseRecords?: ModelExerciseRecordConnection,
  name?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateSetInput = {
  id?: string | null,
  reps?: number | null,
  weight?: number | null,
  exerciserecordID?: string | null,
  _version?: number | null,
};

export type ModelSetConditionInput = {
  reps?: ModelIntInput | null,
  weight?: ModelIntInput | null,
  exerciserecordID?: ModelIDInput | null,
  and?: Array< ModelSetConditionInput | null > | null,
  or?: Array< ModelSetConditionInput | null > | null,
  not?: ModelSetConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSetInput = {
  id: string,
  reps?: number | null,
  weight?: number | null,
  exerciserecordID?: string | null,
  _version?: number | null,
};

export type DeleteSetInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateEquipmentCategoryInput = {
  id?: string | null,
  name?: string | null,
  type?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type ModelEquipmentCategoryConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelEquipmentCategoryConditionInput | null > | null,
  or?: Array< ModelEquipmentCategoryConditionInput | null > | null,
  not?: ModelEquipmentCategoryConditionInput | null,
};

export type UpdateEquipmentCategoryInput = {
  id: string,
  name?: string | null,
  type?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteEquipmentCategoryInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateWorkoutRecordInput = {
  id?: string | null,
  workoutplanID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type ModelWorkoutRecordConditionInput = {
  workoutplanID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelWorkoutRecordConditionInput | null > | null,
  or?: Array< ModelWorkoutRecordConditionInput | null > | null,
  not?: ModelWorkoutRecordConditionInput | null,
};

export type UpdateWorkoutRecordInput = {
  id: string,
  workoutplanID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteWorkoutRecordInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateWorkoutPlanInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelWorkoutPlanConditionInput = {
  and?: Array< ModelWorkoutPlanConditionInput | null > | null,
  or?: Array< ModelWorkoutPlanConditionInput | null > | null,
  not?: ModelWorkoutPlanConditionInput | null,
};

export type UpdateWorkoutPlanInput = {
  id: string,
  _version?: number | null,
};

export type DeleteWorkoutPlanInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateExerciseRecordInput = {
  id?: string | null,
  weight?: number | null,
  exerciseplanID?: string | null,
  workoutrecordID?: string | null,
  _version?: number | null,
};

export type ModelExerciseRecordConditionInput = {
  weight?: ModelIntInput | null,
  exerciseplanID?: ModelIDInput | null,
  workoutrecordID?: ModelIDInput | null,
  and?: Array< ModelExerciseRecordConditionInput | null > | null,
  or?: Array< ModelExerciseRecordConditionInput | null > | null,
  not?: ModelExerciseRecordConditionInput | null,
};

export type UpdateExerciseRecordInput = {
  id: string,
  weight?: number | null,
  exerciseplanID?: string | null,
  workoutrecordID?: string | null,
  _version?: number | null,
};

export type DeleteExerciseRecordInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateExercisePlanInput = {
  id?: string | null,
  workoutplanID?: string | null,
  reps?: number | null,
  sets?: number | null,
  name?: string | null,
  _version?: number | null,
  exercisePlanEqupmentCategoryId?: string | null,
};

export type ModelExercisePlanConditionInput = {
  workoutplanID?: ModelIDInput | null,
  reps?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelExercisePlanConditionInput | null > | null,
  or?: Array< ModelExercisePlanConditionInput | null > | null,
  not?: ModelExercisePlanConditionInput | null,
};

export type UpdateExercisePlanInput = {
  id: string,
  workoutplanID?: string | null,
  reps?: number | null,
  sets?: number | null,
  name?: string | null,
  _version?: number | null,
  exercisePlanEqupmentCategoryId?: string | null,
};

export type DeleteExercisePlanInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateUserWorkoutPlanInput = {
  id?: string | null,
  userID: string,
  workoutplanID: string,
  _version?: number | null,
};

export type ModelUserWorkoutPlanConditionInput = {
  userID?: ModelIDInput | null,
  workoutplanID?: ModelIDInput | null,
  and?: Array< ModelUserWorkoutPlanConditionInput | null > | null,
  or?: Array< ModelUserWorkoutPlanConditionInput | null > | null,
  not?: ModelUserWorkoutPlanConditionInput | null,
};

export type UpdateUserWorkoutPlanInput = {
  id: string,
  userID?: string | null,
  workoutplanID?: string | null,
  _version?: number | null,
};

export type DeleteUserWorkoutPlanInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelEquipmentItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  equipmentcategoryID?: ModelIDInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelEquipmentItemFilterInput | null > | null,
  or?: Array< ModelEquipmentItemFilterInput | null > | null,
  not?: ModelEquipmentItemFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSetFilterInput = {
  id?: ModelIDInput | null,
  reps?: ModelIntInput | null,
  weight?: ModelIntInput | null,
  exerciserecordID?: ModelIDInput | null,
  and?: Array< ModelSetFilterInput | null > | null,
  or?: Array< ModelSetFilterInput | null > | null,
  not?: ModelSetFilterInput | null,
};

export type ModelEquipmentCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelEquipmentCategoryFilterInput | null > | null,
  or?: Array< ModelEquipmentCategoryFilterInput | null > | null,
  not?: ModelEquipmentCategoryFilterInput | null,
};

export type ModelWorkoutRecordFilterInput = {
  id?: ModelIDInput | null,
  workoutplanID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelWorkoutRecordFilterInput | null > | null,
  or?: Array< ModelWorkoutRecordFilterInput | null > | null,
  not?: ModelWorkoutRecordFilterInput | null,
};

export type ModelWorkoutPlanFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelWorkoutPlanFilterInput | null > | null,
  or?: Array< ModelWorkoutPlanFilterInput | null > | null,
  not?: ModelWorkoutPlanFilterInput | null,
};

export type ModelWorkoutPlanConnection = {
  __typename: "ModelWorkoutPlanConnection",
  items?:  Array<WorkoutPlan | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelExerciseRecordFilterInput = {
  id?: ModelIDInput | null,
  weight?: ModelIntInput | null,
  exerciseplanID?: ModelIDInput | null,
  workoutrecordID?: ModelIDInput | null,
  and?: Array< ModelExerciseRecordFilterInput | null > | null,
  or?: Array< ModelExerciseRecordFilterInput | null > | null,
  not?: ModelExerciseRecordFilterInput | null,
};

export type ModelExercisePlanFilterInput = {
  id?: ModelIDInput | null,
  workoutplanID?: ModelIDInput | null,
  reps?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelExercisePlanFilterInput | null > | null,
  or?: Array< ModelExercisePlanFilterInput | null > | null,
  not?: ModelExercisePlanFilterInput | null,
};

export type ModelUserWorkoutPlanFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  workoutplanID?: ModelIDInput | null,
  and?: Array< ModelUserWorkoutPlanFilterInput | null > | null,
  or?: Array< ModelUserWorkoutPlanFilterInput | null > | null,
  not?: ModelUserWorkoutPlanFilterInput | null,
};

export type CreateEquipmentItemMutationVariables = {
  input?: CreateEquipmentItemInput,
  condition?: ModelEquipmentItemConditionInput | null,
};

export type CreateEquipmentItemMutation = {
  createEquipmentItem?:  {
    __typename: "EquipmentItem",
    id: string,
    name?: string | null,
    weight?: string | null,
    equipmentcategoryID?: string | null,
    color?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEquipmentItemMutationVariables = {
  input?: UpdateEquipmentItemInput,
  condition?: ModelEquipmentItemConditionInput | null,
};

export type UpdateEquipmentItemMutation = {
  updateEquipmentItem?:  {
    __typename: "EquipmentItem",
    id: string,
    name?: string | null,
    weight?: string | null,
    equipmentcategoryID?: string | null,
    color?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEquipmentItemMutationVariables = {
  input?: DeleteEquipmentItemInput,
  condition?: ModelEquipmentItemConditionInput | null,
};

export type DeleteEquipmentItemMutation = {
  deleteEquipmentItem?:  {
    __typename: "EquipmentItem",
    id: string,
    name?: string | null,
    weight?: string | null,
    equipmentcategoryID?: string | null,
    color?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    EquipmentCategories?:  {
      __typename: "ModelEquipmentCategoryConnection",
      items?:  Array< {
        __typename: "EquipmentCategory",
        id: string,
        name?: string | null,
        type?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutPlans?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    EquipmentCategories?:  {
      __typename: "ModelEquipmentCategoryConnection",
      items?:  Array< {
        __typename: "EquipmentCategory",
        id: string,
        name?: string | null,
        type?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutPlans?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    EquipmentCategories?:  {
      __typename: "ModelEquipmentCategoryConnection",
      items?:  Array< {
        __typename: "EquipmentCategory",
        id: string,
        name?: string | null,
        type?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutPlans?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSetMutationVariables = {
  input?: CreateSetInput,
  condition?: ModelSetConditionInput | null,
};

export type CreateSetMutation = {
  createSet?:  {
    __typename: "Set",
    id: string,
    reps?: number | null,
    weight?: number | null,
    exerciserecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSetMutationVariables = {
  input?: UpdateSetInput,
  condition?: ModelSetConditionInput | null,
};

export type UpdateSetMutation = {
  updateSet?:  {
    __typename: "Set",
    id: string,
    reps?: number | null,
    weight?: number | null,
    exerciserecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSetMutationVariables = {
  input?: DeleteSetInput,
  condition?: ModelSetConditionInput | null,
};

export type DeleteSetMutation = {
  deleteSet?:  {
    __typename: "Set",
    id: string,
    reps?: number | null,
    weight?: number | null,
    exerciserecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEquipmentCategoryMutationVariables = {
  input?: CreateEquipmentCategoryInput,
  condition?: ModelEquipmentCategoryConditionInput | null,
};

export type CreateEquipmentCategoryMutation = {
  createEquipmentCategory?:  {
    __typename: "EquipmentCategory",
    id: string,
    name?: string | null,
    type?: string | null,
    userID?: string | null,
    EquipmentItems?:  {
      __typename: "ModelEquipmentItemConnection",
      items?:  Array< {
        __typename: "EquipmentItem",
        id: string,
        name?: string | null,
        weight?: string | null,
        equipmentcategoryID?: string | null,
        color?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEquipmentCategoryMutationVariables = {
  input?: UpdateEquipmentCategoryInput,
  condition?: ModelEquipmentCategoryConditionInput | null,
};

export type UpdateEquipmentCategoryMutation = {
  updateEquipmentCategory?:  {
    __typename: "EquipmentCategory",
    id: string,
    name?: string | null,
    type?: string | null,
    userID?: string | null,
    EquipmentItems?:  {
      __typename: "ModelEquipmentItemConnection",
      items?:  Array< {
        __typename: "EquipmentItem",
        id: string,
        name?: string | null,
        weight?: string | null,
        equipmentcategoryID?: string | null,
        color?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEquipmentCategoryMutationVariables = {
  input?: DeleteEquipmentCategoryInput,
  condition?: ModelEquipmentCategoryConditionInput | null,
};

export type DeleteEquipmentCategoryMutation = {
  deleteEquipmentCategory?:  {
    __typename: "EquipmentCategory",
    id: string,
    name?: string | null,
    type?: string | null,
    userID?: string | null,
    EquipmentItems?:  {
      __typename: "ModelEquipmentItemConnection",
      items?:  Array< {
        __typename: "EquipmentItem",
        id: string,
        name?: string | null,
        weight?: string | null,
        equipmentcategoryID?: string | null,
        color?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkoutRecordMutationVariables = {
  input?: CreateWorkoutRecordInput,
  condition?: ModelWorkoutRecordConditionInput | null,
};

export type CreateWorkoutRecordMutation = {
  createWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workoutplanID?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkoutRecordMutationVariables = {
  input?: UpdateWorkoutRecordInput,
  condition?: ModelWorkoutRecordConditionInput | null,
};

export type UpdateWorkoutRecordMutation = {
  updateWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workoutplanID?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkoutRecordMutationVariables = {
  input?: DeleteWorkoutRecordInput,
  condition?: ModelWorkoutRecordConditionInput | null,
};

export type DeleteWorkoutRecordMutation = {
  deleteWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workoutplanID?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkoutPlanMutationVariables = {
  input?: CreateWorkoutPlanInput,
  condition?: ModelWorkoutPlanConditionInput | null,
};

export type CreateWorkoutPlanMutation = {
  createWorkoutPlan?:  {
    __typename: "WorkoutPlan",
    id: string,
    ExercisePlans?:  {
      __typename: "ModelExercisePlanConnection",
      items?:  Array< {
        __typename: "ExercisePlan",
        id: string,
        workoutplanID?: string | null,
        reps?: number | null,
        sets?: number | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkoutPlanMutationVariables = {
  input?: UpdateWorkoutPlanInput,
  condition?: ModelWorkoutPlanConditionInput | null,
};

export type UpdateWorkoutPlanMutation = {
  updateWorkoutPlan?:  {
    __typename: "WorkoutPlan",
    id: string,
    ExercisePlans?:  {
      __typename: "ModelExercisePlanConnection",
      items?:  Array< {
        __typename: "ExercisePlan",
        id: string,
        workoutplanID?: string | null,
        reps?: number | null,
        sets?: number | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkoutPlanMutationVariables = {
  input?: DeleteWorkoutPlanInput,
  condition?: ModelWorkoutPlanConditionInput | null,
};

export type DeleteWorkoutPlanMutation = {
  deleteWorkoutPlan?:  {
    __typename: "WorkoutPlan",
    id: string,
    ExercisePlans?:  {
      __typename: "ModelExercisePlanConnection",
      items?:  Array< {
        __typename: "ExercisePlan",
        id: string,
        workoutplanID?: string | null,
        reps?: number | null,
        sets?: number | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExerciseRecordMutationVariables = {
  input?: CreateExerciseRecordInput,
  condition?: ModelExerciseRecordConditionInput | null,
};

export type CreateExerciseRecordMutation = {
  createExerciseRecord?:  {
    __typename: "ExerciseRecord",
    id: string,
    Sets?:  {
      __typename: "ModelSetConnection",
      items?:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        weight?: number | null,
        exerciserecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weight?: number | null,
    exerciseplanID?: string | null,
    workoutrecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExerciseRecordMutationVariables = {
  input?: UpdateExerciseRecordInput,
  condition?: ModelExerciseRecordConditionInput | null,
};

export type UpdateExerciseRecordMutation = {
  updateExerciseRecord?:  {
    __typename: "ExerciseRecord",
    id: string,
    Sets?:  {
      __typename: "ModelSetConnection",
      items?:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        weight?: number | null,
        exerciserecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weight?: number | null,
    exerciseplanID?: string | null,
    workoutrecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExerciseRecordMutationVariables = {
  input?: DeleteExerciseRecordInput,
  condition?: ModelExerciseRecordConditionInput | null,
};

export type DeleteExerciseRecordMutation = {
  deleteExerciseRecord?:  {
    __typename: "ExerciseRecord",
    id: string,
    Sets?:  {
      __typename: "ModelSetConnection",
      items?:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        weight?: number | null,
        exerciserecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weight?: number | null,
    exerciseplanID?: string | null,
    workoutrecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExercisePlanMutationVariables = {
  input?: CreateExercisePlanInput,
  condition?: ModelExercisePlanConditionInput | null,
};

export type CreateExercisePlanMutation = {
  createExercisePlan?:  {
    __typename: "ExercisePlan",
    id: string,
    workoutplanID?: string | null,
    reps?: number | null,
    sets?: number | null,
    EqupmentCategory?:  {
      __typename: "EquipmentCategory",
      id: string,
      name?: string | null,
      type?: string | null,
      userID?: string | null,
      EquipmentItems?:  {
        __typename: "ModelEquipmentItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExercisePlanMutationVariables = {
  input?: UpdateExercisePlanInput,
  condition?: ModelExercisePlanConditionInput | null,
};

export type UpdateExercisePlanMutation = {
  updateExercisePlan?:  {
    __typename: "ExercisePlan",
    id: string,
    workoutplanID?: string | null,
    reps?: number | null,
    sets?: number | null,
    EqupmentCategory?:  {
      __typename: "EquipmentCategory",
      id: string,
      name?: string | null,
      type?: string | null,
      userID?: string | null,
      EquipmentItems?:  {
        __typename: "ModelEquipmentItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExercisePlanMutationVariables = {
  input?: DeleteExercisePlanInput,
  condition?: ModelExercisePlanConditionInput | null,
};

export type DeleteExercisePlanMutation = {
  deleteExercisePlan?:  {
    __typename: "ExercisePlan",
    id: string,
    workoutplanID?: string | null,
    reps?: number | null,
    sets?: number | null,
    EqupmentCategory?:  {
      __typename: "EquipmentCategory",
      id: string,
      name?: string | null,
      type?: string | null,
      userID?: string | null,
      EquipmentItems?:  {
        __typename: "ModelEquipmentItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserWorkoutPlanMutationVariables = {
  input?: CreateUserWorkoutPlanInput,
  condition?: ModelUserWorkoutPlanConditionInput | null,
};

export type CreateUserWorkoutPlanMutation = {
  createUserWorkoutPlan?:  {
    __typename: "UserWorkoutPlan",
    id: string,
    userID: string,
    workoutplanID: string,
    user:  {
      __typename: "User",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      EquipmentCategories?:  {
        __typename: "ModelEquipmentCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutPlans?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      email?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    workoutplan:  {
      __typename: "WorkoutPlan",
      id: string,
      ExercisePlans?:  {
        __typename: "ModelExercisePlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserWorkoutPlanMutationVariables = {
  input?: UpdateUserWorkoutPlanInput,
  condition?: ModelUserWorkoutPlanConditionInput | null,
};

export type UpdateUserWorkoutPlanMutation = {
  updateUserWorkoutPlan?:  {
    __typename: "UserWorkoutPlan",
    id: string,
    userID: string,
    workoutplanID: string,
    user:  {
      __typename: "User",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      EquipmentCategories?:  {
        __typename: "ModelEquipmentCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutPlans?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      email?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    workoutplan:  {
      __typename: "WorkoutPlan",
      id: string,
      ExercisePlans?:  {
        __typename: "ModelExercisePlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserWorkoutPlanMutationVariables = {
  input?: DeleteUserWorkoutPlanInput,
  condition?: ModelUserWorkoutPlanConditionInput | null,
};

export type DeleteUserWorkoutPlanMutation = {
  deleteUserWorkoutPlan?:  {
    __typename: "UserWorkoutPlan",
    id: string,
    userID: string,
    workoutplanID: string,
    user:  {
      __typename: "User",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      EquipmentCategories?:  {
        __typename: "ModelEquipmentCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutPlans?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      email?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    workoutplan:  {
      __typename: "WorkoutPlan",
      id: string,
      ExercisePlans?:  {
        __typename: "ModelExercisePlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncEquipmentItemsQueryVariables = {
  filter?: ModelEquipmentItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEquipmentItemsQuery = {
  syncEquipmentItems?:  {
    __typename: "ModelEquipmentItemConnection",
    items?:  Array< {
      __typename: "EquipmentItem",
      id: string,
      name?: string | null,
      weight?: string | null,
      equipmentcategoryID?: string | null,
      color?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEquipmentItemQueryVariables = {
  id?: string,
};

export type GetEquipmentItemQuery = {
  getEquipmentItem?:  {
    __typename: "EquipmentItem",
    id: string,
    name?: string | null,
    weight?: string | null,
    equipmentcategoryID?: string | null,
    color?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEquipmentItemsQueryVariables = {
  filter?: ModelEquipmentItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEquipmentItemsQuery = {
  listEquipmentItems?:  {
    __typename: "ModelEquipmentItemConnection",
    items?:  Array< {
      __typename: "EquipmentItem",
      id: string,
      name?: string | null,
      weight?: string | null,
      equipmentcategoryID?: string | null,
      color?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      EquipmentCategories?:  {
        __typename: "ModelEquipmentCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutPlans?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      email?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    EquipmentCategories?:  {
      __typename: "ModelEquipmentCategoryConnection",
      items?:  Array< {
        __typename: "EquipmentCategory",
        id: string,
        name?: string | null,
        type?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutPlans?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      EquipmentCategories?:  {
        __typename: "ModelEquipmentCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutPlans?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      email?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSetsQueryVariables = {
  filter?: ModelSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSetsQuery = {
  syncSets?:  {
    __typename: "ModelSetConnection",
    items?:  Array< {
      __typename: "Set",
      id: string,
      reps?: number | null,
      weight?: number | null,
      exerciserecordID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSetQueryVariables = {
  id?: string,
};

export type GetSetQuery = {
  getSet?:  {
    __typename: "Set",
    id: string,
    reps?: number | null,
    weight?: number | null,
    exerciserecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSetsQueryVariables = {
  filter?: ModelSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSetsQuery = {
  listSets?:  {
    __typename: "ModelSetConnection",
    items?:  Array< {
      __typename: "Set",
      id: string,
      reps?: number | null,
      weight?: number | null,
      exerciserecordID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEquipmentCategoriesQueryVariables = {
  filter?: ModelEquipmentCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEquipmentCategoriesQuery = {
  syncEquipmentCategories?:  {
    __typename: "ModelEquipmentCategoryConnection",
    items?:  Array< {
      __typename: "EquipmentCategory",
      id: string,
      name?: string | null,
      type?: string | null,
      userID?: string | null,
      EquipmentItems?:  {
        __typename: "ModelEquipmentItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEquipmentCategoryQueryVariables = {
  id?: string,
};

export type GetEquipmentCategoryQuery = {
  getEquipmentCategory?:  {
    __typename: "EquipmentCategory",
    id: string,
    name?: string | null,
    type?: string | null,
    userID?: string | null,
    EquipmentItems?:  {
      __typename: "ModelEquipmentItemConnection",
      items?:  Array< {
        __typename: "EquipmentItem",
        id: string,
        name?: string | null,
        weight?: string | null,
        equipmentcategoryID?: string | null,
        color?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEquipmentCategorysQueryVariables = {
  filter?: ModelEquipmentCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEquipmentCategorysQuery = {
  listEquipmentCategorys?:  {
    __typename: "ModelEquipmentCategoryConnection",
    items?:  Array< {
      __typename: "EquipmentCategory",
      id: string,
      name?: string | null,
      type?: string | null,
      userID?: string | null,
      EquipmentItems?:  {
        __typename: "ModelEquipmentItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWorkoutRecordsQueryVariables = {
  filter?: ModelWorkoutRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkoutRecordsQuery = {
  syncWorkoutRecords?:  {
    __typename: "ModelWorkoutRecordConnection",
    items?:  Array< {
      __typename: "WorkoutRecord",
      id: string,
      ExerciseRecords?:  {
        __typename: "ModelExerciseRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workoutplanID?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWorkoutRecordQueryVariables = {
  id?: string,
};

export type GetWorkoutRecordQuery = {
  getWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workoutplanID?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkoutRecordsQueryVariables = {
  filter?: ModelWorkoutRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutRecordsQuery = {
  listWorkoutRecords?:  {
    __typename: "ModelWorkoutRecordConnection",
    items?:  Array< {
      __typename: "WorkoutRecord",
      id: string,
      ExerciseRecords?:  {
        __typename: "ModelExerciseRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workoutplanID?: string | null,
      userID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWorkoutPlansQueryVariables = {
  filter?: ModelWorkoutPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkoutPlansQuery = {
  syncWorkoutPlans?:  {
    __typename: "ModelWorkoutPlanConnection",
    items?:  Array< {
      __typename: "WorkoutPlan",
      id: string,
      ExercisePlans?:  {
        __typename: "ModelExercisePlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWorkoutPlanQueryVariables = {
  id?: string,
};

export type GetWorkoutPlanQuery = {
  getWorkoutPlan?:  {
    __typename: "WorkoutPlan",
    id: string,
    ExercisePlans?:  {
      __typename: "ModelExercisePlanConnection",
      items?:  Array< {
        __typename: "ExercisePlan",
        id: string,
        workoutplanID?: string | null,
        reps?: number | null,
        sets?: number | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkoutPlansQueryVariables = {
  filter?: ModelWorkoutPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutPlansQuery = {
  listWorkoutPlans?:  {
    __typename: "ModelWorkoutPlanConnection",
    items?:  Array< {
      __typename: "WorkoutPlan",
      id: string,
      ExercisePlans?:  {
        __typename: "ModelExercisePlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExerciseRecordsQueryVariables = {
  filter?: ModelExerciseRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExerciseRecordsQuery = {
  syncExerciseRecords?:  {
    __typename: "ModelExerciseRecordConnection",
    items?:  Array< {
      __typename: "ExerciseRecord",
      id: string,
      Sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      weight?: number | null,
      exerciseplanID?: string | null,
      workoutrecordID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExerciseRecordQueryVariables = {
  id?: string,
};

export type GetExerciseRecordQuery = {
  getExerciseRecord?:  {
    __typename: "ExerciseRecord",
    id: string,
    Sets?:  {
      __typename: "ModelSetConnection",
      items?:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        weight?: number | null,
        exerciserecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weight?: number | null,
    exerciseplanID?: string | null,
    workoutrecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExerciseRecordsQueryVariables = {
  filter?: ModelExerciseRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseRecordsQuery = {
  listExerciseRecords?:  {
    __typename: "ModelExerciseRecordConnection",
    items?:  Array< {
      __typename: "ExerciseRecord",
      id: string,
      Sets?:  {
        __typename: "ModelSetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      weight?: number | null,
      exerciseplanID?: string | null,
      workoutrecordID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExercisePlansQueryVariables = {
  filter?: ModelExercisePlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExercisePlansQuery = {
  syncExercisePlans?:  {
    __typename: "ModelExercisePlanConnection",
    items?:  Array< {
      __typename: "ExercisePlan",
      id: string,
      workoutplanID?: string | null,
      reps?: number | null,
      sets?: number | null,
      EqupmentCategory?:  {
        __typename: "EquipmentCategory",
        id: string,
        name?: string | null,
        type?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      ExerciseRecords?:  {
        __typename: "ModelExerciseRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExercisePlanQueryVariables = {
  id?: string,
};

export type GetExercisePlanQuery = {
  getExercisePlan?:  {
    __typename: "ExercisePlan",
    id: string,
    workoutplanID?: string | null,
    reps?: number | null,
    sets?: number | null,
    EqupmentCategory?:  {
      __typename: "EquipmentCategory",
      id: string,
      name?: string | null,
      type?: string | null,
      userID?: string | null,
      EquipmentItems?:  {
        __typename: "ModelEquipmentItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExercisePlansQueryVariables = {
  filter?: ModelExercisePlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisePlansQuery = {
  listExercisePlans?:  {
    __typename: "ModelExercisePlanConnection",
    items?:  Array< {
      __typename: "ExercisePlan",
      id: string,
      workoutplanID?: string | null,
      reps?: number | null,
      sets?: number | null,
      EqupmentCategory?:  {
        __typename: "EquipmentCategory",
        id: string,
        name?: string | null,
        type?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      ExerciseRecords?:  {
        __typename: "ModelExerciseRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserWorkoutPlansQueryVariables = {
  filter?: ModelUserWorkoutPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserWorkoutPlansQuery = {
  syncUserWorkoutPlans?:  {
    __typename: "ModelUserWorkoutPlanConnection",
    items?:  Array< {
      __typename: "UserWorkoutPlan",
      id: string,
      userID: string,
      workoutplanID: string,
      user:  {
        __typename: "User",
        id: string,
        first_name?: string | null,
        last_name?: string | null,
        email?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      workoutplan:  {
        __typename: "WorkoutPlan",
        id: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateEquipmentItemSubscription = {
  onCreateEquipmentItem?:  {
    __typename: "EquipmentItem",
    id: string,
    name?: string | null,
    weight?: string | null,
    equipmentcategoryID?: string | null,
    color?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEquipmentItemSubscription = {
  onUpdateEquipmentItem?:  {
    __typename: "EquipmentItem",
    id: string,
    name?: string | null,
    weight?: string | null,
    equipmentcategoryID?: string | null,
    color?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEquipmentItemSubscription = {
  onDeleteEquipmentItem?:  {
    __typename: "EquipmentItem",
    id: string,
    name?: string | null,
    weight?: string | null,
    equipmentcategoryID?: string | null,
    color?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    EquipmentCategories?:  {
      __typename: "ModelEquipmentCategoryConnection",
      items?:  Array< {
        __typename: "EquipmentCategory",
        id: string,
        name?: string | null,
        type?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutPlans?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    EquipmentCategories?:  {
      __typename: "ModelEquipmentCategoryConnection",
      items?:  Array< {
        __typename: "EquipmentCategory",
        id: string,
        name?: string | null,
        type?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutPlans?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    EquipmentCategories?:  {
      __typename: "ModelEquipmentCategoryConnection",
      items?:  Array< {
        __typename: "EquipmentCategory",
        id: string,
        name?: string | null,
        type?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutPlans?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    email?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSetSubscription = {
  onCreateSet?:  {
    __typename: "Set",
    id: string,
    reps?: number | null,
    weight?: number | null,
    exerciserecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSetSubscription = {
  onUpdateSet?:  {
    __typename: "Set",
    id: string,
    reps?: number | null,
    weight?: number | null,
    exerciserecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSetSubscription = {
  onDeleteSet?:  {
    __typename: "Set",
    id: string,
    reps?: number | null,
    weight?: number | null,
    exerciserecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEquipmentCategorySubscription = {
  onCreateEquipmentCategory?:  {
    __typename: "EquipmentCategory",
    id: string,
    name?: string | null,
    type?: string | null,
    userID?: string | null,
    EquipmentItems?:  {
      __typename: "ModelEquipmentItemConnection",
      items?:  Array< {
        __typename: "EquipmentItem",
        id: string,
        name?: string | null,
        weight?: string | null,
        equipmentcategoryID?: string | null,
        color?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEquipmentCategorySubscription = {
  onUpdateEquipmentCategory?:  {
    __typename: "EquipmentCategory",
    id: string,
    name?: string | null,
    type?: string | null,
    userID?: string | null,
    EquipmentItems?:  {
      __typename: "ModelEquipmentItemConnection",
      items?:  Array< {
        __typename: "EquipmentItem",
        id: string,
        name?: string | null,
        weight?: string | null,
        equipmentcategoryID?: string | null,
        color?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEquipmentCategorySubscription = {
  onDeleteEquipmentCategory?:  {
    __typename: "EquipmentCategory",
    id: string,
    name?: string | null,
    type?: string | null,
    userID?: string | null,
    EquipmentItems?:  {
      __typename: "ModelEquipmentItemConnection",
      items?:  Array< {
        __typename: "EquipmentItem",
        id: string,
        name?: string | null,
        weight?: string | null,
        equipmentcategoryID?: string | null,
        color?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkoutRecordSubscription = {
  onCreateWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workoutplanID?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkoutRecordSubscription = {
  onUpdateWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workoutplanID?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkoutRecordSubscription = {
  onDeleteWorkoutRecord?:  {
    __typename: "WorkoutRecord",
    id: string,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workoutplanID?: string | null,
    userID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkoutPlanSubscription = {
  onCreateWorkoutPlan?:  {
    __typename: "WorkoutPlan",
    id: string,
    ExercisePlans?:  {
      __typename: "ModelExercisePlanConnection",
      items?:  Array< {
        __typename: "ExercisePlan",
        id: string,
        workoutplanID?: string | null,
        reps?: number | null,
        sets?: number | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkoutPlanSubscription = {
  onUpdateWorkoutPlan?:  {
    __typename: "WorkoutPlan",
    id: string,
    ExercisePlans?:  {
      __typename: "ModelExercisePlanConnection",
      items?:  Array< {
        __typename: "ExercisePlan",
        id: string,
        workoutplanID?: string | null,
        reps?: number | null,
        sets?: number | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkoutPlanSubscription = {
  onDeleteWorkoutPlan?:  {
    __typename: "WorkoutPlan",
    id: string,
    ExercisePlans?:  {
      __typename: "ModelExercisePlanConnection",
      items?:  Array< {
        __typename: "ExercisePlan",
        id: string,
        workoutplanID?: string | null,
        reps?: number | null,
        sets?: number | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WorkoutRecords?:  {
      __typename: "ModelWorkoutRecordConnection",
      items?:  Array< {
        __typename: "WorkoutRecord",
        id: string,
        workoutplanID?: string | null,
        userID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserWorkoutPlanConnection",
      items?:  Array< {
        __typename: "UserWorkoutPlan",
        id: string,
        userID: string,
        workoutplanID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExerciseRecordSubscription = {
  onCreateExerciseRecord?:  {
    __typename: "ExerciseRecord",
    id: string,
    Sets?:  {
      __typename: "ModelSetConnection",
      items?:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        weight?: number | null,
        exerciserecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weight?: number | null,
    exerciseplanID?: string | null,
    workoutrecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExerciseRecordSubscription = {
  onUpdateExerciseRecord?:  {
    __typename: "ExerciseRecord",
    id: string,
    Sets?:  {
      __typename: "ModelSetConnection",
      items?:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        weight?: number | null,
        exerciserecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weight?: number | null,
    exerciseplanID?: string | null,
    workoutrecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExerciseRecordSubscription = {
  onDeleteExerciseRecord?:  {
    __typename: "ExerciseRecord",
    id: string,
    Sets?:  {
      __typename: "ModelSetConnection",
      items?:  Array< {
        __typename: "Set",
        id: string,
        reps?: number | null,
        weight?: number | null,
        exerciserecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    weight?: number | null,
    exerciseplanID?: string | null,
    workoutrecordID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExercisePlanSubscription = {
  onCreateExercisePlan?:  {
    __typename: "ExercisePlan",
    id: string,
    workoutplanID?: string | null,
    reps?: number | null,
    sets?: number | null,
    EqupmentCategory?:  {
      __typename: "EquipmentCategory",
      id: string,
      name?: string | null,
      type?: string | null,
      userID?: string | null,
      EquipmentItems?:  {
        __typename: "ModelEquipmentItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExercisePlanSubscription = {
  onUpdateExercisePlan?:  {
    __typename: "ExercisePlan",
    id: string,
    workoutplanID?: string | null,
    reps?: number | null,
    sets?: number | null,
    EqupmentCategory?:  {
      __typename: "EquipmentCategory",
      id: string,
      name?: string | null,
      type?: string | null,
      userID?: string | null,
      EquipmentItems?:  {
        __typename: "ModelEquipmentItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExercisePlanSubscription = {
  onDeleteExercisePlan?:  {
    __typename: "ExercisePlan",
    id: string,
    workoutplanID?: string | null,
    reps?: number | null,
    sets?: number | null,
    EqupmentCategory?:  {
      __typename: "EquipmentCategory",
      id: string,
      name?: string | null,
      type?: string | null,
      userID?: string | null,
      EquipmentItems?:  {
        __typename: "ModelEquipmentItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    ExerciseRecords?:  {
      __typename: "ModelExerciseRecordConnection",
      items?:  Array< {
        __typename: "ExerciseRecord",
        id: string,
        weight?: number | null,
        exerciseplanID?: string | null,
        workoutrecordID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserWorkoutPlanSubscription = {
  onCreateUserWorkoutPlan?:  {
    __typename: "UserWorkoutPlan",
    id: string,
    userID: string,
    workoutplanID: string,
    user:  {
      __typename: "User",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      EquipmentCategories?:  {
        __typename: "ModelEquipmentCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutPlans?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      email?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    workoutplan:  {
      __typename: "WorkoutPlan",
      id: string,
      ExercisePlans?:  {
        __typename: "ModelExercisePlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserWorkoutPlanSubscription = {
  onUpdateUserWorkoutPlan?:  {
    __typename: "UserWorkoutPlan",
    id: string,
    userID: string,
    workoutplanID: string,
    user:  {
      __typename: "User",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      EquipmentCategories?:  {
        __typename: "ModelEquipmentCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutPlans?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      email?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    workoutplan:  {
      __typename: "WorkoutPlan",
      id: string,
      ExercisePlans?:  {
        __typename: "ModelExercisePlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserWorkoutPlanSubscription = {
  onDeleteUserWorkoutPlan?:  {
    __typename: "UserWorkoutPlan",
    id: string,
    userID: string,
    workoutplanID: string,
    user:  {
      __typename: "User",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      EquipmentCategories?:  {
        __typename: "ModelEquipmentCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutPlans?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      email?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    workoutplan:  {
      __typename: "WorkoutPlan",
      id: string,
      ExercisePlans?:  {
        __typename: "ModelExercisePlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      WorkoutRecords?:  {
        __typename: "ModelWorkoutRecordConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserWorkoutPlanConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
