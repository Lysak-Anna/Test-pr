import { Action } from '@ngrx/store';
import { Task } from '../models/Task';
import { EditTask } from '../models/EditTask';

export enum ActionTypes {
  Add = '[Tasks] Add',
  Delete = '[Tasks] Delete',
  ChangeStatus = '[Tasks] ChangeStatus',
  Edit = '[Tasks] Edit',
}

export class Add implements Action {
  readonly type = ActionTypes.Add;
  constructor(public payload: Task) {}
}

export class Delete implements Action {
  readonly type = ActionTypes.Delete;
  constructor(public payload: string) {}
}

export class ChangeStatus implements Action {
  readonly type = ActionTypes.ChangeStatus;
  constructor(public payload: string) {}
}

export class Edit implements Action {
  readonly type = ActionTypes.Edit;
  constructor(public payload: EditTask) {}
}

export type TasksActions = Add | Delete | ChangeStatus | Edit;
