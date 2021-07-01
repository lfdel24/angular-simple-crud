import { Component } from '@angular/core';
import { Employe } from './models/employe';
import { EmployeService } from './service/employe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: EmployeService) {}

  selectedEmploye: Employe = new Employe();
  search: string = '';
  isNewEmploye: boolean = false;

  onKey(value: any): void {
    console.log(value);
  }

  newEmploye(): void {
    this.isNewEmploye = !this.isNewEmploye;
  }

  saveOREdit(): void {
    this.selectedEmploye.id = this.service.getLength() + 1;
    this.service.add(this.selectedEmploye);
    this.selectedEmploye = new Employe();
  }

  clear(): void {
    this.selectedEmploye = new Employe();
    this.search = '';
    this.isNewEmploye = false;
  }

  cancel(): void {
    this.isNewEmploye = false;
  }
}
