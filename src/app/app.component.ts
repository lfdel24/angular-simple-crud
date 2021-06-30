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
      id: 1,
      name: 'Juana Maria',
      county: 'Venezuela',
    },
    {
      id: 1,
      name: 'Oscar Barajas',
      county: 'Mex',
    },
  ];
  selectedEmploye: Employe = new Employe();

  search = '';
}
