import { Component, OnInit } from '@angular/core';
import { Employe } from '../models/employe';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  constructor(private service: EmployeService) {}

  ngOnInit(): void {}

  getList(): Employe[] {
    return this.service.getEmployes();
  }
  delete(id: number): void {
    this.service.delete(id);
    this.getList();
  }
}
