import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class EquipmentItem {
  readonly id: string;
  readonly name?: string;
  readonly weight?: string;
  readonly equipmentcategoryID?: string;
  readonly color?: string;
  constructor(init: ModelInit<EquipmentItem>);
  static copyOf(source: EquipmentItem, mutator: (draft: MutableModel<EquipmentItem>) => MutableModel<EquipmentItem> | void): EquipmentItem;
}

export declare class User {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly EquipmentCategories?: (EquipmentCategory | null)[];
  readonly WorkoutRecords?: (WorkoutRecord | null)[];
  readonly WorkoutPlans?: (UserWorkoutPlan | null)[];
  readonly email?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class EquipmentCategory {
  readonly id: string;
  readonly name?: string;
  readonly type?: string;
  readonly userID?: string;
  readonly EquipmentItems?: (EquipmentItem | null)[];
  constructor(init: ModelInit<EquipmentCategory>);
  static copyOf(source: EquipmentCategory, mutator: (draft: MutableModel<EquipmentCategory>) => MutableModel<EquipmentCategory> | void): EquipmentCategory;
}

export declare class WorkoutRecord {
  readonly id: string;
  readonly ExerciseRecords?: (ExerciseRecord | null)[];
  readonly workoutplanID?: string;
  readonly userID?: string;
  constructor(init: ModelInit<WorkoutRecord>);
  static copyOf(source: WorkoutRecord, mutator: (draft: MutableModel<WorkoutRecord>) => MutableModel<WorkoutRecord> | void): WorkoutRecord;
}

export declare class ExerciseRecord {
  readonly id: string;
  readonly Sets?: (Set | null)[];
  readonly weight?: number;
  readonly exerciseplanID?: string;
  readonly workoutrecordID?: string;
  constructor(init: ModelInit<ExerciseRecord>);
  static copyOf(source: ExerciseRecord, mutator: (draft: MutableModel<ExerciseRecord>) => MutableModel<ExerciseRecord> | void): ExerciseRecord;
}

export declare class Set {
  readonly id: string;
  readonly reps?: number;
  readonly weight?: number;
  readonly exerciserecordID?: string;
  constructor(init: ModelInit<Set>);
  static copyOf(source: Set, mutator: (draft: MutableModel<Set>) => MutableModel<Set> | void): Set;
}

export declare class UserWorkoutPlan {
  readonly id: string;
  readonly user: User;
  readonly workoutplan: WorkoutPlan;
  constructor(init: ModelInit<UserWorkoutPlan>);
  static copyOf(source: UserWorkoutPlan, mutator: (draft: MutableModel<UserWorkoutPlan>) => MutableModel<UserWorkoutPlan> | void): UserWorkoutPlan;
}

export declare class WorkoutPlan {
  readonly id: string;
  readonly ExercisePlans?: (ExercisePlan | null)[];
  readonly WorkoutRecords?: (WorkoutRecord | null)[];
  readonly users?: (UserWorkoutPlan | null)[];
  constructor(init: ModelInit<WorkoutPlan>);
  static copyOf(source: WorkoutPlan, mutator: (draft: MutableModel<WorkoutPlan>) => MutableModel<WorkoutPlan> | void): WorkoutPlan;
}

export declare class ExercisePlan {
  readonly id: string;
  readonly workoutplanID?: string;
  readonly reps?: number;
  readonly sets?: number;
  readonly EqupmentCategory?: EquipmentCategory;
  readonly ExerciseRecords?: (ExerciseRecord | null)[];
  readonly name?: string;
  constructor(init: ModelInit<ExercisePlan>);
  static copyOf(source: ExercisePlan, mutator: (draft: MutableModel<ExercisePlan>) => MutableModel<ExercisePlan> | void): ExercisePlan;
}