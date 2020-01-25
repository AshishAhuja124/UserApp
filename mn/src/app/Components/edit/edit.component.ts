import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { Employee } from '../../employee';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private empService:EmpService,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.getEmployees();
  }
model=new Employee;
id = this.route.snapshot.params['id'];

getEmployees(){
this.empService.getEmployees()
.subscribe(model=>
this.model=model);
}


updateEmployee(){
  this.empService.updateEmployee(this.id,this.model)
  .subscribe(() => this.goBack())
  console.log('updated')

}
goBack() {
  this.router.navigate(['/details'])
}
}
