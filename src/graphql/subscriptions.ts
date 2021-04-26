/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEquipmentItem = /* GraphQL */ `
  subscription OnCreateEquipmentItem {
    onCreateEquipmentItem {
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
export const onUpdateEquipmentItem = /* GraphQL */ `
  subscription OnUpdateEquipmentItem {
    onUpdateEquipmentItem {
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
export const onDeleteEquipmentItem = /* GraphQL */ `
  subscription OnDeleteEquipmentItem {
    onDeleteEquipmentItem {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateSet = /* GraphQL */ `
  subscription OnCreateSet {
    onCreateSet {
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
export const onUpdateSet = /* GraphQL */ `
  subscription OnUpdateSet {
    onUpdateSet {
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
export const onDeleteSet = /* GraphQL */ `
  subscription OnDeleteSet {
    onDeleteSet {
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
export const onCreateEquipmentCategory = /* GraphQL */ `
  subscription OnCreateEquipmentCategory {
    onCreateEquipmentCategory {
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
export const onUpdateEquipmentCategory = /* GraphQL */ `
  subscription OnUpdateEquipmentCategory {
    onUpdateEquipmentCategory {
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
export const onDeleteEquipmentCategory = /* GraphQL */ `
  subscription OnDeleteEquipmentCategory {
    onDeleteEquipmentCategory {
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
export const onCreateWorkoutRecord = /* GraphQL */ `
  subscription OnCreateWorkoutRecord {
    onCreateWorkoutRecord {
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
export const onUpdateWorkoutRecord = /* GraphQL */ `
  subscription OnUpdateWorkoutRecord {
    onUpdateWorkoutRecord {
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
export const onDeleteWorkoutRecord = /* GraphQL */ `
  subscription OnDeleteWorkoutRecord {
    onDeleteWorkoutRecord {
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
export const onCreateWorkoutPlan = /* GraphQL */ `
  subscription OnCreateWorkoutPlan {
    onCreateWorkoutPlan {
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
export const onUpdateWorkoutPlan = /* GraphQL */ `
  subscription OnUpdateWorkoutPlan {
    onUpdateWorkoutPlan {
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
export const onDeleteWorkoutPlan = /* GraphQL */ `
  subscription OnDeleteWorkoutPlan {
    onDeleteWorkoutPlan {
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
export const onCreateExerciseRecord = /* GraphQL */ `
  subscription OnCreateExerciseRecord {
    onCreateExerciseRecord {
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
export const onUpdateExerciseRecord = /* GraphQL */ `
  subscription OnUpdateExerciseRecord {
    onUpdateExerciseRecord {
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
export const onDeleteExerciseRecord = /* GraphQL */ `
  subscription OnDeleteExerciseRecord {
    onDeleteExerciseRecord {
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
export const onCreateExercisePlan = /* GraphQL */ `
  subscription OnCreateExercisePlan {
    onCreateExercisePlan {
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
export const onUpdateExercisePlan = /* GraphQL */ `
  subscription OnUpdateExercisePlan {
    onUpdateExercisePlan {
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
export const onDeleteExercisePlan = /* GraphQL */ `
  subscription OnDeleteExercisePlan {
    onDeleteExercisePlan {
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
export const onCreateUserWorkoutPlan = /* GraphQL */ `
  subscription OnCreateUserWorkoutPlan {
    onCreateUserWorkoutPlan {
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
export const onUpdateUserWorkoutPlan = /* GraphQL */ `
  subscription OnUpdateUserWorkoutPlan {
    onUpdateUserWorkoutPlan {
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
export const onDeleteUserWorkoutPlan = /* GraphQL */ `
  subscription OnDeleteUserWorkoutPlan {
    onDeleteUserWorkoutPlan {
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
