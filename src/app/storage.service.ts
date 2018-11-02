import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageName = 'data';

  constructor() { }

  getStorageContent<T>(): T[] {
    if (localStorage.getItem(this.storageName) !== null) {
      return JSON.parse(localStorage.getItem(this.storageName));
    }

    return [];
  }

  setStorageContent<T>(tasks: T[]) {
    localStorage.setItem(this.storageName, JSON.stringify(tasks));
  }

  clearStorage() {
    localStorage.removeItem(this.storageName);
  }

  isEmpty():  boolean {
    return localStorage.getItem(this.storageName) === null;
  }
}
