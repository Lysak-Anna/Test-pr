import { Component } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { Store } from '@ngrx/store';
import { ChangeStatus, Delete } from 'src/app/store/tasks.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  tasksArray: Task[];
  taskId: string;
  taskContent: string;
  isModalOpen: boolean = false;

  constructor(private store: Store<{ tasks: Task[] }>) {
    this.store.select('tasks').subscribe((tasks: Task[]) => {
      this.tasksArray = tasks;
    });
  }

  openModal(id: string, content: string) {
    this.taskId = id;
    this.isModalOpen = true;
    this.taskContent = content;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onDelete(id: string) {
    this.store.dispatch(new Delete(id));
  }
  onCheck(id: string) {
    this.store.dispatch(new ChangeStatus(id));
  }
}
