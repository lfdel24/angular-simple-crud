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
  search: string = '';
  isVisible: boolean = false;
  focusSearch: boolean = true;
  focusName: boolean = false;

  onKey(value: any): void {
    console.log(value);
  }

  new(): void {
    this.isVisible = !this.isVisible;
    this.focusSearch = false;
    this.focusName = true;
  }

  saveOREdit(): void {
    this.selectedEmploye.id = this.listEmploye.length + 1;
    this.listEmploye.push(this.selectedEmploye);
    this.selectedEmploye = new Employe();
    console.log(this.listEmploye.length);
  }

  delete(id: number): void {
    this.listEmploye = this.listEmploye.filter((value) => value.id !== id);
  }
  clear(): void {
    this.selectedEmploye = new Employe();
    this.search = '';
    this.isVisible = false;
    this.focusSearch = true;
    this.focusName = false;
  }

  cancel(): void {
    this.isVisible = false;
    this.focusSearch = true;
    this.focusName = false;
  }
}
