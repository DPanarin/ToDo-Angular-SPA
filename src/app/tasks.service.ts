import { FormGroup } from '@angular/forms';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private storageService: StorageService) {

  }


  createTask(form: FormGroup) {
    const task: Task = {
      taskId: Math.floor(Math.random() * 1000).toString(),
      taskName: form.value.task,
      isComplete: false,
      estimatedTime: form.value.estimatedTime,
      description: form.value.description.length ? form.value.description : 'empty description',
    };

    this.addTaskToStorage(task);
  }

  importTasks() {
    return this.storageService.getStorageContent();
  }

  deleteTask(task: Task) {
    const tasks: Task[] = this.storageService.getStorageContent();
    const index = tasks.findIndex(taskFromArray => taskFromArray.taskId === task.taskId);

    tasks.splice(index, 1);

    this.storageService.setStorageContent(tasks);
  }

  editTask(task: Task) {
    const tasks: Task[] = this.storageService.getStorageContent();
    const index = tasks.findIndex(taskFromArray => taskFromArray.taskId === task.taskId);

    tasks[index] = task;

    this.storageService.setStorageContent(tasks);
  }

  getTask(taskId: string): Task {
    const tasks: Task[] = this.storageService.getStorageContent();
    const index = tasks.findIndex(taskFromArray => taskFromArray.taskId === taskId);
    return tasks[index];
  }

  deleteAllTasks() {
    this.storageService.clearStorage();
  }

  changeTaskStatus(task: Task, isComplete: boolean) {
    const tasks: Task[] = this.storageService.getStorageContent();
    const index = this.getTaskIndex(task, tasks);

    tasks[index].isComplete = isComplete;

    this.storageService.setStorageContent(tasks);
  }

  private addTaskToStorage(task: Task) {
    let tempArray: Task[] = [];

    if (this.storageService.isEmpty()) {
      tempArray.push(task);
      this.storageService.setStorageContent(tempArray);

      return;
    }

    tempArray = this.storageService.getStorageContent();

    tempArray.push(task);

    this.storageService.setStorageContent(tempArray);

  }

  private getTaskIndex(task: Task, tasks: Task[]): number {
    return tasks.findIndex(taskFromArray => taskFromArray.taskId === task.taskId);
  }

}
