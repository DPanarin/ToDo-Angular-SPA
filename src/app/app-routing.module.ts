import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TaskResolverService } from './task-resolver.service';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { TaskListResolverService } from './task-list-resolver.service';

const appRoutes: Routes = [
  { path: '',
    component: AddComponent,
    resolve: {
      tasks: TaskListResolverService
    }
  },
  { path: ':id/edit',
    component: EditComponent,
    resolve: {
      task: TaskResolverService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: []
})
export class AppRoutingModule { }
