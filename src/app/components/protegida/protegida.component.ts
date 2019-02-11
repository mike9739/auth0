import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  constructor(private _AuthService :AuthService) { }
  profile: any;
  ngOnInit() {
    if (this._AuthService.userProfile) {

      this.profile = this._AuthService.userProfile;
      console.log(this.profile)
    }
    else{
      this._AuthService.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile)
      });
    }
    console.table(this.profile)
  }

}
