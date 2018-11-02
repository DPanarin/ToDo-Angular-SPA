import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, RequiredValidator } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { ActivatedRoute } from '@angular/router';
import { CustomFieldValidator } from '../CustomFieldValidator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  form: FormGroup;
  tasks = [];

  get completedTasks(): number {
    return this.tasks.filter(task => task.isComplete).length;
  }

  get totalTasks(): number {
    return this.tasks.length;
  }


  constructor(formBuilder: FormBuilder, private taskService: TasksService, private route: ActivatedRoute) {
    this.form = formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(3)]],
      estimatedTime: ['', CustomFieldValidator.numberFieldValidator],
      description: ['']
    });

  }

  ngOnInit(): void {
    this.tasks = this.route.snapshot.data.tasks;
  }

  onSubmit() {
    this.taskService.createTask(this.form);
    this.tasks = this.taskService.importTasks();
    this.form.reset();
    this.form.controls['description'].setValue('');
    this.form.setErrors(null);
  }

  deleteTask(task) {
    this.taskService.deleteTask(task);
    this.tasks = this.taskService.importTasks();
  }

  deleteAllTasks() {
    this.taskService.deleteAllTasks();
    this.tasks = this.taskService.importTasks();
  }

  changeTaskStatus(task: Task, isComplete: boolean) {
    this.taskService.changeTaskStatus(task, isComplete);
    this.tasks = this.taskService.importTasks();
  }

}
