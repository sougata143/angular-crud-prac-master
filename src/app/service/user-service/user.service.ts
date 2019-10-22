import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../model/user.model';
import { FormGroup,  FormBuilder,  Validators, ReactiveFormsModule  } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = 'https://localhost:2080/user'

  public getUsers(){
    return this
            .http
            .get<User[]>(this.userUrl + "/" + "getAllUsers");
  }

  public getUserByEmail(email, password){
    return this
            .http
            .get<User[]>(this.userUrl + "/" + "getByEmailAndPassword/" + email + "/" + password);
  }

  public deleteUser(id){
    return this
              .http
              .delete(this.userUrl + "/deleteUser/" + id);
  }

  public addUser(user){
    return this
              .http
              .post<User>(this.userUrl + "/" + "addUser", user);
  }

  public editUser(id){
    return this
              .http
              .get<User>(this.userUrl+"/getByUserId/"+id);
  }

  public updateUser(name, email, address, contactno, id, loginid, password){
    const obj = {
      name: name,
      email: email,
      address: address,
      contactno: contactno,
      id: id,
      loginid,
      password
    };
    this  
        .http
        .post(this.userUrl+"/updateUser", obj)
        .subscribe(res => {
          alert("Updated Successfully")
        });
  }

}
