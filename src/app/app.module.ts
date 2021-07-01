import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { EmployeService } from './service/employe.service';

@NgModule({
  declarations: [AppComponent, ListarComponent],
  imports: [BrowserModule, FormsModule],
  providers: [EmployeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
