import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class DetailsGuardService implements CanActivate{
    
    constructor(private _router:Router){

    }
    
    canActivate(route:ActivatedRouteSnapshot):boolean{
          let id=+route.url[1].path;
          if(isNaN(id)||id<=0)
          {

            
              alert("Invalid Employee");
              this._router.navigate(['/employee']);
              return false;
          }
          return true;
      }
}