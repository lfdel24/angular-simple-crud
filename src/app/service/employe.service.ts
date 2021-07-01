import { Injectable } from '@angular/core';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  constructor() {}

  private list: Employe[] = [
    {
      id: 1,
      name: 'Leonardo De la cruz',
      county: 'Colombia',
    },
    {
      id: 2,
      name: 'Juana Maria',
      county: 'Venezuela',
    },
    {
      id: 3,
      name: 'Oscar Barajas',
      county: 'Mex',
    },
  ];

  selectedEmploye: Employe = new Employe();
  isNewEmploye: boolean = false;
  search: string = '';

  changueIsNewEmploye() {
    this.isNewEmploye = !this.isNewEmploye;
  }

  getEmployes(): Employe[] {
    return this.list;
  }

  getLength(): number {
    return this.list.length;
  }

  add(employe: Employe) {
    this.list.push(employe);
  }

  delete(id: number) {
    this.list = this.list.filter((value) => value.id !== id);
  }
}
