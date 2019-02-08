import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private _Router:Router, private _AuthService:AuthService) {


   }
   canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot){
     if(this._AuthService.isAuthenticated()){
       console.log("paso el guard")
       return true
     }
     console.log('No paso el guard')
     return false
   }
}
