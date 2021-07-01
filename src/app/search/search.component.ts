import { Component, OnInit } from '@angular/core';
import { Employe } from '../models/employe';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private service: EmployeService) {}

  ngOnInit(): void {}

  search: string = this.service.search;

  getIsNewEmploye(): boolean {
    return this.service.isNewEmploye;
  }

  changueIsNewEmploye(): void {
    this.service.changueIsNewEmploye();
  }

  onKey(value: any): void {
    console.log(value);
  }

  clear(): void {
    this.service.selectedEmploye = new Employe();
    this.service.search = '';
    this.service.isNewEmploye = false;
  }
}
