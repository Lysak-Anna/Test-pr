import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Task } from 'src/app/models/Task';
import { Add } from 'src/app/store/tasks.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private store: Store<{ tasks: Task[] }>) {}

  onSubmit(form: NgForm) {
    const newTask: Task = {
      id: Date.now().toString(),
      title: form.controls['todo'].value,
      status: false,
    };

    this.store.dispatch(new Add(newTask));
    form.reset();
  }
}
