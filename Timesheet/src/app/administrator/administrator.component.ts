import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  msg!:String;

  constructor(private authservice:AuthenticationService) { }

  ngOnInit(): void {
    this.msg=this.authservice.GetImpiegatoLogged().Print();
  }

}
