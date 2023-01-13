import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/shared/commonservice.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  constructor(public cs:CommonserviceService){}
  

  saveData(s:Student)
  {
    if(s.id==0)
    {
      this.cs.save(s).subscribe();
      
    }
    else
    {
      this.cs.update(s).subscribe();
      
    }
    window.location.reload();
  }
  reset()
  {
    this.cs.ss=Object.assign({},null);
  }
}
