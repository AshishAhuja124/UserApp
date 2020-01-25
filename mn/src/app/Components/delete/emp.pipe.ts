import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emp'
})
export class EmpPipe implements PipeTransform {

  transform(employees: any, search: any): any {
    if(search===undefined) return employees;
      return employees.filter(function(employee){
      return employee.name.toLowerCase().indexOf(search.toLowerCase())>-1;
      })


  }
}