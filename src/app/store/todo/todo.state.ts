export enum FilterState {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  todos: Record<string, Todo>;
  filter: { state?: FilterState };
  error: string;
  loading: boolean;
}

export const initialState: TodosState = {
  todos: {},
  filter: { state: FilterState.All },
  error: '',
  loading: false,
};
