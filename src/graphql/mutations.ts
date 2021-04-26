/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEquipmentItem = /* GraphQL */ `
  mutation CreateEquipmentItem(
    $input: CreateEquipmentItemInput!
    $condition: ModelEquipmentItemConditionInput
  ) {
    createEquipmentItem(input: $input, condition: $condition) {
      id
      name
      weight
      equipmentcategoryID
      color
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateEquipmentItem = /* GraphQL */ `
  mutation UpdateEquipmentItem(
    $input: UpdateEquipmentItemInput!
    $condition: ModelEquipmentItemConditionInput
  ) {
    updateEquipmentItem(input: $input, condition: $condition) {
      id
      name
      weight
      equipmentcategoryID
      color
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteEquipmentItem = /* GraphQL */ `
  mutation DeleteEquipmentItem(
    $input: DeleteEquipmentItemInput!
    $condition: ModelEquipmentItemConditionInput
  ) {
    deleteEquipmentItem(input: $input, condition: $condition) {
      id
      name
      weight
      equipmentcategoryID
      color
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      first_name
      last_name
      EquipmentCategories {
        items {
          id
          name
          type
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      WorkoutRecords {
        items {
          id
          workoutplanID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      WorkoutPlans {
        items {
          id
          userID
          workoutplanID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      first_name
      last_name
      EquipmentCategories {
        items {
          id
          name
          type
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      WorkoutRecords {
        items {
          id
          workoutplanID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      WorkoutPlans {
        items {
          id
          userID
          workoutplanID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      first_name
      last_name
      EquipmentCategories {
        items {
          id
          name
          type
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      WorkoutRecords {
        items {
          id
          workoutplanID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      WorkoutPlans {
        items {
          id
          userID
          workoutplanID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSet = /* GraphQL */ `
  mutation CreateSet(
    $input: CreateSetInput!
    $condition: ModelSetConditionInput
  ) {
    createSet(input: $input, condition: $condition) {
      id
      reps
      weight
      exerciserecordID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSet = /* GraphQL */ `
  mutation UpdateSet(
    $input: UpdateSetInput!
    $condition: ModelSetConditionInput
  ) {
    updateSet(input: $input, condition: $condition) {
      id
      reps
      weight
      exerciserecordID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSet = /* GraphQL */ `
  mutation DeleteSet(
    $input: DeleteSetInput!
    $condition: ModelSetConditionInput
  ) {
    deleteSet(input: $input, condition: $condition) {
      id
      reps
      weight
      exerciserecordID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createEquipmentCategory = /* GraphQL */ `
  mutation CreateEquipmentCategory(
    $input: CreateEquipmentCategoryInput!
    $condition: ModelEquipmentCategoryConditionInput
  ) {
    createEquipmentCategory(input: $input, condition: $condition) {
      id
      name
      type
      userID
      EquipmentItems {
        items {
          id
          name
          weight
          equipmentcategoryID
          color
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateEquipmentCategory = /* GraphQL */ `
  mutation UpdateEquipmentCategory(
    $input: UpdateEquipmentCategoryInput!
    $condition: ModelEquipmentCategoryConditionInput
  ) {
    updateEquipmentCategory(input: $input, condition: $condition) {
      id
      name
      type
      userID
      EquipmentItems {
        items {
          id
          name
          weight
          equipmentcategoryID
          color
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteEquipmentCategory = /* GraphQL */ `
  mutation DeleteEquipmentCategory(
    $input: DeleteEquipmentCategoryInput!
    $condition: ModelEquipmentCategoryConditionInput
  ) {
    deleteEquipmentCategory(input: $input, condition: $condition) {
      id
      name
      type
      userID
      EquipmentItems {
        items {
          id
          name
          weight
          equipmentcategoryID
          color
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createWorkoutRecord = /* GraphQL */ `
  mutation CreateWorkoutRecord(
    $input: CreateWorkoutRecordInput!
    $condition: ModelWorkoutRecordConditionInput
  ) {
    createWorkoutRecord(input: $input, condition: $condition) {
      id
      ExerciseRecords {
        items {
          id
          weight
          exerciseplanID
          workoutrecordID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      workoutplanID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkoutRecord = /* GraphQL */ `
  mutation UpdateWorkoutRecord(
    $input: UpdateWorkoutRecordInput!
    $condition: ModelWorkoutRecordConditionInput
  ) {
    updateWorkoutRecord(input: $input, condition: $condition) {
      id
      ExerciseRecords {
        items {
          id
          weight
          exerciseplanID
          workoutrecordID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      workoutplanID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkoutRecord = /* GraphQL */ `
  mutation DeleteWorkoutRecord(
    $input: DeleteWorkoutRecordInput!
    $condition: ModelWorkoutRecordConditionInput
  ) {
    deleteWorkoutRecord(input: $input, condition: $condition) {
      id
      ExerciseRecords {
        items {
          id
          weight
          exerciseplanID
          workoutrecordID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      workoutplanID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createWorkoutPlan = /* GraphQL */ `
  mutation CreateWorkoutPlan(
    $input: CreateWorkoutPlanInput!
    $condition: ModelWorkoutPlanConditionInput
  ) {
    createWorkoutPlan(input: $input, condition: $condition) {
      id
      ExercisePlans {
        items {
          id
          workoutplanID
          reps
          sets
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      WorkoutRecords {
        items {
          id
          workoutplanID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userID
          workoutplanID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkoutPlan = /* GraphQL */ `
  mutation UpdateWorkoutPlan(
    $input: UpdateWorkoutPlanInput!
    $condition: ModelWorkoutPlanConditionInput
  ) {
    updateWorkoutPlan(input: $input, condition: $condition) {
      id
      ExercisePlans {
        items {
          id
          workoutplanID
          reps
          sets
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      WorkoutRecords {
        items {
          id
          workoutplanID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userID
          workoutplanID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkoutPlan = /* GraphQL */ `
  mutation DeleteWorkoutPlan(
    $input: DeleteWorkoutPlanInput!
    $condition: ModelWorkoutPlanConditionInput
  ) {
    deleteWorkoutPlan(input: $input, condition: $condition) {
      id
      ExercisePlans {
        items {
          id
          workoutplanID
          reps
          sets
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      WorkoutRecords {
        items {
          id
          workoutplanID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userID
          workoutplanID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createExerciseRecord = /* GraphQL */ `
  mutation CreateExerciseRecord(
    $input: CreateExerciseRecordInput!
    $condition: ModelExerciseRecordConditionInput
  ) {
    createExerciseRecord(input: $input, condition: $condition) {
      id
      Sets {
        items {
          id
          reps
          weight
          exerciserecordID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      weight
      exerciseplanID
      workoutrecordID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateExerciseRecord = /* GraphQL */ `
  mutation UpdateExerciseRecord(
    $input: UpdateExerciseRecordInput!
    $condition: ModelExerciseRecordConditionInput
  ) {
    updateExerciseRecord(input: $input, condition: $condition) {
      id
      Sets {
        items {
          id
          reps
          weight
          exerciserecordID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      weight
      exerciseplanID
      workoutrecordID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteExerciseRecord = /* GraphQL */ `
  mutation DeleteExerciseRecord(
    $input: DeleteExerciseRecordInput!
    $condition: ModelExerciseRecordConditionInput
  ) {
    deleteExerciseRecord(input: $input, condition: $condition) {
      id
      Sets {
        items {
          id
          reps
          weight
          exerciserecordID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      weight
      exerciseplanID
      workoutrecordID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createExercisePlan = /* GraphQL */ `
  mutation CreateExercisePlan(
    $input: CreateExercisePlanInput!
    $condition: ModelExercisePlanConditionInput
  ) {
    createExercisePlan(input: $input, condition: $condition) {
      id
      workoutplanID
      reps
      sets
      EqupmentCategory {
        id
        name
        type
        userID
        EquipmentItems {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      ExerciseRecords {
        items {
          id
          weight
          exerciseplanID
          workoutrecordID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateExercisePlan = /* GraphQL */ `
  mutation UpdateExercisePlan(
    $input: UpdateExercisePlanInput!
    $condition: ModelExercisePlanConditionInput
  ) {
    updateExercisePlan(input: $input, condition: $condition) {
      id
      workoutplanID
      reps
      sets
      EqupmentCategory {
        id
        name
        type
        userID
        EquipmentItems {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      ExerciseRecords {
        items {
          id
          weight
          exerciseplanID
          workoutrecordID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteExercisePlan = /* GraphQL */ `
  mutation DeleteExercisePlan(
    $input: DeleteExercisePlanInput!
    $condition: ModelExercisePlanConditionInput
  ) {
    deleteExercisePlan(input: $input, condition: $condition) {
      id
      workoutplanID
      reps
      sets
      EqupmentCategory {
        id
        name
        type
        userID
        EquipmentItems {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      ExerciseRecords {
        items {
          id
          weight
          exerciseplanID
          workoutrecordID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUserWorkoutPlan = /* GraphQL */ `
  mutation CreateUserWorkoutPlan(
    $input: CreateUserWorkoutPlanInput!
    $condition: ModelUserWorkoutPlanConditionInput
  ) {
    createUserWorkoutPlan(input: $input, condition: $condition) {
      id
      userID
      workoutplanID
      user {
        id
        first_name
        last_name
        EquipmentCategories {
          nextToken
          startedAt
        }
        WorkoutRecords {
          nextToken
          startedAt
        }
        WorkoutPlans {
          nextToken
          startedAt
        }
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      workoutplan {
        id
        ExercisePlans {
          nextToken
          startedAt
        }
        WorkoutRecords {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUserWorkoutPlan = /* GraphQL */ `
  mutation UpdateUserWorkoutPlan(
    $input: UpdateUserWorkoutPlanInput!
    $condition: ModelUserWorkoutPlanConditionInput
  ) {
    updateUserWorkoutPlan(input: $input, condition: $condition) {
      id
      userID
      workoutplanID
      user {
        id
        first_name
        last_name
        EquipmentCategories {
          nextToken
          startedAt
        }
        WorkoutRecords {
          nextToken
          startedAt
        }
        WorkoutPlans {
          nextToken
          startedAt
        }
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      workoutplan {
        id
        ExercisePlans {
          nextToken
          startedAt
        }
        WorkoutRecords {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserWorkoutPlan = /* GraphQL */ `
  mutation DeleteUserWorkoutPlan(
    $input: DeleteUserWorkoutPlanInput!
    $condition: ModelUserWorkoutPlanConditionInput
  ) {
    deleteUserWorkoutPlan(input: $input, condition: $condition) {
      id
      userID
      workoutplanID
      user {
        id
        first_name
        last_name
        EquipmentCategories {
          nextToken
          startedAt
        }
        WorkoutRecords {
          nextToken
          startedAt
        }
        WorkoutPlans {
          nextToken
          startedAt
        }
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      workoutplan {
        id
        ExercisePlans {
          nextToken
          startedAt
        }
        WorkoutRecords {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
