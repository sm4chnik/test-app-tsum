import { Injectable } from '@angular/core';

export interface IData {
  fio: string;
  gender: string;
  birthday: Date;
  email: string;
  comment: string;
  status: string;
  childrenCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class TsumService {

  private data: IData = {
    fio: null,
    gender: null,
    birthday: null,
    email: null,
    comment: null,
    status: null,
    childrenCount: null
  };

  constructor() { }

  set(field, value) {
    this.data[field] = value;
  }

  get(field) {
    return this.data[field];
  }

  getAll() {
    return this.data;
  }

  isChild() {
    const {birthday} = this.data
    const oldDate = new Date();
    oldDate.setFullYear(oldDate.getFullYear() - 18);
    if (birthday === null || oldDate <= birthday){
      return true;
    }
    return false;
  }
}
