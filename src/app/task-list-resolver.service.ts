import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TasksService } from './tasks.service';

@Injectable({
  providedIn: 'root'
})
export class TaskListResolverService implements Resolve<Task[]> {

  constructor(private taskService: TasksService) { }

  resolve () {
    // console.log(this.taskService.importTasks());
    return this.taskService.importTasks() as Task[];
  }


}
