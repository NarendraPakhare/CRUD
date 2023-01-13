import { Component } from '@angular/core';
import { Employee } from 'src/app/employee';
import { CommonserviceService } from 'src/app/shared/commonservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent 
{
  constructor(private sc:CommonserviceService){}
  emp:Employee[]

  ngOnInit()
  {
    this.sc.getEmp().subscribe((empdata:Employee[])=>this.emp=empdata)
  }

}
