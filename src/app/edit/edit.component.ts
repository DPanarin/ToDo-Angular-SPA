import { TaskResolverService } from './../task-resolver.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;
  task;


  constructor(private formBuilder: FormBuilder,
              private taskService: TasksService,
              private route: ActivatedRoute,
              private router: Router) {}


  ngOnInit(): void {
    this.task = this.route.snapshot.data.task;

    this.form = this.formBuilder.group({
      task: [this.task.taskName, [Validators.required, Validators.minLength(3)]],
      estimatedTime: [this.task.estimatedTime, Validators.pattern('^[0-9]+$')],
      description: [this.task.description]
    });

    // setTimeout(() => {
    //   this.task = this.taskService.getTask(this.route.snapshot.paramMap.get('id'));

    //   this.form.get('task').setValue(this.task.taskName);
    // }, 5000);

  }

  onSubmit() {
    this.task.taskName = this.form.value.task;
    this.taskService.editTask(this.task);
    this.router.navigate(['']);
  }
}
