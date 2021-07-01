import { Component, OnInit } from '@angular/core';
import { Employe } from '../models/employe';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-save-or-edit',
  templateUrl: './save-or-edit.component.html',
  styleUrls: ['./save-or-edit.component.css'],
})
export class SaveOrEditComponent implements OnInit {
  constructor(private service: EmployeService) {}

  ngOnInit(): void {}

  getSelectedEmploye(): Employe {
    return this.service.selectedEmploye;
  }

  getIsNewEmploye(): boolean {
    return this.service.isNewEmploye;
  }

  saveOREdit(): void {
    this.service.selectedEmploye.id = this.service.getLength() + 1;
    this.service.add(this.getSelectedEmploye());
    this.service.selectedEmploye = new Employe();
  }

  clear(): void {
    this.service.selectedEmploye = new Employe();
    this.service.search = '';
    this.service.isNewEmploye = false;
  }

  cancel(): void {
    this.service.isNewEmploye = false;
    this.service.selectedEmploye = new Employe();
  }
}
