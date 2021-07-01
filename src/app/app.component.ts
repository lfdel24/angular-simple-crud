import { Component } from '@angular/core';
import { Employe } from './models/employe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //
  listEmploye: Employe[] = [
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
  newEmploye: Employe = new Employe();

  search: string = '';

  onKey(value: any): void {
    console.log(value);
  }

  new(): void {
    this.newEmploye = new Employe();
    this.newEmploye.id = this.listEmploye.length + 1;
    this.newEmploye.name = 'Pabcjkdfsdnkjanda';
    this.newEmploye.county = 'andkajnsjkadnak';
    this.listEmploye.push(this.newEmploye);
    console.log(this.listEmploye.length);
  }

  delete(id: number): void {
    this.listEmploye = this.listEmploye.filter((value) => value.id !== id);
  }
  clear(): void {
    this.selectedEmploye = new Employe();
    this.search = '';
  }
}
