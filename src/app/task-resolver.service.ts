import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TasksService } from './tasks.service';


@Injectable({
  providedIn: 'root'
})
export class TaskResolverService implements Resolve<Task> {

  constructor(private taskService: TasksService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.taskService.getTask(route.paramMap.get('id'));
  }
}
