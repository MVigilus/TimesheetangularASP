import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  msg!:String;

  constructor(private authservice:AuthenticationService) { }

  ngOnInit(): void {
    this.msg=this.authservice.GetImpiegatoLogged().Print();
  }

}
