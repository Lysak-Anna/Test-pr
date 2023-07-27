import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { EditTask } from 'src/app/models/EditTask';
import { Task } from 'src/app/models/Task';
import { Edit } from 'src/app/store/tasks.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
})
export class ModalEditComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() taskId: string;
  @Input() taskContent: string;

  tasksArray: Task[];

  constructor(private store: Store<{ tasks: Task[] }>) {
    this.store.select('tasks').subscribe((tasks: Task[]) => {
      this.tasksArray = tasks;
    });
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  onEdit(id:string, title:string) {
	const taskEdit: EditTask = {id, title}
    this.store.dispatch(new Edit(taskEdit));
    this.closeModal();
  }
}
