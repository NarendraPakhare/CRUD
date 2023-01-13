import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/shared/commonservice.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  constructor(private cs:CommonserviceService)
  {
    
  }
  st:Student[]
  ngOnInit()
  {
    this.cs.get().subscribe((stdata:Student[])=>{this.st=stdata})
  }

  editData(s:Student)
  {
    this.cs.ss=Object.assign({},s);
  }
  
  deleteData(id:number)
  {
    
    this.cs.delete(id).subscribe();
    window.location.reload();
  }
}
