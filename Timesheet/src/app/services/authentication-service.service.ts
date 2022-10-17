import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../model/dto/LoginModel';
import { ImpiegatoLogged } from '../model/ImpiegatoLogged';
import { AUTH_PATH, USER_KEY } from '../Util/Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http:HttpClient) { 
  }

  public Login(logindto:LoginModel){
    return this.http.post(AUTH_PATH+'login',logindto);
  }

  public SaveImpiegato(imp:ImpiegatoLogged){
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(imp))
    
  }

  public GetImpiegatoLogged():ImpiegatoLogged{
    let user=window.sessionStorage.getItem(USER_KEY);
    if(user){
      let f=JSON.parse(user);
      return new ImpiegatoLogged(f.codice_fiscale,f.name,f.token,f.role);
    }
    return new ImpiegatoLogged('','','','');
  }


}
