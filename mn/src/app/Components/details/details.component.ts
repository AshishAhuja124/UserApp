import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../services/emp.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Employee} from '../../employee';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    public EmpService: EmpService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getEmployee();
  }

  employee: Employee;
  getEmployee() {
    var id = this.route.snapshot.params['id'];
    this.EmpService.getEmployee(id)
      .subscribe((employee: any) => {
        this.employee = employee;
      })
  }
}
