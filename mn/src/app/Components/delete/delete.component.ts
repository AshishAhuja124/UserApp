import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  alertMe(val){
    alert(val);

  }

  constructor(private empService:EmpService) { }

  ngOnInit() {
    this.getEmployees();
  }
model:Employee;
getEmployees(){
  this.empService.getEmployees()
  .subscribe(model=>{
    this.model=model;
  })
}
deleteEmployee(id){
  this.empService.deleteEmployee(id)
    .subscribe(()=>{
      this.getEmployees();
    });
  }
}
