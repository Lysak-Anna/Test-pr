import { localStorageSync } from 'ngrx-store-localstorage';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { AppState } from '../models/AppState';
import { Task } from '../models/Task';
import * as tasksActions from './tasks.actions';

export const initialState: AppState = {
  tasks: [],
};

export function tasksReducer(
  state: Task[] = initialState.tasks,
  action: Action
) {
  switch (action.type) {
    case tasksActions.ActionTypes.Add: {
      const newTask: Task = (action as tasksActions.Add).payload;
      return [...state, newTask];
    }
    case tasksActions.ActionTypes.Delete: {
      const id = (action as tasksActions.Delete).payload;
      return state.filter((item: Task) => id !== item.id);
    }
    case tasksActions.ActionTypes.ChangeStatus: {
      const id = (action as tasksActions.ChangeStatus).payload;
      return state.map((task: Task) =>
        task.id === id ? { ...task, status: !task.status } : task
      );
    }
    case tasksActions.ActionTypes.Edit: {
      const newTask: Task = (action as tasksActions.Add).payload;
      return state.map((task: Task) =>
        task.id === newTask.id ? { ...task, title: newTask.title } : task
      );
    }

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  tasks: tasksReducer,
};
const keysToSync: string[] = ['tasks'];

export function localStorageSyncReducer(
  reducer: ActionReducer<any, any>
): ActionReducer<any, any> {
  return localStorageSync({ keys: keysToSync, rehydrate: true })(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [localStorageSyncReducer];
