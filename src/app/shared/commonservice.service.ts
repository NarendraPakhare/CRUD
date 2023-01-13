import { HttpClient, HttpClientModule } from '@angular/common/http';
import { splitNsName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient) { }
  ss:Student={
    sid: 0,
    sname: '',
    saddr: '',
    id: 0
  }
  get()
  {
    return this.http.get<Student[]>("http://localhost:3000/Student")
  }

  getEmp()
  {
    return this.http.get<Employee[]>("http://localhost:3000/Employee")
  }

  save(s:Student)
  {
    return this.http.post<Student>("http://localhost:3000/Student",s)

  }
  
  update(s:Student)
  {
    return this.http.put<Student>("http://localhost:3000/Student",s)
  }

  delete(id:number)
  {
    
    return this.http.delete<Student>("http://localhost:3000/Student"+"/"+id)
  }
}
