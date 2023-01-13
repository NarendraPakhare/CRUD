import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [
    StudentlistComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule, HttpClientModule,FormsModule
  ],
  exports:[
    StudentlistComponent,
    StudentDetailsComponent
  ]
})
export class Module1Module { }
