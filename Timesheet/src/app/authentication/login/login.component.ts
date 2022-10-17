import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImpiegatoLogged } from 'src/app/model/ImpiegatoLogged';
import { AuthenticationService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  msg!:String;

  constructor(private fb:FormBuilder,private authservice:AuthenticationService,private snackBar:MatSnackBar) { 
    this.LoginForm=this.fb.group({
      username:[''],
      password:['']
    })
  }

  ngOnInit(): void {
  } 

  agg(){
    this.msg=this.authservice.GetImpiegatoLogged().Print();
  }


  Login():void{
    this.authservice.Login(this.LoginForm.value).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="error"){
          this.snackBar.open('Errore Nessun Impiegato presente con queste credenziali', 'Chiudi', {
            duration: 5 * 1000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
        }else{
          this.snackBar.open('Accesso Effettuato', 'Chiudi', {
            duration: 5 * 1000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });

          console.log(new ImpiegatoLogged(response.data.codice_fiscale,response.data.name,response.data.token,response.data.role))
          this.authservice.SaveImpiegato(new ImpiegatoLogged(response.data.codice_fiscale,response.data.name,response.data.token,response.data.role))

          console.log(this.authservice.GetImpiegatoLogged().Print())
        }
      }
    )
  }

}
