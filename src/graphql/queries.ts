/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncEquipmentItems = /* GraphQL */ `
  query SyncEquipmentItems(
    $filter: ModelEquipmentItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipmentItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getEquipmentItem = /* GraphQL */ `
  query GetEquipmentItem($id: ID!) {
    getEquipmentItem(id: $id) {
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
export const listEquipmentItems = /* GraphQL */ `
  query ListEquipmentItems(
    $filter: ModelEquipmentItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipmentItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSets = /* GraphQL */ `
  query SyncSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getSet = /* GraphQL */ `
  query GetSet($id: ID!) {
    getSet(id: $id) {
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
export const listSets = /* GraphQL */ `
  query ListSets(
    $filter: ModelSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncEquipmentCategories = /* GraphQL */ `
  query SyncEquipmentCategories(
    $filter: ModelEquipmentCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipmentCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEquipmentCategory = /* GraphQL */ `
  query GetEquipmentCategory($id: ID!) {
    getEquipmentCategory(id: $id) {
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
export const listEquipmentCategorys = /* GraphQL */ `
  query ListEquipmentCategorys(
    $filter: ModelEquipmentCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipmentCategorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkoutRecords = /* GraphQL */ `
  query SyncWorkoutRecords(
    $filter: ModelWorkoutRecordFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkoutRecords(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ExerciseRecords {
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
      nextToken
      startedAt
    }
  }
`;
export const getWorkoutRecord = /* GraphQL */ `
  query GetWorkoutRecord($id: ID!) {
    getWorkoutRecord(id: $id) {
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
export const listWorkoutRecords = /* GraphQL */ `
  query ListWorkoutRecords(
    $filter: ModelWorkoutRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ExerciseRecords {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkoutPlans = /* GraphQL */ `
  query SyncWorkoutPlans(
    $filter: ModelWorkoutPlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkoutPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWorkoutPlan = /* GraphQL */ `
  query GetWorkoutPlan($id: ID!) {
    getWorkoutPlan(id: $id) {
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
export const listWorkoutPlans = /* GraphQL */ `
  query ListWorkoutPlans(
    $filter: ModelWorkoutPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncExerciseRecords = /* GraphQL */ `
  query SyncExerciseRecords(
    $filter: ModelExerciseRecordFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExerciseRecords(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Sets {
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
      nextToken
      startedAt
    }
  }
`;
export const getExerciseRecord = /* GraphQL */ `
  query GetExerciseRecord($id: ID!) {
    getExerciseRecord(id: $id) {
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
export const listExerciseRecords = /* GraphQL */ `
  query ListExerciseRecords(
    $filter: ModelExerciseRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Sets {
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
      nextToken
      startedAt
    }
  }
`;
export const syncExercisePlans = /* GraphQL */ `
  query SyncExercisePlans(
    $filter: ModelExercisePlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExercisePlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        workoutplanID
        reps
        sets
        EqupmentCategory {
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
        ExerciseRecords {
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
      nextToken
      startedAt
    }
  }
`;
export const getExercisePlan = /* GraphQL */ `
  query GetExercisePlan($id: ID!) {
    getExercisePlan(id: $id) {
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
export const listExercisePlans = /* GraphQL */ `
  query ListExercisePlans(
    $filter: ModelExercisePlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercisePlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        workoutplanID
        reps
        sets
        EqupmentCategory {
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
        ExerciseRecords {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserWorkoutPlans = /* GraphQL */ `
  query SyncUserWorkoutPlans(
    $filter: ModelUserWorkoutPlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserWorkoutPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        workoutplanID
        user {
          id
          first_name
          last_name
          email
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        workoutplan {
          id
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
      nextToken
      startedAt
    }
  }
`;
